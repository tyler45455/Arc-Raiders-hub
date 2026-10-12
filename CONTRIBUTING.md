# Contributing

Thanks for helping keep the numbers right.

## Quick fix without coding
Open an [issue](https://github.com/tyler45455/Arc-Raiders-hub/issues/new/choose) with the item, what the site shows, what it should say, and a source (game version, wiki page or screenshot).

## Editing the data yourself
The game data is in the `data/` folder, one file per area: `items.js` (recycling, rarity and where to farm), `maps.js`, `gear.js`, `quests.js`, `reference.js` (enemies, traders, workshop, stash, skills, blueprints), `updates.js`, and `i18n/` with one translation file per language. The page and its code are in `index.html`. The site itself has no build step; the SEO pages under `item/` and `map/`, `sitemap.xml` and the cache name in `sw.js` are generated from these files (see below).

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

## Public JSON data
Read-only JSON files built from the same `data/` files live in `api/v1/` (`index.json`, `items.json`, `quests.json`, `maps.json`, `keys.json`). Every item, quest, map, room and key has an `id`, which is its English name as a lowercase slug (the same slug the `item/` and `map/` pages use). After changing anything in `data/`, run:

```
node tools/build-api.js
```

`node tools/build-api.js --check` only reports files that are out of date, and every pull request runs it. The build stops if two names would share an ID or a quest points at an unknown quest. The data comes from the wiki (CC BY-SA 4.0), so anyone reusing these files has to credit the wiki.

## Daily item data refresh
`ITEMINFO` and `FARM3` in `data/items.js` are generated from [RaidTheory/arcraiders-data](https://github.com/RaidTheory/arcraiders-data), so do not edit them by hand except for items that data set lacks (those entries are kept as they are). Every day `.github/workflows/sync-item-data.yml` re-reads it, adds a line to the Site changes tab, rebuilds the pages and opens or updates a pull request from the `data-sync` branch listing each change. It refuses to sync if prices disappear or more than half of them move at once. To run it by hand:

```
git clone --depth 1 https://github.com/RaidTheory/arcraiders-data /tmp/rt
node tools/sync-item-data.js /tmp/rt
node tools/build-pages.js && node tools/build-api.js
```

If the workflow opens an issue instead of a pull request, turn on "Allow GitHub Actions to create and approve pull requests" under Settings > Actions > General.

## Daily wiki check
The wiki blocks scripted downloads, so a scheduled Claude routine (not a GitHub workflow) reads the wiki's recent changes each day around 07:03 UTC. When a quest, key or skill page the site uses has changed in a way that affects the data (requirements, objectives, rewards, where a key is found, skill effects), it fixes `data/quests.js`, `data/maps.js` or `data/reference.js` in a pull request. Changes it can't settle are reported in the project instead. Both daily checks also set the matching row's date in `ARC.FRESHNESS` (data/updates.js) and `ARC.DATA_UPDATED` when they change something, which feeds the Data freshness table and the date at the bottom of the site.

## Enemy sightings
Each enemy card in Reference > Enemies has a Report a sighting button. It opens a GitHub issue titled `Enemy sighting: <enemy> on <map>` (label `enemy-sighting`). Maps from the wiki's Locations sections live in `maps` under `ARC.ENEMY_INFO` in `data/reference.js`. When two or more separate people report the same enemy on a map the wiki does not list, add that map to the enemy's `reported` list (for example `"reported": ["Riven Tides"]`), then close the issues. The card shows those maps under "Players saw it".

## Map images
Add or replace images in `maps/` using the file names in `maps/README.md`, under 1 MB each.

## Licensing
Data comes from the [ARC Raiders Wiki](https://arcraiders.wiki) (CC BY-SA 4.0), so contributed data stays under the same licence. ARC Raiders and its artwork belong to Embark Studios AB.

## Translations

Translations live in `data/i18n/`, one file per language (for example `data/i18n/fr.js`); the site loads only the file for the language a visitor picks. Each language has an `x` map of exact English text to its translation and an `r` list of patterns for text with numbers. Fix a wrong line there and open a pull request, or open an issue with the wording you suggest.
