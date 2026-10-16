#!/usr/bin/env node
/* Refreshes the map condition schedule (data/conditions.js) from MetaForge's public event-timer feed,
   https://metaforge.app/api/arc-raiders/event-timers. MetaForge asks public projects to credit them with a
   link to metaforge.app/arc-raiders; the Maps tab does that.
   The feed blocks requests from other websites (no CORS header), so the site cannot read it live; this
   script copies it into the repo instead. The daily item data workflow runs it.
   Usage: node tools/sync-conditions.js [--file feed.json] [--check]
   --file FILE  reads a saved copy of the feed instead of downloading it.
   --check      exits 1 if data/conditions.js would change, without writing anything.
   No dependencies (needs Node 18+ for fetch). */
"use strict";
var fs = require("fs");
var path = require("path");

var URL = "https://metaforge.app/api/arc-raiders/event-timers";
var OUT = path.join(__dirname, "..", "data", "conditions.js");
/* Feed map names that differ from the site's map names. */
var MAP_NAMES = { "Dam": "Dam Battlegrounds", "Blue Gate": "The Blue Gate" };

function minutes(t) {
  var m = /^(\d{1,2}):(\d{2})$/.exec(String(t || ""));
  return m ? parseInt(m[1], 10) * 60 + parseInt(m[2], 10) : null;
}

function build(feed) {
  if (!feed || !Array.isArray(feed.data) || !feed.data.length) { throw new Error("The feed has no data list."); }
  var ev = [];
  feed.data.forEach(function (e) {
    if (!e || e.game && e.game !== "arc-raiders" || !e.name || !e.map) { return; }
    var w = [];
    (e.times || []).forEach(function (t) {
      var a = minutes(t.start), b = minutes(t.end);
      if (a === null || b === null) { return; }
      if (b <= a) { b += 1440; }
      w.push([a, b]);
    });
    if (!w.length) { return; }
    w.sort(function (x, y) { return x[0] - y[0]; });
    var days = Array.isArray(e.days) && e.days.length ? e.days : null;
    ev.push([MAP_NAMES[e.map] || e.map, e.name, w].concat(days ? [days] : []));
  });
  if (!ev.length) { throw new Error("No usable condition windows in the feed."); }
  ev.sort(function (x, y) { return x[0].localeCompare(y[0]) || x[1].localeCompare(y[1]); });
  return ev;
}

function render(ev, date) {
  return "/* Map condition schedule: each row is [map, condition, [[start, end] minutes after 00:00 UTC, ...]],\n" +
    "   repeating every day. Copied from MetaForge's community feed (metaforge.app/arc-raiders) by\n" +
    "   tools/sync-conditions.js; do not edit by hand. */\n" +
    "var ARC = window.ARC_DATA = window.ARC_DATA || {};\n\n" +
    "ARC.COND_SCHEDULE = {\n  source: \"MetaForge\",\n  url: \"https://metaforge.app/arc-raiders\",\n  changed: " + JSON.stringify(date) + ",\n  rows: [\n" +
    ev.map(function (r) { return "    " + JSON.stringify(r); }).join(",\n") + "\n  ]\n};\n";
}

function readOld() {
  try {
    var src = fs.readFileSync(OUT, "utf8"), m = /rows: \[\n([\s\S]*?)\n  \]/.exec(src);
    return { src: src, rows: m ? m[1] : "", checked: (/changed: "([^"]*)"/.exec(src) || [])[1] };
  } catch (e) { return { src: "", rows: "", checked: null }; }
}

async function main() {
  var args = process.argv.slice(2), fi = args.indexOf("--file"), check = args.indexOf("--check") !== -1, feed;
  if (fi !== -1) { feed = JSON.parse(fs.readFileSync(args[fi + 1], "utf8")); }
  else {
    var res = await fetch(URL, { headers: { "User-Agent": "speranza-field-guide (github.com/tyler45455/Arc-Raiders-hub)" } });
    if (!res.ok) { throw new Error("Feed returned HTTP " + res.status); }
    feed = await res.json();
  }
  var ev = build(feed), old = readOld();
  var rows = ev.map(function (r) { return "    " + JSON.stringify(r); }).join(",\n");
  if (rows === old.rows) { console.log("Map condition schedule is up to date (" + ev.length + " rows)."); return; }
  if (check) { console.log("Map condition schedule would change."); process.exit(1); }
  var d = new Date(), date = d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
  fs.writeFileSync(OUT, render(ev, date));
  console.log("Map condition schedule updated: " + ev.length + " rows.");
}

main().catch(function (e) { console.error(e.message || e); process.exit(2); });
