#!/usr/bin/env node
/* Adds player enemy sightings to the enemy cards. Reads the "Enemy sighting" GitHub issues (made by the
   Report a sighting button) and, when two or more different people reported the same enemy on a map the
   card does not list yet, adds that map to the enemy's "reported" list in ARC.ENEMY_INFO (data/reference.js).
   Usage: gh issue list --state all --limit 1000 --search 'in:title "Enemy sighting"' \
            --json number,title,body,author,state,stateReason > /tmp/sightings.json
          node tools/sync-sightings.js /tmp/sightings.json [--summary FILE] [--close FILE] [--check]
   --summary FILE  writes a Markdown summary (used for the daily PR and the run page).
   --close FILE    writes a JSON list [{number, text}] of open issues whose map is already on the card,
                   so the workflow can thank the reporter and close them.
   --check         exits 1 if data/reference.js would change, without writing anything.
   Issues closed as "not planned" do not count, so closing a bad report that way removes its vote.
   The daily workflow (.github/workflows/sync-sightings.yml) runs this, then build-pages and build-api.
   No dependencies. */
"use strict";
var fs = require("fs");
var path = require("path");
var vm = require("vm");

var ROOT = path.join(__dirname, "..");
var REF_JS = path.join(ROOT, "data", "reference.js");
var UPDATES_JS = path.join(ROOT, "data", "updates.js");
var NEEDED = 2;

var args = process.argv.slice(2);
var CHECK = args.indexOf("--check") >= 0;
function opt(n) { var i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; }
var SUMMARY = opt("--summary"), CLOSE = opt("--close");
var SRC = args.filter(function (a, i) { return a[0] !== "-" && ["--summary", "--close"].indexOf(args[i - 1]) < 0; })[0];
if (!SRC) { console.error("Usage: node tools/sync-sightings.js <issues.json> [--summary FILE] [--close FILE] [--check]"); process.exit(2); }
var ISSUES = JSON.parse(fs.readFileSync(SRC, "utf8"));
if (!Array.isArray(ISSUES)) { throw new Error(SRC + " is not a list of issues"); }

/* The site's current data. */
var SANDBOX = { window: {} };
vm.createContext(SANDBOX);
["maps.js", "reference.js"].forEach(function (f) { vm.runInContext(fs.readFileSync(path.join(ROOT, "data", f), "utf8"), SANDBOX, { filename: "data/" + f }); });
var ARC = SANDBOX.window.ARC_DATA;
var refSrc = fs.readFileSync(REF_JS, "utf8");
var mInfo = /^ARC\.ENEMY_INFO = (.*);$/m.exec(refSrc);
if (!mInfo) { throw new Error("Could not find ARC.ENEMY_INFO in data/reference.js"); }
var INFO = JSON.parse(mInfo[1]);

function key(s) { return String(s || "").toLowerCase().replace(/^the\s+/, "").replace(/[^a-z0-9]+/g, " ").trim(); }
var ENEMY = {}, MAP = {};
ARC.ENEMIES.forEach(function (e) { ENEMY[key(e[0])] = e; });
ARC.MAPS.forEach(function (m) { MAP[key(m.name)] = m.name; });

/* Maps the card already shows: the wiki's maps, the enemy table's maps column, and earlier reports. */
function listed(e) {
  var f = INFO[e[0]] || {}, out = (f.maps || []).concat(f.reported || []);
  if (e[5] && e[5] !== "-") { out = out.concat(e[5].split(", ")); }
  return out;
}

/* "Enemy: X" / "**Enemy:** X" lines in the body, else the "Enemy sighting: X on Y" title. */
function field(body, name) {
  var m = new RegExp("^\\s*\\**" + name + ":?\\**:?[ \\t]*(.*)$", "im").exec(body || "");
  return m ? m[1].replace(/\*/g, "").trim() : "";
}
function parse(is) {
  var en = field(is.body, "Enemy"), map = field(is.body, "Map");
  var t = /^\s*Enemy sighting:\s*(.+?)\s+on\s+(.+?)\s*$/i.exec(is.title || "");
  if (t) { en = en || t[1]; map = map || t[2]; }
  return { enemy: ENEMY[key(en)] || null, map: MAP[key(map)] || null, rawEnemy: en, rawMap: map };
}

var votes = {}, unreadable = [], close = [];
ISSUES.forEach(function (is) {
  if (String(is.stateReason || "").toUpperCase() === "NOT_PLANNED") { return; }
  var who = is.author && (is.author.login || is.author);
  if (!who || /\[bot\]$/.test(who)) { return; }
  var p = parse(is);
  if (!p.enemy || !p.map) {
    if (String(is.state).toUpperCase() === "OPEN") { unreadable.push("#" + is.number + " (enemy \"" + (p.rawEnemy || "?") + "\", map \"" + (p.rawMap || "?") + "\")"); }
    return;
  }
  var k = p.enemy[0] + "|" + p.map;
  var v = votes[k] = votes[k] || { enemy: p.enemy, map: p.map, people: {}, open: [] };
  v.people[who.toLowerCase()] = 1;
  if (String(is.state).toUpperCase() === "OPEN") { v.open.push(is.number); }
});

var added = [], waiting = [];
Object.keys(votes).sort().forEach(function (k) {
  var v = votes[k], n = Object.keys(v.people).length, name = v.enemy[0];
  if (listed(v.enemy).indexOf(v.map) >= 0) {
    v.open.forEach(function (num) {
      close.push({ number: num, text: "Thanks for the report! " + name + " on " + v.map + " is listed on its enemy card on the site now." });
    });
  } else if (n >= NEEDED) {
    var f = INFO[name] = INFO[name] || {};
    f.reported = (f.reported || []).concat([v.map]).sort();
    added.push({ enemy: name, map: v.map, people: n, issues: v.open });
  } else {
    waiting.push(name + " on " + v.map + " (" + n + " of " + NEEDED + " reports; " + v.open.map(function (x) { return "#" + x; }).join(", ") + ")");
  }
});

if (CLOSE) { fs.writeFileSync(CLOSE, JSON.stringify(close, null, 2) + "\n"); }

/* Same layout as the rest of data/reference.js: one line, ", " and ": " separators. */
function py(o) {
  if (Array.isArray(o)) { return "[" + o.map(py).join(", ") + "]"; }
  if (o && typeof o === "object") { return "{" + Object.keys(o).map(function (k) { return JSON.stringify(k) + ": " + py(o[k]); }).join(", ") + "}"; }
  return JSON.stringify(o);
}

var md = [];
if (added.length) {
  md.push("Added " + added.length + " enemy sighting" + (added.length === 1 ? "" : "s") + " reported by two or more players:", "");
  added.forEach(function (a) { md.push("- " + a.enemy + " on " + a.map + " (" + a.people + " people" + (a.issues.length ? "; issues " + a.issues.map(function (x) { return "#" + x; }).join(", ") : "") + ")"); });
} else {
  md.push("No new enemy sightings with " + NEEDED + " or more reports.");
}
if (close.length) { md.push("", "Closing " + close.length + " report" + (close.length === 1 ? "" : "s") + " whose map is already on the card: " + close.map(function (c) { return "#" + c.number; }).join(", ")); }
if (waiting.length) { md.push("", "Waiting for more reports:", ""); waiting.forEach(function (w) { md.push("- " + w); }); }
if (unreadable.length) { md.push("", "Could not read the enemy or map in: " + unreadable.join(", ")); }
md = md.join("\n") + "\n";

if (CHECK) { console.log(md); process.exit(added.length ? 1 : 0); }

if (added.length) {
  fs.writeFileSync(REF_JS, refSrc.replace(/^ARC\.ENEMY_INFO = .*;$/m, function () { return "ARC.ENEMY_INFO = " + py(INFO) + ";"; }));
  var today = new Date();
  var longDate = today.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
  var shortDate = today.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
  var note = "Enemy sightings from players: " + added.map(function (a) { return a.enemy + " on " + a.map; }).join(", ") + " now show on the enemy cards under Players saw it, after two or more people reported each.";
  var up = fs.readFileSync(UPDATES_JS, "utf8");
  if (!/^ARC\.DATA_CHANGES = \[\n/m.test(up)) { throw new Error("Could not find ARC.DATA_CHANGES in data/updates.js"); }
  up = up.replace(/^ARC\.DATA_CHANGES = \[\n/m, function (m) { return m + "    [" + JSON.stringify(shortDate) + ", " + JSON.stringify(note) + "],\n"; });
  up = up.replace(/^ARC\.DATA_UPDATED = ".*";$/m, "ARC.DATA_UPDATED = " + JSON.stringify(longDate) + ";");
  var row = /^(\s*\["Enemy sightings from players", )"[^"]*"/m;
  if (!row.test(up)) { throw new Error("Could not find the Enemy sightings row in ARC.FRESHNESS"); }
  up = up.replace(row, function (m, head) { return head + JSON.stringify(longDate); });
  fs.writeFileSync(UPDATES_JS, up);
}
if (SUMMARY) { fs.writeFileSync(SUMMARY, md); }
console.log(md);
