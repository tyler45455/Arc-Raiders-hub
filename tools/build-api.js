#!/usr/bin/env node
/* Writes the public JSON data files under api/v1/ from the data in data/*.js.
   These are static files served by GitHub Pages: read-only, versioned, and
   keyed by stable IDs (the same slug as the item and map pages).
   Usage: node tools/build-api.js          (writes the files)
          node tools/build-api.js --check  (exits 1 if any file would change)
   No dependencies; needs Node 14.14 or newer. */
"use strict";
var fs = require("fs");
var path = require("path");
var vm = require("vm");

var ROOT = path.join(__dirname, "..");
var OUT = path.join(ROOT, "api", "v1");
var SITE = "https://tyler45455.github.io/Arc-Raiders-hub/";
var SCHEMA = 1;

var SANDBOX = { window: {} };
vm.createContext(SANDBOX);
fs.readdirSync(path.join(ROOT, "data")).filter(function (f) { return /\.js$/.test(f); }).sort().forEach(function (f) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, "data", f), "utf8"), SANDBOX, { filename: "data/" + f });
});
function grab(name) {
  if (!(name in SANDBOX.window.ARC_DATA)) { throw new Error("data/*.js sets no ARC." + name); }
  return SANDBOX.window.ARC_DATA[name];
}
var TABLES = grab("TABLES"), EXTRAS = grab("EXTRAS"), RARITY = grab("RARITY"), NO_RECYCLE = grab("NO_RECYCLE");
var FARM = grab("FARM"), FARM2 = grab("FARM2"), MAPS = grab("MAPS"), ROOMS = grab("ROOMS"), KEYS = grab("KEYS");
var ITEMINFO = grab("ITEMINFO"), PRICE_LOG = grab("PRICE_LOG");
var QRAW = grab("QRAW"), QOBJ = grab("QOBJ"), QPREV = grab("QPREV"), DATA_UPDATED = grab("DATA_UPDATED");

/* The ID of anything is its name as a lowercase slug. Same as slug() in build-pages.js. */
function slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""); }
function byCode(a, b) { return a < b ? -1 : a > b ? 1 : 0; }
function mapSlug(m) { return m.wiki.toLowerCase().replace(/_/g, "-"); }

function uniqueIds(list, what) {
  var seen = {};
  list.forEach(function (x) {
    if (seen[x.id]) { throw new Error("Two " + what + " share the ID " + x.id + ": " + seen[x.id] + " and " + x.name); }
    seen[x.id] = x.name;
  });
}

function items() {
  var db = {}, rarity = {};
  RARITY.trim().split("\n").forEach(function (l) { var p = l.split("|"); rarity[p[0]] = p[1]; });
  function get(n) { if (!db[n]) { db[n] = { name: n, rarity: rarity[n] || null, rec: [], sal: [] }; } return db[n]; }
  Object.keys(TABLES).forEach(function (mat) {
    TABLES[mat].trim().split("\n").forEach(function (l) {
      var p = l.split("|"), it = get(p[0]);
      if (p[1] !== "-") { it.rec.push([mat, parseInt(p[1], 10)]); }
      if (p[2] !== "-") { it.sal.push([mat, parseInt(p[2], 10)]); }
    });
  });
  EXTRAS.trim().split("\n").forEach(function (l) { var p = l.split("|"); get(p[0]).rec.push([p[1], parseInt(p[2], 10)]); });
  NO_RECYCLE.forEach(get);
  Object.keys(rarity).forEach(get);
  var list = Object.keys(db).sort(byCode).map(function (n) {
    var it = db[n], F = FARM[n] || {}, G = FARM2[n] || {};
    function mats(a) { return a.map(function (p) { return { id: slug(p[0]), name: p[0], qty: p[1] }; }); }
    var o = { id: slug(n), name: n, rarity: it.rarity, canRecycle: NO_RECYCLE.indexOf(n) === -1,
      recycle: mats(it.rec), salvage: mats(it.sal), areaTypes: F.t || G.t || [] };
    var src = {};
    if (G.s || F.s) { src.foundIn = G.s || F.s; }
    if (G.a) { src.arcEnemies = G.a; }
    if (G.v) { src.sellers = G.v; }
    if (G.q) { src.questRewards = G.q; }
    if (G.o) { src.other = G.o; }
    o.sources = src;
    var f = ITEMINFO[n];
    if (f) {
      o.sellPrice = f[0]; o.weightKg = f[1]; o.stackSize = f[2];
      if (PRICE_LOG[n]) { o.sellPriceHistory = PRICE_LOG[n].map(function (c) { return { date: c[0], from: c[1], to: c[2] }; }); }
      if (f[3]) { o.craft = { at: f[3][0], ingredients: mats(f[3][1]) }; }
    }
    o.page = SITE + "item/" + o.id + "/";
    return o;
  });
  uniqueIds(list, "items");
  return list;
}

function qItems(txt) {
  if (!txt || txt === "-") { return []; }
  return txt.split("; ").map(function (p) {
    var m = /^(\d+)×\s*(.+)$/.exec(p);
    var name = m ? m[2] : p;
    return { id: slug(name), name: name, qty: m ? parseInt(m[1], 10) : 1 };
  });
}

function quests() {
  var list = QRAW.map(function (l) {
    var f = l.split("|");
    return { id: slug(f[0]), name: f[0], trader: f[1], locations: f[2].split("; "), requires: qItems(f[3]),
      rewards: qItems(f[4]), objectives: QOBJ[f[0]] || [],
      after: (QPREV[f[0]] || []).map(slug) };
  });
  uniqueIds(list, "quests");
  var ids = {}; list.forEach(function (q) { ids[q.id] = 1; });
  list.forEach(function (q) { q.after.forEach(function (a) { if (!ids[a]) { throw new Error("Quest " + q.name + " follows an unknown quest ID " + a); } }); });
  return list;
}

function maps() {
  var list = MAPS.map(function (m) {
    var R = ROOMS[mapSlug(m)] || { r: [], m: "" };
    return { id: mapSlug(m), name: m.name, difficulty: m.diff, length: m.len, unlock: m.unlock, description: m.desc,
      image: SITE + "maps/" + mapSlug(m) + (m.detail ? "-detail" : "") + ".jpg", page: SITE + "map/" + mapSlug(m) + "/",
      rooms: R.r.map(function (r) { return { id: slug(r[0]), name: r[0], x: r[1], y: r[2], areaTypes: r[3] || [] }; }) };
  });
  uniqueIds(list, "maps");
  return list;
}

function keys() {
  var mapId = {}; MAPS.forEach(function (m) { mapId[m.name] = mapSlug(m); });
  var list = KEYS.map(function (k) {
    return { id: slug(k[0]), name: k[0], mapId: mapId[k[1]] || null, roomId: k[2] ? slug(k[2]) : null,
      usedAt: k[3], questReward: k[4] || null, foundIn: k[5] || null };
  });
  uniqueIds(list, "keys");
  return list;
}

function wrap(kind, key, list) {
  var o = { schema: SCHEMA, kind: kind, dataDate: DATA_UPDATED, count: list.length };
  o[key] = list;
  return o;
}

var FILES = {};
FILES["items.json"] = wrap("items", "items", items());
FILES["quests.json"] = wrap("quests", "quests", quests());
FILES["maps.json"] = wrap("maps", "maps", maps());
FILES["keys.json"] = wrap("keys", "keys", keys());
FILES["index.json"] = {
  schema: SCHEMA, name: "Arc Raiders Hub data", dataDate: DATA_UPDATED, site: SITE,
  note: "Read-only static files from a fan-made site. Not affiliated with Embark Studios. IDs are lowercase slugs of the English names and match the item/ and map/ page paths.",
  license: "Data comes from the ARC Raiders Wiki (https://arcraiders.wiki), CC BY-SA 4.0, so reuse of these files must credit the wiki and share alike.",
  files: Object.keys(FILES).sort().map(function (f) { return { file: f, url: SITE + "api/v1/" + f, count: FILES[f].count }; })
};
FILES["index.json"].files.unshift({ file: "index.json", url: SITE + "api/v1/index.json" });

var check = process.argv.indexOf("--check") !== -1, stale = [];
fs.mkdirSync(OUT, { recursive: true });
Object.keys(FILES).sort().forEach(function (f) {
  var text = JSON.stringify(FILES[f], null, 1) + "\n", p = path.join(OUT, f), have = null;
  try { have = fs.readFileSync(p, "utf8"); } catch (e) { have = null; }
  if (have !== text) { stale.push("api/v1/" + f); if (!check) { fs.writeFileSync(p, text); } }
});
if (check) {
  if (stale.length) { console.error("Out of date, run node tools/build-api.js:\n  " + stale.join("\n  ")); process.exit(1); }
  console.log("api/v1 is up to date.");
} else { console.log(stale.length ? "Wrote " + stale.join(", ") : "api/v1 already up to date."); }
