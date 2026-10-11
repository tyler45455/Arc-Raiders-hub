# Roadmap and ideas for later

Things we talked about and have not built yet. Newest thinking first. Move an item to the changelog (the Site changes tab) when it ships.

## Waiting on Embark
The site emailed (or will email) Embark Studios to ask whether any official API exists for player-authorized inventory, materials or quest data. Nothing below should be built against an API until they answer.

## Getting ready for an API
Done so far: backup files with IDs, stable item and quest IDs, and public JSON data under `api/v1/`.

- **Sync layer with swappable sources.** The tracker reads from "manual", "file import" and later "API" through one interface. Each count records where it came from and when it was last synced. A Sync button stays hidden until a source exists.
- **Conflict rule.** If a source says 40 and the player typed 50, ask which to keep, with Undo. The quest "finished up to here" button already works this way.
- **Privacy rules.** The site has no server, so any API has to be player-authorized and keep nothing sensitive in the browser. Write the consent text before building.
- **Contract tests.** Check the shape of `api/v1/*.json` in CI so a data change cannot silently break other tools.

## Site improvements
- **Data audit page** listing items with no sources, quests missing details and keys with no spot on the map.
- **Weekly wiki check.** Item prices, recipes and sources from RaidTheory now refresh weekly; recycling tables, quests and keys from the wiki still do not.
- **Tests in CI.** Add search, tracker and import/export checks next to the existing smoke test.
- **Accessibility pass.** Keyboard use in the map viewer and in the new popovers (partial note, search results).
- **Wiki gaps.** About 40 items have no sources; Wires Crossed and Disrupting The Frigate are not on the wiki; Broken Monument's prerequisite is ambiguous.
- **Older tests** t21, t27 and t30 break on the tool sub-tabs and need updating.
