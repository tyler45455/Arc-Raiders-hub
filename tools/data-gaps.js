#!/usr/bin/env node
/* Prints the site's open data gaps (the same list as Site changes > Data gaps), read from the real page
   so it always matches what visitors see. The daily wiki check uses it to look the gaps up on the wiki.
   Usage: node tools/data-gaps.js [--json]  (needs playwright) */
"use strict";
var path = require("path");
var chromium = require("playwright").chromium;

(async function () {
  var browser = await chromium.launch();
  var page = await browser.newPage();
  await page.goto("file://" + path.join(__dirname, "..", "index.html"));
  await page.evaluate(function () { document.querySelector('[data-tab="site"]').click(); });
  await page.click("#auditBox summary");
  await page.waitForTimeout(300);
  var groups = await page.$$eval("#auditOut details", function (ds) {
    return ds.map(function (d) {
      return { section: d.querySelector("summary b").textContent, items: Array.from(d.querySelectorAll(".ffchips span")).map(function (s) { return s.textContent; }) };
    });
  });
  await browser.close();
  if (process.argv.indexOf("--json") >= 0) { console.log(JSON.stringify(groups, null, 2)); return; }
  var total = groups.reduce(function (a, g) { return a + g.items.length; }, 0);
  console.log(total + " open data gaps.");
  groups.forEach(function (g) { if (g.items.length) { console.log("\n" + g.section + " (" + g.items.length + "):\n  " + g.items.join("\n  ")); } });
})().catch(function (e) { console.error(e); process.exit(1); });
