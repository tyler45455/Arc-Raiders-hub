/* Items: recycling tables, rarity, where to farm.
   Loaded by index.html before the main script and by tools/build-pages.js. */
var ARC = window.ARC_DATA = window.ARC_DATA || {};

ARC.TABLES = {
"Metal Parts": `
Acoustic Guitar|4|-
ARC Alloy|2|1
ARC Performance Steel|12|7
Barricade Kit|4|3
Battery|2|1
Bicycle Pump|10|-
Blaze Grenade|4|-
Broken Flashlight|6|7
Cable Stripper|2|1
Candle Holder|8|4
Compensator I|5|3
Damaged ARC Powercell|-|1
Damaged Fireball Burner|-|1
Damaged Heat Sink|6|-
Damaged Tick Pod|-|1
Damaged Wasp Driver|-|1
Dog Collar|1|-
Door Blocker|2|1
Extended Barrel I|5|3
Ferro I|2|2
Ferro II|4|2
Ferro III|6|-
Frying Pan|8|4
Garlic Press|12|7
Hairpin I|2|2
Hairpin II|4|4
Hairpin III|6|-
Hand Drill|-|2
Ice Cream Scooper|7|3
Industrial Charger|5|-
Industrial Magnet|4|-
Kettle I|3|3
Kettle II|6|6
Kettle III|12|-
Magnet|2|1
Mechanical Components|3|3
Metal Brackets|8|4
Muzzle Brake I|5|3
Number Plate|3|2
Rattler I|8|4
Rattler II|12|8
Rattler III|-|12
Rattler IV|-|14
Rocket Thruster|6|-
Ruined Baton|6|4
Ruined Handcuffs|8|4
Rusted Bolts|8|4
Rusted Gear|4|12
Rusted Tools|8|7
Rusty ARC Steel|8|3
Sensors|1|-
Shotgun Choke I|5|3
Shrapnel Grenade|1|-
Simple Gun Parts|2|1
Steel Spring|2|1
Stitcher I|3|3
Stitcher II|6|6
Stitcher III|12|-
Unusable Weapon|4|-
Water Pump|4|-
Zipline|-|4`,
"Plastic Parts": `
Adrenaline Shot|1|-
Advanced Camera|-|5
Alarm Clock|6|-
Angled Grip I|6|3
ARC Synthetic Resin|14|9
Basic Camera|5|-
Binoculars|4|4
Calculator|2|-
Camera Lens|8|4
Canister|3|1
Combat Mk. 1|3|3
Cooling Fan|14|-
Crash Mat|3|-
Crumpled Plastic Bottle|4|1
Defibrillator|1|-
Dried-Out ARC Resin|9|4
Electrical Components|3|3
Extended Light Mag I|6|3
Extended Medium Mag I|6|3
Extended Shotgun Mag I|6|3
Firecracker|3|1
Free Loadout Augment|6|-
Fried Motherboard|5|-
Jolt Mine|2|-
Li'l Smoke Grenade|1|-
Light Impact Grenade|1|-
Light Shield|4|-
Looting Mk. 1|3|3
Mini Pump|2|2
Processor|1|2
Recorder|10|4
Remote Control|7|-
Ruined Augment|2|3
Ruined Riot Shield|10|10
Shaker|10|4
Speaker Component|2|2
Surge Shield Recharger|-|5
Synthesized Fuel|1|-
Syringe|3|2
Tactical Mk. 1|3|3
Tagging Grenade|1|-
Toaster|5|-
Vertical Grip I|6|3
White Flag|1|-`,
"Rubber Parts": `
ARC Flex Rubber|16|9
Binoculars|2|-
Calculator|-|2
Combat Mk. 1|3|-
Cracked Bioscanner|3|-
Deflated Football|9|9
Degraded ARC Rubber|11|5
Diving Goggles|12|5
Electrical Components|3|-
Expired Respirator|8|5
Ferro I|1|-
Ferro II|3|-
Free Loadout Augment|6|-
Gas Grenade|1|-
Gas Mine|1|-
Hairpin I|1|-
Hairpin II|3|-
Headphones|7|-
Heavy Fuze Grenade|2|-
Kettle I|2|-
Kettle II|6|-
Looting Mk. 1|3|-
Mechanical Components|2|-
Remote Raider Flare|1|-
Rubber Pad|18|12
Ruined Accordion|18|13
Ruined Augment|2|-
Ruined Baton|3|-
Ruined Riot Shield|6|-
Shield Recharger|4|3
Speaker Component|3|-
Stable Stock I|6|3
Steel Cable|-|1
Stitcher I|2|-
Stitcher II|6|-
Tactical Mk. 1|3|-
Thermostat|7|-
Voltage Converter|1|2
Water Filter|2|-
Wires|2|1`,
"Chemicals": `
Adrenaline Shot|1|1
Antiseptic|10|5
ARC Coolant|16|9
Blue Light Stick|1|1
Coolant|5|-
Cooling Coil|6|-
Crude Explosives|3|2
Defibrillator|-|2
Epoxy Bucket|8|4
Gas Grenade|1|1
Gas Mine|1|2
Green Light Stick|1|1
Household Cleaner|11|5
Impure ARC Coolant|12|5
Industrial Battery|7|-
Laboratory Reagents|16|-
Li'l Smoke Grenade|1|2
Light Impact Grenade|1|1
Oil|3|1
Pulse Mine|6|3
Red Light Stick|1|1
Remote Raider Flare|1|1
Seeker Grenade|-|3
Smoke Grenade|2|3
Snap Blast Grenade|1|2
Syringe|2|-
Tick Pod|2|-
Trigger 'Nade|1|-
Vita Shot|4|-
Yellow Light Stick|1|1`,
"Fabric": `
ARC Thermo Lining|16|9
Bandage|2|1
Crash Mat|6|4
Deflated Football|9|-
Dog Collar|8|5
Duct Tape|3|1
Durable Cloth|6|2
Expired Respirator|4|-
Herbal Bandage|5|8
Polluted Air Filter|6|-
Ripped Safety Vest|-|8
Rope|5|2
Ruined Parachute|10|5
Ruined Tactical Vest|5|5
Sterilized Bandage|1|-
Tattered ARC Lining|12|5
Tattered Clothes|11|5
Torn Blanket|12|5
White Flag|5|3`,
"Wires": `
Acoustic Guitar|6|3
Advanced Electrical Components|1|-
Broken Handheld Radio|2|-
Broken Taser|2|-
Compensator II|1|-
Compensator III|2|-
Cooling Fan|4|4
Damaged Heat Sink|2|3
Extended Barrel II|1|-
Extended Barrel III|1|-
Fried Motherboard|-|5
Humidifier|2|-
Muzzle Brake II|1|-
Muzzle Brake III|2|-
Portable TV|6|4
Power Bank|2|-
Power Cable|4|3
Processor|1|-
Projector|2|-
Sensors|1|1
Shotgun Choke II|1|-
Shotgun Choke III|2|-
Shotgun Silencer|1|-
Silencer I|1|-
Silencer II|2|-
Silencer III|3|-
Toaster|3|3
Voltage Converter|1|-`,
"ARC Alloy": `
ARC Circuitry|2|1
ARC Motion Core|2|1
Bastion Cell|3|-
Bombardier Cell|3|-
Burned ARC Circuitry|2|1
Comet Igniter|2|-
Damaged ARC Motion Core|2|1
Damaged ARC Powercell|1|-
Damaged Fireball Burner|1|-
Damaged Hornet Driver|2|1
Damaged Leaper Pulse Unit|3|2
Damaged Rocketeer Driver|3|2
Damaged Tick Pod|1|-
Damaged Wasp Driver|1|-
Fireball Burner|1|1
Firefly Burner|2|-
Glitched ARC Circuitry|6|-
Glitched ARC Light Ring|3|-
Glitched ARC Phased Array|3|-
Glitched ARC Power Converter|3|-
Glitched ARC Transmitter|1|-
Heavy Shield|-|4
Hornet Driver|1|-
Leaper Pulse Unit|3|-
Light Shield|-|1
Medium Shield|-|2
Pop Trigger|1|-
Rocketeer Driver|3|-
Sentinel Firing Core|2|-
Shredder Gyro|2|-
Snitch Scanner|1|-
Spotter Relay|1|-
Surveyor Vault|1|-
Tick Pod|2|1
Wasp Driver|1|2`,
"Oil": `
Blaze Grenade|2|1
Coolant|2|2
Explosive Mine|2|2
Heavy Fuze Grenade|1|-
Motor|2|3
Polluted Air Filter|2|2
Synthesized Fuel|1|1
Turbo Pump|3|-
Water Pump|2|2`,
"Canister": `
Bicycle Pump|4|3
Flame Spray|1|-
Humidifier|2|2
Mini Centrifuge|2|-
Smoke Grenade|1|-
Vita Spray|1|-
Water Filter|3|2`,
"Mechanical Components": `
Advanced Mechanical Components|1|1
Angled Grip II|1|1
Angled Grip III|-|2
Arpeggio I|2|-
Arpeggio II|3|-
Arpeggio III|4|-
Arpeggio IV|5|-
Bantam I|1|-
Bantam III|2|-
Bantam IV|4|-
Burletta I|1|-
Burletta II|2|-
Burletta III|3|-
Burletta IV|4|-
Compensator II|1|1
Compensator III|-|1
Extended Barrel II|1|1
Extended Barrel III|-|2
Extended Light Mag II|1|1
Extended Light Mag III|-|2
Extended Medium Mag II|1|1
Extended Medium Mag III|-|2
Extended Shotgun Mag II|1|1
Extended Shotgun Mag III|-|2
Ferro IV|1|-
Flow Controller|-|2
Hairpin IV|1|-
Hand Drill|1|-
Horizontal Grip|-|2
Il Toro I|2|-
Il Toro II|3|-
Il Toro III|4|-
Il Toro IV|5|-
Kettle IV|2|-
Kinetic Converter|-|2
Laser Level|2|1
Leaper Pulse Unit|-|2
Lightweight Stock|-|2
Microscope|-|2
Mini Centrifuge|-|2
Mod Components|1|1
Motor|2|-
Muzzle Brake II|1|1
Muzzle Brake III|-|2
Padded Stock|-|2
Radial Press|-|1
Rattler III|3|-
Rattler IV|4|-
Rusted Gear|2|-
Sentinel Firing Core|2|2
Shotgun Choke II|1|1
Shotgun Choke III|-|2
Shotgun Silencer|-|2
Shredder Gyro|2|2
Silencer I|1|1
Silencer II|-|2
Stable Stock II|1|1
Stable Stock III|-|2
Stiletto I|1|-
Stiletto II|2|-
Stiletto III|3|-
Stiletto IV|4|-
Stitcher IV|2|-
Surveyor Vault|1|1
Turbo Pump|1|-
Vertical Grip II|1|1
Vertical Grip III|2|2`,
"Advanced Mechanical Components": `
Anvil II|2|-
Anvil III|2|-
Assessor Matrix|1|-
Bastion Cell|1|1
Bettina I|1|1
Bettina II|2|2
Bettina III|2|3
Bettina IV|3|4
Bobcat I|2|-
Bobcat II|3|-
Bobcat III|4|-
Bobcat IV|5|-
Bombardier Cell|1|1
Canto I|1|-
Flow Controller|1|-
Hullcracker I|2|-
Hullcracker II|2|-
Hullcracker III|3|-
Hullcracker IV|4|-
Jupiter|-|3
Leaper Pulse Unit|1|-
Magnetic Accelerator|1|1
Magnetron|-|1
Microscope|1|-
Mini Centrifuge|1|-
Osprey I|1|-
Osprey II|2|-
Osprey III|2|-
Osprey IV|3|-
Radial Press|1|-
Rascal I|1|-
Rascal II|2|-
Rascal III|2|-
Rascal IV|3|-
Renegade I|1|-
Renegade II|2|-
Renegade III|2|-
Renegade IV|3|-
Tempest I|2|-
Tempest II|3|-
Tempest III|4|-
Tempest IV|5|-
Torrente I|1|-
Torrente II|2|-
Torrente III|2|-
Torrente IV|3|-
Venator I|1|-
Venator II|2|-
Venator III|2|-
Venator IV|3|-
Vulcano I|2|-
Vulcano II|2|-
Vulcano III|3|-
Vulcano IV|4|-`,
"Electrical Components": `
Advanced Electrical Components|1|1
Combat Mk. 2|1|1
Combat Mk. 3 (Aggressive)|-|2
Combat Mk. 3 (Flanking)|-|2
Frequency Modulation Box|-|2
Fried Motherboard|2|-
Glitched ARC Transmitter|1|-
Hornet Driver|1|1
Looting Mk. 2|1|1
Looting Mk. 3 (Cautious)|-|2
Looting Mk. 3 (Safekeeper)|-|2
Looting Mk. 3 (Survivor)|-|2
Rotary Encoder|2|-
Sample Cleaner|2|-
Showstopper|1|1
Signal Amplifier|2|-
Snitch Scanner|1|1
Spectrometer|-|2
Spotter Relay|1|1
Surge Coil|1|1
Surge Shield Recharger|1|-
Tactical Mk. 2|1|1
Tactical Mk. 3 (Defensive)|-|2
Tactical Mk. 3 (Healing)|-|2
Tactical Mk. 3 (Revival)|-|2
Telemetry Transceiver|-|2
Wasp Driver|1|-`,
"Advanced Electrical Components": `
Combat Mk. 3 (Aggressive)|1|-
Combat Mk. 3 (Flanking)|1|-
Frequency Modulation Box|1|-
Glitched ARC Light Ring|1|-
Looting Mk. 3 (Cautious)|1|-
Looting Mk. 3 (Safekeeper)|1|-
Looting Mk. 3 (Survivor)|1|-
Photoelectric Cloak|1|1
Power Rod|1|1
Powered Descender|1|1
Rocketeer Driver|2|-
Snap Hook|-|2
Spectrometer|1|-
Tactical Mk. 3 (Defensive)|1|-
Tactical Mk. 3 (Healing)|1|-
Tactical Mk. 3 (Revival)|1|-
Tactical Mk. 3 (Smoke)|1|2
Telemetry Transceiver|1|-
Vaporizer Regulator|1|-`,
"Mod Components": `
Angled Grip III|1|-
Compensator III|1|-
Extended Barrel III|1|-
Extended Light Mag III|1|-
Extended Medium Mag III|1|-
Extended Shotgun Mag III|1|-
Horizontal Grip|1|-
Kinetic Converter|1|-
Lightweight Stock|1|-
Muzzle Brake III|1|-
Padded Stock|1|-
Shotgun Choke III|1|-
Shotgun Silencer|1|-
Silencer II|1|-
Silencer III|1|2
Stable Stock III|1|-`,
"Durable Cloth": `
Ripped Safety Vest|1|-
Spring Cushion|2|-
Sterilized Bandage|-|1`,
"Antiseptic": `
Rusted Shut Medical Kit|1|-
Sterilized Bandage|1|-
Vita Spray|1|1`,
"Crude Explosives": `
Comet Igniter|2|2
Explosive Compound|2|1
Fireball Burner|1|-
Firefly Burner|2|2
Heavy Fuze Grenade|-|1
Laboratory Reagents|3|3
Pop Trigger|1|1
Seeker Grenade|1|-
Shrapnel Grenade|1|1
Trailblazer|2|2`,
"Explosive Compound": `
Deadline|1|1
Fireworks Box|1|1
Fossilized Lightning|3|2
Wolfpack|1|2`,
"Magnetic Accelerator": `
Aphelion|2|1
Dolabra|2|1
Equalizer|2|1
Jupiter|2|-
Magnetron|1|-
Matriarch Reactor|1|1
Queen Reactor|1|-`,
"Power Rod": `
Matriarch Reactor|1|-
Queen Reactor|1|1
Snap Hook|1|-`,
"Processor": `
Alarm Clock|1|1
Broken Guidance System|4|2
Combat Mk. 3 (Aggressive)|1|-
Combat Mk. 3 (Flanking)|1|-
Exodus Modules|2|2
Looting Mk. 3 (Cautious)|1|-
Looting Mk. 3 (Safekeeper)|1|-
Looting Mk. 3 (Survivor)|1|-
Projector|1|1
Rotary Encoder|2|2
Spectrum Analyzer|-|2
Tactical Mk. 3 (Defensive)|1|-
Tactical Mk. 3 (Healing)|1|-
Tactical Mk. 3 (Revival)|1|-
Tactical Mk. 3 (Smoke)|1|-
Telemetry Transceiver|1|-
Trigger 'Nade|1|1`,
"Sensors": `
Broken Handheld Radio|3|2
Explosive Mine|1|-
Flow Controller|1|-
Glitched ARC Phased Array|2|-
Mini Pump|1|-
Radio|1|-
Radio Relay|2|2
Remote Control|1|1
Spectrometer|1|-
Spectrum Analyzer|1|-
Surge Coil|1|-
Tagging Grenade|1|1
Thermostat|1|1`,
"Magnet": `
Combat Mk. 2|1|-
Exodus Modules|2|-
Industrial Magnet|2|2
Looting Mk. 2|1|-
Microscope|3|-
Ripped Safety Vest|1|-
Ruined Tactical Vest|1|-
Snap Blast Grenade|1|-
Tactical Mk. 2|1|-`,
"Steel Spring": `
Advanced Mechanical Components|1|-
Cooling Coil|2|2
Extended Light Mag II|1|-
Extended Light Mag III|2|-
Extended Medium Mag II|1|-
Extended Medium Mag III|2|-
Extended Shotgun Mag II|1|-
Extended Shotgun Mag III|2|-
Magnetron|1|-
Mod Components|1|-
Ruined Accordion|3|-
Rusted Tools|1|-
Spring Cushion|2|2
Turbo Pump|-|3`,
"Battery": `
Broken Flashlight|2|-
Broken Taser|2|2
Cracked Bioscanner|3|2
Geiger Counter|3|3
Industrial Battery|2|2
Jolt Mine|1|1
Portable TV|2|-
Power Bank|2|2`,
"Duct Tape": `
Angled Grip II|1|-
Angled Grip III|2|-
Horizontal Grip|2|-
Kinetic Converter|2|-
Lightweight Stock|1|-
Padded Stock|1|-
Stable Stock II|1|-
Stable Stock III|2|-
Vertical Grip II|1|-
Vertical Grip III|2|-`,
"Rope": `
Grappling Hook|1|1
Snap Hook|3|-
Yank Grenade|1|-`,
"Speaker Component": `
Differential Microphone|1|-
Frequency Modulation Box|1|-
Headphones|1|1
Lure Grenade|1|1
Noisemaker|1|1
Photoelectric Cloak|1|-
Radio|1|1
Radio Relay|2|-`,
"Voltage Converter": `
Heavy Shield|1|-
Industrial Charger|1|1
Ion Sputter|4|-
Showstopper|1|-
Signal Amplifier|2|2`,
"Exodus Modules": `
Geiger Counter|1|-
Glitched ARC Circuitry|1|-
Ion Sputter|1|1
Spectrum Analyzer|1|-`,
"Synthesized Fuel": `
Rocket Thruster|2|1`,
"Syringe": `
Rusted Shut Medical Kit|2|2
Vita Shot|1|1`,
"ARC Circuitry": `
Deadline|1|-
Frigate Inductor|2|-
Heavy Shield|2|-
Medium Shield|1|-
Power Rod|1|-
Powered Descender|1|-
Rocketeer Driver|-|2
Turbine Compressor|1|1
Vaporizer Regulator|2|2`,
"ARC Motion Core": `
Magnetic Accelerator|1|-
Turbine Compressor|1|-
Wolfpack|1|-`,
"ARC Powercell": `
Advanced ARC Powercell|2|1`,
"Advanced ARC Powercell": `
Assessor Matrix|3|2`,
"Simple Gun Parts": `
Arpeggio I|2|2
Arpeggio II|3|3
Arpeggio III|4|4
Arpeggio IV|5|5
Burletta I|2|2
Burletta II|2|2
Burletta III|3|3
Burletta IV|4|4
Complex Gun Parts|3|2
Ferro III|1|1
Ferro IV|2|2
Hairpin III|1|1
Hairpin IV|2|2
Heavy Gun Parts|2|1
Il Toro I|2|2
Il Toro II|3|3
Il Toro III|4|4
Il Toro IV|5|5
Kettle III|1|1
Kettle IV|2|2
Light Gun Parts|2|1
Medium Gun Parts|2|1
Rattler III|1|-
Rattler IV|2|-
Skulker Targeter|1|-
Stiletto I|2|-
Stiletto II|2|-
Stiletto III|3|-
Stiletto IV|4|-
Stitcher III|1|1
Stitcher IV|2|2
Unusable Weapon|5|3`,
"Light Gun Parts": `
Bobcat I|2|2
Bobcat II|3|3
Bobcat III|4|4
Bobcat IV|4|5`,
"Medium Gun Parts": `
Canto I|2|2
Osprey I|2|2
Osprey II|2|2
Osprey III|3|3
Osprey IV|3|3
Renegade I|2|2
Renegade II|2|2
Renegade III|3|3
Renegade IV|3|3
Tempest I|2|2
Tempest II|3|3
Tempest III|4|4
Tempest IV|4|5
Torrente I|2|2
Torrente II|2|2
Torrente III|3|3
Torrente IV|3|3
Venator I|2|2
Venator II|2|2
Venator III|3|3
Venator IV|3|3`,
"Heavy Gun Parts": `
Anvil II|2|-
Anvil III|3|-
Bettina I|2|-
Bettina II|2|-
Bettina III|3|-
Bettina IV|3|-
Hullcracker I|2|2
Hullcracker II|3|3
Hullcracker III|4|4
Hullcracker IV|5|5
Rascal I|2|2
Rascal II|2|2
Rascal III|3|3
Rascal IV|3|3
Vulcano I|2|2
Vulcano II|3|3
Vulcano III|4|4
Vulcano IV|5|5`,
"Complex Gun Parts": `
Aphelion|1|-
Equalizer|1|-
Jupiter|1|-`,
"Assorted Seeds": `
Agave|3|2
Apricot|3|2
Candleberries|2|-
Fertilizer|2|1
Great Mullein|2|1
Herbal Bandage|2|-
Lemon|3|2
Moss|3|2
Olives|2|1
Prickly Pear|3|2
Roots|1|1
Sample Cleaner|14|12`
  };

ARC.EXTRAS = `
Anvil Splitter|Amplified Fragments|5`;

ARC.RARITY = `
Acoustic Guitar|Legendary
Adrenaline Shot|Common
Advanced ARC Powercell|Rare
Advanced Camera|Rare
Advanced Electrical Components|Rare
Advanced Mechanical Components|Rare
Agave Juice|Common
Agave|Uncommon
Air Freshener|Uncommon
Alarm Clock|Rare
Alien Duck|Uncommon
Angled Grip I|Common
Angled Grip II|Uncommon
Angled Grip III|Rare
Antiseptic|Rare
Anvil Splitter|Legendary
Apricot|Uncommon
ARC Alloy|Uncommon
ARC Circuitry|Rare
ARC Conductive Coupler|Epic
ARC Coolant|Rare
ARC Flex Rubber|Rare
ARC Insulated Coupler|Epic
ARC Motion Core|Rare
ARC Performance Steel|Rare
ARC Plated Coupler|Epic
ARC Powercell|Common
ARC Synthetic Resin|Rare
ARC Thermo Lining|Rare
Arcade Duck|Epic
Assessor Matrix|Epic
Assorted Seeds|Common
Bandage|Common
Banjo|Rare
Barricade Kit|Uncommon
Basic Camera|Uncommon
Bastion Cell|Epic
Battered Paperback|Common
Battery|Uncommon
Bicycle Pump|Rare
Binoculars|Common
Blaze Grenade Trap|Rare
Blaze Grenade|Rare
Bloated Tuna Can|Common
Blue Light Stick|Common
Integrated Binoculars|Common`;

ARC.NO_RECYCLE = ["Agave Juice", "Air Freshener", "Alien Duck", "ARC Conductive Coupler", "ARC Insulated Coupler",
    "ARC Plated Coupler", "ARC Powercell", "Arcade Duck", "Assorted Seeds", "Banjo", "Battered Paperback",
    "Blaze Grenade Trap", "Bloated Tuna Can", "Integrated Binoculars",
    "Amplification Module Mk. I", "Amplification Module Mk. II", "Amplification Module Mk. III", "Amplification Module Mk. IV", "Amplification Module Mk. V"];

ARC.FARM = {
    "Metal Parts": { t: ["Mechanical", "Industrial", "Electrical", "Technological"], s: "Metal Crate, Car Hood, Server Rack, Seed Vault" },
    "Plastic Parts": { t: ["Commercial", "Residential", "Technological"], s: "Industrial Drawer, Server Rack" },
    "Rubber Parts": { t: ["Mechanical", "Industrial", "Electrical"], s: "" },
    "Chemicals": { t: ["Mechanical", "Residential", "Medical"], s: "" },
    "ARC Alloy": { t: ["ARC"], s: "ARC enemies" },
    "Wires": { t: ["Electrical", "Technological"], s: "Server Rack, Power Distribution Box, Oscilloscope, Heater, Generator Fuse Box" },
    "Fabric": { t: ["Commercial", "Medical", "Residential"], s: "" },
    "Oil": { t: ["Mechanical"], s: "" },
    "Canister": { t: ["Commercial"], s: "" },
    "Advanced Mechanical Components": { t: ["Mechanical"], s: "Industrial Cleaner, Control Panel; ARC: Matriarch, Queen" },
    "Assorted Seeds": { t: ["Nature"], s: "Fridge, Green Locker, Red Locker, Seed Drawer Box, Seed Vault, Wicker Basket" },
    "Duct Tape": { t: ["Residential", "Commercial"], s: "" },
    "Mechanical Components": { t: ["Mechanical"], s: "ARC: Bastion, Bombardier, Leaper, Shredder" },
    "Mod Components": { t: ["Security"], s: "" },
    "Processor": { t: ["Technological"], s: "Server Rack, Recording Panel, Oscilloscope, Computer" },
    "Advanced ARC Powercell": { t: ["ARC"], s: "ARC: Bastion, Bombardier, Comet, Courier, Leaper, Matriarch, Queen, Rocketeer, Rocketeer Husk, Sentinel, Surveyor, Vaporizer" },
    "ARC Powercell": { t: ["ARC"], s: "Found inside ARC enemies" },
    "Electrical Components": { t: ["Electrical"], s: "ARC: Rocketeer, Vaporizer" },
    "Steel Spring": { t: ["Industrial"], s: "Metal Crate" }
  };

ARC.FARM2 = /*FARM2*/{"Acoustic Guitar":{"v":["Shani"]},"Adrenaline Shot":{"v":["Lance"],"q":["Doctor's Orders","Espresso","Prescriptions of the Past","Sizing Things Up","Tracks Of The Beast","Trash Into Treasure"]},"Advanced Electrical Components":{"t":["Electrical"],"a":["Matriarch","Queen"],"q":["Bees!","Digging Up Dirt","Paving The Way"]},"Agave":{"t":["Nature"],"s":["Wicker Baskets"]},"Air Freshener":{"t":["Mechanical"],"q":["The Stench Of Corruption"]},"Alarm Clock":{"t":["Residential"]},"Alien Duck":{"s":["Chimneys (while Bird City is active)"]},"Angled Grip I":{"v":["Tian Wen"]},"Antiseptic":{"t":["Medical"],"q":["Doctor's Orders","A New Type Of Plant","After Rain Comes"]},"Anvil Splitter":{"q":["A Rising Tide"]},"Apricot":{"t":["Nature"],"s":["Apricot Trees (harvest)","Wicker Baskets"],"o":["Used in Fruit Mix and the Scrappy III and V upgrades","Recycles into 3× Assorted Seeds"]},"ARC Circuitry":{"t":["ARC"],"a":["Baron Husk","Bastion","Courier","Matriarch","Probe","Queen","Rocketeer","Surveyor"]},"ARC Conductive Coupler":{"t":["ARC"],"s":["Harvester Payload"]},"ARC Coolant":{"a":["Baron Husk","Comet","Fireball","Matriarch","Pop","Queen","Sentinel","Surveyor","Vaporizer"]},"ARC Flex Rubber":{"s":["Destroyed ARC machines"],"a":["Probe","Baron Husk","Bastion","Bombardier","Leaper","Matriarch","Queen","Sentinel","Tick","Vaporizer"]},"ARC Insulated Coupler":{"t":["ARC"],"s":["Harvester Payload"]},"ARC Motion Core":{"t":["ARC"],"a":["Bastion","Courier","Leaper","Matriarch","Probe","Queen","Rocketeer","Sentinel","Surveyor","Turbine"]},"ARC Performance Steel":{"t":["ARC"],"a":["Baron Husk","Bastion","Bombardier","Hornet","Leaper","Matriarch","Queen","Surveyor","Turbine"]},"ARC Plated Coupler":{"t":["ARC"],"s":["Harvester Payload (after deploying Emperor Beacon)"]},"ARC Synthetic Resin":{"t":["ARC"],"a":["Baron Husk","Deforester Husk","Hornet","Firefly","Matriarch","Probe","Queen","Sentinel","Shredder","Snitch","Spotter","Turbine","Turret","Wasp"]},"ARC Thermo Lining":{"t":["ARC"],"a":["Baron Husk","Comet","Fireball","Matriarch","Pop","Queen","Sentinel","Snitch","Tick","Turbine","Turret","Wasp"]},"Assessor Matrix":{"t":["ARC"],"a":["Assessor"]},"Bandage":{"v":["Lance"]},"Barricade Kit":{"v":["Apollo"],"q":["Reduced to Rubble","Safe Passage","Shoring Up Defenses"]},"Bastion Cell":{"t":["ARC"],"s":["Destroyed Bastions"],"a":["Bastion"],"q":["Settled in Full"]},"Battered Paperback":{"s":["Pendola Pass"]},"Battery":{"t":["Technological","Electrical"],"s":["Recording Panel","Oscilloscope","Computer","Terminal","Metal Crate","Control Console"],"v":["Celeste"],"q":["After Rain Comes","Clamoring for Attention","Trash Into Treasure"]},"Bicycle Pump":{"t":["Residential"],"q":["The League"]},"Binoculars":{"s":["3x from Decks: Raider Deck AR/RD 001: Ryder & Voyager, on Page 1, \"SCOUT PACK\""],"v":["Shani"],"q":["Combat Recon","Down to Earth","Hatch Repairs","Reduced to Rubble","Straight Record","Trash Into Treasure"]},"Blaze Grenade":{"q":["Test Case (quantity: 3×)","What Goes Around (quantity: 3×)"]},"Blaze Grenade Trap":{"s":["Scavenging - Skill: One Raider's Scraps","3× from Decks: Raider Deck AR/RD 001: Ryder & Voyager, on Page 2, \"IMPROVISATION PACK\""]},"Bloated Tuna Can":{"t":["Commercial","Residential"]},"Blue Light Stick":{"s":["Decks"],"v":["Apollo","Shani"],"q":["A Warm Place To Rest","After Rain Comes","Movie Night","The Clean Dream"]},"Bombardier Cell":{"a":["Bombardier"]},"Broken Flashlight":{"t":["Security"]},"Broken Handheld Radio":{"s":["Security"]},"Broken Taser":{"s":["Security"]},"Burned ARC Circuitry":{"s":["Found by scavenging old ARC husks"],"a":["ARC"]},"Cable Stripper":{"t":["Mechanical","Industrial"]},"Calculator":{"t":["Technological","Electrical"],"s":["Scavenging - Pendola Pass"]},"Camera Lens":{"t":["Security"]},"Candle Holder":{"t":["Residential"],"s":["Residential loot containers at Dam Battlegrounds (Pale Apartments, Ruby Residence) and Buried City (Plaza Rosa, Grandioso Apartments); commonly found"]},"Canister":{"t":["Commercial"],"v":["Celeste"],"q":["Untended Garden (quantity: 5×)"]},"Combat Mk. 1":{"v":["Lance"],"q":["Down to Earth"]},"Compensator I":{"v":["Tian Wen"],"q":["Market Correction"]},"Compensator II":{"v":["Shani"],"q":["Broken Monument"]},"Cooling Coil":{"t":["Industrial"],"s":["Car Hoods","Buses","Mobile Generators","Metal Crates","Car Tool Cabinets","Industrial Drawers","Red Locker"]},"Crude Explosives":{"t":["Industrial","Security"],"a":["Pop","Fireball"],"q":["Echoes Of Victory Ridge","Sparks Fly"]},"Crumpled Plastic Bottle":{"t":["Residential"]},"Damaged ARC Motion Core":{"a":["Baron Husk","Courier"]},"Damaged ARC Powercell":{"a":["Baron Husk"]},"Damaged Heat Sink":{"t":["Technological"],"s":["Scavenging: Server Rack"]},"Damaged Hornet Driver":{"s":["picking up used Hornet Drivers"],"a":["ARC"]},"Damaged Leaper Pulse Unit":{"s":["Found by retrieving used Leaper Pulse Units"],"a":["ARC"]},"Damaged Tick Pod":{"s":["scavenging old ARC husks"],"a":["ARC","ARC Courier"]},"Damaged Wasp Driver":{"s":["scavenging old ARC husks","retrieving exploded Wasp Drivers"],"a":["ARC"]},"Defibrillator":{"s":["Chance to appear in Free Loadout","9x from Decks"],"v":["Lance"],"q":["Armored Transports","Deciphering The Data","In My Image","Life Of A Pharmacist","Medical Merchandise","Off The Radar","On The Map","Straight Record","The Trifecta"]},"Degraded ARC Rubber":{"a":["ARC","Baron Husk"]},"Diving Goggles":{"t":["Residential"]},"Dog Collar":{"t":["Residential"]},"Door Blocker":{"v":["Apollo"],"q":["A Prime Specimen","Dormant Barons","Reduced to Rubble"]},"Dried-Out ARC Resin":{"a":["ARC","Baron Husk"]},"Duct Tape":{"t":["Residential","Commercial"],"v":["Celeste"],"q":["A Bad Feeling","A Symbol of Unification","Keeping The Memory","Source Of The Contamination"]},"Durable Cloth":{"t":["Medical","Commercial"],"q":["After Rain Comes"]},"Electrical Components":{"a":["Rocketeer","Vaporizer"],"q":["Greasing Her Palms"]},"Expired Respirator":{"t":["Medical"]},"Explosive Mine":{"q":["Building A Library (quantity: 1×)"]},"Extended Barrel III":{"q":["A Rising Tide"]},"Extended Light Mag I":{"v":["Tian Wen"],"q":["A Better Use","The Right Tool"]},"Extended Medium Mag I":{"v":["Tian Wen"]},"Extended Shotgun Mag I":{"v":["Tian Wen"]},"Fireball Burner":{"a":["Courier","Fireball"]},"Firecracker":{"v":["Shani"],"q":["Combat Recon","The League"]},"Firefly Burner":{"a":["Firefly"]},"Flame Spray":{"s":["Scavenging (One Raider's Scraps skill)","Raider Deck AR/RD 001: Ryder & Voyager, Improvisation Pack (3x)"],"q":["Keeping an Eye Out"]},"Free Loadout Augment":{"s":["Free Loadout deployment (received at no cost)"]},"Fried Motherboard":{"t":["Technological"],"s":["Server Rack","Recording Panel"]},"Frying Pan":{"t":["Residential"]},"Garlic Press":{"t":["Residential","Commercial"]},"Gas Grenade":{"v":["Apollo"]},"Gas Mine":{"v":["Apollo"],"q":["A Toxic Trail","Cold Storage"]},"Glitched ARC Circuitry":{"s":["Scavenging (ARC)"],"a":["Erratic Wasp","Leaper","Pop","Snitch"]},"Glitched ARC Light Ring":{"s":["Scavenging (ARC)"],"a":["Erratic Wasp"]},"Glitched ARC Phased Array":{"s":["Scavenging (ARC)"],"a":["Erratic Wasp"]},"Glitched ARC Power Converter":{"s":["Scavenging (ARC)"],"a":["Erratic Wasp","Fireball","Hornet","Pop"]},"Glitched ARC Transmitter":{"s":["Scavenging (ARC)"],"a":["Erratic Wasp"]},"Green Light Stick":{"s":["Raider Deck AR/RD 001: Ryder & Voyager, Mayhem Pack (3x)"],"v":["Apollo","Shani"],"q":["In My Image"]},"Hand Drill":{"t":["Mechanical","Industrial"]},"Headphones":{"t":["Residential","Commercial"]},"Heavy Fuze Grenade":{"q":["A First Foothold","Building A Library","The Clean Dream"]},"Heavy Shield":{"v":["Lance"],"q":["Prescriptions of the Past"]},"Herbal Bandage":{"v":["Lance"]},"Hornet Driver":{"s":["Scavenging (destroyed Hornets)"],"a":["Hornet","Courier"]},"Humidifier":{"t":["Residential"],"s":["Buried City: Red Tower lockers (guaranteed to appear)"]},"Ice Cream Scooper":{"t":["Commercial"]},"Impure ARC Coolant":{"s":["Scavenging (old ARC husks)"],"a":["ARC"]},"Industrial Battery":{"t":["Industrial"],"s":["Dam Battlegrounds > Hydroponic Dome Complex","Dam Battlegrounds > Power Generation Complex > shelves/carts","Car Hood"]},"Industrial Charger":{"t":["Industrial"]},"Industrial Magnet":{"t":["Industrial"]},"Household Cleaner":{"t":["Residential"]},"Jolt Mine":{"s":["Raider Deck AR/RD 001: Ryder & Voyager, Protection Pack (5x)"],"v":["Apollo"],"q":["Building A Library","Mixed Signals","Our Presence up There"]},"Leaper Pulse Unit":{"s":["Scavenging (destroyed Leapers)"],"a":["Leaper"]},"Li'l Smoke Grenade":{"s":["Raider Deck AR/RD 001: Ryder & Voyager, Ninja Pack (5x)"],"q":["Dormant Barons","Safe Passage"]},"Light Impact Grenade":{"v":["Apollo"],"q":["Safe Passage"]},"Light Shield":{"v":["Lance"],"q":["Clearer Skies"]},"Looting Mk. 1":{"v":["Lance"]},"Magnet":{"t":["Exodus"],"v":["Celeste (10 per day)"],"q":["Keeping The Memory (5x)","Tribute To Toledo (5x)"]},"Mechanical Components":{"a":["Bastion","Bombardier","Leaper","Shredder"],"q":["A Wrench in the Works (5x)","Industrial Espionage (3x)","Water Troubles (3x)"]},"Medium Shield":{"s":["Scavenging: Raider Cache","Raider Decks"],"v":["Lance (6,000 coins, 3 per day)"],"q":["Boarding The Frigate","Down to Earth","Exploring Pendola Pass","Out of the Shadows","With A Trace"]},"Metal Brackets":{"t":["Mechanical","Electrical"]},"Mini Pump":{"t":["Technological","Electrical"]},"Motor":{"t":["Mechanical"],"s":["Scavenging: Dam Battlegrounds > Water Treatment","Scavenging: Car Hoods"]},"Muzzle Brake I":{"v":["Tian Wen (1,920 coins, 5 per day)"]},"Muzzle Brake II":{"q":["A Better Use (1x)","Collision Course (1x)","What We Left Behind (1x)"]},"Number Plate":{"t":["Mechanical"]},"Oil":{"t":["Mechanical"],"v":["Celeste"],"q":["Power Out (5x)"]},"Polluted Air Filter":{"t":["Industrial"]},"Pop Trigger":{"s":["Scavenging destroyed Pops"],"a":["Courier (listed as ARC source; drop not explicitly stated)","Pop (listed as ARC source; drop not explicitly stated)"]},"Portable TV":{"t":["Residential"],"s":["Buried City dressers (wiki caption: high chance to spawn)"],"q":["Movie Night (quest listed; reward/location not stated)"]},"Power Bank":{"t":["Electrical","Residential","Commercial"]},"Power Cable":{"t":["Electrical","Residential","Commercial"]},"Processor":{"t":["Technological"],"s":["Server Rack","Recording Panel","Oscilloscope","Computer"],"v":["Celeste"],"q":["Echoes Of Victory Ridge (2x)","Sparks Fly (2x)"]},"Projector":{"t":["Residential"]},"Pulse Mine":{"v":["Apollo (1,410 coins, 6 per day)"],"q":["A Toxic Trail (3x)","Keeping an Eye Out (5x)"]},"Recorder":{"t":["Residential"],"v":["Apollo (3,000 coins, 6 per day)","Shani (50 Cred, 3 per day)"]},"Red Light Stick":{"v":["Apollo (450 coins)","Shani (10 Cred)"],"q":["The League (5x)","What Goes Around (5x)"]},"Remote Raider Flare":{"v":["Apollo"],"q":["A Prime Specimen (3x)","Off The Radar (2x)","The Trifecta (3x)"]},"Rocket Thruster":{"t":["Exodus"],"s":["Scavenging: Stella Montis","Scavenging: Spaceport (Rocket Assembly)"]},"Rocketeer Driver":{"s":["Scavenging (ARC): Rocketeer Husk","Scavenging (ARC): Rocketeer"],"a":["Rocketeer"],"q":["Out of the Shadows (1x; reward/requirement not stated)"]},"Rope":{"t":["Residential","Commercial"],"s":["Recycling"],"v":["Celeste"]},"Rubber Pad":{"t":["Electrical"]},"Ruined Accordion":{"t":["Residential"]},"Ruined Augment":{"s":["Knocked-out Raiders (only obtainable via looting)"]},"Ruined Baton":{"t":["Security"]},"Ruined Handcuffs":{"t":["Security"]},"Ruined Parachute":{"t":["Exodus"]},"Ruined Riot Shield":{"t":["Security"]},"Ruined Tactical Vest":{"t":["Security"]},"Rusted Gear":{"t":["Industrial"],"s":["Buses","Car Hoods","Car Tool Cabinets","Control Panels","Metal Crates","Mobile Generators","Industrial Drawers"]},"Rusted Tools":{"t":["Mechanical","Industrial"],"s":["Bus Side Trunk","Bus Rear Trunk","Metal Crate"]},"Rusty ARC Steel":{"s":["Scavenging (ARC husks)"]},"Seeker Grenade":{"v":["Apollo"],"q":["Boarding The Frigate (1x)","Paving The Way (3x)","Shoring Up Defenses (6x)","Stable Housing (5x)","Test Case (3x)"]},"Sensors":{"t":["Security","Technological"],"s":["Android","Server Rack"],"a":["Snitch","Surveyor"],"v":["Celeste (10 Assorted Seeds, 5 per day)"],"q":["Bees! (3x)"]},"Sentinel Firing Core":{"s":["Scavenging (ARC): Courier","Scavenging (ARC): Sentinel (scavenged from destroyed Sentinels)"]},"Shaker":{"t":["Residential"],"v":["Shani (40 Cred, 3 per day)"],"q":["On Deaf Ears"]},"Shield Recharger":{"v":["Lance (1,560 coins)"]},"Ripped Safety Vest":{"t":["Industrial"]},"Shotgun Choke I":{"s":["Scavenging (no specific containers listed)"],"v":["Tian Wen (1,920 coins, limit 5 per day)"]},"Shotgun Choke II":{"s":["Scavenging (no specific containers listed)"],"v":["Tian Wen (6,000 coins, limit 3 per day)"],"q":["Marked For Death (1x)","Unexpected Initiative (1x)"]},"Shotgun Choke III":{"s":["Scavenging (no specific containers listed)"]},"Shotgun Silencer":{"s":["Scavenging (no specific containers listed)"]},"Shrapnel Grenade":{"s":["Scavenging (no specific containers listed)"],"q":["A First Foothold (3x)","Safe Passage (3x)"]},"Shredder Gyro":{"s":["Scavenging from destroyed Shredders (listed under ARC)"],"a":["Shredder"]},"Silencer I":{"s":["Scavenging (no specific containers listed)"],"v":["Shani (100 Cred, 1 per day)","Tian Wen (6,000 coins, 1 per day)"]},"Silencer II":{"s":["Scavenging (no specific containers listed)"],"q":["Market Correction (1x)","Outstanding Balance (1x)","Snap And Salvage (1x)"]},"Silencer III":{"s":["Scavenging (no specific containers listed)"]},"Simple Gun Parts":{"t":["Raider","Security"],"a":["Wasp","Hornet","Turret","Sentinel","Shredder"],"v":["Celeste (7 Assorted Seeds, 5 per day)"],"q":["Industrial Espionage (3x)","Keeping The Memory (5x)","Water Troubles (3x)"],"o":["Recycling: Anvil, Arpeggio, Burletta, Il Toro, Unusable Weapon"]},"Smoke Grenade":{"s":["Scavenging (no specific containers listed)"],"v":["Apollo (3,000 coins, limit 6 per day)"],"q":["A Lay Of The Land (2x)","Armored Transports (3x)","Movie Night (3x)"],"o":["Decks: 8 total, 3 from Raider Deck AR/RD 001 (Ryder & Voyager, Page 1, MAYHEM PACK), 5 from Raider Deck AR/RD 003 (Surgeon, Page 3)"]},"Snap Blast Grenade":{"s":["Scavenging (no specific containers listed)"],"v":["Apollo (2,400 coins, 3 per day)"],"q":["A First Foothold (3x)","Safe Passage (3x)","Sparks Fly (2x)"]},"Snitch Scanner":{"s":["Scavenged from destroyed Snitches"],"a":["Snitch"]},"Speaker Component":{"t":["Commercial"],"s":["Scavenging (no specific containers listed)"],"v":["Celeste (10 Assorted Seeds each, 5 per day)"],"q":["Digging Up Dirt (2x)","Greasing Her Palms (3x)"],"o":["Recycling from Frequency Modulation Box, Headphones, Lure Grenade, Noisemaker, Photoelectric Cloak, Radio, Radio Relay"]},"Spotter Relay":{"s":["Scavenging from destroyed ARC enemies (Courier, Spotter)"],"a":["Courier","Spotter"]},"Stable Stock I":{"s":["Scavenging (no specific containers listed)"],"v":["Tian Wen"],"q":["A Better Use (1x)"]},"Steel Cable":{"s":["Scavenging (no specific containers listed)"]},"Steel Spring":{"t":["Industrial"],"s":["Metal Crate"],"v":["Celeste (6 Assorted Seeds, limit 10 per day)"],"q":["A Bad Feeling (5x)","A Balanced Harvest (10x)","Source Of The Contamination (5x)","Water Troubles (3x)","With a View (5x)"],"o":["Recycling: Advanced Mechanical Components, Cooling Coil, Spring Cushion, Turbo Pump (salvage only), several Extended Mag and Mod Components"]},"Sterilized Bandage":{"s":["Scavenging (no specific containers listed)"],"v":["Lance (6,000 coins, 3 per day)","Shani (40 Cred, 3 per day)"],"q":["Celeste's Childhood Drawings (3x)","Clearer Skies (3x)","Doctor's Orders (3x)","Life Of A Pharmacist (3x)","On The Map (3x)"],"o":["Raider Deck AR/RD 003 (Surgeon), Page 1 (5x)"]},"Surge Shield Recharger":{"s":["Scavenging (no specific containers listed)"],"v":["Lance (3,600 coins, up to 5 per day)","Shani (40 Cred, up to 5 per day)"],"q":["A Reveal in Ruins (1x)","Doctor's Orders (1x)","Life Of A Pharmacist (1x)","On The Map (3x)","Out of the Shadows (3x)","Waking the Grid (5x)"],"o":["Crafting; Raider Deck AR/RD 001 (Ryder & Voyager), page 4, MEDIC PACK (3x); Raider Deck AR/RD 003 (Surgeon), page 2 (5x)"]},"Surveyor Vault":{"s":["Scavenged from destroyed Surveyors"],"a":["Courier","Surveyor"],"q":["Mixed Signals (1x) - page does not say whether it rewards the item"]},"Synthesized Fuel":{"t":["Exodus"],"s":["Scavenging (no specific containers listed)"],"v":["Celeste (14 Assorted Seeds, limit 5 per day)"],"q":["Switching The Supply (3x)","Tribute To Toledo (3x)"],"o":["Recycling: Rocket Thruster yields 2 (1 when salvaged)"]},"Tactical Mk. 1":{"s":["Scavenging (no specific containers listed)"],"v":["Lance (also a free exchange service for a Free Loadout Augment)"],"q":["Trash Into Treasure (1x)"]},"Tagging Grenade":{"s":["Scavenging (no specific containers listed)"],"q":["Clamoring for Attention (3x)","Eyes in the Sky (3x)","The League (5x)"],"o":["Raider Deck AR/RD 001 (Ryder & Voyager), page 1, SCOUT PACK (5x)"]},"Tattered ARC Lining":{"s":["Scavenging old ARC husks"]},"Tattered Clothes":{"t":["Residential"],"s":["Scavenging (no specific containers listed)"]},"Thermostat":{"s":["Scavenging (no specific containers listed)"]},"Tick Pod":{"s":["Scavenged from destroyed Ticks"],"a":["Tick"]},"Toaster":{"t":["Residential"],"s":["Scavenging (no specific containers listed)"]},"Torn Blanket":{"t":["Residential","Medical"],"s":["Scavenging (no specific containers listed)"]},"Trigger 'Nade":{"s":["Scavenging (no specific containers listed)"],"q":["Sparks Fly (6x)"]},"Turbo Pump":{"t":["Exodus"],"s":["Scavenging (no specific containers listed)"]},"Unusable Weapon":{"t":["Security"],"s":["Scavenging (no specific containers listed)"]},"Vertical Grip I":{"s":["Scavenging (no specific containers listed)"],"v":["Tian Wen (1,920 coins, limit 5 per day)"]},"Vita Shot":{"s":["Scavenging (no specific containers listed)"],"q":["A New Type Of Plant (1x)","Medical Merchandise (3x)","Waking the Grid (3x)"],"o":["Raider Deck (listed on page)"]},"Vita Spray":{"s":["Scavenging (no specific containers listed)"],"q":["Eyes in the Sky (1x)"],"o":["Project: Trophy Display (Project Part 1, Stage 2, 3x)","Raider Deck AR/RD 001 (Ryder & Voyager), page 4, MEDIC PACK"]},"Voltage Converter":{"t":["Electrical"],"s":["Scavenging (no specific containers listed)"],"v":["Celeste (10 Assorted Seeds, limit 5 per day)"],"o":["Recycling from Heavy Shield, Industrial Charger, Ion Sputter, Showstopper, Signal Amplifier"]},"Wasp Driver":{"s":["Scavenging from Courier, Wasp, Wasp Husk"],"a":["Courier","Wasp"]},"Water Filter":{"t":["Industrial"],"s":["Metal Crate (industrial loot): Dam Battlegrounds Research and Administration west tunnels; The Spaceport Shipping Warehouse; Dam Battlegrounds Power Generation Complex"],"o":["Not obtainable through salvaging or recycling"]},"Water Pump":{"t":["Mechanical","Industrial"],"s":["Metal Crate (industrial loot containers); carts and shelves; Dam Battlegrounds Research and Administration (west tunnels) and Power Generation Complex; Spaceport Shipping Warehouse"]},"Syringe":{"t":["Medical"],"s":["Scavenging (no specific containers listed)"],"v":["Celeste (10 Assorted Seeds, limit 5 per day)"],"o":["Recycling from Rusted Shut Medical Kit, Vita Shot","Required (not rewarded) by Doctor's Orders"]},"Wires":{"t":["Electrical","Technological"],"s":["Server Rack","Power Distribution Box","Oscilloscope","Heater","Generator Fuse Box"],"v":["Celeste (4 Assorted Seeds, 10 per day)"],"q":["Power Out (5x) - listed as a source","With a View (5x) - listed as a source"],"o":["Recycling from 28 item types, incl. Acoustic Guitar, Cooling Fan, Portable TV, Power Cable, Toaster, Voltage Converter"]},"Yellow Light Stick":{"s":["Scavenging (no specific containers listed)"],"v":["Apollo (450 coins)","Shani (10 Cred)"],"q":["Bees! (5x)","Eyes in the Sky (5x)","Movie Night (3x)","The League (5x)"],"o":["Raider Deck AR/RD 001 (Ryder & Voyager), SCOUT PACK (5x)"]},"Zipline":{"s":["Scavenging (no specific containers listed)"],"v":["Apollo (3,000 coins, limit 3 per day)"],"q":["A Lay Of The Land (3x)","A Toxic Trail (3x)","After Rain Comes (1x)","Eyes in the Sky (1x)","Reduced to Rubble (1x)"],"o":["Raider Deck AR/RD 001 (Ryder & Voyager), SCOUT PACK (3x)","Raider Deck AR/RD 002 (Goalie), page 4 (3x)"]},"Lemon":{"t":["Nature"],"s":["Lemon Trees (harvest: 1–4 Lemons on the ground, 1–3 when you interact)","Wicker Baskets"],"o":["Used in Fruit Mix and the Scrappy III upgrade","Recycles into 3× Assorted Seeds"]},"Prickly Pear":{"t":["Nature"],"s":["Prickly Pear Cactus (1–3 on the ground beneath it)","Wicker Baskets"],"o":["Used in Fruit Mix and the Scrappy IV upgrade","Recycles into 3× Assorted Seeds"]},"Olives":{"t":["Nature"],"s":["Olive Trees (large numbers at the Olive Grove on Blue Gate)","Wicker Baskets"],"o":["Used in the Scrappy IV upgrade","Recycles into 2× Assorted Seeds"]},"Mushroom":{"t":["Nature"],"s":["Dam Battlegrounds: Water Treatment Control, Hydroponic Dome Complex, Central Swamp Lift, Wreckage","Spaceport: East Container Yard, underground tunnels in the centre","Riven Tides: Dried Riverbed","Wicker Baskets"],"o":["Used in the Scrappy V upgrade","Cannot be recycled or salvaged"]},"Great Mullein":{"t":["Nature"],"s":["Great Mullein Plants (harvest)","Backpacks","Wicker Baskets"],"v":["Celeste"],"q":["Doctor's Orders"],"o":["Crafts Antiseptic and Herbal Bandage","Recycles into 2× Assorted Seeds"]},"Fruit Mix":{"o":["Craft in your inventory (needs the In-Round Crafting skill): 1× Lemon, 1× Apricot, 1× Prickly Pear"]},"Amplification Module Mk. I":{"a":["Fallen Emperor","ARC Frigate"],"o":["Sell price 7,000 Coins. Weight 0.5. No crafting recipe.","Advanced ARC technology that unlocks common weapon Amplification (used to upgrade the Gunsmith). Added in Frozen Trail 2.0.","The wiki page for Mk. I would not load when this was checked; its details are assumed to follow the other four modules, so double-check them."]},"Amplification Module Mk. II":{"a":["Fallen Emperor","ARC Frigate"],"o":["Sell price 7,000 Coins. Weight 0.5. No crafting recipe.","Advanced ARC technology that unlocks uncommon weapon Amplification (used to upgrade the Gunsmith). Added in Frozen Trail 2.0."]},"Amplification Module Mk. III":{"a":["Fallen Emperor","ARC Frigate"],"o":["Sell price 7,000 Coins. Weight 0.5. No crafting recipe.","Advanced ARC technology that unlocks rare weapon Amplification (used to upgrade the Gunsmith). Added in Frozen Trail 2.0."]},"Amplification Module Mk. IV":{"a":["Fallen Emperor","ARC Frigate"],"o":["Sell price 7,000 Coins. Weight 0.5. No crafting recipe.","Advanced ARC technology that unlocks epic weapon Amplification (used to upgrade the Gunsmith). Added in Frozen Trail 2.0."]},"Amplification Module Mk. V":{"a":["Fallen Emperor","ARC Frigate"],"o":["Sell price 7,000 Coins. Weight 0.5. No crafting recipe.","Advanced ARC technology that unlocks legendary weapon Amplification (used to upgrade the Gunsmith). Added in Frozen Trail 2.0."]}}/*FARM2-END*/;

/* Sell price (coins), weight (kg), stack size and, where the item can be crafted, [where, [[ingredient, qty], ...]].
   From RaidTheory/arcraiders-data (MIT, https://github.com/RaidTheory/arcraiders-data, also behind arctracker.io),
   spot-checked against the wiki Loot table. Items missing there use the wiki price with weight null. Checked October 11, 2026. */
ARC.ITEMINFO = {"Acoustic Guitar":[7000,1,1],"Adrenaline Shot":[300,0.2,5,["In raid / Medical Lab 1",[["Chemicals",3],["Plastic Parts",3]]]],"Advanced ARC Powercell":[640,0.5,5],"Advanced Camera":[1000,null,1],"Advanced Electrical Components":[1750,1,5,["Refiner 2",[["Electrical Components",2],["Wires",3]]]],"Advanced Mechanical Components":[1750,1,5,["Refiner 2",[["Mechanical Components",2],["Steel Spring",2]]]],"Agave":[1000,0.2,10],"Agave Juice":[1800,0.2,5,["In raid",[["Agave",1],["Empty Wine Bottle",1]]]],"Air Freshener":[2000,0.3,5],"Alarm Clock":[1000,2,3],"Alien Duck":[1000,0.3,15],"Amplification Module Mk. I":[7000,0.5,1],"Amplification Module Mk. II":[7000,0.5,1],"Amplification Module Mk. III":[7000,0.5,1],"Amplification Module Mk. IV":[7000,0.5,1],"Amplification Module Mk. V":[7000,0.5,1],"Angled Grip I":[640,0.25,1,["Gunsmith 1",[["Duct Tape",1],["Plastic Parts",6]]]],"Angled Grip II":[2000,0.5,1,["Gunsmith 2",[["Duct Tape",3],["Mechanical Components",2]]]],"Angled Grip III":[5000,0.75,1,["Gunsmith 3",[["Duct Tape",5],["Mod Components",2]]]],"Antiseptic":[1000,1,5,["Refiner 2",[["Chemicals",10],["Great Mullein",2]]]],"Anvil II":[7000,5,1],"Anvil III":[10000,5,1],"Anvil Splitter":[7000,0.5,1],"Aphelion":[27500,14,1,["Gunsmith 3",[["Complex Gun Parts",3],["Magnetic Accelerator",3],["Matriarch Reactor",1]]]],"Apricot":[640,0.2,10],"ARC Alloy":[200,0.25,15],"ARC Circuitry":[1000,0.3,5,["Refiner 2",[["ARC Alloy",8]]]],"ARC Conductive Coupler":[100,null,1],"ARC Coolant":[1000,1,3],"ARC Flex Rubber":[1000,1,3],"ARC Insulated Coupler":[100,null,1],"ARC Motion Core":[1000,0.3,5,["Refiner 2",[["ARC Alloy",8]]]],"ARC Performance Steel":[1000,1,3],"ARC Powercell":[270,0.5,5],"ARC Synthetic Resin":[1000,1,3],"ARC Thermo Lining":[1000,1,3],"Arcade Duck":[7000,null,15],"Arpeggio I":[5500,7,1,["Gunsmith 2",[["Mechanical Components",6],["Simple Gun Parts",6]]]],"Arpeggio II":[8000,7,1],"Arpeggio III":[11500,7,1],"Arpeggio IV":[15000,7,1],"Assessor Matrix":[5000,0.5,1],"Assorted Seeds":[100,0.05,100],"Bandage":[250,0.1,5,["In raid / Medical Lab 1 / Workbench",[["Fabric",5]]]],"Barricade Kit":[640,0.4,3,["Utility Station 2",[["Mechanical Components",1]]]],"Basic Camera":[640,null,1],"Bastion Cell":[3000,1,3],"Battered Paperback":[270,null,5],"Battery":[250,0.25,15],"Bettina I":[8000,11,1,["Gunsmith 3",[["Advanced Mechanical Components",3],["Canister",3],["Heavy Gun Parts",3]]]],"Bettina II":[11000,11,1],"Bettina III":[14000,11,1],"Bettina IV":[18000,11,1],"Bicycle Pump":[2000,3,3],"Binoculars":[640,0.5,1,["Utility Station 1",[["Plastic Parts",8],["Rubber Parts",4]]]],"Blaze Grenade":[1600,0.2,5,["Explosives Station 3",[["Explosive Compound",1],["Oil",2]]]],"Blaze Grenade Trap":[1000,0.3,3,["In raid / Workbench",[["Blaze Grenade",1],["Wires",1]]]],"Bloated Tuna Can":[1000,0.2,15],"Blue Light Stick":[150,0.75,5,["Utility Station 1",[["Chemicals",3]]]],"Bobcat I":[13000,7,1,["Gunsmith 3",[["Exodus Modules",2],["Light Gun Parts",3],["Magnetic Accelerator",1]]]],"Bobcat II":[17000,7,1],"Bobcat III":[22000,7,1],"Bobcat IV":[27000,7,1],"Bombardier Cell":[3000,1,3],"Broken Flashlight":[1000,2,3],"Broken Guidance System":[2000,3,3],"Broken Handheld Radio":[2000,3,3],"Broken Taser":[1000,2,3],"Burletta I":[2900,4,1,["Gunsmith 1",[["Mechanical Components",3],["Simple Gun Parts",3]]]],"Burletta II":[5000,4,1],"Burletta III":[7000,4,1],"Burletta IV":[10000,4,1],"Camera Lens":[640,0.8,5],"Candle Holder":[640,2,3],"Candleberries":[460,0.5,10],"Canister":[300,0.25,15],"Canto I":[7000,6.5,1,["Gunsmith 3",[["Advanced Mechanical Components",2],["Magnet",5],["Medium Gun Parts",3]]]],"Chemicals":[50,0.15,50],"Combat Mk. 1":[640,2,1,["Gear Bench 1",[["Plastic Parts",6],["Rubber Parts",6]]]],"Combat Mk. 2":[2000,3,1,["Gear Bench 2",[["Electrical Components",2],["Magnet",3]]]],"Combat Mk. 3 (Aggressive)":[5000,5,1,["Gear Bench 3",[["Advanced Electrical Components",2],["Processor",3]]]],"Combat Mk. 3 (Flanking)":[5000,5,1,["Gear Bench 3",[["Advanced Electrical Components",2],["Processor",3]]]],"Comet Igniter":[1000,1,3],"Compensator I":[640,0.25,1,["Gunsmith 1",[["Metal Parts",6],["Wires",1]]]],"Compensator II":[2000,0.5,1,["Gunsmith 2",[["Mechanical Components",2],["Wires",4]]]],"Compensator III":[5000,0.75,1,["Gunsmith 3",[["Mod Components",2],["Wires",8]]]],"Complex Gun Parts":[3000,1,3,["Refiner 3",[["Heavy Gun Parts",2],["Light Gun Parts",2],["Medium Gun Parts",2]]]],"Coolant":[1000,2,3],"Cooling Coil":[1000,2,3],"Cooling Fan":[2000,3,3],"Cracked Bioscanner":[1000,2,3],"Crash Mat":[1200,0.6,5,["Utility Station 2",[["Durable Cloth",1],["Electrical Components",1]]]],"Crude Explosives":[270,0.5,10,["Refiner 1",[["Chemicals",6]]]],"Crumpled Plastic Bottle":[270,0.8,3],"Damaged ARC Motion Core":[640,0.25,5],"Damaged ARC Powercell":[293,0.25,5],"Damaged Fireball Burner":[270,1,3],"Damaged Heat Sink":[1000,2,3],"Damaged Hornet Driver":[640,0.3,3],"Damaged Rocketeer Driver":[1000,0.25,3],"Damaged Tick Pod":[270,0.083,3],"Damaged Wasp Driver":[270,0.25,3],"Deadline":[6000,1,1,["Explosives Station 3",[["ARC Circuitry",2],["Comet Igniter",1],["Explosive Compound",3]]]],"Defibrillator":[1000,0.75,3,["Medical Lab 2",[["Moss",1],["Plastic Parts",9]]]],"Deflated Football":[1000,0.8,3],"Degraded ARC Rubber":[640,1,3],"Diving Goggles":[640,2,3],"Dog Collar":[640,0.8,3],"Dolabra":[27500,8,1,["Gunsmith 3",[["Magnetic Accelerator",3],["Shredder Gyro",3],["Vaporizer Regulator",2]]]],"Door Blocker":[270,0.2,3,["Utility Station 1",[["Metal Parts",3],["Rubber Parts",3]]]],"Dried-Out ARC Resin":[640,1,3],"Duct Tape":[300,0.25,15],"Durable Cloth":[640,0.25,10,["Refiner 1",[["Fabric",14]]]],"Electrical Components":[640,0.5,10,["Refiner 1",[["Plastic Parts",8],["Rubber Parts",4]]]],"Empty Wine Bottle":[1000,0.2,5],"Equalizer":[27500,14,1,["Gunsmith 3",[["Complex Gun Parts",3],["Magnetic Accelerator",3],["Queen Reactor",1]]]],"Exodus Modules":[2750,1,3],"Expired Respirator":[640,2,3],"Explosive Compound":[1000,0.3,5,["Refiner 2",[["Crude Explosives",2],["Oil",2]]]],"Explosive Mine":[1500,0.5,3,["Explosives Station 3",[["Explosive Compound",1],["Sensors",1]]]],"Extended Barrel I":[1000,null,null,["Gunsmith 1",[["Metal Parts",6],["Wires",3]]]],"Extended Barrel II":[3000,null,null,["Gunsmith 2",[["Mechanical Components",3],["Wires",6]]]],"Extended Barrel III":[5000,0.5,1,["Gunsmith 3",[["Mod Components",2],["Wires",8]]]],"Extended Light Mag I":[640,0.25,1,["Gunsmith 1",[["Plastic Parts",6],["Steel Spring",1]]]],"Extended Light Mag II":[2000,0.5,1,["Gunsmith 2",[["Mechanical Components",2],["Steel Spring",3]]]],"Extended Light Mag III":[5000,0.75,1,["Gunsmith 3",[["Mod Components",2],["Steel Spring",5]]]],"Extended Medium Mag I":[640,0.25,1,["Gunsmith 1",[["Plastic Parts",6],["Steel Spring",1]]]],"Extended Medium Mag II":[2000,0.5,1,["Gunsmith 2",[["Mechanical Components",2],["Steel Spring",3]]]],"Extended Medium Mag III":[5000,0.75,1,["Gunsmith 3",[["Mod Components",2],["Steel Spring",5]]]],"Extended Shotgun Mag I":[640,0.25,1,["Gunsmith 1",[["Plastic Parts",6],["Steel Spring",1]]]],"Extended Shotgun Mag II":[2000,0.5,1,["Gunsmith 2",[["Mechanical Components",2],["Steel Spring",3]]]],"Extended Shotgun Mag III":[5000,0.75,1,["Gunsmith 3",[["Mod Components",2],["Steel Spring",5]]]],"Fabric":[50,0.1,50],"Ferro I":[475,8,1,["Gunsmith 1 / Workbench",[["Metal Parts",5],["Rubber Parts",2]]]],"Ferro II":[1000,8,1],"Ferro III":[2000,8,1],"Ferro IV":[2900,8,1],"Fertilizer":[1000,0.4,5],"Fireball Burner":[640,0.5,3],"Firecracker":[270,0.05,5,["Utility Station 1",[["Chemicals",2],["Plastic Parts",4]]]],"Firefly Burner":[1000,0.75,3],"Fireworks Box":[2000,0.5,1,["Explosives Station 2",[["Explosive Compound",1],["Pop Trigger",3]]]],"Flame Spray":[2000,1,1,["In raid",[["Air Freshener",1],["Fireball Burner",1]]]],"Flow Controller":[3000,1.5,3],"Fossilized Lightning":[4000,0.25,1],"Free Loadout Augment":[660,1,1],"Frequency Modulation Box":[3000,1.5,3],"Fried Motherboard":[2000,3,3],"Frying Pan":[640,2,3],"Garlic Press":[1000,0.8,3],"Gas Grenade":[270,0.2,3,["Explosives Station 1",[["Chemicals",4],["Rubber Parts",2]]]],"Gas Mine":[270,0.25,3,["Explosives Station 1",[["Chemicals",4],["Rubber Parts",2]]]],"Geiger Counter":[3500,1.5,3],"Glitched ARC Circuitry":[5000,0.5,1],"Glitched ARC Light Ring":[3000,0.5,1],"Glitched ARC Phased Array":[2000,0.5,1],"Glitched ARC Power Converter":[640,0.5,1],"Glitched ARC Transmitter":[1000,0.5,1],"Great Mullein":[300,0.25,15],"Green Light Stick":[150,0.15,5,["Utility Station 1",[["Chemicals",3]]]],"Hairpin I":[450,3,1,["Gunsmith 1 / Workbench",[["Metal Parts",2],["Plastic Parts",5]]]],"Hairpin II":[1000,3,1],"Hairpin III":[2000,3,1],"Hairpin IV":[2900,3,1],"Headphones":[1000,2,3],"Heavy Fuze Grenade":[1600,0.2,3,["Explosives Station 3",[["Canister",2],["Explosive Compound",1]]]],"Heavy Gun Parts":[700,0.5,5,["Refiner 2",[["Simple Gun Parts",4]]]],"Heavy Shield":[5500,9,1,["Gear Bench 2",[["Power Rod",1],["Voltage Converter",2]]]],"Herbal Bandage":[900,0.15,5,["In raid / Medical Lab 1",[["Durable Cloth",1],["Great Mullein",1]]]],"Horizontal Grip":[7000,0.5,1],"Hornet Driver":[1000,0.75,3],"Household Cleaner":[640,0.8,3],"Hullcracker I":[10000,7,1,["Gunsmith 3",[["Exodus Modules",1],["Heavy Gun Parts",3],["Magnetic Accelerator",1]]]],"Hullcracker II":[13000,7,1],"Hullcracker III":[17000,7,1],"Hullcracker IV":[22000,7,1],"Humidifier":[1000,2,3],"Ice Cream Scooper":[640,0.8,3],"Il Toro I":[5000,8,1,["Gunsmith 1",[["Mechanical Components",5],["Simple Gun Parts",6]]]],"Il Toro II":[7000,8,1],"Il Toro III":[10000,8,1],"Il Toro IV":[13000,8,1],"Impure ARC Coolant":[640,0.33,3],"Industrial Battery":[1000,2,3],"Industrial Charger":[1000,2,3],"Industrial Magnet":[1000,2,3],"Ion Sputter":[6000,1.5,3],"Jolt Mine":[850,0.2,3,["Explosives Station 2",[["Battery",1],["Electrical Components",1]]]],"Jupiter":[27500,9,1,["Gunsmith 3",[["Complex Gun Parts",3],["Magnetic Accelerator",3],["Queen Reactor",1]]]],"Kettle I":[840,7,1,["Gunsmith 1 / Workbench",[["Metal Parts",6],["Rubber Parts",8]]]],"Kettle II":[2000,7,1],"Kettle III":[3000,7,1],"Kettle IV":[5000,7,1],"Kinetic Converter":[7000,0.75,1],"Laboratory Reagents":[2000,3,3],"Leaper Pulse Unit":[3000,1,3],"Lemon":[640,0.2,10],"Li'l Smoke Grenade":[300,0.15,5,["In raid / Utility Station 1",[["Chemicals",5],["Plastic Parts",1]]]],"Light Gun Parts":[700,0.3,5,["Refiner 2",[["Simple Gun Parts",4]]]],"Light Impact Grenade":[270,0.1,5,["Explosives Station 1 / In raid / Workbench",[["Chemicals",3],["Plastic Parts",2]]]],"Light Shield":[640,5,1,["Gear Bench 1 / Workbench",[["ARC Alloy",2],["Plastic Parts",4]]]],"Lightweight Stock":[5000,0.25,1,["Gunsmith 3",[["Duct Tape",5],["Mod Components",2]]]],"Looting Mk. 1":[640,1,1,["Gear Bench 1 / Workbench",[["Plastic Parts",6],["Rubber Parts",6]]]],"Looting Mk. 2":[2000,2,1,["Gear Bench 2",[["Electrical Components",2],["Magnet",3]]]],"Looting Mk. 3 (Cautious)":[5000,3,1,["Gear Bench 3",[["Advanced Electrical Components",2],["Processor",3]]]],"Looting Mk. 3 (Safekeeper)":[5000,5,1,["Gear Bench 3",[["Advanced Electrical Components",2],["Processor",3]]]],"Looting Mk. 3 (Survivor)":[5000,4,1,["Gear Bench 3",[["Advanced Electrical Components",2],["Processor",3]]]],"Lure Grenade":[1000,0.4,3,["Utility Station 2",[["Electrical Components",1],["Speaker Component",1]]]],"Magnet":[300,0.25,15],"Magnetic Accelerator":[5500,1,3,["Refiner 3",[["Advanced Mechanical Components",2],["ARC Motion Core",2]]]],"Magnetron":[6000,1.5,3],"Matriarch Reactor":[11000,10,1],"Mechanical Components":[640,0.5,10,["Refiner 1",[["Metal Parts",7],["Rubber Parts",3]]]],"Medium Gun Parts":[700,0.4,5,["Refiner 2",[["Simple Gun Parts",4]]]],"Medium Shield":[2000,7,1,["Gear Bench 1",[["ARC Circuitry",1],["Battery",4]]]],"Metal Brackets":[640,0.8,3],"Metal Parts":[75,0.1,50],"Microscope":[3000,1.5,3],"Mini Centrifuge":[3000,1.5,3],"Mod Components":[1750,1,5,["Refiner 2",[["Mechanical Components",2],["Steel Spring",2]]]],"Moss":[500,0.3,10],"Motor":[2000,3,3],"Muzzle Brake I":[640,0.25,1,["Gunsmith 1",[["Metal Parts",6],["Wires",1]]]],"Muzzle Brake II":[2000,0.5,1,["Gunsmith 2",[["Mechanical Components",2],["Wires",4]]]],"Muzzle Brake III":[5000,0.75,1,["Gunsmith 3",[["Mod Components",2],["Wires",8]]]],"Noisemaker":[640,0.3,3,["In raid",[["Plastic Parts",2],["Speaker Component",1]]]],"Number Plate":[270,0.8,3],"Oil":[300,0.25,15],"Olives":[640,0.2,10],"Osprey I":[7000,7,1,["Gunsmith 2",[["Advanced Mechanical Components",2],["Medium Gun Parts",3],["Wires",7]]]],"Osprey II":[10000,7,1],"Osprey III":[13000,7,1],"Osprey IV":[17000,7,1],"Padded Stock":[5000,0.5,1,["Gunsmith 3",[["Duct Tape",5],["Mod Components",2]]]],"Photoelectric Cloak":[5000,3,1,["Utility Station 3",[["Advanced Electrical Components",2],["Speaker Component",4]]]],"Plastic Parts":[60,0.1,50],"Polluted Air Filter":[1000,0.8,3],"Pop Trigger":[640,0.5,3],"Portable TV":[2000,3,1],"Power Bank":[1000,2,3],"Power Cable":[1000,2,3],"Power Rod":[5000,2,3,["Refiner 3",[["Advanced Electrical Components",2],["ARC Circuitry",2]]]],"Powered Descender":[10000,5,1,["Utility Station 3",[["Power Rod",1],["Turbine Compressor",1]]]],"Prickly Pear":[640,0.2,10],"Processor":[500,0.2,5],"Projector":[1000,2,3],"Pulse Mine":[470,0.25,3,["Explosives Station 1",[["Crude Explosives",1],["Wires",1]]]],"Queen Reactor":[11000,10,1],"Radio":[1000,2,3],"Radio Relay":[3000,1.5,3],"Rascal I":[7000,4,null,["Gunsmith 2",[["Advanced Mechanical Components",2],["Canister",5],["Heavy Gun Parts",3]]]],"Rascal II":[10000,4,null],"Rascal III":[13000,4,null],"Rascal IV":[17000,4,null],"Rattler I":[1750,6,1,["Gunsmith 1",[["Metal Parts",16],["Rubber Parts",12]]]],"Rattler II":[3000,6,1],"Rattler III":[5000,6,1],"Rattler IV":[7000,6,1],"Recorder":[1000,0.2,1],"Red Light Stick":[150,0.15,5,["Utility Station 1",[["Chemicals",3]]]],"Remote Control":[1000,0.8,3],"Remote Raider Flare":[270,0.2,3,["Utility Station 1",[["Chemicals",2],["Rubber Parts",4]]]],"Renegade I":[7000,10,1,["Gunsmith 3",[["Advanced Mechanical Components",2],["Medium Gun Parts",3],["Oil",5]]]],"Renegade II":[10000,10,1],"Renegade III":[13000,10,1],"Renegade IV":[17000,10,1],"Ripped Safety Vest":[1000,0.8,3],"Rocket Thruster":[2000,3,3],"Rocketeer Driver":[3000,1,3],"Roots":[640,0.2,10],"Rope":[500,0.3,5],"Rotary Encoder":[3000,1.5,3],"Rubber Pad":[1000,2,3],"Rubber Parts":[50,0.1,50],"Ruined Accordion":[2000,3,3],"Ruined Augment":[270,0.5,1],"Ruined Baton":[640,0.8,3],"Ruined Handcuffs":[640,0.8,3],"Ruined Parachute":[640,0.8,3],"Ruined Riot Shield":[1000,2,3],"Ruined Tactical Vest":[640,0.8,3],"Rusted Bolts":[640,0.8,3],"Rusted Gear":[2000,3,3],"Rusted Shut Medical Kit":[2000,3,3],"Rusted Tools":[1000,2,3],"Rusty ARC Steel":[640,1,3],"Sample Cleaner":[3000,1.5,3],"Seeker Grenade":[640,0.2,5,["Explosives Station 1",[["ARC Alloy",2],["Crude Explosives",1]]]],"Sensors":[500,0.3,5],"Sentinel Firing Core":[2000,1,3],"Shaker":[1000,0.2,1,["In raid",[["Assorted Seeds",7],["Canister",1]]]],"Shield Recharger":[520,0.15,5,["In raid / Medical Lab 1 / Workbench",[["ARC Powercell",1],["Rubber Parts",5]]]],"Shotgun Choke I":[640,0.25,1,["Gunsmith 1",[["Metal Parts",6],["Wires",1]]]],"Shotgun Choke II":[2000,0.5,1,["Gunsmith 2",[["Mechanical Components",2],["Wires",4]]]],"Shotgun Choke III":[5000,0.75,1,["Gunsmith 3",[["Mod Components",2],["Wires",8]]]],"Shotgun Silencer":[5000,0.5,1,["Gunsmith 3",[["Mod Components",2],["Wires",8]]]],"Showstopper":[2100,0.4,5,["Explosives Station 3",[["Electrical Components",1],["Hornet Driver",1],["Voltage Converter",1]]]],"Shrapnel Grenade":[800,0.15,5,["Explosives Station 2",[["Crude Explosives",1],["Steel Spring",2]]]],"Shredder Gyro":[2000,1,3],"Signal Amplifier":[3000,1.5,3],"Silencer I":[2000,0.25,1,["Gunsmith 2",[["Mechanical Components",2],["Wires",4]]]],"Silencer II":[5000,0.5,1,["Gunsmith 3",[["Mod Components",2],["Wires",8]]]],"Silencer III":[7000,0.75,1],"Simple Gun Parts":[330,0.3,10],"Smoke Grenade":[1000,0.2,5,["Utility Station 2",[["Canister",1],["Chemicals",14]]]],"Snap Blast Grenade":[800,0.2,3,["Explosives Station 2",[["Crude Explosives",2],["Magnet",1]]]],"Snap Hook":[14000,5,1,["Utility Station 3",[["Exodus Modules",1],["Power Rod",2],["Rope",3]]]],"Snitch Scanner":[1000,0.75,3],"Speaker Component":[500,0.3,5],"Spectrometer":[3000,1.5,3],"Spectrum Analyzer":[3500,1.5,3],"Spotter Relay":[1000,1,3],"Spring Cushion":[2000,2,3],"Stable Stock I":[640,0.25,1,["Gunsmith 1",[["Duct Tape",1],["Rubber Parts",7]]]],"Stable Stock II":[2000,0.5,1,["Gunsmith 2",[["Duct Tape",3],["Mechanical Components",2]]]],"Stable Stock III":[5000,0.75,1,["Gunsmith 3",[["Duct Tape",5],["Mod Components",2]]]],"Steel Spring":[300,0.25,15],"Sterilized Bandage":[2000,0.2,3,["Medical Lab 2",[["Antiseptic",1],["Durable Cloth",2]]]],"Stitcher I":[800,5,1,["Gunsmith 1 / Workbench",[["Metal Parts",8],["Rubber Parts",4]]]],"Stitcher II":[2000,5,1],"Stitcher III":[3000,5,1],"Stitcher IV":[5000,5,1],"Surge Coil":[2100,0,3,["Explosives Station 3",[["Electrical Components",1],["Hornet Driver",1],["Sensors",1]]]],"Surge Shield Recharger":[1200,0.2,5,["Medical Lab 2",[["Advanced ARC Powercell",1],["Electrical Components",1]]]],"Surveyor Vault":[1000,1,3],"Synthesized Fuel":[700,0.5,5],"Syringe":[500,0.3,5],"Tactical Mk. 1":[640,2,1,["Gear Bench 1",[["Plastic Parts",6],["Rubber Parts",6]]]],"Tactical Mk. 2":[2000,2,1,["Gear Bench 2",[["Electrical Components",2],["Magnet",3]]]],"Tactical Mk. 3 (Defensive)":[5000,5,1,["Gear Bench 3",[["Advanced Electrical Components",2],["Processor",3]]]],"Tactical Mk. 3 (Healing)":[5000,4,1,["Gear Bench 3",[["Advanced Electrical Components",2],["Processor",3]]]],"Tactical Mk. 3 (Revival)":[5000,3,1,["Gear Bench 3",[["Advanced Electrical Components",2],["Processor",3]]]],"Tactical Mk. 3 (Smoke)":[5000,4,1,["Gear Bench 3",[["Advanced Electrical Components",2],["Processor",3]]]],"Tagging Grenade":[1000,0.4,3,["Utility Station 3",[["Electrical Components",1],["Sensors",1]]]],"Tattered Clothes":[640,0.8,3],"Telemetry Transceiver":[3000,1.5,3],"Tempest I":[13000,11,1,["Gunsmith 3",[["Exodus Modules",2],["Magnetic Accelerator",1],["Medium Gun Parts",3]]]],"Tempest II":[17000,11,1],"Tempest III":[22000,11,1],"Tempest IV":[27000,11,1],"Thermostat":[1000,2,3],"Tick Pod":[640,0.5,3],"Toaster":[1000,2,3],"Torn Blanket":[640,2,3],"Torrente I":[7000,12,1,["Gunsmith 2",[["Advanced Mechanical Components",2],["Medium Gun Parts",3],["Steel Spring",6]]]],"Torrente II":[10000,12,1],"Torrente III":[13000,12,1],"Torrente IV":[17000,12,1],"Trailblazer":[2200,1,3,["Explosives Station 3",[["Crude Explosives",2],["Firefly Burner",1],["Synthesized Fuel",1]]]],"Trigger 'Nade":[1000,0.4,3,["Explosives Station 2",[["Crude Explosives",2],["Processor",1]]]],"Turbine Compressor":[5000,0.5,3],"Turbo Pump":[2000,3,3],"Unusable Weapon":[2000,3,3],"Vaporizer Regulator":[6000,0.5,3],"Venator I":[7000,5,1,["Gunsmith 2",[["Advanced Mechanical Components",2],["Magnet",5],["Medium Gun Parts",3]]]],"Venator II":[10000,5,1],"Venator III":[13000,5,1],"Venator IV":[17000,5,1],"Vertical Grip I":[640,0.25,1,["Gunsmith 1",[["Duct Tape",1],["Plastic Parts",6]]]],"Vertical Grip II":[2000,0.5,1,["Gunsmith 2",[["Duct Tape",3],["Mechanical Components",2]]]],"Vertical Grip III":[5000,0.75,1,["Gunsmith 3",[["Duct Tape",5],["Mod Components",2]]]],"Vita Shot":[2200,0.4,3,["Medical Lab 3",[["Antiseptic",2],["Syringe",1]]]],"Vita Spray":[3400,1,1,["Medical Lab 3",[["Antiseptic",3],["Canister",1],["Tick Pod",1]]]],"Voltage Converter":[500,0.3,5],"Vulcano I":[10000,8,1,["Gunsmith 3",[["Exodus Modules",1],["Heavy Gun Parts",3],["Magnetic Accelerator",1]]]],"Vulcano II":[13000,9.25,1],"Vulcano III":[17000,8,1],"Vulcano IV":[22000,8,1],"Wasp Driver":[640,0.6,3],"Water Filter":[1000,2,3],"Water Pump":[1000,2,3],"White Flag":[640,0.2,5,["Medical Lab 1 / In raid",[["Fabric",10],["Plastic Parts",3]]]],"Wires":[200,0.25,15],"Wolfpack":[6000,1,1,["Explosives Station 3",[["ARC Motion Core",2],["Explosive Compound",1],["Rocketeer Driver",1]]]],"Yellow Light Stick":[150,0.15,5,["Utility Station 1",[["Chemicals",3]]]],"Zipline":[1000,0.4,3,["Utility Station 2",[["Mechanical Components",1],["Rope",1]]]]};

/* Extra "where to find" details from RaidTheory/arcraiders-data (MIT): area types (t), traders (v) and
   weapon upgrades or crafting (o). They only fill fields the wiki data in FARM2 leaves empty. Checked October 11, 2026. */
ARC.FARM3 = {"ARC Alloy":{"t":["ARC"]},"ARC Coolant":{"t":["ARC"]},"ARC Flex Rubber":{"t":["ARC"]},"ARC Powercell":{"t":["ARC"]},"Advanced ARC Powercell":{"t":["ARC"]},"Advanced Mechanical Components":{"t":["Mechanical"],"o":["Craft it (Refiner; recipe shown with the item)"]},"Agave Juice":{"o":["Craft it (in raid; recipe shown with the item)"]},"Angled Grip II":{"v":["Shani (100 Cred, 2 per day)"]},"Angled Grip III":{"v":["Tian Wen (15,000 coins, 1 per day)"]},"Anvil II":{"o":["Upgrade from Anvil I at the Gunsmith (3 Mechanical Components, 1 Simple Gun Parts)"]},"Anvil III":{"o":["Upgrade from Anvil II at the Gunsmith (1 Heavy Gun Parts, 4 Mechanical Components)"]},"Aphelion":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Arpeggio I":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Arpeggio II":{"o":["Upgrade from Arpeggio I at the Gunsmith (4 Mechanical Components, 1 Simple Gun Parts)"]},"Arpeggio III":{"o":["Upgrade from Arpeggio II at the Gunsmith (5 Mechanical Components, 1 Medium Gun Parts)"]},"Arpeggio IV":{"o":["Upgrade from Arpeggio III at the Gunsmith (5 Mechanical Components, 1 Medium Gun Parts)"]},"Assorted Seeds":{"t":["Nature"]},"Bettina I":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Bettina II":{"o":["Upgrade from Bettina I at the Gunsmith (1 Advanced Mechanical Components, 2 Heavy Gun Parts)"]},"Bettina III":{"o":["Upgrade from Bettina II at the Gunsmith (1 Advanced Mechanical Components, 2 Heavy Gun Parts)"]},"Bettina IV":{"o":["Upgrade from Bettina III at the Gunsmith (2 Advanced Mechanical Components, 2 Heavy Gun Parts)"]},"Bobcat I":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Bobcat II":{"o":["Upgrade from Bobcat I at the Gunsmith (2 Advanced Mechanical Components, 1 Light Gun Parts)"]},"Bobcat III":{"o":["Upgrade from Bobcat II at the Gunsmith (2 Advanced Mechanical Components, 3 Light Gun Parts)"]},"Bobcat IV":{"o":["Upgrade from Bobcat III at the Gunsmith (2 Advanced Mechanical Components, 3 Light Gun Parts)"]},"Bombardier Cell":{"t":["ARC"]},"Broken Guidance System":{"t":["Exodus"]},"Broken Handheld Radio":{"t":["Security"]},"Broken Taser":{"t":["Security"]},"Burletta I":{"v":["Tian Wen (8,700 coins, 3 per day)"]},"Burletta II":{"o":["Upgrade from Burletta I at the Gunsmith (3 Mechanical Components, 1 Simple Gun Parts)"]},"Burletta III":{"o":["Upgrade from Burletta II at the Gunsmith (3 Mechanical Components, 1 Simple Gun Parts)"]},"Burletta IV":{"o":["Upgrade from Burletta III at the Gunsmith (1 Light Gun Parts, 4 Mechanical Components)"]},"Candleberries":{"t":["Nature"]},"Canto I":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Combat Mk. 2":{"v":["Shani (100 Cred, 2 per day)","Lance (6,000 coins, 1 per day)"]},"Combat Mk. 3 (Aggressive)":{"o":["Craft it (Gear Bench; recipe shown with the item)"]},"Combat Mk. 3 (Flanking)":{"o":["Craft it (Gear Bench; recipe shown with the item)"]},"Comet Igniter":{"t":["ARC"]},"Compensator III":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Complex Gun Parts":{"t":["Security"],"v":["Celeste (60 Assorted Seeds, 1 per day)"]},"Coolant":{"t":["Mechanical"]},"Cooling Fan":{"t":["Technological"]},"Cracked Bioscanner":{"t":["Medical"]},"Crash Mat":{"o":["Craft it (Utility Station; recipe shown with the item)"]},"Damaged ARC Motion Core":{"t":["ARC"]},"Damaged ARC Powercell":{"t":["ARC"]},"Damaged Fireball Burner":{"t":["ARC"]},"Damaged Hornet Driver":{"t":["ARC"]},"Damaged Rocketeer Driver":{"t":["ARC"]},"Damaged Tick Pod":{"t":["ARC"]},"Damaged Wasp Driver":{"t":["ARC"]},"Deadline":{"v":["Apollo (18,000 coins, 1 per day)"]},"Deflated Football":{"t":["Residential"]},"Degraded ARC Rubber":{"t":["ARC"]},"Dolabra":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Dried-Out ARC Resin":{"t":["ARC"]},"Electrical Components":{"t":["Electrical"]},"Equalizer":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Exodus Modules":{"t":["Exodus"],"v":["Celeste (55 Assorted Seeds, 1 per day)"]},"Explosive Compound":{"t":["Industrial","Security"],"o":["Craft it (Refiner; recipe shown with the item)"]},"Extended Barrel I":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Extended Barrel II":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Extended Light Mag II":{"v":["Shani (100 Cred, 2 per day)","Tian Wen (6,000 coins, 3 per day)"]},"Extended Light Mag III":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Extended Medium Mag II":{"v":["Shani (100 Cred, 2 per day)"]},"Extended Medium Mag III":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Extended Shotgun Mag II":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Extended Shotgun Mag III":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Ferro I":{"v":["Tian Wen (1,425 coins)"]},"Ferro II":{"o":["Upgrade from Ferro I at the Gunsmith (7 Metal Parts)"]},"Ferro III":{"o":["Upgrade from Ferro II at the Gunsmith (9 Metal Parts, 1 Simple Gun Parts)"]},"Ferro IV":{"v":["Tian Wen (8,700 coins, 1 per day)"],"o":["Upgrade from Ferro III at the Gunsmith (1 Mechanical Components, 1 Simple Gun Parts)"]},"Fertilizer":{"t":["Nature"]},"Fireball Burner":{"t":["ARC"]},"Firefly Burner":{"t":["ARC"]},"Fireworks Box":{"v":["Shani (60 Cred, 3 per day)"]},"Flow Controller":{"t":["Exodus"]},"Fossilized Lightning":{"t":["Nature"]},"Frequency Modulation Box":{"t":["Exodus"]},"Geiger Counter":{"t":["Exodus"]},"Glitched ARC Circuitry":{"t":["ARC"]},"Glitched ARC Light Ring":{"t":["ARC"]},"Glitched ARC Phased Array":{"t":["ARC"]},"Glitched ARC Power Converter":{"t":["ARC"]},"Glitched ARC Transmitter":{"t":["ARC"]},"Hairpin I":{"v":["Tian Wen (1,350 coins)"]},"Hairpin II":{"o":["Upgrade from Hairpin I at the Gunsmith (8 Metal Parts)"]},"Hairpin III":{"o":["Upgrade from Hairpin II at the Gunsmith (9 Metal Parts, 1 Simple Gun Parts)"]},"Hairpin IV":{"o":["Upgrade from Hairpin III at the Gunsmith (1 Mechanical Components, 1 Simple Gun Parts)"]},"Heavy Gun Parts":{"t":["Security","Raider"],"v":["Celeste (15 Assorted Seeds, 3 per day)"]},"Hornet Driver":{"t":["ARC"]},"Hullcracker I":{"v":["Tian Wen (30,000 coins, 1 per day)"]},"Hullcracker II":{"o":["Upgrade from Hullcracker I at the Gunsmith (1 Advanced Mechanical Components, 2 Heavy Gun Parts)"]},"Hullcracker III":{"o":["Upgrade from Hullcracker II at the Gunsmith (2 Advanced Mechanical Components, 1 Heavy Gun Parts)"]},"Hullcracker IV":{"o":["Upgrade from Hullcracker III at the Gunsmith (2 Advanced Mechanical Components, 3 Heavy Gun Parts)"]},"Il Toro I":{"v":["Tian Wen (15,000 coins, 3 per day)"]},"Il Toro II":{"o":["Upgrade from Il Toro I at the Gunsmith (3 Mechanical Components, 1 Simple Gun Parts)"]},"Il Toro III":{"o":["Upgrade from Il Toro II at the Gunsmith (1 Heavy Gun Parts, 4 Mechanical Components)"]},"Il Toro IV":{"o":["Upgrade from Il Toro III at the Gunsmith (1 Heavy Gun Parts, 4 Mechanical Components)"]},"Impure ARC Coolant":{"t":["ARC"]},"Ion Sputter":{"t":["Exodus"]},"Jupiter":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Kettle I":{"v":["Tian Wen (2,520 coins)"]},"Kettle II":{"o":["Upgrade from Kettle I at the Gunsmith (8 Metal Parts, 10 Plastic Parts)"]},"Kettle III":{"o":["Upgrade from Kettle II at the Gunsmith (10 Metal Parts, 1 Simple Gun Parts)"]},"Kettle IV":{"o":["Upgrade from Kettle III at the Gunsmith (3 Mechanical Components, 1 Simple Gun Parts)"]},"Laboratory Reagents":{"t":["Medical"]},"Leaper Pulse Unit":{"t":["ARC"]},"Light Gun Parts":{"t":["Raider","Security"],"v":["Celeste (15 Assorted Seeds, 3 per day)"]},"Lightweight Stock":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Looting Mk. 2":{"v":["Lance (6,000 coins, 1 per day)","Shani (100 Cred, 2 per day)"]},"Looting Mk. 3 (Cautious)":{"o":["Craft it (Gear Bench; recipe shown with the item)"]},"Looting Mk. 3 (Safekeeper)":{"o":["Craft it (Gear Bench; recipe shown with the item)"]},"Looting Mk. 3 (Survivor)":{"o":["Craft it (Gear Bench; recipe shown with the item)"]},"Lure Grenade":{"o":["Craft it (Utility Station; recipe shown with the item)"]},"Magnetic Accelerator":{"t":["Exodus"],"o":["Craft it (Refiner; recipe shown with the item)"]},"Magnetron":{"t":["Exodus"]},"Mechanical Components":{"t":["Mechanical"]},"Medium Gun Parts":{"t":["Raider","Security"],"v":["Celeste (15 Assorted Seeds, 3 per day)"]},"Microscope":{"t":["Exodus"]},"Mini Centrifuge":{"t":["Exodus"]},"Mod Components":{"t":["Security"],"o":["Craft it (Refiner; recipe shown with the item)"]},"Moss":{"t":["Nature"],"v":["Celeste (10 Assorted Seeds, 5 per day)"]},"Muzzle Brake III":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Noisemaker":{"v":["Apollo (1,920 coins, 6 per day)"]},"Osprey I":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Osprey II":{"o":["Upgrade from Osprey I at the Gunsmith (1 Advanced Mechanical Components, 2 Medium Gun Parts)"]},"Osprey III":{"o":["Upgrade from Osprey II at the Gunsmith (1 Advanced Mechanical Components, 2 Medium Gun Parts)"]},"Osprey IV":{"o":["Upgrade from Osprey III at the Gunsmith (2 Advanced Mechanical Components, 2 Medium Gun Parts)"]},"Padded Stock":{"v":["Tian Wen (15,000 coins, 1 per day)"]},"Photoelectric Cloak":{"o":["Craft it (Utility Station; recipe shown with the item)"]},"Pop Trigger":{"t":["ARC"]},"Power Rod":{"t":["Exodus"],"o":["Craft it (Refiner; recipe shown with the item)"]},"Powered Descender":{"o":["Craft it (Utility Station; recipe shown with the item)"]},"Queen Reactor":{"t":["ARC"]},"Radio":{"t":["Commercial","Residential"]},"Radio Relay":{"t":["Exodus"]},"Rascal I":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Rattler I":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Rattler II":{"o":["Upgrade from Rattler I at the Gunsmith (10 Metal Parts, 10 Rubber Parts)"]},"Rattler III":{"o":["Upgrade from Rattler II at the Gunsmith (3 Mechanical Components, 1 Simple Gun Parts)"]},"Rattler IV":{"o":["Upgrade from Rattler III at the Gunsmith (3 Mechanical Components, 1 Simple Gun Parts)"]},"Remote Control":{"t":["Residential"]},"Renegade I":{"v":["Tian Wen (21,000 coins, 1 per day)"]},"Renegade II":{"o":["Upgrade from Renegade I at the Gunsmith (1 Advanced Mechanical Components, 2 Medium Gun Parts)"]},"Renegade III":{"o":["Upgrade from Renegade II at the Gunsmith (1 Advanced Mechanical Components, 2 Medium Gun Parts)"]},"Renegade IV":{"o":["Upgrade from Renegade III at the Gunsmith (2 Advanced Mechanical Components, 2 Medium Gun Parts)"]},"Rocketeer Driver":{"t":["ARC"]},"Roots":{"t":["Nature"]},"Rotary Encoder":{"t":["Exodus"]},"Ruined Augment":{"t":["ARC"]},"Rusted Bolts":{"t":["Industrial","Mechanical"]},"Rusted Shut Medical Kit":{"t":["Medical"]},"Rusty ARC Steel":{"t":["ARC"]},"Sample Cleaner":{"t":["Exodus"]},"Sentinel Firing Core":{"t":["ARC"]},"Showstopper":{"o":["Craft it (Explosives Station; recipe shown with the item)"]},"Shredder Gyro":{"t":["ARC"]},"Signal Amplifier":{"t":["Exodus"]},"Snap Hook":{"o":["Craft it (Utility Station; recipe shown with the item)"]},"Snitch Scanner":{"t":["ARC"]},"Spectrometer":{"t":["Exodus"]},"Spectrum Analyzer":{"t":["Exodus"]},"Spotter Relay":{"t":["ARC"]},"Spring Cushion":{"t":["Residential","Commercial"]},"Stable Stock II":{"v":["Shani (100 Cred, 2 per day)","Tian Wen (6,000 coins, 2 per day)"]},"Stable Stock III":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Stitcher I":{"v":["Tian Wen (2,400 coins)"]},"Stitcher II":{"o":["Upgrade from Stitcher I at the Gunsmith (8 Metal Parts, 12 Rubber Parts)"]},"Stitcher III":{"o":["Upgrade from Stitcher II at the Gunsmith (10 Metal Parts, 1 Simple Gun Parts)"]},"Stitcher IV":{"o":["Upgrade from Stitcher III at the Gunsmith (3 Mechanical Components, 1 Simple Gun Parts)"]},"Surge Coil":{"o":["Craft it (Explosives Station; recipe shown with the item)"]},"Surveyor Vault":{"t":["ARC"]},"Tactical Mk. 2":{"v":["Lance (6,000 coins, 1 per day)","Shani (100 Cred, 2 per day)"]},"Tactical Mk. 3 (Defensive)":{"o":["Craft it (Gear Bench; recipe shown with the item)"]},"Tactical Mk. 3 (Healing)":{"o":["Craft it (Gear Bench; recipe shown with the item)"]},"Tactical Mk. 3 (Revival)":{"o":["Craft it (Gear Bench; recipe shown with the item)"]},"Tactical Mk. 3 (Smoke)":{"o":["Craft it (Gear Bench; recipe shown with the item)"]},"Telemetry Transceiver":{"t":["Exodus"]},"Tempest I":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Tempest II":{"o":["Upgrade from Tempest I at the Gunsmith (2 Advanced Mechanical Components, 1 Medium Gun Parts)"]},"Tempest III":{"o":["Upgrade from Tempest II at the Gunsmith (2 Advanced Mechanical Components, 3 Medium Gun Parts)"]},"Tempest IV":{"o":["Upgrade from Tempest III at the Gunsmith (2 Advanced Mechanical Components, 3 Medium Gun Parts)"]},"Thermostat":{"t":["Residential"]},"Tick Pod":{"t":["ARC"]},"Torrente I":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Torrente II":{"o":["Upgrade from Torrente I at the Gunsmith (1 Advanced Mechanical Components, 2 Medium Gun Parts)"]},"Torrente III":{"o":["Upgrade from Torrente II at the Gunsmith (1 Advanced Mechanical Components, 2 Medium Gun Parts)"]},"Torrente IV":{"o":["Upgrade from Torrente III at the Gunsmith (2 Advanced Mechanical Components, 2 Medium Gun Parts)"]},"Trailblazer":{"v":["Apollo (6,600 coins, 3 per day)"]},"Turbine Compressor":{"t":["ARC"]},"Venator I":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Venator II":{"o":["Upgrade from Venator I at the Gunsmith (1 Advanced Mechanical Components, 2 Medium Gun Parts)"]},"Venator III":{"o":["Upgrade from Venator II at the Gunsmith (1 Advanced Mechanical Components, 2 Medium Gun Parts)"]},"Venator IV":{"o":["Upgrade from Venator III at the Gunsmith (2 Advanced Mechanical Components, 2 Medium Gun Parts)"]},"Vertical Grip II":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Vertical Grip III":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Vulcano I":{"o":["Craft it (Gunsmith; recipe shown with the item)"]},"Vulcano II":{"o":["Upgrade from Vulcano I at the Gunsmith (1 Advanced Mechanical Components, 2 Heavy Gun Parts)"]},"Vulcano III":{"o":["Upgrade from Vulcano II at the Gunsmith (2 Advanced Mechanical Components, 1 Heavy Gun Parts)"]},"Vulcano IV":{"o":["Upgrade from Vulcano III at the Gunsmith (2 Advanced Mechanical Components, 3 Heavy Gun Parts)"]},"Wasp Driver":{"t":["ARC"]},"White Flag":{"o":["Craft it (Medical Lab or in raid; recipe shown with the item)"]},"Wolfpack":{"o":["Craft it (Explosives Station; recipe shown with the item)"]}};
Object.keys(ARC.FARM3).forEach(function (n) {
  var g = ARC.FARM2[n] = ARC.FARM2[n] || {}, x = ARC.FARM3[n];
  Object.keys(x).forEach(function (k) { if (!g[k] || !g[k].length) { g[k] = x[k]; } });
});
