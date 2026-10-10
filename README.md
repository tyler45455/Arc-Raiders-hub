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
- **Tools tab:** raid checklist, project helper (compare what a project needs with your tracker) and side-by-side item compare.
- **Backup:** export and import your tracker, goals, stars, projects and checklist as text.
- **Offline:** after one visit the site keeps working without a connection.
- **Maps:** difficulty, unlock requirement, conditions and update notes for each map.
- **Frozen Trail 2.0:** a summary of the latest update.
- **Update history:** highlights for every major update from launch to now.
- **Custom items:** add an item that is missing or fix a number locally in your browser.

## Report a wrong number

Use the **Report** button on any item to open a pre-filled GitHub issue, or [open an issue](https://github.com/tyler45455/Arc-Raiders-hub/issues/new) directly. Please include what the site shows, what it should say, and a screenshot or game version if you can.

## Data and its limits

Recycling data comes from the [ARC Raiders Wiki](https://arcraiders.wiki) (CC BY-SA 4.0), using the "Recycled from" tables on the material pages. Weapon and gear stats come from the wiki's weapon and equipment pages; a dash means the wiki has no value yet. Only nine materials are loaded (Metal Parts, Plastic Parts, Rubber Parts, Chemicals, Fabric, Wires, ARC Alloy, Oil and Canister), so items that also break into other materials are marked **partial**. Wiki pages are dated April to October 2026, so numbers can lag behind the game.

## Contributing

1. Fork the repo and edit `index.html`. There is no build step; open it in a browser to test.
2. Fix a number by editing its line in `TABLES` (format `Item|recycledQty|salvagedQty`, `-` for none).
3. Add an update at the top of `UPDATES`.
4. Open a pull request and say where the number came from (wiki page or in-game screenshot).

## Map images

Optional images go in the `maps` folder; see [maps/README.md](maps/README.md) for the file names.

## Running locally

Open `index.html` in any browser. It is a single file with no dependencies apart from the Google Fonts stylesheet.

## Privacy

The site counts anonymous page views with [GoatCounter](https://www.goatcounter.com). It uses no cookies and does not track individual visitors.

## Credits and disclaimer

Data: [ARC Raiders Wiki](https://arcraiders.wiki), CC BY-SA 4.0. This is an unofficial fan project and is not affiliated with or endorsed by Embark Studios. ARC Raiders and its artwork are the property of Embark Studios AB.
