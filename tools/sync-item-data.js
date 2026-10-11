#!/usr/bin/env node
/* Refreshes ARC.ITEMINFO (sell price, weight, stack size, recipe) and ARC.FARM3 (extra "where to find"
   details) in data/items.js from a local copy of RaidTheory/arcraiders-data (MIT).
   Usage: git clone --depth 1 https://github.com/RaidTheory/arcraiders-data /tmp/rt
          node tools/sync-item-data.js /tmp/rt            (rewrites data/items.js, prints a summary)
          node tools/sync-item-data.js /tmp/rt --check    (exits 1 if data/items.js would change)
   With --summary FILE it also writes a Markdown list of the changes (used for the weekly PR).
   Items the data set does not have keep their current entry, so hand-added wiki prices survive.
   The weekly workflow (.github/workflows/sync-item-data.yml) runs this, then build-pages and build-api.
   No dependencies; needs Node 14.14 or newer. */
"use strict";
var fs = require("fs");
var path = require("path");
var vm = require("vm");

var ROOT = path.join(__dirname, "..");
var ITEMS_JS = path.join(ROOT, "data", "items.js");
var UPDATES_JS = path.join(ROOT, "data", "updates.js");

var args = process.argv.slice(2);
var CHECK = args.indexOf("--check") >= 0;
var si = args.indexOf("--summary"), SUMMARY = si >= 0 ? args[si + 1] : null;
var SRC = args.filter(function (a, i) { return a[0] !== "-" && (si < 0 || i !== si + 1); })[0];
if (!SRC) { console.error("Usage: node tools/sync-item-data.js <arcraiders-data folder> [--check] [--summary FILE]"); process.exit(2); }
var DIR = fs.existsSync(path.join(SRC, "items")) ? path.join(SRC, "items") : SRC;

/* The data set, by id and by English name. */
var D = {};
fs.readdirSync(DIR).filter(function (f) { return /\.json$/.test(f); }).sort().forEach(function (f) {
  var d = JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8"));
  if (d && d.id && d.name && d.name.en) { D[d.id] = d; }
});
var byName = {};
Object.keys(D).sort().forEach(function (id) { byName[D[id].name.en] = D[id]; });
if (Object.keys(D).length < 300) { throw new Error("Only " + Object.keys(D).length + " items in " + DIR + "; refusing to sync from a partial copy."); }
function name(id) { return D[id] ? D[id].name.en : id.replace(/_/g, " ").replace(/\b\w/g, function (c) { return c.toUpperCase(); }); }

/* The site's current data. */
var SANDBOX = { window: {} };
vm.createContext(SANDBOX);
var src = fs.readFileSync(ITEMS_JS, "utf8");
vm.runInContext(src, SANDBOX, { filename: "data/items.js" });
var ARC = SANDBOX.window.ARC_DATA;
var OLD = ARC.ITEMINFO;
/* FARM2 as written in the file: the loaded copy already has FARM3 merged into it. */
var m2 = /\/\*FARM2\*\/(\{.*\})\/\*FARM2-END\*\//.exec(src);
if (!m2) { throw new Error("Could not find ARC.FARM2 in data/items.js"); }
var FARM2 = JSON.parse(m2[1]);

/* Every item the site lists, the same way build-api.js finds them. */
var ours = {};
Object.keys(ARC.TABLES).forEach(function (mat) { ARC.TABLES[mat].trim().split("\n").forEach(function (l) { ours[l.split("|")[0]] = 1; }); });
ARC.EXTRAS.trim().split("\n").forEach(function (l) { ours[l.split("|")[0]] = 1; });
ARC.NO_RECYCLE.forEach(function (n) { ours[n] = 1; });
ARC.RARITY.trim().split("\n").forEach(function (l) { ours[l.split("|")[0]] = 1; });
ours = Object.keys(ours);

var BENCH = { weapon_bench: "Gunsmith", equipment_bench: "Gear Bench", utility_bench: "Utility Station", explosives_bench: "Explosives Station",
  refiner: "Refiner", med_station: "Medical Lab", workbench: "Workbench", in_raid: "In raid" };
function benches(d) { var b = d.craftBench; return Array.isArray(b) ? b : [b]; }

/* ITEMINFO: [value, weightKg, stackSize, [where, [[ingredient, qty], ...]]]. */
var names = Object.keys(OLD);
function want(n) { if (names.indexOf(n) < 0) { names.push(n); } }
ours.forEach(function (n) { if (byName[n]) { want(n); } });
Object.keys(D).forEach(function (id) { Object.keys(D[id].recipe || {}).forEach(function (k) { if (D[k]) { want(D[k].name.en); } }); });
var NEW = {};
names.sort(function (a, b) { a = a.toLowerCase(); b = b.toLowerCase(); return a < b ? -1 : a > b ? 1 : 0; }).forEach(function (n) {
  var d = byName[n];
  if (!d) { if (OLD[n]) { NEW[n] = OLD[n]; } return; }
  var row = [d.value === undefined ? null : d.value, d.weightKg === undefined ? null : d.weightKg, d.stackSize === undefined ? null : d.stackSize];
  if (d.recipe && Object.keys(d.recipe).length) {
    var lvl = d.stationLevelRequired;
    row.push([benches(d).map(function (x) { return BENCH[x] + (lvl && x !== "in_raid" && x !== "workbench" ? " " + lvl : ""); }).join(" / "),
      Object.keys(d.recipe).map(function (k) { return [name(k), d.recipe[k]]; })]);
  }
  NEW[n] = row;
});

/* FARM3: area types (t), traders (v) and upgrades or crafting (o), only where FARM2 leaves the field empty. */
var BENCH_LC = Object.assign({}, BENCH, { in_raid: "in raid" });
function cost(c) {
  return Object.keys(c).map(function (k) {
    if (k === "coins") { return c[k].toLocaleString("en-US") + " coins"; }
    if (k === "creds") { return c[k] + " Cred"; }
    return c[k] + " " + name(k);
  }).join(", ");
}
var upFrom = {};
/* upgradeCost sits on the tier it upgrades INTO (rattler_ii holds the I to II cost). */
Object.keys(D).forEach(function (id) { var d = D[id]; if (d.upgradesTo) { upFrom[d.upgradesTo] = [d.name.en, (D[d.upgradesTo] && D[d.upgradesTo].upgradeCost) || {}]; } });
var F3 = {};
ours.forEach(function (n) {
  var d = byName[n];
  if (!d) { return; }
  var g = FARM2[n] || {}, x = {};
  if (d.foundIn && !(g.t && g.t.length)) {
    x.t = d.foundIn.split(",").map(function (t) { return t.trim(); }).filter(Boolean);
  }
  if (d.vendors && d.vendors.length && !(g.v && g.v.length)) {
    x.v = d.vendors.map(function (v) {
      var extra = v.cost && Object.keys(v.cost).length ? [cost(v.cost)] : [];
      if (v.limit) { extra.push(v.refreshSeconds === 86400 ? v.limit + " per day" : "limit " + v.limit); }
      return v.trader + (extra.length ? " (" + extra.join(", ") + ")" : "");
    });
  }
  var o = [];
  if (upFrom[d.id]) {
    var c = upFrom[d.id][1];
    o.push("Upgrade from " + upFrom[d.id][0] + " at the Gunsmith" + (Object.keys(c).length ? " (" + cost(c) + ")" : ""));
  }
  var hasAny = ["s", "a", "v", "q", "o"].some(function (k) { return g[k] && g[k].length; }) || x.v;
  if (d.recipe && Object.keys(d.recipe).length && !hasAny) {
    o.push("Craft it (" + benches(d).map(function (i) { return BENCH_LC[i] || i; }).join(" or ") + "; recipe shown with the item)");
  }
  if (o.length && !(g.o && g.o.length)) { x.o = o; }
  if (Object.keys(x).length) { F3[n] = x; }
});
var F3_SORTED = {};
Object.keys(F3).sort().forEach(function (n) { F3_SORTED[n] = F3[n]; });
var OLD_F3 = {};
Object.keys(ARC.FARM3 || {}).sort().forEach(function (n) { OLD_F3[n] = ARC.FARM3[n]; });

/* What changed, in words. */
function coins(v) { return v === null ? "none" : v.toLocaleString("en-US"); }
function recipe(r) {
  return r ? r[1].map(function (x) { return x[1] + "× " + x[0]; }).join(" + ") + " (" + r[0] + ")" : "none";
}
var lines = [], priceChanges = 0, recipeChanges = 0, added = 0;
Object.keys(NEW).forEach(function (n) {
  var a = OLD[n], b = NEW[n];
  if (!a) { added++; lines.push("- **" + n + "** added (sells for " + coins(b[0]) + ")"); return; }
  var bits = [];
  if (a[0] !== b[0]) { priceChanges++; bits.push("sell price " + coins(a[0]) + " → " + coins(b[0])); }
  if (a[1] !== b[1]) { bits.push("weight " + a[1] + " → " + b[1] + " kg"); }
  if (a[2] !== b[2]) { bits.push("stack " + a[2] + " → " + b[2]); }
  if (JSON.stringify(a[3]) !== JSON.stringify(b[3])) { recipeChanges++; bits.push("recipe " + recipe(a[3]) + " → " + recipe(b[3])); }
  if (bits.length) { lines.push("- **" + n + "**: " + bits.join(", ")); }
});
var farmChanged = Object.keys(Object.assign({}, OLD_F3, F3_SORTED)).filter(function (n) {
  return JSON.stringify(OLD_F3[n]) !== JSON.stringify(F3_SORTED[n]);
});
if (farmChanged.length) { lines.push("- Where to find details changed for " + farmChanged.length + " item" + (farmChanged.length === 1 ? "" : "s") + ": " + farmChanged.join(", ")); }
/* Blueprints and keys live elsewhere on the site, so they are not "missing". */
var missing = Object.keys(D).map(function (id) { return D[id].name.en; }).filter(function (n) {
  return ours.indexOf(n) < 0 && !NEW[n] && !/Blueprint$|\bKey\b|Keycard|Security Code/.test(n);
}).sort();

/* Guard against a broken upstream: a price wiped out or most prices moving at once is more likely a bug than a patch. */
var wiped = Object.keys(NEW).filter(function (n) { return OLD[n] && typeof OLD[n][0] === "number" && typeof NEW[n][0] !== "number"; });
if (wiped.length) { throw new Error("These items lost their sell price upstream: " + wiped.join(", ") + ". Not syncing; check the data set by hand."); }
if (priceChanges > Object.keys(OLD).length / 2) { throw new Error(priceChanges + " sell prices changed at once. Not syncing; check the data set by hand."); }

if (!lines.length) { console.log("Item data is up to date with " + DIR + "."); process.exit(0); }
if (CHECK) { console.log(lines.length + " item data changes pending:\n" + lines.join("\n")); process.exit(1); }

var today = new Date();
var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var longDate = MONTHS[today.getUTCMonth()] + " " + today.getUTCDate() + ", " + today.getUTCFullYear();
var shortDate = MONTHS[today.getUTCMonth()].slice(0, 3) + " " + today.getUTCDate() + ", " + today.getUTCFullYear();
function json(o) { return JSON.stringify(o); }

function replaceOnce(s, re, fn, what) {
  if (!re.test(s)) { throw new Error("Could not find " + what + " in data/items.js"); }
  return s.replace(re, fn);
}
src = replaceOnce(src, /^ARC\.ITEMINFO = .*;$/m, function () { return "ARC.ITEMINFO = " + json(NEW) + ";"; }, "ARC.ITEMINFO");
src = replaceOnce(src, /^ARC\.FARM3 = .*;$/m, function () { return "ARC.FARM3 = " + json(F3_SORTED) + ";"; }, "ARC.FARM3");
src = src.replace(/(spot-checked against the wiki Loot table\. Items missing there use the wiki price with weight null\. )Checked [A-Z][a-z]+ \d+, \d{4}\./,
  "$1Checked " + longDate + ".");
src = src.replace(/(They only fill fields the wiki data in FARM2 leaves empty\. )Checked [A-Z][a-z]+ \d+, \d{4}\./, "$1Checked " + longDate + ".");
fs.writeFileSync(ITEMS_JS, src);

/* One line in the Site changes tab. */
var parts = [];
if (priceChanges) { parts.push(priceChanges + " sell price" + (priceChanges === 1 ? "" : "s")); }
if (recipeChanges) { parts.push(recipeChanges + " recipe" + (recipeChanges === 1 ? "" : "s")); }
if (added) { parts.push(added + " new item" + (added === 1 ? "" : "s")); }
if (farmChanged.length) { parts.push("where to find details for " + farmChanged.length + " item" + (farmChanged.length === 1 ? "" : "s")); }
var note = "Weekly item data refresh from the RaidTheory data set: updated " + (parts.length ? parts.join(", ") : "weights and stack sizes") + ".";
var up = fs.readFileSync(UPDATES_JS, "utf8");
up = replaceOnce(up, /^ARC\.DATA_CHANGES = \[\n/m, function (m) { return m + "    [" + JSON.stringify(shortDate) + ", " + JSON.stringify(note) + "],\n"; }, "ARC.DATA_CHANGES");
up = up.replace(/^ARC\.DATA_UPDATED = ".*";$/m, "ARC.DATA_UPDATED = " + JSON.stringify(longDate) + ";");
fs.writeFileSync(UPDATES_JS, up);

var md = note + "\n\n" + lines.join("\n") + "\n";
if (missing.length) {
  md += "\nIn the data set but not on the site yet (" + missing.length + "): " + missing.join(", ") + "\n";
}
if (SUMMARY) { fs.writeFileSync(SUMMARY, md); }
console.log(md);
