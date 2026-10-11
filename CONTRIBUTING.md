# Contributing

Thanks for helping keep the numbers right.

## Quick fix without coding
Open an [issue](https://github.com/tyler45455/Arc-Raiders-hub/issues/new/choose) with the item, what the site shows, what it should say, and a source (game version, wiki page or screenshot).

## Editing the data yourself
The game data is in the `data/` folder, one file per area: `items.js` (recycling, rarity and where to farm), `maps.js`, `gear.js`, `quests.js`, `reference.js` (enemies, traders, workshop, stash, skills, blueprints), `updates.js` and `i18n.js` (translations). The page and its code are in `index.html`. The site itself has no build step; the SEO pages under `item/` and `map/`, `sitemap.xml` and the cache name in `sw.js` are generated from these files (see below).

1. Fork the repo, or press the pencil icon on the file under `data/` on GitHub.
2. In `data/items.js`, find the material block in `TABLES` (for example `Metal Parts`). Each line is `Item|recycledQty|salvagedQty`, and `-` means none.
3. Items that give other materials go in `EXTRAS` as `Item|Material|qty`.
4. Items the wiki lists as "Cannot be recycled" go in `NO_RECYCLE`.
5. New updates go at the top of `UPDATES` in `data/updates.js` (date, title, version, summary and highlight points).
6. Change `DATA_UPDATED` to today's date when you refresh the numbers.
7. Open a pull request and say where each number came from. Wiki numbers should match the wiki; in-game screenshots win when the two disagree.

## Item and map pages
The pages under `item/` and `map/` and `sitemap.xml` are built from `data/items.js` and `data/maps.js`. `sw.js` names its offline cache after a hash of `index.html` and the data files, so visitors get a fresh copy after every change. After changing `index.html` or anything in `data/`, run:

```
node tools/build-pages.js
```

It needs Node 14.14 or newer and nothing else. `node tools/build-pages.js --check` only reports files that are out of date.

Every pull request runs that check plus `tools/smoke-test.js`, which opens the site in headless Chromium, clicks every tab and fails on any JavaScript error. To run it locally: `npm install --no-save playwright && npx playwright install chromium && node tools/smoke-test.js`.

## Map images
Add or replace images in `maps/` using the file names in `maps/README.md`, under 1 MB each.

## Licensing
Data comes from the [ARC Raiders Wiki](https://arcraiders.wiki) (CC BY-SA 4.0), so contributed data stays under the same licence. ARC Raiders and its artwork belong to Embark Studios AB.

## Translations

Translations live in `data/i18n.js` in the `I18N` object. Each language has an `x` map of exact English text to its translation and an `r` list of patterns for text with numbers. Fix a wrong line there and open a pull request, or open an issue with the wording you suggest.
