#!/usr/bin/env node
/* Opens index.html in headless Chromium, visits every tab and fails on any
   JavaScript error. Usage: node tools/smoke-test.js  (needs playwright) */
"use strict";
var path = require("path");
var chromium = require("playwright").chromium;

(async function () {
  var browser = await chromium.launch();
  var page = await browser.newPage();
  var errors = [];
  page.on("pageerror", function (e) { errors.push(e.message); });
  /* Pages are loaded from disk, so ignore failed network requests (fonts, CDN). */
  page.on("console", function (m) {
    if (m.type() === "error" && !/Failed to load resource/.test(m.text())) { errors.push(m.text()); }
  });
  await page.goto("file://" + path.join(__dirname, "..", "index.html"));
  var tabs = await page.$$eval("[data-tab]", function (els) {
    return Array.from(new Set(els.map(function (e) { return e.getAttribute("data-tab"); })));
  });
  for (var i = 0; i < tabs.length; i++) {
    await page.click('[data-tab="' + tabs[i] + '"]:visible').catch(function () {});
    await page.waitForTimeout(200);
    var shown = await page.isVisible("#panel-" + tabs[i]);
    if (!shown) { errors.push("Tab " + tabs[i] + " did not show its panel"); }
  }
  /* Translations load on demand: picking a language must fetch its file and translate the tabs. */
  await page.selectOption("#langSel", "fr");
  await page.waitForFunction(function () { return document.documentElement.lang === "fr" && /Ressources|Recyclage/.test(document.getElementById("tabs").textContent); }, null, { timeout: 5000 })
    .catch(function () { errors.push("Picking French did not translate the page"); });
  await page.selectOption("#langSel", "en");
  await browser.close();
  if (errors.length) {
    console.error("Smoke test failed:\n  " + errors.join("\n  "));
    process.exit(1);
  }
  console.log("Smoke test passed: " + tabs.length + " tabs and a language switch, no JavaScript errors.");
})();
