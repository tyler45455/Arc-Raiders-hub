# ARC Raiders Hub

A free, fan-made reference site for ARC Raiders.

**Live site:** https://tyler45455.github.io/Arc-Raiders-hub/

## Features

- **Recycling lookup:** search any item to see what it recycles or salvages into, or search a material (Metal Parts, ARC Alloy and so on) to see every item that gives it, biggest yield first. Toggle between recycle and in-raid salvage amounts.
- **Material tracker:** keep count of the materials you need and set goals with progress bars. The lookup then flags items that help your goals. Saved in your own browser only.
- **Shareable links:** the address updates as you search, so you can copy a link to a result. Press `/` to jump to the search box.
- **Install as an app:** add the site to your phone's home screen. There is also a light/dark theme toggle.
- **Weapons & gear:** stats for all 26 weapons plus augments, shields, healing, utility, grenades, traps and mines. Filter, sort weapons by damage, fire rate, range, weight or sell price, and open full stats for each.
- **Lookup extras:** star items, build a recycle cart, typo-tolerant search, recent searches, and a note when an item is mentioned in an update.
- **Quests:** all 109 trader quests with objectives, trader, location, required items and rewards. Search by any of those, filter by trader, and see how much of each required item your tracker already covers.
- **Quest planning:** quests stay hidden until the quest before them is done, can be sorted by how close your tracker is to covering them, set tracker goals from their required items, and be exported as a to-do list or a progress link. Items an active quest needs get a warning in the recycling lookup.
- **Reference:** enemies (health, weak points, drops), trader stock and prices, workshop upgrade costs, the skill tree, and a blueprint tracker.
- **Search everything:** one box at the top finds items, quests, enemies, blueprints, weapons and trader stock and jumps to the right tab.
- **Keep or recycle:** in the Tools tab, sorts items by what your active quests, projects and goals need.
- **Sharing:** share material and quest progress as an image, and copy a loadout as a link.
- **Shopping list (Tracker tab):** built automatically from your active quests, projects, workshop levels and goals, with a box on each row to type how many you have, the best items to recycle for each material, and an option to subtract items from your tracker when you complete a quest or workshop level. The workshop planner sits beside it.
- **Planning:** daily and weekly tasks that reset themselves, item tags (Sell, Keep, Craft), notes on each map, saved loadouts you can compare, a high-contrast mode and a print view for checklists.
- **More tools:** an Undo bar after changes, item notes, a Trials tracker, a quest map filter, raid prep on each map, a tracker history chart, shareable shopping-list links, an optional sound cue, a quick tour for new visitors and a skip link.
- **Public data files:** read-only JSON for items, quests, maps and keys under `api/v1/` (start at `api/v1/index.json`), with stable IDs. See CONTRIBUTING.md.
- **Extras:** a dot on the Updates tab when there is something new, an offline indicator, and a Feedback button.
- **Tools tab:** raid checklist, project helper with wiki presets (Expedition stages, Trophy Display and past projects) that compare what a project needs with your tracker and side-by-side item compare, weapon compare and a loadout builder that checks carried weight against your augment. Backups can be copied as a short transfer code, and the browser keeps automatic snapshots.
- **Crafting planner (Tools tab):** pick a craftable item and a quantity to see every material it takes down to basic parts, checked against your tracker, with the workbenches needed. Save it as a project or share it as a link.
- **Loot value (Tools tab):** ranks items by sell price per kg or per stash slot, and marks the ones your quests, projects or goals still need. Its Price changes list shows every sell price change the weekly sync has recorded since Oct 11, 2026; item pages show the latest one.
- **Skill build planner (Tools tab):** spend points across the three skill trees, check large-node gates and point totals, and share the build as a link.
- **Raid log (Tools tab):** log each raid's map, result and haul to see your extract rate and average haul per map.
- **Backup:** export and import your tracker, goals, stars, projects and checklist as text.
- **Offline:** after one visit the site keeps working without a connection.
- **Maps:** difficulty, unlock requirement, conditions and update notes for each map.
- **Frozen Trail 2.0:** a summary of the latest update.
- **Update history:** highlights for every major update from launch to now.
- **Custom items:** add an item that is missing or fix a number locally in your browser.
- **Languages:** English, Japanese, French, Spanish, German, Italian, Russian and Chinese (picker in the header; `?lang=fr` also works). Item, quest and enemy names stay in English. Outside English a "Report a translation error" button opens a pre-filled GitHub issue; highlight the wrong text first and it is included.
- **Phone:** bottom tab bar, "Install app" button, reset countdowns, where-to-farm finder, stash planner, and Keep or Sell hints on each item.

## Report a wrong number

Use the **Report** button on any item to open a pre-filled GitHub issue, or [open an issue](https://github.com/tyler45455/Arc-Raiders-hub/issues/new) directly. Please include what the site shows, what it should say, and a screenshot or game version if you can.

## Data and its limits

Recycling data comes from the [ARC Raiders Wiki](https://arcraiders.wiki) (CC BY-SA 4.0), using the "Recycled from" tables on the material pages. Weapon and gear stats come from the wiki's weapon and equipment pages; a dash means the wiki has no value yet. Only nine materials are loaded (Metal Parts, Plastic Parts, Rubber Parts, Chemicals, Fabric, Wires, ARC Alloy, Oil and Canister), so items that also break into other materials are marked **partial**. Wiki pages are dated April to October 2026, so numbers can lag behind the game.

Sell prices, weights, stack sizes and crafting recipes come from [RaidTheory/arcraiders-data](https://github.com/RaidTheory/arcraiders-data) (MIT, also behind arctracker.io) and were spot-checked against the wiki's Loot table. They are in `ITEMINFO` at the bottom of `data/items.js`. The same source fills "where to find" gaps the wiki leaves (area types, traders, weapon upgrades) in `FARM3`; wiki data always wins. A workflow re-reads that data set every Monday and opens a pull request when anything changed (see CONTRIBUTING.md).

## Contributing

1. Fork the repo. Game data is in `data/` (one file per area) and the page is `index.html`. There is no build step; open `index.html` in a browser to test. See [CONTRIBUTING.md](CONTRIBUTING.md) for the one command to run before a pull request.
2. Fix a number by editing its line in `TABLES` in `data/items.js` (format `Item|recycledQty|salvagedQty`, `-` for none).
3. Add an update at the top of `UPDATES` in `data/updates.js`.
4. Open a pull request and say where the number came from (wiki page or in-game screenshot).

## Map images

Optional images go in the `maps` folder; see [maps/README.md](maps/README.md) for the file names.

## Running locally

Open `index.html` in any browser. It loads its data from the `data/` folder and has no dependencies apart from the Google Fonts stylesheet.

## Privacy

The site counts anonymous page views with [GoatCounter](https://www.goatcounter.com). It uses no cookies and does not track individual visitors.

## Credits and disclaimer

Data: [ARC Raiders Wiki](https://arcraiders.wiki), CC BY-SA 4.0. This is an unofficial fan project and is not affiliated with or endorsed by Embark Studios. ARC Raiders and its artwork are the property of Embark Studios AB.

## Maps

Each map has an overview image (`maps/<name>.jpg`) and a detailed version (`maps/<name>-detail.jpg`) that opens when someone enlarges the map. The enlarged view supports zoom and pan, a room finder, and personal pins saved in the browser. Room names and positions live in the `ROOMS` block in `index.html`. Each map also has a static page under `map/<name>/` (for search engines and link previews) generated from that data.
