#!/usr/bin/env node
/* Regenerates item/, map/ and sitemap.xml from the data in data/*.js, and
   stamps the offline cache name in sw.js.
   Usage: node tools/build-pages.js          (writes the files)
          node tools/build-pages.js --check  (exits 1 if any file would change)
   No dependencies; needs Node 14.14 or newer. */
"use strict";
var fs = require("fs");
var path = require("path");
var vm = require("vm");

var ROOT = path.join(__dirname, "..");
var SITE = "https://tyler45455.github.io/Arc-Raiders-hub/";
var CHECKED = "October 10, 2026";
/* Run the data files the way the site loads them and read window.ARC_DATA. */
var DATA_FILES = fs.readdirSync(path.join(ROOT, "data")).filter(function (f) { return /\.js$/.test(f); }).sort();
var SANDBOX = { window: {} };
vm.createContext(SANDBOX);
DATA_FILES.forEach(function (f) { vm.runInContext(fs.readFileSync(path.join(ROOT, "data", f), "utf8"), SANDBOX, { filename: "data/" + f }); });
function grab(name) {
  if (!(name in SANDBOX.window.ARC_DATA)) { throw new Error("data/*.js sets no ARC." + name); }
  return SANDBOX.window.ARC_DATA[name];
}

var TABLES = grab("TABLES"), EXTRAS = grab("EXTRAS"), RARITY = grab("RARITY"), NO_RECYCLE = grab("NO_RECYCLE");
var MAPS = grab("MAPS"), ROOMS = grab("ROOMS"), FARM = grab("FARM"), FARM2 = grab("FARM2");
var ITEMINFO = grab("ITEMINFO"), CRAFTS_INTO = {};
Object.keys(ITEMINFO).forEach(function (n) { var r = ITEMINFO[n][3]; if (r) { r[1].forEach(function (g) { (CRAFTS_INTO[g[0]] = CRAFTS_INTO[g[0]] || []).push(n); }); } });

/* Same escaping as Python's html.escape, which the pages were first built with. */
function esc(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;" }[c];
  });
}
function slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""); }
function byCode(a, b) { return a < b ? -1 : a > b ? 1 : 0; }
/* Same as mapSlug() in index.html. */
function mapSlug(m) { return m.wiki.toLowerCase().replace(/_/g, "-"); }
function hashLink(tab, name) { return "../../#" + tab + "/" + esc(encodeURIComponent(name)); }

/* Same item list as build() in index.html, without custom items. */
function buildItems() {
  var db = {}, rarity = {};
  RARITY.trim().split("\n").forEach(function (l) { var p = l.split("|"); rarity[p[0]] = p[1]; });
  function get(n) {
    if (!db[n]) { db[n] = { name: n, rarity: rarity[n] || "", rec: [], sal: [] }; }
    return db[n];
  }
  Object.keys(TABLES).forEach(function (mat) {
    TABLES[mat].trim().split("\n").forEach(function (l) {
      var p = l.split("|"), it = get(p[0]);
      if (p[1] !== "-") { it.rec.push([mat, parseInt(p[1], 10)]); }
      if (p[2] !== "-") { it.sal.push([mat, parseInt(p[2], 10)]); }
    });
  });
  EXTRAS.trim().split("\n").forEach(function (l) {
    var p = l.split("|");
    get(p[0]).rec.push([p[1], parseInt(p[2], 10)]);
  });
  NO_RECYCLE.forEach(get);
  Object.keys(rarity).forEach(get);
  return Object.keys(db).map(function (k) { return db[k]; }).sort(function (a, b) { return byCode(a.name, b.name); });
}

function head(o) {
  var h = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    "<title>" + esc(o.title) + "</title>\n" +
    '<meta name="description" content="' + esc(o.desc) + '">\n' +
    '<link rel="canonical" href="' + o.url + '">\n' +
    '<meta name="robots" content="index, follow">\n<meta name="theme-color" content="#0a0a0a">\n<meta property="og:type" content="website">\n' +
    '<meta property="og:title" content="' + esc(o.ogTitle || o.title) + '">\n' +
    '<meta property="og:description" content="' + esc(o.desc) + '">\n' +
    '<meta property="og:url" content="' + o.url + '">\n' +
    '<meta property="og:image" content="' + o.image + '">\n' +
    '<meta name="twitter:card" content="summary_large_image">\n';
  if (o.twitter) {
    h += '<meta name="twitter:title" content="' + esc(o.ogTitle) + '">\n' +
      '<meta name="twitter:description" content="' + esc(o.desc) + '">\n' +
      '<meta name="twitter:image" content="' + o.image + '">\n';
  }
  return h + '<link rel="icon" href="' + o.icon + 'icons/apple-touch-icon.png">\n<style>\n' + o.css + "</style>\n</head>\n";
}

var ITEM_CSS = ":root{color-scheme:dark}*{box-sizing:border-box}\n" +
  "body{margin:0;background:#0a0a0a;color:#f1e8d4;font:16px/1.55 system-ui,-apple-system,Segoe UI,Roboto,sans-serif}\n" +
  ".w{max-width:760px;margin:0 auto;padding:20px 16px 48px}a{color:#7be8e0}\n" +
  "h1{font-size:clamp(28px,6vw,42px);line-height:1.1;margin:8px 0;text-transform:uppercase;letter-spacing:.02em}\n" +
  "h2{margin-top:26px;font-size:20px}.eb{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#a8a08c}\n" +
  ".m{color:#a8a08c;font-size:14px}.chips{display:flex;flex-wrap:wrap;gap:6px;padding:0;list-style:none}\n" +
  ".chips li{border:1px solid #6c6554;border-radius:999px;padding:3px 12px;font-size:14px}\n" +
  ".btn{display:inline-block;background:#e6281c;color:#fff;text-decoration:none;font-weight:700;padding:12px 18px;border-radius:8px;margin:14px 8px 14px 0}\n" +
  "ul.idx{columns:2 240px;padding-left:18px}\n" +
  ".stats{display:flex;flex-wrap:wrap;gap:6px 22px;color:#bdb49d;margin:12px 0;font-family:ui-monospace,Consolas,monospace;font-size:14px}.stats b{color:#f1e8d4}\n";

var MAP_CSS = ":root{color-scheme:dark}\n*{box-sizing:border-box}\n" +
  "body{margin:0;background:#0a0a0a;color:#f1e8d4;font:16px/1.55 system-ui,-apple-system,Segoe UI,Roboto,sans-serif}\n" +
  ".w{max-width:880px;margin:0 auto;padding:20px 16px 48px}\na{color:#7be8e0}\n" +
  "h1{font-size:clamp(28px,6vw,44px);line-height:1.1;margin:8px 0;text-transform:uppercase;letter-spacing:.02em}\n" +
  ".eb{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#a8a08c}\n" +
  "img{max-width:100%;height:auto;border-radius:8px;display:block;background:#000}\n" +
  ".stats{display:flex;flex-wrap:wrap;gap:6px 22px;color:#bdb49d;margin:12px 0;font-family:ui-monospace,Consolas,monospace;font-size:14px}\n" +
  ".stats b{color:#f1e8d4}\n" +
  ".btn{display:inline-block;background:#e6281c;color:#fff;text-decoration:none;font-weight:700;padding:12px 18px;border-radius:8px;margin:14px 8px 14px 0}\n" +
  ".btn.g{background:transparent;border:1px solid #6c6554;color:#f1e8d4}\n" +
  "ul.rooms{columns:2 220px;padding-left:18px}\nh2{margin-top:28px}\n.m{color:#a8a08c;font-size:14px}\n";

function chips(title, list) {
  return list && list.length ? "<h2>" + title + '</h2><ul class="chips">' + list.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "";
}

function itemPage(it) {
  var F = FARM[it.name], G = FARM2[it.name], hasFarm = !!(F || G);
  F = F || {}; G = G || {};
  var qty = function (p) { return p[1] + "× " + p[0]; };
  var I = ITEMINFO[it.name] || [], st = [];
  if (I[0] != null) { st.push("Sells for <b>" + I[0].toLocaleString("en-US") + "</b> coins"); }
  if (I[1] != null) { st.push("Weight <b>" + I[1] + " kg</b>"); }
  if (I[2] != null) { st.push("Stacks to <b>" + I[2] + "</b>"); }
  var stats = st.length ? '<p class="stats">' + st.map(function (x) { return "<span>" + x + "</span>"; }).join("") + "</p>\n" : "";
  var body = (I[3] ? chips("Craft at " + I[3][0], I[3][1].map(function (g) { return g[1] + "× " + g[0]; })) : "") +
    chips("Used to craft", CRAFTS_INTO[it.name]) + chips("Recycles into", it.rec.map(qty)) + chips("Salvages into", it.sal.map(qty)) +
    chips("Area types the wiki lists", F.t || G.t) + chips("Found in", G.s) + chips("Dropped by ARC", G.a) +
    chips("Sold by", G.v) + chips("Quests", G.q) + chips("Other", G.o) +
    (F.s ? "<h2>Also from the wiki</h2><p>" + esc(F.s) + ".</p>" : "");
  var url = SITE + "item/" + slug(it.name) + "/";
  return head({
    title: it.name + ": where to farm and what it recycles into | Arc Raiders Hub",
    desc: (hasFarm ? "Where to farm " + it.name + " in ARC Raiders: area types, sources, traders and quests, plus what it recycles into" :
      it.name + " in ARC Raiders: what it recycles into") + (I[0] != null ? ". Sells for " + I[0].toLocaleString("en-US") + " coins." : (hasFarm ? "." : "")),
    url: url, image: SITE + "og-image.png", icon: "../../", css: ITEM_CSS
  }) + '<body>\n<div class="w">\n<div class="eb"><a href="../../">Arc Raiders Hub</a> / <a href="../">Items</a></div>\n' +
    "<h1>" + esc(it.name) + "</h1>\n" +
    '<p class="m">Item' + (it.rarity ? " (" + esc(it.rarity) + ")" : "") + ". Fan-made reference, not affiliated with Embark Studios.</p>\n" +
    stats +
    (body || "<p>The wiki lists no sources for this item yet.</p>") + "\n" +
    '<p><a class="btn" href="' + hashLink("recycle", it.name) + '">Open in Arc Raiders Hub</a></p>\n' +
    '<p class="m">Sources from the ARC Raiders wiki, last checked ' + CHECKED + "." + (I.length ? ' Price, weight and recipe from the wiki and <a href="https://github.com/RaidTheory/arcraiders-data">RaidTheory/arcraiders-data</a>.' : "") + " Double-check numbers in game.</p>\n</div>\n</body>\n</html>\n";
}

function itemIndex(items) {
  return head({
    title: "ARC Raiders items: where to farm and recycle | Arc Raiders Hub",
    desc: "Every ARC Raiders item with what it recycles into, where to farm it, traders and quests.",
    url: SITE + "item/", image: SITE + "og-image.png", icon: "../", css: ITEM_CSS
  }) + '<body><div class="w"><div class="eb"><a href="../">Arc Raiders Hub</a></div><h1>All items</h1><ul class="idx">' +
    items.map(function (it) { return '<li><a href="' + slug(it.name) + '/">' + esc(it.name) + "</a></li>"; }).join("") +
    "</ul></div></body></html>\n";
}

function mapPage(m) {
  var s = mapSlug(m), R = ROOMS[s];
  var rooms = R.r.map(function (r) { return r[0]; }).sort(byCode);
  var desc = m.name + " map for ARC Raiders: " + rooms.length + " named rooms and areas, difficulty " + m.diff + " of 5, unlock " + m.unlock + ". " + m.desc;
  var img = SITE + "maps/" + s + ".jpg", link = hashLink("maps", m.name);
  return head({
    title: m.name + " map, rooms and key | Arc Raiders Hub", ogTitle: m.name + " map | Arc Raiders Hub",
    desc: desc, url: SITE + "map/" + s + "/", image: img, icon: "../../", css: MAP_CSS, twitter: true
  }) + '<body>\n<div class="w">\n<div class="eb"><a href="../../">Arc Raiders Hub</a> / Maps</div>\n' +
    "<h1>" + esc(m.name) + " map</h1>\n<p>" + esc(m.desc) + "</p>\n" +
    '<div class="stats"><span>Difficulty <b>' + "●".repeat(m.diff) + "○".repeat(5 - m.diff) + "</b></span><span>Round <b>" + esc(m.len) +
    "</b></span><span>Unlock <b>" + esc(m.unlock) + "</b></span></div>\n" +
    '<a href="' + link + '"><img src="../../maps/' + s + '.jpg" alt="' + esc(m.name) + ' overview map" width="1200" loading="eager"></a>\n' +
    '<p><a class="btn" href="' + link + '">Open the interactive map</a><a class="btn g" href="../../">All of Arc Raiders Hub</a></p>\n' +
    "<p>The interactive map has a detailed, zoomable version with every room labelled, a key, a room finder and your own pins saved on your device.</p>\n" +
    "<h2>Rooms and areas on " + esc(m.name) + '</h2>\n<ul class="rooms">' + rooms.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul>\n" +
    (R.m ? '<p class="m">Markers on the key: ' + esc(R.m) + ".</p>\n" : "") +
    (m.notes && m.notes.length ? "<h2>Notes</h2>\n<ul>" + m.notes.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul>\n" : "") +
    '<p class="m">Free fan-made reference, not affiliated with Embark Studios. Map data from the ARC Raiders Wiki (CC BY-SA 4.0).</p>\n</div>\n</body>\n</html>\n';
}

function sitemap(maps, items) {
  var u = function (loc, extra) { return "  <url><loc>" + SITE + loc + "</loc>" + (extra || "") + "</url>\n"; };
  return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    u("", "<changefreq>weekly</changefreq>") +
    maps.map(function (m) { return u("map/" + mapSlug(m) + "/"); }).join("") +
    u("item/") +
    items.map(function (it) { return slug(it.name); }).sort(byCode).map(function (s) { return u("item/" + s + "/"); }).join("") +
    "</urlset>\n";
}

/* ---------- write ---------- */
var items = buildItems();
var maps = MAPS.filter(function (m) { return ROOMS[mapSlug(m)]; });
var out = {};
items.forEach(function (it) { out["item/" + slug(it.name) + "/index.html"] = itemPage(it); });
out["item/index.html"] = itemIndex(items);
maps.forEach(function (m) { out["map/" + mapSlug(m) + "/index.html"] = mapPage(m); });
out["sitemap.xml"] = sitemap(maps, items);

/* sw.js: list the data files for offline use and name the cache after a hash of
   everything it saves, so visitors get a fresh copy whenever the site changes. */
var CORE = ["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png"]
  .concat(DATA_FILES.map(function (f) { return "data/" + f; }));
var hash = require("crypto").createHash("sha1");
CORE.slice(1).forEach(function (f) { hash.update(f + "\0"); hash.update(fs.readFileSync(path.join(ROOT, f))); });
out["sw.js"] = fs.readFileSync(path.join(ROOT, "sw.js"), "utf8")
  .replace(/^var CACHE = .*$/m, 'var CACHE = "arc-hub-' + hash.digest("hex").slice(0, 10) + '"; /* set by tools/build-pages.js */')
  .replace(/^var CORE = .*$/m, "var CORE = " + JSON.stringify(CORE).replace(/","/g, '", "') + ";");

var check = process.argv.indexOf("--check") !== -1, changed = [];
Object.keys(out).forEach(function (rel) {
  var file = path.join(ROOT, rel), old = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : null;
  if (old === out[rel]) { return; }
  changed.push(rel);
  if (!check) { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, out[rel]); }
});
/* Pages whose item or map is no longer in the data. */
["item", "map"].forEach(function (dir) {
  fs.readdirSync(path.join(ROOT, dir)).forEach(function (d) {
    var rel = dir + "/" + d + "/index.html";
    if (fs.existsSync(path.join(ROOT, rel)) && !out[rel]) {
      changed.push(rel + " (no longer in the data)");
      if (!check) { fs.rmSync(path.join(ROOT, dir, d), { recursive: true }); }
    }
  });
});
console.log(items.length + " items, " + maps.length + " maps. " + (changed.length ? (check ? "Out of date:\n  " : "Updated:\n  ") + changed.join("\n  ") : "Everything is up to date."));
if (check && changed.length) { process.exit(1); }
