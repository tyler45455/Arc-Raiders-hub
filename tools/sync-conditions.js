#!/usr/bin/env node
/* Reads the official map condition schedule from https://arcraiders.com/map-conditions (Embark's own page)
   and writes it for the site. The page embeds every condition for the next 24 hours with start and end
   times for each server region; its default times are Europe's.
   The page cannot be read from the browser (other sites are blocked), so the hourly workflow
   (.github/workflows/conditions-feed.yml) runs this and publishes the result on the conditions-data branch,
   which the site reads live. The daily item data workflow also refreshes the built-in copy in data/conditions.js.
   Usage: node tools/sync-conditions.js [--html page.html] [--json out.json] [--js] [--print]
   --html FILE  reads a saved copy of the page instead of downloading it.
   --json FILE  writes the schedule as JSON (what the conditions-data branch serves).
   --js         rewrites data/conditions.js (the built-in copy the site falls back to).
   --print      prints what is on now and next, per region.
   No dependencies (needs Node 18+ for fetch). */
"use strict";
var fs = require("fs");
var path = require("path");

var URL = "https://arcraiders.com/map-conditions";
var OUT_JS = path.join(__dirname, "..", "data", "conditions.js");

/* Next.js streams page data as self.__next_f.push([1,"..."]) chunks; join and unescape them. */
function flightText(html) {
  var re = /self\.__next_f\.push\(\[1,"((?:[^"\\]|\\.)*)"\]\)/g, m, out = "";
  while ((m = re.exec(html))) { out += JSON.parse('"' + m[1] + '"'); }
  return out;
}
/* Reads the JSON array that starts right after `"key":` at position i. */
function arrayAt(s, i) {
  var st = s.indexOf("[", i), depth = 0, inStr = false;
  for (var k = st; k < s.length; k++) {
    var c = s[k];
    if (inStr) { if (c === "\\") { k++; } else if (c === '"') { inStr = false; } continue; }
    if (c === '"') { inStr = true; } else if (c === "[" || c === "{") { depth++; } else if (c === "]" || c === "}") { depth--; if (!depth) { return JSON.parse(s.slice(st, k + 1)); } }
  }
  throw new Error("Unclosed array");
}

function parse(html) {
  var f = flightText(html);
  if (!f) { throw new Error("No page data found (the page layout may have changed)."); }
  var rows = [], seen = {}, regions = {}, types = {}, re = /"(\w*[eE]ntries)":\[/g, m;
  while ((m = re.exec(f))) {
    var list; try { list = arrayAt(f, m.index + m[0].length - 1); } catch (e) { continue; }
    list.forEach(function (e) {
      if (!e || !e.conditionName || !e.mapDisplayName || typeof e.startTimestamp !== "number") { return; }
      var key = e.mapDisplayName + "|" + e.conditionName + "|" + e.startTimestamp;
      if (seen[key]) { return; } seen[key] = 1;
      var rt = e.regionTimestamps || {}, off = {};
      Object.keys(rt).forEach(function (r) { if (Array.isArray(rt[r]) && typeof rt[r][0] === "number") { off[r] = rt[r][0] - e.startTimestamp; regions[r] = 1; } });
      rows.push({ map: e.mapDisplayName, cond: e.conditionName, s: e.startTimestamp, e: e.endTimestamp || e.startTimestamp + (e.durationInSeconds || 3600) * 1000, off: off });
    });
  }
  var ci = f.indexOf('"conditionItems":[');
  if (ci !== -1) { try { arrayAt(f, ci + 17).forEach(function (c) { if (c && c.name) { types[c.name] = c.type; } }); } catch (e) {} }
  if (!rows.length) { throw new Error("No condition entries found (the page layout may have changed)."); }
  /* Each region runs the same rotation shifted by a fixed number of hours; keep one offset per region. */
  var offsets = {};
  Object.keys(regions).sort().forEach(function (r) {
    var cnt = {}; rows.forEach(function (x) { if (x.off[r] !== undefined) { cnt[x.off[r]] = (cnt[x.off[r]] || 0) + 1; } });
    offsets[r] = +Object.keys(cnt).sort(function (a, b) { return cnt[b] - cnt[a]; })[0];
  });
  rows.sort(function (a, b) { return a.s - b.s || a.map.localeCompare(b.map) || a.cond.localeCompare(b.cond); });
  return {
    source: "arcraiders.com/map-conditions",
    fetched: Date.now(),
    offsets: offsets,                     /* ms to add to the Europe (default) times for each region */
    major: Object.keys(types).filter(function (n) { return types[n] === "major"; }).sort(),
    rows: rows.map(function (x) { return [x.map, x.cond, x.s, x.e]; })
  };
}

function printNow(d) {
  var now = Date.now(), regs = ["europe"].concat(Object.keys(d.offsets));
  regs.forEach(function (r) {
    var o = r === "europe" ? 0 : d.offsets[r];
    var on = d.rows.filter(function (x) { return x[2] + o <= now && now < x[3] + o; }).map(function (x) { return x[1] + " on " + x[0]; });
    console.log(r + " now: " + (on.join(", ") || "none"));
  });
  var last = d.rows.length ? d.rows[d.rows.length - 1][3] : 0;
  console.log(d.rows.length + " entries, Europe times covered until " + new Date(last).toISOString() + "; offsets (hours): " + Object.keys(d.offsets).map(function (r) { return r + " " + d.offsets[r] / 3600000; }).join(", "));
}

async function main() {
  var a = process.argv.slice(2), hi = a.indexOf("--html"), ji = a.indexOf("--json"), html;
  if (hi !== -1) { html = fs.readFileSync(a[hi + 1], "utf8"); }
  else {
    var res = await fetch(URL, { headers: { "User-Agent": "Mozilla/5.0 (speranza-field-guide; github.com/tyler45455/Arc-Raiders-hub)", "Accept-Language": "en" } });
    if (!res.ok) { throw new Error("arcraiders.com returned HTTP " + res.status); }
    html = await res.text();
  }
  var d = parse(html);
  if (ji !== -1) { fs.writeFileSync(a[ji + 1], JSON.stringify(d) + "\n"); }
  if (a.indexOf("--js") !== -1) {
    fs.writeFileSync(OUT_JS, "/* Built-in copy of the official map condition schedule (arcraiders.com/map-conditions), written by\n" +
      "   tools/sync-conditions.js; do not edit by hand. The site reads a fresher copy from the conditions-data branch\n" +
      "   and uses this one only when that fails. rows: [map, condition, start, end] in ms, Europe times;\n" +
      "   offsets: ms to add for each other server region. */\n" +
      "var ARC = window.ARC_DATA = window.ARC_DATA || {};\n\nARC.COND_SCHEDULE = {\n  source: " + JSON.stringify(d.source) + ",\n  fetched: " + d.fetched +
      ",\n  offsets: " + JSON.stringify(d.offsets) + ",\n  major: " + JSON.stringify(d.major) + ",\n  rows: [\n" +
      d.rows.map(function (r) { return "    " + JSON.stringify(r); }).join(",\n") + "\n  ]\n};\n");
  }
  if (a.indexOf("--print") !== -1 || (ji === -1 && a.indexOf("--js") === -1)) { printNow(d); }
}

main().catch(function (e) { console.error(e.message || e); process.exit(2); });
