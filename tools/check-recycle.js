#!/usr/bin/env node
/* Lists where the site's recycle and salvage tables (ARC.TABLES in data/items.js) disagree with
   RaidTheory/arcraiders-data. It changes nothing: the daily wiki check reads this list, looks each item up
   on the wiki and fixes only what the wiki confirms.
   Usage: git clone --depth 1 https://github.com/RaidTheory/arcraiders-data /tmp/rt
          node tools/check-recycle.js /tmp/rt          (prints one line per difference)
          node tools/check-recycle.js /tmp/rt --json   (prints the list as JSON) */
"use strict";
var fs = require("fs");
var path = require("path");
var vm = require("vm");

var ROOT = path.join(__dirname, "..");
var SRC = process.argv.slice(2).filter(function (a) { return a[0] !== "-"; })[0];
var JSON_OUT = process.argv.indexOf("--json") >= 0;
if (!SRC) { console.error("Usage: node tools/check-recycle.js <arcraiders-data folder> [--json]"); process.exit(2); }
var DIR = fs.existsSync(path.join(SRC, "items")) ? path.join(SRC, "items") : SRC;

var D = {};
fs.readdirSync(DIR).filter(function (f) { return /\.json$/.test(f); }).forEach(function (f) {
  var d = JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8"));
  if (d && d.id && d.name && d.name.en) { D[d.id] = d; }
});
if (Object.keys(D).length < 300) { throw new Error("Only " + Object.keys(D).length + " items in " + DIR + "; refusing to compare with a partial copy."); }
var byName = {};
Object.keys(D).forEach(function (id) { byName[D[id].name.en] = D[id]; });

var SANDBOX = { window: {} };
vm.createContext(SANDBOX);
vm.runInContext(fs.readFileSync(path.join(ROOT, "data", "items.js"), "utf8"), SANDBOX, { filename: "data/items.js" });
var TABLES = SANDBOX.window.ARC_DATA.TABLES;

/* item -> material -> [recycle, salvage], "-" when none */
var site = {}, rt = {};
Object.keys(TABLES).forEach(function (mat) {
  TABLES[mat].trim().split("\n").forEach(function (l) {
    var p = l.split("|"); (site[p[0]] = site[p[0]] || {})[mat] = [p[1] || "-", p[2] || "-"];
  });
});
Object.keys(D).forEach(function (id) {
  var d = D[id];
  [["recyclesInto", 0], ["salvagesInto", 1]].forEach(function (k) {
    Object.keys(d[k[0]] || {}).forEach(function (m) {
      var mn = D[m] ? D[m].name.en : m;
      if (!TABLES[mn]) { return; }
      var o = (rt[d.name.en] = rt[d.name.en] || {});
      (o[mn] = o[mn] || ["-", "-"])[k[1]] = String(d[k[0]][m]);
    });
  });
});

var out = [];
Object.keys(site).concat(Object.keys(rt)).filter(function (n, i, a) { return a.indexOf(n) === i && byName[n]; }).sort().forEach(function (n) {
  var a = site[n] || {}, b = rt[n] || {};
  Object.keys(a).concat(Object.keys(b)).filter(function (m, i, l) { return l.indexOf(m) === i; }).sort().forEach(function (m) {
    var x = (a[m] || ["-", "-"]).join("|"), y = (b[m] || ["-", "-"]).join("|");
    if (x !== y) { out.push({ item: n, material: m, site: x, raidtheory: y }); }
  });
});
if (JSON_OUT) { console.log(JSON.stringify(out, null, 1)); }
else {
  out.forEach(function (o) { console.log(o.item + " -> " + o.material + ": site " + o.site + ", RaidTheory " + o.raidtheory + " (recycle|salvage)"); });
  console.log(out.length + " difference" + (out.length === 1 ? "" : "s") + ".");
}
