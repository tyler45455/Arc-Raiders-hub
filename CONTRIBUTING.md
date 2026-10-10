# Contributing

Thanks for helping keep the numbers right.

## Quick fix without coding
Open an [issue](https://github.com/tyler45455/Arc-Raiders-hub/issues/new/choose) with the item, what the site shows, what it should say, and a source (game version, wiki page or screenshot).

## Editing the data yourself
Everything is in `index.html`. There is no build step.

1. Fork the repo, or press the pencil icon on `index.html` on GitHub.
2. Find the material block in `TABLES` (for example `Metal Parts`). Each line is `Item|recycledQty|salvagedQty`, and `-` means none.
3. Items that give other materials go in `EXTRAS` as `Item|Material|qty`.
4. Items the wiki lists as "Cannot be recycled" go in `NO_RECYCLE`.
5. New updates go at the top of `UPDATES` (date, title, version, summary and highlight points).
6. Change `DATA_UPDATED` to today's date when you refresh the numbers.
7. Open a pull request and say where each number came from. Wiki numbers should match the wiki; in-game screenshots win when the two disagree.

## Map images
Add or replace images in `maps/` using the file names in `maps/README.md`, under 1 MB each.

## Licensing
Data comes from the [ARC Raiders Wiki](https://arcraiders.wiki) (CC BY-SA 4.0), so contributed data stays under the same licence. ARC Raiders and its artwork belong to Embark Studios AB.
