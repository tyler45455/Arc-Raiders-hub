/* Map condition schedule: each row is [map, condition, [[start, end] minutes after 00:00 UTC, ...]],
   repeating every day. Copied from MetaForge's community feed (metaforge.app/arc-raiders) by
   tools/sync-conditions.js; do not edit by hand. */
var ARC = window.ARC_DATA = window.ARC_DATA || {};

ARC.COND_SCHEDULE = {
  source: "MetaForge",
  url: "https://metaforge.app/arc-raiders",
  changed: "October 16, 2026",
  rows: [
    ["Buried City","Lush Blooms",[[300,360]]],
    ["Buried City","Night Raid",[[120,180],[540,600],[600,660],[720,780],[780,840],[1260,1320],[1320,1380],[1380,1440]]],
    ["Buried City","Prospecting Probes",[[240,300]]],
    ["Dam Battlegrounds","Electromagnetic Storm",[[600,660],[660,720],[720,780],[1020,1080],[1080,1140]]],
    ["Dam Battlegrounds","Lush Blooms",[[900,960],[960,1020]]],
    ["Dam Battlegrounds","Matriarch",[[240,300],[720,780],[780,840]]],
    ["Dam Battlegrounds","Night Raid",[[420,480],[480,540]]],
    ["Dam Battlegrounds","Prospecting Probes",[[60,120],[540,600],[600,660]]],
    ["Pendola Pass","Night Raid",[[360,420],[960,1020],[1020,1080]]],
    ["Riven Tides","Night Raid",[[180,240],[600,660],[660,720],[840,900],[900,960],[1200,1260],[1260,1320],[1320,1380]]],
    ["Riven Tides","Prospecting Probes",[[1020,1080],[1080,1140]]],
    ["Spaceport","Harvester",[[120,180],[360,420],[600,660],[660,720],[720,780],[780,840]]],
    ["Spaceport","Hidden Bunker",[[960,1020]]],
    ["Spaceport","Launch Tower Loot",[[420,480],[480,540],[540,600],[600,660]]],
    ["Spaceport","Lush Blooms",[[780,840],[840,900],[1260,1320],[1320,1380],[1380,1440]]],
    ["Spaceport","Matriarch",[[0,60],[60,120],[420,480],[960,1020],[1020,1080],[1080,1140],[1140,1200],[1200,1260],[1260,1320],[1320,1380],[1380,1440]]],
    ["Spaceport","Night Raid",[[240,300],[1200,1260],[1260,1320],[1320,1380]]],
    ["Spaceport","Prospecting Probes",[[900,960],[960,1020]]],
    ["Stella Montis","Night Raid",[[0,60],[180,240],[420,480],[480,540],[540,600],[600,660],[660,720],[840,900],[900,960],[1080,1140],[1140,1200],[1380,1440]]],
    ["The Blue Gate","Electromagnetic Storm",[[840,900]]],
    ["The Blue Gate","Harvester",[[180,240]]],
    ["The Blue Gate","Lush Blooms",[[1140,1200],[1200,1260]]],
    ["The Blue Gate","Matriarch",[[840,900],[900,960]]],
    ["The Blue Gate","Night Raid",[[0,60],[60,120],[300,360],[660,720],[720,780]]],
    ["The Blue Gate","Prospecting Probes",[[420,480],[1260,1320],[1320,1380],[1380,1440]]]
  ]
};
