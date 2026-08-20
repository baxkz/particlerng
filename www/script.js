const SAVE_KEY = 'mineRngSave-v1';
const GAME_TITLE = 'ParticleRNG: Particle Drop Simulator';

const ITEMS = [
  'Silicon Wafer', 'Copper Wire', 'Graphene Sheet', 'Polymer', 'Photon Sensor', 'Neutrino Capsule', 'Plasma Cell', 'Vacuum Tube', 'Gyroscope', 'Particle Lens', 'Quantum Battery', 'Laser Diode', 'Muon Detector', 'Circuit Board', 'Glass', 'Quartz', 'Redstone', 'Iron Ore', 'Gold Ore', 'Emerald', 'Diamond', 'Amethyst', 'Obsidian', 'Iron Ingot', 'Gold Ingot', 'Furnace', 'Stonecutter', 'Chest', 'Hopper', 'Anvil', 'Barrel', 'Crafting Table', 'Iron Pickaxe', 'Stone Pickaxe', 'Golden Apple', 'Luck Potion', 'Energy Drink', 'Chaos Orb', 'Fortune Wax', 'Botania Petal', 'Thaumium Ingot', 'Ender Pearl', 'AE2 Silicon', 'Thermal Core', 'Mystic Shard', 'Ancient Relic', 'Celestial Dust', 'Prismite', 'Dragon Scale', 'Legendary Orb', 'Void Ore', 'Chrono Crystal', 'Nova Essence', 'Starfall Core', 'Eternal Rune', 'Time Fragment', 'Null Prism', 'Mythic Star', 'Infinity Charm', 'Cosmic Engine', 'Arcane Heart', 'Omega Core', 'Celestial Crown', 'Aether Bloom', 'Hellfire Core', 'Astral Heart', 'Doom Prism', 'Lunar Crown', 'Eclipse Sigil', 'Universe Key', 'Void Crown', 'Titan Star', 'Miracle Engine', 'Godforge Relic', 'World Core', 'Horizon Jewel', 'Eternal Echo', 'Primordial Crown', 'Soul of the Sky', 'Final Horizon', 'Event Horizon', 'Reality Anchor', 'Quantum Singularity', 'Multiverse Seed', 'Causal Engine', 'Chronon Crown', 'Dimensional Key', 'Infinity Reactor', 'Omniscient Core', 'Absolute Zero Core', 'Paradox Crown', 'Genesis Protocol', 'Theorem of Everything', 'Apex Singularity', 'Universal Architect', 'Origin Point', 'Last Equation', 'Reality Shard', 'Prime Directive', 'Eternal Observer', 'Creation Engine', 'Final Constant', 'Transcendence Node', 'Alpha Horizon', 'Overmind Seed', 'Chronology Engine', 'Vacuum Genesis', 'Worldline Crown', 'Entropy Key', 'Infinite Observer', 'Singularity Choir', 'Omniverse Heart', 'Causality Loom', 'Final Dimension', 'Absolute Horizon', 'Petal Singularity', 'Thaumium Apex', 'AE2 Quantum Silicon', 'Overmind Prime Seed', 'Chronology Prime Engine', 'Vacuum Genesis Prime', 'Worldline Prime Crown', 'Entropy Absolute Key', 'Infinite Observer Prime', 'Singularity Prime Choir', 'Omniverse Prime Heart', 'Causality Prime Loom', 'Final Dimension Prime', 'Absolute Prime Horizon', 'Causality Absolute Loom', 'Worldline Absolute Crown', 'Final Dimension Absolute', 'Omniverse Absolute Heart', 'Absolute Horizon Prime', 'Infinite Observer Absolute', 'Vacuum Genesis Absolute', 'Singularity Choir Absolute', 'Dirt', 'Oak Log', 'Cobblestone', 'Stone', 'Wool', 'Snow', 'Lapis Lazuli', 'Coal', 'Copper', 'Sand', 'Bone', 'Stick', 'Apple', 'Torch'
];

const DISPLAY_ITEMS = [
  'Silicon Wafer', 'Copper Wire', 'Graphene Sheet', 'Polymer', 'Photon Sensor', 'Neutrino Capsule', 'Plasma Cell', 'Vacuum Tube', 'Gyroscope', 'Particle Lens', 'Quantum Battery', 'Laser Diode', 'Muon Detector', 'Circuit Board', 'Glass', 'Quartz', 'Redstone', 'Iron Ore', 'Gold Ore', 'Emerald', 'Diamond', 'Amethyst', 'Obsidian', 'Iron Ingot', 'Gold Ingot', 'Golden Apple', 'Luck Potion', 'Energy Drink', 'Chaos Orb', 'Fortune Wax', 'Mystic Shard', 'Ancient Relic', 'Celestial Dust', 'Prismite', 'Dragon Scale', 'Legendary Orb', 'Void Ore', 'Chrono Crystal', 'Nova Essence', 'Starfall Core', 'Eternal Rune', 'Time Fragment', 'Null Prism', 'Mythic Star', 'Infinity Charm', 'Cosmic Engine', 'Arcane Heart', 'Omega Core', 'Celestial Crown', 'Aether Bloom', 'Hellfire Core', 'Astral Heart', 'Doom Prism', 'Lunar Crown', 'Eclipse Sigil', 'Universe Key', 'Void Crown', 'Titan Star', 'Miracle Engine', 'Godforge Relic', 'World Core', 'Horizon Jewel', 'Eternal Echo', 'Primordial Crown', 'Soul of the Sky', 'Final Horizon', 'Event Horizon', 'Reality Anchor', 'Quantum Singularity', 'Multiverse Seed', 'Causal Engine', 'Chronon Crown', 'Dimensional Key', 'Infinity Reactor', 'Omniscient Core', 'Absolute Zero Core', 'Paradox Crown', 'Genesis Protocol', 'Theorem of Everything', 'Apex Singularity', 'Universal Architect', 'Origin Point', 'Last Equation', 'Reality Shard', 'Prime Directive', 'Eternal Observer', 'Creation Engine', 'Final Constant', 'Transcendence Node', 'Alpha Horizon', 'Overmind Seed', 'Chronology Engine', 'Vacuum Genesis', 'Worldline Crown', 'Entropy Key', 'Infinite Observer', 'Singularity Choir', 'Omniverse Heart', 'Causality Loom', 'Final Dimension', 'Absolute Horizon', 'Petal Singularity', 'Thaumium Apex', 'AE2 Quantum Silicon', 'Overmind Prime Seed', 'Chronology Prime Engine', 'Vacuum Genesis Prime', 'Worldline Prime Crown', 'Entropy Absolute Key', 'Infinite Observer Prime', 'Singularity Prime Choir', 'Omniverse Prime Heart', 'Causality Prime Loom', 'Final Dimension Prime', 'Absolute Prime Horizon', 'Causality Absolute Loom', 'Worldline Absolute Crown', 'Final Dimension Absolute', 'Omniverse Absolute Heart', 'Absolute Horizon Prime', 'Infinite Observer Absolute', 'Vacuum Genesis Absolute', 'Singularity Choir Absolute', 'Dirt', 'Oak Log', 'Cobblestone', 'Stone', 'Wool', 'Snow', 'Lapis Lazuli', 'Coal', 'Copper', 'Sand', 'Bone', 'Stick', 'Apple', 'Torch'
];

const TIER_ITEMS = {
  '1/2': ['Silicon Wafer', 'Copper Wire', 'Graphene Sheet', 'Polymer', 'Glass', 'Quartz'],
  '1/4': ['Photon Sensor', 'Neutrino Capsule', 'Plasma Cell', 'Vacuum Tube', 'Gyroscope', 'Redstone'],
  '1/8': ['Particle Lens', 'Quantum Battery', 'Laser Diode', 'Muon Detector', 'Iron Ore', 'Gold Ore'],
  '1/16': ['Furnace', 'Stonecutter', 'Chest', 'Hopper', 'Anvil', 'Barrel', 'Crafting Table'],
  '1/32': ['Emerald', 'Diamond', 'Amethyst', 'Obsidian', 'Iron Ingot', 'Gold Ingot', 'Torch'],
  '1/64': ['Luck Potion', 'Golden Apple', 'Iron Pickaxe', 'Stone Pickaxe', 'Energy Drink', 'Chaos Orb', 'Botania Petal'],
  '1/128': ['Mystic Shard', 'Ancient Relic', 'Celestial Dust', 'Prismite', 'Thaumium Ingot', 'AE2 Silicon'],
  '1/256': ['Dragon Scale', 'Legendary Orb', 'Void Ore', 'Chrono Crystal', 'Ender Pearl', 'Thermal Core'],
  '1/512': ['Nova Essence', 'Starfall Core', 'Eternal Rune', 'Time Fragment', 'Petal Singularity', 'AE2 Quantum Silicon'],
  '1/1024': ['Null Prism', 'Mythic Star', 'Infinity Charm', 'Cosmic Engine'],
  '1/2048': ['Arcane Heart', 'Omega Core', 'Fortune Wax', 'Thaumium Apex'],
  '1/4096': ['Celestial Crown', 'Aether Bloom', 'Hellfire Core'],
  '1/8192': ['Astral Heart', 'Doom Prism', 'Lunar Crown'],
  '1/16384': ['Eclipse Sigil', 'Universe Key', 'Void Crown'],
  '1/32768': ['Titan Star', 'Miracle Engine', 'Godforge Relic'],
  '1/65536': ['World Core', 'Horizon Jewel', 'Eternal Echo'],
  '1/131072': ['Primordial Crown', 'Soul of the Sky', 'Final Horizon']
  ,'1/262144': ['Event Horizon', 'Reality Anchor', 'Quantum Singularity']
  ,'1/524288': ['Multiverse Seed', 'Causal Engine', 'Chronon Crown']
  ,'1/1048576': ['Dimensional Key', 'Infinity Reactor', 'Omniscient Core']
  ,'1/2097152': ['Absolute Zero Core', 'Paradox Crown', 'Genesis Protocol']
  ,'1/4194304': ['Theorem of Everything', 'Apex Singularity', 'Universal Architect']
  ,'1/8388608': ['Origin Point', 'Last Equation', 'Reality Shard']
  ,'1/16777216': ['Prime Directive', 'Eternal Observer', 'Creation Engine']
  ,'1/33554432': ['Final Constant', 'Transcendence Node', 'Alpha Horizon']
  ,'1/67108864': ['Overmind Seed', 'Chronology Engine', 'Vacuum Genesis']
  ,'1/134217728': ['Worldline Crown', 'Entropy Key', 'Infinite Observer']
  ,'1/268435456': ['Singularity Choir', 'Omniverse Heart', 'Causality Loom']
  ,'1/536870912': ['Final Dimension', 'Absolute Horizon', 'Overmind Prime Seed']
  ,'1/1073741824': ['Chronology Prime Engine', 'Worldline Prime Crown', 'Singularity Prime Choir']
  ,'1/2147483648': ['Omniverse Prime Heart', 'Causality Prime Loom', 'Final Dimension Prime']
  ,'1/4294967296': ['Absolute Prime Horizon', 'Infinite Observer Prime', 'Vacuum Genesis Prime']
  ,'1/8589934592': ['Entropy Absolute Key', 'Worldline Absolute Crown', 'Causality Absolute Loom']
  ,'1/17179869184': ['Final Dimension Absolute', 'Omniverse Absolute Heart', 'Absolute Horizon Prime']
  ,'1/34359738368': ['Infinite Observer Absolute', 'Vacuum Genesis Absolute', 'Singularity Choir Absolute']
};

const TIER_WEIGHTS = {
  '1/2': 1000000,
  '1/4': 400000,
  '1/8': 160000,
  '1/16': 50000,
  '1/32': 18000,
  '1/64': 5000,
  '1/128': 1500,
  '1/256': 450,
  '1/512': 140,
  '1/1024': 40,
  '1/2048': 12,
  '1/4096': 4,
  '1/8192': 2,
  '1/16384': 1,
  '1/32768': 1,
  '1/65536': 1,
  '1/131072': 1,
  '1/262144': 1,
  '1/524288': 1,
  '1/1048576': 1,
  '1/2097152': 1,
  '1/4194304': 1,
  '1/8388608': 1,
  '1/16777216': 1,
  '1/33554432': 1,
  '1/67108864': 1,
  '1/134217728': 1,
  '1/268435456': 1,
  '1/536870912': 1,
  '1/1073741824': 1,
  '1/2147483648': 1,
  '1/4294967296': 1,
  '1/8589934592': 1,
  '1/17179869184': 1,
  '1/34359738368': 1
};

const UPGRADE_CATALOG = {
  luck: {
    name: 'Lucky Charm',
    description: 'Boosts the chance of landing rare tiers.',
    base_cost: { 'Silicon Wafer': 20, Polymer: 10, 'Copper Wire': 5 }
  },
  speed: {
    name: 'Turbo Spinner',
    description: 'Shortens the suspense delay between rolls.',
    base_cost: { 'Copper Wire': 8, Glass: 6, 'Graphene Sheet': 10 }
  },
  bulk: {
    name: 'Bulk Roller',
    description: 'Raises the maximum number of rolls you can do at once.',
    base_cost: { Emerald: 1, 'Gold Ingot': 5, Diamond: 1 }
  },
  jackpot: {
    name: 'Golden Lens',
    description: 'Improves the odds of 1/32 and 1/64 rewards.',
    base_cost: { Diamond: 2, Emerald: 2, 'Luck Potion': 1 }
  },
  potion_duration: {
    name: 'Potion Flasks',
    description: 'Increases the number of rolls covered by each Luck Potion by +5.',
    base_cost: { Glass: 12, 'Copper Wire': 10, Emerald: 1 }
  },
  terminal_overclock: {
    name: 'Terminal Overclock',
    description: 'Mid-game upgrade. Requires any 2 items from the 1/1024 tier. Click the terminal during a reveal to instantly show every result.',
    base_cost: { Diamond: 3, Emerald: 5, Glass: 12 },
    tier_cost: { tier: '1/1024', amount: 2 },
    max_level: 1
  }
};

const BUILDING_CATALOG = {
  resonance_coil: {
    name: 'Resonance Coil',
    description: 'Tunes the reactor to amplify every luck source already in your system.',
    base_cost: { 'Silicon Wafer': 30, 'Copper Wire': 15, 'Graphene Sheet': 5 },
    luck_multiplier: 1.25,
    max_level: 5
  },
  stellar_lens: {
    name: 'Stellar Lens',
    description: 'Focuses distant particle signals into a stronger rare-tier stream.',
    base_cost: { Glass: 20, Quartz: 15, 'Photon Sensor': 5 },
    luck_multiplier: 1.5,
    max_level: 5,
    requires: 'resonance_coil'
  },
  void_observatory: {
    name: 'Void Observatory',
    description: 'Maps impossible outcomes and multiplies the reactor signal at its source.',
    base_cost: { 'Particle Lens': 2, Diamond: 2, 'Quantum Battery': 1 },
    luck_multiplier: 2,
    max_level: 3,
    requires: 'stellar_lens'
  }
};

const ROBOT_SLOT_COUNT = 10;
const ROBOT_MAX_LEVEL = 30;
const ROBOT_BUY_COST = { 'Circuit Board': 5, 'Quantum Battery': 2, 'Particle Lens': 1, Diamond: 3 };
const PRESTIGE_MAX = 25;
const PRESTIGE_ITEM_REQUIREMENT = 200;
const ECONOMY_COST_MULTIPLIER = 0.2;
const GOLDEN_EVENT_TYPES = [
  { name: 'Golden Surge', description: '7x luck for 90 seconds + 10 max rolls', multiplier: 7, duration: 90, maxRollBonus: 10 },
  { name: '777 Flash', description: '777x luck for 7 seconds + 77 max rolls', multiplier: 777, duration: 7, maxRollBonus: 77 }
];

// Creates the initial empty robot roster.
function defaultRobots() {
  return Array.from({ length: ROBOT_SLOT_COUNT }, () => 0);
}

const USABLES = {
  'Luck Potion': {
    name: 'Luck Potion',
    description: 'Triples rare-tier weights for the next 10 rolls, plus +5 rolls per Potion Flasks level.'
  },
  'Energy Drink': {
    name: 'Energy Drink',
    description: 'Reduces roll delay by 60% and adds +2 temporary max rolls for the next 3 rolls.'
  },
  'Chaos Orb': {
    name: 'Chaos Orb',
    description: 'Forces one random tier from 1/64, 1/128, 1/256, or 1/512 on each of the next 3 rolls.'
  },
  'Fortune Wax': {
    name: 'Fortune Wax',
    description: 'Adds a second copy of every item earned on the next 5 rolls.'
  }
};

const RECIPES = {
  1: {
    name: 'Circuit Board x2',
    description: 'Consumes 2 Silicon Wafers and 2 Copper Wire to produce 2 Circuit Boards, used in sensor crafting.',
    cost: { 'Silicon Wafer': 2, 'Copper Wire': 2 },
    reward: { 'Circuit Board': 2 }
  },
  2: {
    name: 'Photon Sensor x2',
    description: 'Consumes 1 Circuit Board and 2 Glass to produce 2 Photon Sensors, used for particle detection.',
    cost: { 'Circuit Board': 1, Glass: 2 },
    reward: { 'Photon Sensor': 2 }
  },
  3: {
    name: 'Particle Lens',
    description: 'Consumes 2 Photon Sensors, 3 Quartz, and 2 Graphene Sheets to produce 1 Particle Lens, a precision component for advanced research.',
    cost: { 'Photon Sensor': 2, Quartz: 3, 'Graphene Sheet': 2 },
    reward: { 'Particle Lens': 1 }
  },
  4: {
    name: 'Iron Pickaxe',
    description: 'Consumes 5 Iron Ingots, 3 Sticks, and 2 Coal to produce 1 Iron Pickaxe, a legacy tool component.',
    cost: { 'Iron Ingot': 5, Stick: 3, Coal: 2 },
    reward: { 'Iron Pickaxe': 1 }
  },
  5: {
    name: 'Energy Drink',
    description: 'Consumes 3 Glass, 4 Copper Wire, and 1 Photon Sensor to produce 1 Energy Drink: -60% delay and +2 max rolls for 3 rolls.',
    cost: { Glass: 3, 'Copper Wire': 4, 'Photon Sensor': 1 },
    reward: { 'Energy Drink': 1 }
  },
  6: {
    name: 'Chaos Orb',
    description: 'Consumes 3 Quartz, 2 Redstone, and 1 Emerald to produce 1 Chaos Orb: guaranteed 1/64-1/512 tier range for 3 rolls.',
    cost: { Quartz: 3, 'Redstone': 2, 'Emerald': 1 },
    reward: { 'Chaos Orb': 1 }
  },
  7: {
    name: 'Fortune Wax',
    description: 'Consumes 2 Gold Ingots, 2 Redstone, and 3 Glass to produce 1 Fortune Wax: +1 duplicate item for 5 rolls.',
    cost: { 'Gold Ingot': 2, Redstone: 2, Glass: 3 },
    reward: { 'Fortune Wax': 1 }
  },
  8: {
    name: 'Luck Potion',
    description: 'Consumes 2 Emeralds, 2 Glass, and 1 Diamond to produce 1 Luck Potion: 3x rare-tier weights for 10 rolls.',
    cost: { Emerald: 2, Glass: 2, Diamond: 1 },
    reward: { 'Luck Potion': 1 }
  }
};

let gameState = loadGame();
let spinInProgress = false;
let revealInProgress = false;
let skipRevealRequested = false;
let guaranteedNextTier = null;
let lastAffordableUpgradeNotice = false;
let sessionStartedAt = Date.now();
let automationTimers = [];
let automationNextAt = null;
let animationPreviewInProgress = false;
let prestigeInProgress = false;
let goldenEventDismissTimer = null;
const RARE_OVERLAY_THRESHOLD = 11;

const menuButtons = [...document.querySelectorAll('.menu-button')];
const views = [...document.querySelectorAll('.view')];
const toast = document.getElementById('toast');
const tutorialOverlay = document.getElementById('tutorialOverlay');
const prestigeConfirmOverlay = document.getElementById('prestigeConfirmOverlay');
const prestigeTransition = document.getElementById('prestigeTransition');

// Creates an inventory with every known item initialized to zero.
function defaultInventory() {
  return Object.fromEntries(ITEMS.map((item) => [item, 0]));
}

// Builds a fresh game state for a new run.
function defaultGameState() {
  return {
    inventory: defaultInventory(),
    timesGambled: 0,
    lastRoll: 'None',
    lastTier: 'None',
    rarestRolled: 'None',
    rarestTierRarity: -1,
    timePlayedSeconds: 0,
    prestige: 0,
    prestigeLuckRewards: 0,
    prestigeRollRewards: 0,
    buildings: Object.fromEntries(Object.keys(BUILDING_CATALOG).map((key) => [key, 0])),
    robots: defaultRobots(),
    upgrades: Object.fromEntries(Object.keys(UPGRADE_CATALOG).map((key) => [key, 0])),
    activeEffects: {
      luck_potion_rolls: 0,
      energy_drink_rolls: 0,
      chaos_orb_rolls: 0,
      fortune_wax_rolls: 0
    },
    settings: {
      particleQuality: 'high',
      animationSpeed: 'normal',
      reducedMotion: false,
      screenShake: true
    },
    goldenEvent: null
  };
}

// Loads and sanitizes saved progress, falling back to a new game when needed.
function loadGame() {
  const fallback = defaultGameState();
  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (!saved) return fallback;

    const inventory = defaultInventory();
    for (const [item, count] of Object.entries(saved.inventory || {})) {
      if (inventory[item] !== undefined) inventory[item] = Number(count) || 0;
    }

    const upgrades = Object.fromEntries(Object.keys(UPGRADE_CATALOG).map((key) => [key, 0]));
    for (const [key, value] of Object.entries(saved.upgrades || {})) {
      if (key in upgrades) upgrades[key] = Number(value) || 0;
    }

    const buildings = Object.fromEntries(Object.keys(BUILDING_CATALOG).map((key) => [key, 0]));
    for (const [key, value] of Object.entries(saved.buildings || {})) {
      if (key in buildings) {
        buildings[key] = Math.min(BUILDING_CATALOG[key].max_level, Math.max(0, Number(value) || 0));
      }
    }

    const robots = defaultRobots();
    if (Array.isArray(saved.robots)) {
      saved.robots.slice(0, ROBOT_SLOT_COUNT).forEach((level, index) => {
        robots[index] = Math.min(ROBOT_MAX_LEVEL, Math.max(0, Number(level) || 0));
      });
    } else if (Number(saved.upgrades?.automation_robot) > 0) {
      const legacyRobotCount = Number(saved.upgrades.automation_robot);
      for (let index = 0; index < Math.min(ROBOT_SLOT_COUNT, legacyRobotCount); index++) {
        robots[index] = 1;
      }
    }

    const activeEffects = {
      luck_potion_rolls: 0,
      energy_drink_rolls: 0,
      chaos_orb_rolls: 0,
      fortune_wax_rolls: 0
    };
    for (const [key, value] of Object.entries(saved.activeEffects || {})) {
      if (key in activeEffects) activeEffects[key] = Number(value) || 0;
    }

    const settings = {
      particleQuality: ['low', 'medium', 'high'].includes(saved.settings?.particleQuality)
        ? saved.settings.particleQuality
        : 'high',
      animationSpeed: ['slow', 'normal', 'fast'].includes(saved.settings?.animationSpeed)
        ? saved.settings.animationSpeed
        : 'normal',
      reducedMotion: Boolean(saved.settings?.reducedMotion),
      screenShake: saved.settings?.screenShake !== false
    };

    const savedEvent = saved.goldenEvent;
    const goldenEvent = savedEvent && GOLDEN_EVENT_TYPES.some((event) => event.name === savedEvent.name)
      ? {
        name: String(savedEvent.name),
        active: Boolean(savedEvent.active),
        expiresAt: Number(savedEvent.expiresAt) || 0,
        spawnedAt: Number(savedEvent.spawnedAt) || 0,
        position: {
          x: Math.min(88, Math.max(8, Number(savedEvent.position?.x) || 50)),
          y: Math.min(80, Math.max(12, Number(savedEvent.position?.y) || 42))
        }
      }
      : null;

    return {
      inventory,
      timesGambled: Number(saved.timesGambled) || 0,
      lastRoll: String(saved.lastRoll || 'None'),
      lastTier: String(saved.lastTier || 'None'),
      rarestRolled: String(saved.rarestRolled || saved.lastRoll || 'None'),
      rarestTierRarity: Number.isFinite(Number(saved.rarestTierRarity))
        ? Number(saved.rarestTierRarity)
        : getTierRarity(String(saved.lastTier || '')),
      timePlayedSeconds: Number(saved.timePlayedSeconds) || 0,
      prestige: Math.min(PRESTIGE_MAX, Math.max(0, Number(saved.prestige) || 0)),
      prestigeLuckRewards: Math.max(0, Number(saved.prestigeLuckRewards) || 0),
      prestigeRollRewards: Math.max(0, Number(saved.prestigeRollRewards) || 0),
      buildings,
      robots,
      upgrades,
      activeEffects,
      settings,
      goldenEvent
    };
  } catch (error) {
    console.error('Unable to load save', error);
    return fallback;
  }
}

// Persists the current game state to browser storage.
function saveGame() {
  gameState.timePlayedSeconds = getTimePlayedSeconds();
  sessionStartedAt = Date.now();
  localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
  showToast('Game saved.');
}

// Returns total play time, including the current unsaved session.
function getTimePlayedSeconds() {
  return gameState.timePlayedSeconds + (Date.now() - sessionStartedAt) / 1000;
}

// Formats elapsed seconds as a compact play-time string.
function formatPlayTime(totalSeconds) {
  const seconds = Math.floor(totalSeconds);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainder = seconds % 60;
  if (hours > 0) return `${hours}h ${minutes}m`;
  if (minutes > 0) return `${minutes}m ${remainder}s`;
  return `${remainder}s`;
}

// Displays a short notification message to the player.
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('visible'), 1400);
}

// Refreshes sidebar statistics and active-effect information.
function updateStats() {
  document.body.classList.toggle('golden-event-active', isGoldenEventActive());
  document.getElementById('timesGambled').textContent = gameState.timesGambled;
  document.getElementById('rarestRolled').textContent = spinInProgress ? 'Revealing...' : gameState.rarestRolled;
  document.getElementById('timePlayed').textContent = formatPlayTime(getTimePlayedSeconds());
  const luckRange = getTotalLuckMultiplierRange();
  document.getElementById('totalLuck').textContent = `x${formatLuckMultiplier(luckRange.minimum)}-${formatLuckMultiplier(luckRange.maximum)}`;

  const buffList = document.getElementById('activeBuffsList');
  const entries = [
    ['Luck Potion', gameState.activeEffects.luck_potion_rolls],
    ['Energy Drink', gameState.activeEffects.energy_drink_rolls],
    ['Chaos Orb', gameState.activeEffects.chaos_orb_rolls],
    ['Fortune Wax', gameState.activeEffects.fortune_wax_rolls]
  ];

  if (isGoldenEventActive()) {
    const event = getGoldenEventType();
    entries.unshift([event.name, Math.ceil((gameState.goldenEvent.expiresAt - Date.now()) / 1000)]);
  }

  buffList.innerHTML = entries
    .filter(([, value]) => value > 0)
    .map(([name, value]) => `<li>${name}: ${name === gameState.goldenEvent?.name ? `${value}s remaining` : `${value} rolls`}</li>`)
    .join('') || '<li>None</li>';
}

// Returns the configured event data for the current golden event.
function getGoldenEventType() {
  return GOLDEN_EVENT_TYPES.find((event) => event.name === gameState.goldenEvent?.name) || GOLDEN_EVENT_TYPES[0];
}

// Checks whether a collected golden event is still boosting the reactor.
function isGoldenEventActive() {
  return Boolean(gameState.goldenEvent?.active && gameState.goldenEvent.expiresAt > Date.now());
}

// Spawns a collectible short event in the research chamber.
function spawnGoldenEvent(eventName = null, force = false) {
  if (gameState.goldenEvent && !force) return;
  const event = GOLDEN_EVENT_TYPES.find((candidate) => candidate.name === eventName)
    || GOLDEN_EVENT_TYPES[Math.floor(Math.random() * GOLDEN_EVENT_TYPES.length)];
  gameState.goldenEvent = {
    name: event.name,
    active: false,
    spawnedAt: Date.now(),
    expiresAt: Date.now() + 12000,
    position: {
      x: 8 + Math.random() * 80,
      y: 12 + Math.random() * 68
    }
  };
  renderGoldenEvent();
  showToast(`${event.name} detected in the chamber.`);
}

// Collects the visible event and starts its timed reactor boost.
function collectGoldenEvent() {
  if (!gameState.goldenEvent || gameState.goldenEvent.active) return;
  const event = getGoldenEventType();
  gameState.goldenEvent.active = true;
  gameState.goldenEvent.expiresAt = Date.now() + event.duration * 1000;
  document.body.classList.add('golden-event-active');
  showToast(`${event.name} collected: ${event.multiplier}x luck active.`);
  renderAll();
  saveGame();
}

// Keeps the event button and its countdown synchronized with game state.
function renderGoldenEvent() {
  const button = document.getElementById('goldenCookie');
  if (!button) return;
  const event = gameState.goldenEvent;
  document.body.classList.toggle('golden-event-active', isGoldenEventActive());
  if (!event || event.active || event.expiresAt <= Date.now()) {
    if (!button.hidden && !button.classList.contains('golden-signal-disappearing')) {
      button.classList.add('golden-signal-disappearing');
      clearTimeout(goldenEventDismissTimer);
      goldenEventDismissTimer = setTimeout(() => {
        button.hidden = true;
        button.classList.remove('golden-signal-disappearing');
      }, 320);
    }
    return;
  }
  clearTimeout(goldenEventDismissTimer);
  button.classList.remove('golden-signal-disappearing');
  const eventType = getGoldenEventType();
  button.hidden = false;
  document.getElementById('goldenCookieTitle').textContent = eventType.name;
  button.style.setProperty('--signal-x', `${event.position.x}vw`);
  button.style.setProperty('--signal-y', `${event.position.y}vh`);
  button.setAttribute('aria-label', `${eventType.name}: ${eventType.description}. ${Math.ceil((event.expiresAt - Date.now()) / 1000)} seconds to collect`);
  document.getElementById('goldenCookieDescription').textContent = `${eventType.description} · ${Math.ceil((event.expiresAt - Date.now()) / 1000)}s to collect`;
}

// Advances event timing and schedules the next surprise after collection.
function tickGoldenEvent() {
  const event = gameState.goldenEvent;
  if (event && event.expiresAt <= Date.now()) {
    gameState.goldenEvent = null;
    renderAll();
    return;
  }
  if (!event && gameState.timesGambled > 0 && Math.random() < 0.018) spawnGoldenEvent();
  renderGoldenEvent();
}

// Shows one application view and hides the others.
function setView(viewName) {
  views.forEach((view) => {
    view.classList.toggle('active', view.id === `view-${viewName}`);
  });
}

function applySettings() {
  const settings = gameState.settings;
  document.body.dataset.particleQuality = settings.particleQuality;
  document.body.dataset.animationSpeed = settings.animationSpeed;
  document.body.classList.toggle('reduced-motion', settings.reducedMotion);
  document.body.classList.toggle('screen-shake-disabled', !settings.screenShake);

  document.getElementById('particleQualitySetting').value = settings.particleQuality;
  document.getElementById('animationSpeedSetting').value = settings.animationSpeed;
  document.getElementById('reducedMotionSetting').checked = settings.reducedMotion;
  document.getElementById('screenShakeSetting').checked = settings.screenShake;
}

// Shows the first-run tutorial for players who have not started a run.
function showTutorialIfNeeded() {
  if (gameState.timesGambled !== 0 || gameState.prestige > 0) return;
  setView('gamble');
  document.body.classList.add('tutorial-active');
  const rollButton = document.getElementById('rollButton');
  const rollRect = rollButton.getBoundingClientRect();
  tutorialOverlay.style.setProperty('--tutorial-roll-x', `${rollRect.left + rollRect.width / 2}px`);
  tutorialOverlay.style.setProperty('--tutorial-roll-y', `${rollRect.top + rollRect.height / 2}px`);
  rollButton.classList.add('tutorial-roll-focus');
  tutorialOverlay.classList.add('visible');
}

// Checks whether an inventory contains every required material.
function canAfford(inventory, cost) {
  return Object.entries(cost).every(([item, needed]) => (inventory[item] || 0) >= needed);
}

// Checks whether enough items exist in a tier-based material pool.
function canAffordTierCost(inventory, tierCost) {
  const requiredAmount = getDiscountedTierAmount(tierCost.amount);
  const available = TIER_ITEMS[tierCost.tier].reduce(
    (total, item) => total + (inventory[item] || 0),
    0
  );
  return available >= requiredAmount;
}

// Checks both direct and tier-based requirements for an upgrade.
function canAffordUpgrade(inventory, upgrade, cost) {
  return canAfford(inventory, cost)
    && (!upgrade.tier_cost || canAffordTierCost(inventory, upgrade.tier_cost));
}

// Removes a direct material cost from an inventory.
function applyCost(inventory, cost) {
  for (const [item, needed] of Object.entries(cost)) {
    inventory[item] = (inventory[item] || 0) - needed;
  }
}

// Removes a tier-pool cost from the available items.
function applyTierCost(inventory, tierCost) {
  let remaining = getDiscountedTierAmount(tierCost.amount);
  for (const item of TIER_ITEMS[tierCost.tier]) {
    const used = Math.min(inventory[item] || 0, remaining);
    inventory[item] -= used;
    remaining -= used;
    if (remaining === 0) break;
  }
}

// Applies all material costs associated with an upgrade.
function applyUpgradeCost(inventory, upgrade, cost) {
  applyCost(inventory, cost);
  if (upgrade.tier_cost) applyTierCost(inventory, upgrade.tier_cost);
}

// Formats cost materials with ownership-based highlight classes.
function formatCostItems(inventory, cost) {
  return Object.entries(cost).map(([item, amount]) => {
    const owned = (inventory[item] || 0) >= amount;
    return `<span class="cost-item ${owned ? 'cost-item-owned' : 'cost-item-missing'}">${getItemDisplayName(item)} x${amount}</span>`;
  }).join(', ');
}

// Applies the global beginner-friendly economy discount while keeping costs meaningful.
function getDiscountedCost(cost) {
  return Object.fromEntries(
    Object.entries(cost).map(([item, amount]) => [item, Math.max(1, Math.ceil(amount * ECONOMY_COST_MULTIPLIER))])
  );
}

// Discounts tier-pool requirements using the same economy rule as material costs.
function getDiscountedTierAmount(amount) {
  return Math.max(1, Math.ceil(amount * ECONOMY_COST_MULTIPLIER));
}

// Formats direct and tier-pool upgrade costs for display.
function formatUpgradeCost(inventory, upgrade, cost) {
  const exactCost = [formatCostItems(inventory, cost)];
  if (upgrade.tier_cost) {
    const tierItems = TIER_ITEMS[upgrade.tier_cost.tier].map((item) => {
      const owned = (inventory[item] || 0) > 0;
      return `<span class="cost-item ${owned ? 'cost-item-owned' : 'cost-item-missing'}">${getItemDisplayName(item)}</span>`;
    }).join(', ');
    exactCost.push(`any ${getDiscountedTierAmount(upgrade.tier_cost.amount)} from ${upgrade.tier_cost.tier}: ${tierItems}`);
  }
  return exactCost.join(', ');
}

// Adds a reward bundle to an inventory.
function applyReward(inventory, reward) {
  for (const [item, amount] of Object.entries(reward)) {
    inventory[item] = (inventory[item] || 0) + amount;
  }
}

// Calculates the next cost for a standard upgrade.
function getUpgradeCost(key, level) {
  const baseCost = UPGRADE_CATALOG[key].base_cost;
  const earlyDiscount = UPGRADE_CATALOG[key].tier_cost
    ? 1
    : [0.5, 0.75, 1][level] || 1;
  return getDiscountedCost(Object.fromEntries(
    Object.entries(baseCost).map(([item, amount]) => [item, Math.max(1, Math.ceil(amount * (level + 1) * earlyDiscount))])
  ));
}

// Calculates the next cost for a reactor building module.
function getBuildingCost(key, level) {
  const baseCost = BUILDING_CATALOG[key].base_cost;
  return getDiscountedCost(Object.fromEntries(
    Object.entries(baseCost).map(([item, amount]) => [item, amount * (level + 1)])
  ));
}

// Checks whether a building's prerequisite module is complete.
function isBuildingUnlocked(key) {
  const requirement = BUILDING_CATALOG[key].requires;
  return !requirement || (gameState.buildings[requirement] || 0) >= BUILDING_CATALOG[requirement].max_level;
}

// Multiplies all reactor building luck bonuses together.
function getReactorLuckMultiplier() {
  return Object.entries(BUILDING_CATALOG).reduce((multiplier, [key, building]) => {
    return multiplier * Math.pow(building.luck_multiplier, gameState.buildings[key] || 0);
  }, 1);
}

// Calculates the effective luck modifier for one tier using the same rules as rolls.
function getTierLuckMultiplier(tier) {
  const upgradeLuck = 1 + (gameState.upgrades.luck || 0) * 0.015;
  const jackpotLuck = ['1/32', '1/64', '1/128', '1/256', '1/512'].includes(tier)
    ? 1 + (gameState.upgrades.jackpot || 0) * 0.25
    : 1;
  const prestigeLuck = 1 + (gameState.prestigeLuckRewards || 0) * 2;
  const potionLuck = gameState.activeEffects.luck_potion_rolls > 0 ? 3 : 1;
  const eventLuck = isGoldenEventActive() ? getGoldenEventType().multiplier : 1;
  const rarityLuck = Math.pow(upgradeLuck, getTierRarity(tier));

  return rarityLuck * jackpotLuck * prestigeLuck * potionLuck * eventLuck * getReactorLuckMultiplier();
}

// Returns the effective multiplier range across all available loot tiers.
function getTotalLuckMultiplierRange() {
  const multipliers = Object.keys(TIER_WEIGHTS).map(getTierLuckMultiplier);
  return {
    minimum: Math.min(...multipliers),
    maximum: Math.max(...multipliers)
  };
}

function formatLuckMultiplier(multiplier) {
  if (multiplier < 1000) return multiplier.toFixed(2);
  if (multiplier < 1000000) return Math.round(multiplier).toLocaleString();
  return multiplier.toExponential(2).replace('e+', 'e');
}

// Returns the combined level of all reactor buildings.
function getReactorBuildingLevel() {
  return Object.values(gameState.buildings).reduce((total, level) => total + level, 0);
}

// Calculates the current maximum number of rolls per batch.
function getMaxRolls() {
  const baseMax = 5 + gameState.upgrades.bulk * 2 + gameState.prestigeRollRewards * 6;
  const energyBonus = gameState.activeEffects.energy_drink_rolls > 0 ? 2 : 0;
  const goldenBonus = isGoldenEventActive() ? getGoldenEventType().maxRollBonus : 0;
  return baseMax + energyBonus + goldenBonus;
}

// Calculates the current delay between roll animation phases.
function getRollDelay() {
  const speedLevel = gameState.upgrades.speed || 0;
  let delay = 0.8 - speedLevel * 0.1;
  if (gameState.activeEffects.energy_drink_rolls > 0) delay *= 0.4;
  return Math.max(0.08, delay);
}

// Builds weighted tier odds from upgrades, effects, prestige, and buildings.
function getTierWeights() {
  const weights = { ...TIER_WEIGHTS };

  const boosted = {};
  for (const [tier, base] of Object.entries(weights)) {
    boosted[tier] = Math.max(1, Math.round(base * getTierLuckMultiplier(tier)));
  }
  return boosted;
}

// Calculates Luck Potion duration after its upgrade bonus.
function getPotionDuration() {
  return 10 + gameState.upgrades.potion_duration * 5;
}

// Renders all currently owned items and the inventory total.
function showInventory() {
  const inventoryList = document.getElementById('inventoryList');
  const displayOrder = new Map(DISPLAY_ITEMS.map((item, index) => [item, index]));
  const entries = DISPLAY_ITEMS
    .filter((item) => (gameState.inventory[item] || 0) > 0)
    .sort((left, right) => {
      const leftRarity = getTierRarity(getTierForItem(left));
      const rightRarity = getTierRarity(getTierForItem(right));
      return rightRarity - leftRarity || displayOrder.get(left) - displayOrder.get(right);
    });

  if (!entries.length) {
    inventoryList.innerHTML = '<div class="inventory-row"><span class="item-name">Your bag is empty.</span></div>';
    return;
  }

  const total = entries.reduce((sum, item) => sum + gameState.inventory[item], 0);
  inventoryList.innerHTML = [
    ...entries.map((item) => {
      const rarityClass = getTierGlowClass(getTierRarity(getTierForItem(item)));
      return `
      <div class="inventory-row">
        <span class="item-name ${rarityClass}">${getItemDisplayName(item)}</span>
        <span class="item-count">${gameState.inventory[item]}</span>
      </div>
    `;
    }),
    `<div class="inventory-row"><span class="item-name">Total items collected</span><span class="item-count">${total}</span></div>`
  ].join('');
}

// Renders recipes and wires their craft actions.
function showCrafting() {
  const list = document.getElementById('craftingList');
  list.innerHTML = Object.entries(RECIPES)
    .map(([key, recipe]) => {
      const cost = getDiscountedCost(recipe.cost);
      const affordable = canAfford(gameState.inventory, cost);
      const recipeCost = formatCostItems(gameState.inventory, cost);
      const recipeReward = Object.entries(recipe.reward).map(([item, amount]) => `${getItemDisplayName(item)} x${amount}`).join(', ');
      return `
        <div class="recipe-card ${affordable ? '' : 'unaffordable'}">
          <div class="recipe-header">
            <span class="recipe-title">${recipe.name}</span>
            <span class="muted">#${key}</span>
          </div>
          <div class="meta">${recipe.description}</div>
          <div class="cost-box"><strong>Cost</strong><div>${recipeCost}</div></div>
          <div class="reward-box"><strong>Reward</strong><div>${recipeReward}</div></div>
          <div class="action-row">
            <button class="action-button ${affordable ? '' : 'disabled'}" data-craft="${key}" ${affordable ? '' : 'disabled'}>
              ${affordable ? 'Craft' : 'Insufficient Resources'}
            </button>
          </div>
        </div>
      `;
    })
    .join('');

  list.querySelectorAll('[data-craft]').forEach((button) => {
    button.addEventListener('click', () => {
      const key = Number(button.dataset.craft);
      const recipe = RECIPES[key];
      if (!recipe) return;
      const cost = getDiscountedCost(recipe.cost);
      if (!canAfford(gameState.inventory, cost)) {
        showToast('You do not have the required items.');
        return;
      }
      applyCost(gameState.inventory, cost);
      applyReward(gameState.inventory, recipe.reward);
      showToast(`Crafted ${recipe.name}!`);
      renderAll();
    });
  });
}

// Finds the loot tier containing a given item.
function getTierForItem(itemName) {
  return Object.entries(TIER_ITEMS).find(([, items]) => items.includes(itemName))?.[0] || null;
}

// Gives every displayed item a consistent rarity or material label.
function getItemDisplayName(itemName) {
  return `${itemName} (${getTierForItem(itemName) || 'Material'})`;
}

// Generates a randomized bundle of lower-tier deconstruction rewards.
function getDeconstructionResult(itemName) {
  const sourceTier = getTierForItem(itemName);
  const sourceRarity = sourceTier ? getTierRarity(sourceTier) : 0;
  if (!sourceTier || sourceRarity < 1) return null;

  const lowerTiers = Object.keys(TIER_ITEMS).filter((tier) => getTierRarity(tier) < sourceRarity);
  const resultCount = 3 + sourceRarity * 2;
  const result = {};

  for (let index = 0; index < resultCount; index++) {
    const tierIndex = Math.floor(Math.pow(Math.random(), 1.8) * lowerTiers.length);
    const tier = lowerTiers[Math.min(tierIndex, lowerTiers.length - 1)];
    const items = TIER_ITEMS[tier];
    const item = items[Math.floor(Math.random() * items.length)];
    result[item] = (result[item] || 0) + 1;
  }

  return { sourceTier, sourceRarity, resultCount, result };
}

// Renders owned items that can be deconstructed.
function showDeconstruction() {
  const list = document.getElementById('deconstructionList');
  const entries = Object.entries(gameState.inventory)
    .map(([item, count]) => ({ item, count, tier: getTierForItem(item) }))
    .filter(({ count, tier }) => count > 0 && tier && getTierRarity(tier) > 0)
    .sort((left, right) => getTierRarity(right.tier) - getTierRarity(left.tier));

  if (!entries.length) {
    list.innerHTML = '<div class="inventory-row"><span class="item-name">No higher-tier items available for deconstruction.</span></div>';
    return;
  }

  list.innerHTML = entries.map(({ item, count, tier }) => {
    const rarity = getTierRarity(tier);
    const bundleSize = 3 + rarity * 2;
    const lowerRange = rarity === 1 ? '1/2' : `1/2 through ${Object.keys(TIER_ITEMS)[rarity - 1]}`;
    return `
      <div class="recipe-card deconstruct-card">
        <div class="recipe-header">
          <span class="recipe-title">${getItemDisplayName(item)}</span>
          <span class="muted">${tier} · x${count}</span>
        </div>
        <div class="meta">Deconstruct 1 unit into ${bundleSize} randomized items from lower tiers (${lowerRange}).</div>
        <div class="action-row">
          <button class="action-button" data-deconstruct="${item}">Deconstruct 1</button>
        </div>
      </div>
    `;
  }).join('');

  list.querySelectorAll('[data-deconstruct]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.dataset.deconstruct;
      if ((gameState.inventory[item] || 0) < 1) {
        showToast(`You do not own any ${item}.`);
        return;
      }

      const deconstruction = getDeconstructionResult(item);
      if (!deconstruction) return;
      gameState.inventory[item] -= 1;
      applyReward(gameState.inventory, deconstruction.result);
      const summary = Object.entries(deconstruction.result)
        .slice(0, 3)
        .map(([name, amount]) => `${getItemDisplayName(name)} x${amount}`)
        .join(', ');
      showToast(`Deconstructed ${getItemDisplayName(item)}: ${summary}${Object.keys(deconstruction.result).length > 3 ? ', and more.' : '.'}`);
      renderAll();
    });
  });
}

// Renders upgrade cards and wires upgrade purchases.
function showUpgrades() {
  const list = document.getElementById('upgradeList');
  list.innerHTML = Object.entries(UPGRADE_CATALOG)
    .map(([key, value]) => {
      const level = gameState.upgrades[key] || 0;
      const cost = getUpgradeCost(key, level);
      const maxLevel = value.max_level || Infinity;
      const isMaxed = level >= maxLevel;
      const affordable = !isMaxed && canAffordUpgrade(gameState.inventory, value, cost);
      const formattedCost = formatUpgradeCost(gameState.inventory, value, cost);
      return `
        <div class="upgrade-card ${affordable ? '' : 'unaffordable'}">
          <div class="upgrade-header">
            <span class="upgrade-title">${value.name}</span>
            <span class="muted">${isMaxed ? 'MAX' : `Lvl ${level}`}</span>
          </div>
          <div class="meta">${value.description}</div>
          <div class="cost-box"><strong>Cost</strong><div>${formattedCost}</div></div>
          <div class="action-row">
            <button class="action-button ${affordable ? '' : 'disabled'}" data-upgrade="${key}" ${affordable ? '' : 'disabled'}>
              ${isMaxed ? 'Fully Upgraded' : affordable ? 'Upgrade' : 'Not enough resources'}
            </button>
          </div>
        </div>
      `;
    })
    .join('');

  list.querySelectorAll('[data-upgrade]').forEach((button) => {
    button.addEventListener('click', () => {
      const key = button.dataset.upgrade;
      const level = gameState.upgrades[key] || 0;
      const maxLevel = UPGRADE_CATALOG[key].max_level || Infinity;
      if (level >= maxLevel) {
        showToast('That upgrade is already complete.');
        return;
      }
      const cost = getUpgradeCost(key, level);
      if (!canAffordUpgrade(gameState.inventory, UPGRADE_CATALOG[key], cost)) {
        showToast('You do not have enough materials for that upgrade.');
        return;
      }
      applyUpgradeCost(gameState.inventory, UPGRADE_CATALOG[key], cost);
      gameState.upgrades[key] = level + 1;
      showToast(`${UPGRADE_CATALOG[key].name} upgraded!`);
      renderAll();
    });
  });
}

// Renders reactor buildings and wires construction purchases.
function showBuildings() {
  const list = document.getElementById('buildingList');
  list.innerHTML = Object.entries(BUILDING_CATALOG).map(([key, building]) => {
    const level = gameState.buildings[key] || 0;
    const isMaxed = level >= building.max_level;
    const unlocked = isBuildingUnlocked(key);
    const cost = getBuildingCost(key, level);
    const affordable = unlocked && !isMaxed && canAfford(gameState.inventory, cost);
    const multiplier = Math.pow(building.luck_multiplier, level);
    return `
      <div class="building-card ${isMaxed ? 'building-maxed' : ''} ${unlocked ? '' : 'building-locked'}">
        <div class="building-header">
          <span class="building-title">${building.name}</span>
          <span class="muted">${isMaxed ? 'MAX' : `Lvl ${level}/${building.max_level}`}</span>
        </div>
        <div class="meta">${building.description}</div>
        <div class="building-readout"><strong>Luck multiplier</strong><span>x${multiplier.toFixed(2)}</span></div>
        <div class="cost-box"><strong>Build cost</strong><div>${isMaxed ? 'Fully constructed' : unlocked ? formatCostItems(gameState.inventory, cost) : `Requires ${BUILDING_CATALOG[building.requires].name} MAX`}</div></div>
        <div class="action-row">
          <button class="action-button ${affordable ? '' : 'disabled'}" data-building="${key}" ${affordable ? '' : 'disabled'}>
            ${isMaxed ? 'Fully Built' : !unlocked ? 'Locked' : affordable ? 'Build Module' : 'Not enough resources'}
          </button>
        </div>
      </div>
    `;
  }).join('');

  list.querySelectorAll('[data-building]').forEach((button) => {
    button.addEventListener('click', () => {
      const key = button.dataset.building;
      const level = gameState.buildings[key] || 0;
      const building = BUILDING_CATALOG[key];
      const cost = getBuildingCost(key, level);
      if (!building || !isBuildingUnlocked(key) || level >= building.max_level || !canAfford(gameState.inventory, cost)) return;
      applyCost(gameState.inventory, cost);
      gameState.buildings[key] = level + 1;
      saveGame();
      showToast(`${building.name} upgraded to level ${level + 1}.`);
      renderAll();
    });
  });
}
// Applies building-level classes that change the reactor's visuals.
function updateReactorAppearance() {
  const stage = document.querySelector('.gamble-stage');
  if (!stage) return;
  const level = Math.min(10, getReactorBuildingLevel());
  stage.className = stage.className.replace(/\breactor-level-\d+\b/g, '').trim();
  stage.className = stage.className.replace(/\breactor-[a-z-]+-max\b/g, '').trim();
  stage.classList.add(`reactor-level-${level}`);
  Object.entries(BUILDING_CATALOG).forEach(([key, building]) => {
    if ((gameState.buildings[key] || 0) >= building.max_level) {
      stage.classList.add(`reactor-${key.replace('_', '-')}-max`);
    }
  });
}

// Renders owned consumable items and their use actions.
function showUsables() {
  const list = document.getElementById('usableList');
  const existing = Object.keys(USABLES).filter((item) => (gameState.inventory[item] || 0) > 0);

  if (!existing.length) {
    list.innerHTML = '<div class="usable-card"><div class="muted">You have no usable items right now.</div></div>';
    return;
  }

  list.innerHTML = existing
    .map((item) => `
      <div class="usable-card">
        <div class="usable-header">
          <span class="usable-title">${getItemDisplayName(item)}</span>
          <span class="muted">x${gameState.inventory[item]}</span>
        </div>
        <div class="meta">${USABLES[item].description}</div>
        <div class="action-row">
          <button class="action-button" data-use="${item}">Use</button>
        </div>
      </div>
    `)
    .join('');

  list.querySelectorAll('[data-use]').forEach((button) => {
    button.addEventListener('click', () => {
      useUsable(button.dataset.use);
    });
  });
}

// Counts every item currently held in the run inventory.
function getTotalItemsOwned() {
  return Object.values(gameState.inventory).reduce((total, amount) => total + amount, 0);
}

// Calculates the next prestige's total and rare-drop requirements.
function getPrestigeRequirement() {
  const rareTiers = ['1/64', '1/128', '1/256', '1/512', '1/1024', '1/2048', '1/4096', '1/8192', '1/16384', '1/32768'];
  return {
    totalItems: PRESTIGE_ITEM_REQUIREMENT * Math.pow(gameState.prestige + 1, 2),
    rareTier: rareTiers[Math.min(gameState.prestige, rareTiers.length - 1)],
    rareAmount: Math.max(1, 1 + Math.floor(gameState.prestige / 4))
  };
}

// Counts qualifying rolled rare drops for a prestige requirement.
function getPrestigeRareItemsOwned(requirement) {
  return TIER_ITEMS[requirement.rareTier].reduce(
    (total, item) => total + (gameState.inventory[item] || 0),
    0
  );
}

// Checks whether both prestige requirements have been met.
function canAffordPrestige(requirement) {
  return getTotalItemsOwned() >= requirement.totalItems
    && getPrestigeRareItemsOwned(requirement) >= requirement.rareAmount;
}

// Clears run progress while preserving permanent prestige rewards.
function resetRunAfterPrestige() {
  gameState.inventory = defaultInventory();
  gameState.timesGambled = 0;
  gameState.lastRoll = 'None';
  gameState.lastTier = 'None';
  gameState.rarestRolled = 'None';
  gameState.rarestTierRarity = -1;
  gameState.timePlayedSeconds = 0;
  gameState.robots = defaultRobots();
  gameState.upgrades = Object.fromEntries(Object.keys(UPGRADE_CATALOG).map((key) => [key, 0]));
  gameState.buildings = Object.fromEntries(Object.keys(BUILDING_CATALOG).map((key) => [key, 0]));
  gameState.activeEffects = {
    luck_potion_rolls: 0,
    energy_drink_rolls: 0,
    chaos_orb_rolls: 0,
    fortune_wax_rolls: 0
  };
  sessionStartedAt = Date.now();
  automationTimers.forEach((timer) => clearInterval(timer));
  automationTimers = [];
  automationNextAt = null;
}

// Opens the confirmation dialog before a prestige reset.
function showPrestigeConfirmation() {
  prestigeConfirmOverlay.classList.add('visible');
  document.getElementById('confirmPrestigeButton').focus();
}

// Plays the ascension sequence, grants rewards, and resets the run.
async function prestige() {
  if (prestigeInProgress) return;
  if (gameState.prestige >= PRESTIGE_MAX) return;
  const requirement = getPrestigeRequirement();
  if (!canAffordPrestige(requirement)) {
    showToast(`Collect ${requirement.totalItems.toLocaleString()} items and ${requirement.rareAmount} drops from ${requirement.rareTier} first.`);
    return;
  }

  prestigeInProgress = true;
  prestigeConfirmOverlay.classList.remove('visible');
  document.body.classList.add('prestige-transition-active');
  prestigeTransition.classList.add('active');
  await new Promise((resolve) => setTimeout(resolve, 2600));

  gameState.prestige += 1;
  gameState.prestigeLuckRewards += 2;
  gameState.prestigeRollRewards += 2;
  resetRunAfterPrestige();
  saveGame();
  showToast(`Prestige ${gameState.prestige} complete. Your run has been reborn.`);
  renderAll();
  setView('prestige');
  prestigeTransition.classList.remove('active');
  document.body.classList.remove('prestige-transition-active');
  prestigeInProgress = false;
}

// Renders prestige progress, bonuses, and the confirmation action.
function showPrestige() {
  const panel = document.getElementById('prestigePanel');
  const totalItems = getTotalItemsOwned();
  const requirement = getPrestigeRequirement();
  const isMaxed = gameState.prestige >= PRESTIGE_MAX;
  const rareOwned = getPrestigeRareItemsOwned(requirement);
  const canPrestige = canAffordPrestige(requirement) && !isMaxed;
  const progress = Math.min(100, (totalItems / requirement.totalItems) * 100);
  const rareProgress = Math.min(100, (rareOwned / requirement.rareAmount) * 100);
  panel.innerHTML = `
    <div class="prestige-summary">
      <span class="prestige-kicker">Permanent reset</span>
      <strong class="prestige-count">Prestige ${gameState.prestige}/${PRESTIGE_MAX}</strong>
      <p>Reset your current run to claim both permanent rewards. Your prestige level and bonuses remain.</p>
    </div>
    <div class="prestige-progress">
      <div class="prestige-progress-header">
        <span>Items collected this run</span>
        <strong>${totalItems.toLocaleString()} / ${requirement.totalItems.toLocaleString()}</strong>
      </div>
      <div class="prestige-progress-track"><span style="width: ${progress}%"></span></div>
      <div class="prestige-progress-header prestige-rare-requirement">
        <span>Rare drops from ${requirement.rareTier}</span>
        <strong>${rareOwned} / ${requirement.rareAmount}</strong>
      </div>
      <div class="prestige-progress-track"><span style="width: ${rareProgress}%"></span></div>
    </div>
    <div class="prestige-bonuses">
      <div><strong>Luck</strong><span>+${gameState.prestigeLuckRewards * 200}% tier weight</span></div>
      <div><strong>Base rolls</strong><span>+${gameState.prestigeRollRewards * 6} rolls</span></div>
    </div>
    <div class="prestige-rewards">
      <button class="prestige-reward prestige-confirm ${canPrestige ? '' : 'disabled'}" data-prestige="confirm" ${canPrestige ? '' : 'disabled'}>
        <strong>+400% Luck</strong>
        <span>Massively boost tier weights and add <strong>+6 base rolls</strong> for every future run.</span>
        <em>Prestige and claim both rewards</em>
      </button>
    </div>
    ${isMaxed ? '<p class="prestige-complete">Maximum prestige reached.</p>' : '<p class="prestige-warning">Prestiging resets inventory, upgrades, robots, effects, and run statistics.</p>'}
    <div class="prestige-reset-zone">
      <span>Wanna copmletely start over?</span>
      <button class="menu-button danger prestige-reset-button" type="button" data-prestige-reset>Reset Progress</button>
    </div>
  `;
  
  panel.querySelectorAll('[data-prestige]').forEach((button) => {
    button.addEventListener('click', () => showPrestigeConfirmation());
  });
  panel.querySelector('[data-prestige-reset]').addEventListener('click', resetProgress);
}

// Clears every saved system after explicit confirmation.
function resetProgress() {
  if (!window.confirm('Reset all progress? This permanently clears inventory, upgrades, prestige, buildings, robots, and statistics.')) return;
  localStorage.removeItem(SAVE_KEY);
  sessionStorage.clear();
  automationTimers.forEach((timer) => clearInterval(timer));
  window.location.reload();
}

// Calculates a robot's summon interval from its level.
function getRobotInterval(level) {
  return Math.max(0.35, 10 - level * 0.32);
}

// Calculates the material cost for the next robot level.
function getRobotUpgradeCost(level) {
  return getDiscountedCost({
    'Quantum Battery': Math.max(1, level),
    'Particle Lens': Math.max(1, Math.ceil(level / 2)),
    'Muon Detector': Math.max(1, Math.ceil(level / 3))
  });
}

// Renders robot slots and wires robot purchase and upgrade actions.
function showAutomation() {
  const panel = document.getElementById('automationPanel');
  const activeRobots = gameState.robots.filter((level) => level > 0).length;
  panel.className = 'status-card automation-ready';
  panel.innerHTML = `
    <h3>Quantum Summoner Robots: ${activeRobots}/${ROBOT_SLOT_COUNT} online</h3>
    <p class="muted">Buy robots in any slot. Each robot summons independently, starting at one summon about every 10 seconds. Level 30 reaches 2-3 summons per second.</p>
    <div class="robot-grid">
      ${gameState.robots.map((level, index) => {
        if (!level) {
          return `
            <div class="robot-card robot-empty">
              <strong>Slot ${index + 1}</strong>
              <span class="muted">Empty</span>
              <button class="action-button" data-buy-robot="${index}">Buy Robot</button>
              <small>Cost: ${formatCostItems(gameState.inventory, getDiscountedCost(ROBOT_BUY_COST))}</small>
            </div>
          `;
        }

        const interval = getRobotInterval(level);
        const cost = getRobotUpgradeCost(level);
        const affordable = level < ROBOT_MAX_LEVEL && canAfford(gameState.inventory, cost);
        const remaining = automationNextAt?.[index]
          ? Math.max(0, Math.ceil((automationNextAt[index] - Date.now()) / 1000))
          : interval;
        const costText = formatCostItems(gameState.inventory, cost);
        return `
          <div class="robot-card robot-online">
            <strong>Robot ${index + 1}</strong>
            <span>Level ${level}/${ROBOT_MAX_LEVEL}</span>
            <span>Every ${interval}s · Next ${remaining}s</span>
            <button class="action-button" data-upgrade-robot="${index}" ${affordable ? '' : 'disabled'}>
              ${level >= ROBOT_MAX_LEVEL ? 'Max Level' : 'Upgrade'}
            </button>
            <small>${level >= ROBOT_MAX_LEVEL ? 'Fully upgraded' : `Cost: ${costText}`}</small>
          </div>
        `;
      }).join('')}
    </div>
  `;

  panel.querySelectorAll('[data-buy-robot]').forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.buyRobot);
      const cost = getDiscountedCost(ROBOT_BUY_COST);
      if (gameState.robots[index] > 0 || !canAfford(gameState.inventory, cost)) return;
      applyCost(gameState.inventory, cost);
      gameState.robots[index] = 1;
      showToast(`Robot ${index + 1} online.`);
      startAutomation();
      renderAll();
    });
  });

  panel.querySelectorAll('[data-upgrade-robot]').forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.upgradeRobot);
      const level = gameState.robots[index] || 0;
      const cost = getRobotUpgradeCost(level);
      if (!level || level >= ROBOT_MAX_LEVEL || !canAfford(gameState.inventory, cost)) return;
      applyCost(gameState.inventory, cost);
      gameState.robots[index] = level + 1;
      showToast(`Robot ${index + 1} upgraded to level ${level + 1}.`);
      startAutomation();
      renderAll();
    });
  });
}

// Starts or restarts timers for all active robots.
function startAutomation() {
  automationTimers.forEach((timer) => clearInterval(timer));
  automationTimers = [];
  automationNextAt = Array.from({ length: ROBOT_SLOT_COUNT }, () => null);

  gameState.robots.forEach((level, index) => {
    if (!level) return;
    const interval = getRobotInterval(level);
    automationNextAt[index] = Date.now() + interval * 1000;
    automationTimers[index] = setInterval(async () => {
      if (spinInProgress) return;
      spinInProgress = true;
      automationNextAt[index] = Date.now() + interval * 1000;
      updateSpinButtonState();
      await pullRolls(1, false);
      spinInProgress = false;
      updateSpinButtonState();
      renderAll();
    }, interval * 1000);
  });
}

// Consumes a usable item and activates its temporary effect.
function useUsable(itemName) {
  const inventory = gameState.inventory;
  if ((inventory[itemName] || 0) <= 0) {
    showToast(`You do not own any ${itemName}.`);
    return;
  }

  inventory[itemName] -= 1;
  const active = gameState.activeEffects;

  if (itemName === 'Luck Potion') {
    const duration = getPotionDuration();
    active.luck_potion_rolls = Math.max(active.luck_potion_rolls, duration);
    showToast(`Luck Potion activated. Triple luck for ${duration} rolls!`);
  } else if (itemName === 'Energy Drink') {
    active.energy_drink_rolls = Math.max(active.energy_drink_rolls, 3);
    showToast('Energy Drink activated. Faster, more efficient rolls.');
  } else if (itemName === 'Chaos Orb') {
    active.chaos_orb_rolls = Math.max(active.chaos_orb_rolls, 3);
    showToast('Chaos Orb activated. A rare tier is guaranteed over the next 3 rolls!');
  } else if (itemName === 'Fortune Wax') {
    active.fortune_wax_rolls = Math.max(active.fortune_wax_rolls, 5);
    showToast('Fortune Wax activated. Double rewards for the next 5 rolls!');
  }

  renderAll();
}

// Converts a tier label into its ordered rarity index.
function getTierRarity(tier) {
  const rarityMap = {
    '1/2': 0,
    '1/4': 1,
    '1/8': 2,
    '1/16': 3,
    '1/32': 4,
    '1/64': 5,
    '1/128': 6,
    '1/256': 7,
    '1/512': 8,
    '1/1024': 9,
    '1/2048': 10,
    '1/4096': 11,
    '1/8192': 12,
    '1/16384': 13,
    '1/32768': 14,
    '1/65536': 15,
    '1/131072': 16,
    '1/262144': 17,
    '1/524288': 18,
    '1/1048576': 19,
    '1/2097152': 20,
    '1/4194304': 21,
    '1/8388608': 22,
    '1/16777216': 23,
    '1/33554432': 24,
    '1/67108864': 25,
    '1/134217728': 26,
    '1/268435456': 27,
    '1/536870912': 28,
    '1/1073741824': 29,
    '1/2147483648': 30,
    '1/4294967296': 31,
    '1/8589934592': 32,
    '1/17179869184': 33,
    '1/34359738368': 34
  };
  return rarityMap[tier] || 0;
}

// Maps rarity levels to the matching visual glow class.
function getTierGlowClass(rarity) {
  if (rarity <= 3) return 'tier-common';
  if (rarity <= 5) return 'tier-uncommon';
  if (rarity <= 7) return 'tier-rare';
  if (rarity <= 10) return 'tier-epic';
  if (rarity <= 12) return 'tier-legendary';
  if (rarity <= 14) return 'tier-mythic';
  if (rarity <= 16) return 'tier-cosmic';
  if (rarity <= 18) return 'tier-transcendent';
  if (rarity <= 20) return 'tier-omniversal';
  if (rarity <= 22) return 'tier-singularity';
  if (rarity <= 24) return 'tier-apex';
  if (rarity <= 26) return 'tier-absolute';
  if (rarity <= 28) return 'tier-reality';
  if (rarity <= 30) return 'tier-omniscient';
  if (rarity <= 32) return 'tier-infinite';
  return 'tier-finality';
}

// Sets a one-roll guaranteed tier for testing or special effects.
function guaranteeNextTier(tier) {
  if (!TIER_ITEMS[tier]) return;
  guaranteedNextTier = tier;
}

// Creates or retrieves the full-screen rare-drop overlay.
function createSummonOverlay() {
  let overlay = document.getElementById('summonOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'summonOverlay';
    overlay.className = 'summon-overlay';
    overlay.innerHTML = `
      <div class="rare-drop-message" aria-live="assertive">
        <span class="rare-drop-label">Rare drop</span>
        <strong class="rare-drop-item"></strong>
        <span class="rare-drop-rarity"></span>
      </div>
    `;
    document.body.appendChild(overlay);
  }
  return overlay;
}

// Selects the explosion color associated with a rarity class.
function getExplosionColor(glowClass) {
  const colors = {
    'tier-common': '#d1d5db',
    'tier-uncommon': '#4ade80',
    'tier-rare': '#60a5fa',
    'tier-epic': '#c084fc',
    'tier-legendary': '#fbbf24',
    'tier-mythic': '#fb4081',
    'tier-cosmic': '#a78bfa',
    'tier-transcendent': '#22d3ee',
    'tier-omniversal': '#f472b6',
    'tier-singularity': '#f97316',
    'tier-apex': '#ffffff',
    'tier-absolute': '#fef08a',
    'tier-reality': '#fda4af',
    'tier-omniscient': '#ddd6fe',
    'tier-infinite': '#67e8f9',
    'tier-finality': '#ffffff'
  };
  return colors[glowClass] || '#22d3ee';
}

// Spawns animated particles for the summon explosion.
function createBurstParticles(stage, rarity, color, duration) {
  if (gameState.settings.reducedMotion || gameState.settings.particleQuality === 'low') return;
  const qualityMultiplier = gameState.settings.particleQuality === 'medium' ? 0.55 : 1;
  const particleCount = Math.max(4, Math.round((12 + rarity * 8) * qualityMultiplier));
  const distance = 240 + rarity * 70;

  for (let index = 0; index < particleCount; index++) {
    const particle = document.createElement('span');
    const angle = (Math.PI * 2 * index) / particleCount + (Math.random() - 0.5) * 0.35;
    const travel = distance * (0.7 + Math.random() * 0.6);
    particle.className = 'burst-particle';
    particle.style.setProperty('--particle-color', color);
    particle.style.setProperty('--particle-size', `${3 + Math.random() * (3 + rarity * 0.35)}px`);
    particle.style.setProperty('--particle-x', `${Math.cos(angle) * travel}px`);
    particle.style.setProperty('--particle-y', `${Math.sin(angle) * travel}px`);
    particle.style.setProperty('--particle-duration', `${duration * (0.75 + Math.random() * 0.5)}s`);
    stage.appendChild(particle);
    particle.addEventListener('animationend', () => particle.remove(), { once: true });
  }
}

// Runs the staged summon, reveal, explosion, and cooldown animation.
async function rollAnimation(results) {
  const output = document.getElementById('rollOutput');
  const stage = document.querySelector('.gamble-stage');
  const status = document.getElementById('summonStatus');
  const portalGlow = document.querySelector('.portal-glow');
  const overlay = createSummonOverlay();
  const frames = ['|', '/', '-', '\\', '|'];
  const delay = getRollDelay() * 1000;

  overlay.classList.add('active');
  stage.classList.add('summoning');
  status.textContent = 'STATUS: Researching';
  output.textContent = 'The portal crackles to life...';
  output.classList.add('sequential-reveal');

  const rarities = results.map((result) => getTierRarity(result.split('(')[1].slice(0, -1)));
  const maxRarity = Math.max(...rarities);
  const glowClass = getTierGlowClass(maxRarity);
  const explosionColor = getExplosionColor(glowClass);
  const hasFakeout = maxRarity >= 6;
  const rareResult = results[rarities.indexOf(maxRarity)];
  const rareResultParts = rareResult.match(/^(.*) \(([^)]+)\)$/);

  portalGlow.className = `portal-glow ${hasFakeout ? 'tier-common' : glowClass}`;
  overlay.className = `summon-overlay ${glowClass}`;
  if (maxRarity >= RARE_OVERLAY_THRESHOLD && rareResultParts) {
    overlay.querySelector('.rare-drop-item').textContent = rareResultParts[1];
    overlay.querySelector('.rare-drop-rarity').textContent = rareResultParts[2];
  }
  document.body.classList.add('global-summon', glowClass);
  document.body.style.setProperty('--summon-ui-color', explosionColor);
  stage.style.setProperty('--summon-pulse-duration', `${Math.max(0.3, 1 - maxRarity * 0.04)}s`);

  for (const frame of frames) {
    output.textContent = `Researching the particle... ${frame}`;
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  if (hasFakeout) {
    status.textContent = 'STATUS: Signal Fading';
    output.textContent = 'The signal collapses...';
    await new Promise((resolve) => setTimeout(resolve, 320));

    const flash = document.createElement('div');
    flash.className = 'summon-fakeout-flash';
    flash.style.color = explosionColor;
    stage.appendChild(flash);
    portalGlow.className = `portal-glow ${glowClass}`;
    stage.classList.add('fakeout-reveal');
    status.textContent = 'STATUS: Rarity Spike';
    output.textContent = 'Impossible signal detected.';
    await new Promise((resolve) => setTimeout(resolve, 620));
    flash.remove();
    stage.classList.remove('fakeout-reveal');
  }

  output.textContent = 'The particle opens...';
  await new Promise((resolve) => setTimeout(resolve, delay * 0.8));

  const explosionSize = 400 + maxRarity * 160;
  const explosionDuration = 0.7 + maxRarity * 0.12;
  const explosion = document.createElement('div');
  explosion.className = 'explosion';
  explosion.style.setProperty('--explosion-size', `${explosionSize}px`);
  explosion.style.setProperty('--explosion-duration', `${explosionDuration}s`);
  explosion.style.color = explosionColor;
  stage.appendChild(explosion);
  createBurstParticles(stage, maxRarity, explosionColor, explosionDuration);

  await new Promise((resolve) => setTimeout(resolve, explosionDuration * 1000));
  explosion.remove();

  output.textContent = '>> Research Complete <<';
  revealInProgress = true;
  for (let i = 0; i < results.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, 180));
    if (skipRevealRequested) break;
    appendRevealItem(output, results[i]);
    if (results[i] === rareResult && maxRarity >= RARE_OVERLAY_THRESHOLD && rareResultParts) {
      overlay.classList.add('active', 'rare-drop-active');
    }
  }

  if (skipRevealRequested) {
    const revealedCount = output.querySelectorAll('.reveal-item').length;
    results.slice(revealedCount).forEach((result) => appendRevealItem(output, result, true));
    if (maxRarity >= RARE_OVERLAY_THRESHOLD && rareResultParts) {
      overlay.classList.add('active', 'rare-drop-active');
    }
  }

  status.textContent = 'Revealed';
  revealInProgress = false;
  skipRevealRequested = false;
  const settleDuration = Math.min(1400, 500 + maxRarity * 55);
  stage.style.setProperty('--settle-duration', `${settleDuration}ms`);
  stage.classList.add('cooling-down');
  await new Promise((resolve) => setTimeout(resolve, settleDuration));
  stage.classList.add('returning-idle');
  await new Promise((resolve) => setTimeout(resolve, 220));
  overlay.classList.remove('active');
  stage.classList.add('idle-fade-in');
  stage.classList.remove('summoning');
  stage.classList.remove('cooling-down');
  stage.classList.remove('returning-idle');
  portalGlow.className = 'portal-glow';
  await new Promise((resolve) => setTimeout(resolve, 180));
  output.classList.remove('sequential-reveal');
  stage.classList.remove('idle-fade-in');
  document.body.classList.remove('global-summon', glowClass);
  document.body.style.removeProperty('--summon-ui-color');
  overlay.className = 'summon-overlay';
  overlay.classList.remove('rare-drop-active');
  overlay.querySelector('.rare-drop-item').textContent = '';
  overlay.querySelector('.rare-drop-rarity').textContent = '';
  stage.style.removeProperty('--summon-pulse-duration');
  stage.style.removeProperty('--settle-duration');
}

// Plays every summon animation in sequence for visual testing.
async function previewAllSummonAnimations() {
  if (animationPreviewInProgress || spinInProgress) return;

  animationPreviewInProgress = true;
  spinInProgress = true;
  updateSpinButtonState();
  setView('gamble');

  try {
    for (const tier of Object.keys(TIER_ITEMS)) {
      if (!animationPreviewInProgress) break;
      const item = TIER_ITEMS[tier][0];
      await rollAnimation([`${item} (${tier})`]);
    }
  } finally {
    animationPreviewInProgress = false;
    spinInProgress = false;
    updateSpinButtonState();
  }
}

// Plays one selected tier animation for visual testing.
async function previewSummonAnimation(tier) {
  if (animationPreviewInProgress || spinInProgress || !TIER_ITEMS[tier]) return;

  animationPreviewInProgress = true;
  spinInProgress = true;
  updateSpinButtonState();
  setView('gamble');

  try {
    const item = TIER_ITEMS[tier][0];
    await rollAnimation([`${item} (${tier})`]);
  } finally {
    animationPreviewInProgress = false;
    spinInProgress = false;
    updateSpinButtonState();
  }
}

// Stops an active animation preview after the current frame.
function stopAnimationPreview() {
  animationPreviewInProgress = false;
}

// Adds one rolled result to the terminal reveal list.
function appendRevealItem(output, result, instant = false) {
  const tier = result.split('(')[1].slice(0, -1);
  const item = document.createElement('div');
  item.className = `reveal-item ${getTierGlowClass(getTierRarity(tier))}`;
  item.textContent = ` - ${result}`;
  if (instant) item.classList.add('instant-reveal');
  output.appendChild(item);
}

// Generates roll results, updates inventory, and optionally animates them.
async function pullRolls(rolls, animate = true) {
  if (!Number.isInteger(rolls) || rolls < 1) {
    showToast('Invalid roll count.');
    return;
  }

  const inventory = gameState.inventory;
  const active = gameState.activeEffects;
  const perks = getTierWeights();
  const results = [];

  for (let index = 0; index < rolls; index++) {
    let tier = '';
    if (guaranteedNextTier) {
      tier = guaranteedNextTier;
      guaranteedNextTier = null;
    } else if (active.chaos_orb_rolls > 0) {
      const chaosTiers = ['1/64', '1/128', '1/256', '1/512'];
      tier = chaosTiers[Math.floor(Math.random() * chaosTiers.length)];
      active.chaos_orb_rolls -= 1;
    } else {
      const weightedKeys = Object.keys(perks);
      const weightedValues = Object.values(perks);
      const total = weightedValues.reduce((sum, value) => sum + value, 0);
      let threshold = Math.random() * total;
      for (let i = 0; i < weightedKeys.length; i++) {
        threshold -= weightedValues[i];
        if (threshold <= 0) {
          tier = weightedKeys[i];
          break;
        }
      }

      if (!tier) {
        tier = weightedKeys[weightedKeys.length - 1];
      }
    }

    if (active.luck_potion_rolls > 0) active.luck_potion_rolls -= 1;
    if (active.energy_drink_rolls > 0) active.energy_drink_rolls -= 1;
    if (active.fortune_wax_rolls > 0) active.fortune_wax_rolls -= 1;

    const item = TIER_ITEMS[tier][Math.floor(Math.random() * TIER_ITEMS[tier].length)];
    inventory[item] = (inventory[item] || 0) + 1;
    if (active.fortune_wax_rolls > 0) inventory[item] += 1;

    gameState.timesGambled += 1;
    gameState.lastTier = tier;
    gameState.lastRoll = `${item} (${tier})`;
    if (getTierRarity(tier) > gameState.rarestTierRarity) {
      gameState.rarestTierRarity = getTierRarity(tier);
      gameState.rarestRolled = `${item} (${tier})`;
    }
    results.push(`${item} (${tier})`);
  }

  const output = document.getElementById('rollOutput');
  const status = document.getElementById('summonStatus');
  if (!animate) {
    gameState.timePlayedSeconds = getTimePlayedSeconds();
    sessionStartedAt = Date.now();
    localStorage.setItem(SAVE_KEY, JSON.stringify(gameState));
    return;
  }
  output.textContent = 'The chamber stabilizes...';
  output.innerHTML = 'The chamber stabilizes...';
  status.textContent = 'Charging';
  await rollAnimation(results);
  renderAll();
}

// Synchronizes roll controls with limits and active animation state.
function updateSpinButtonState() {
  const spinButton = document.getElementById('rollButton');
  const rollCountLabel = document.getElementById('rollCountLabel');
  const rollCountInput = document.getElementById('rollCount');
  const maxRolls = getMaxRolls();
  const selectedRolls = Number(rollCountInput.value) || 1;
  const clampedRolls = Math.min(Math.max(selectedRolls, 1), maxRolls);

  rollCountLabel.textContent = `Roll count (max ${maxRolls})`;

  if (Number(rollCountInput.value) !== clampedRolls) {
    rollCountInput.value = clampedRolls;
  }

  if (spinInProgress) {
    spinButton.disabled = true;
    spinButton.setAttribute('aria-label', 'Rolling...');
    rollCountInput.disabled = true;
    return;
  }

  rollCountInput.disabled = false;
  rollCountInput.max = maxRolls;
  rollCountInput.setAttribute('max', String(maxRolls));
  rollCountInput.setAttribute('aria-label', `Roll count (max ${maxRolls})`);
  spinButton.disabled = false;
  spinButton.setAttribute('aria-label', `Spin the machine (max ${maxRolls})`);
}

// Notifies the player when an upgrade becomes affordable.
function notifyAffordableUpgradeIfNeeded() {
  const affordableUpgrades = Object.entries(UPGRADE_CATALOG).filter(([key]) => {
    const level = gameState.upgrades[key] || 0;
    const maxLevel = UPGRADE_CATALOG[key].max_level || Infinity;
    if (level >= maxLevel) return false;
    const cost = getUpgradeCost(key, level);
    return canAffordUpgrade(gameState.inventory, UPGRADE_CATALOG[key], cost);
  });

  if (!affordableUpgrades.length) {
    lastAffordableUpgradeNotice = false;
    return;
  }

  const names = affordableUpgrades.map(([, value]) => value.name);
  const summary = names.length > 2 ? `${names.slice(0, 2).join(', ')} and ${names.length - 2} more` : names.join(', ');

  if (!lastAffordableUpgradeNotice) {
    showToast(`Upgrade available: ${summary}`);
    lastAffordableUpgradeNotice = true;
  }
}

// Refreshes every dynamic game panel and control state.
function renderAll() {
  updateStats();
  showInventory();
  showCrafting();
  showDeconstruction();
    showBuildings();
  showUpgrades();
  showAutomation();
  showUsables();
  showPrestige();
    updateReactorAppearance();
  notifyAffordableUpgradeIfNeeded();
  updateSpinButtonState();
  renderGoldenEvent();
}

menuButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const viewName = button.dataset.view;
    if (viewName === 'save') {
      saveGame();
      return;
    }
    setView(viewName);
  });
});

document.getElementById('particleQualitySetting').addEventListener('change', (event) => {
  gameState.settings.particleQuality = event.target.value;
  applySettings();
  saveGame();
});

document.getElementById('animationSpeedSetting').addEventListener('change', (event) => {
  gameState.settings.animationSpeed = event.target.value;
  applySettings();
  saveGame();
});

document.getElementById('reducedMotionSetting').addEventListener('change', (event) => {
  gameState.settings.reducedMotion = event.target.checked;
  applySettings();
  saveGame();
});

document.getElementById('screenShakeSetting').addEventListener('change', (event) => {
  gameState.settings.screenShake = event.target.checked;
  applySettings();
  saveGame();
});

document.getElementById('rollButton').addEventListener('click', async () => {
  if (spinInProgress) {
    showToast('A roll is already in progress.');
    return;
  }

  const maxRolls = getMaxRolls();
  const requested = Number(document.getElementById('rollCount').value) || 1;
  const safeRolls = Math.min(Math.max(requested, 1), maxRolls);
  document.getElementById('rollCount').value = safeRolls;

  spinInProgress = true;
  updateStats();
  updateSpinButtonState();
  setView('gamble');
  await pullRolls(safeRolls);
  spinInProgress = false;
  updateStats();
  updateSpinButtonState();
});

document.getElementById('rollOutput').addEventListener('click', () => {
  if (!spinInProgress || !revealInProgress || (gameState.upgrades.terminal_overclock || 0) < 1) return;
  skipRevealRequested = true;
});

document.getElementById('goldenCookie').addEventListener('click', collectGoldenEvent);

document.getElementById('saveNowButton').addEventListener('click', () => {
  saveGame();
});

document.getElementById('cancelPrestigeButton').addEventListener('click', () => {
  prestigeConfirmOverlay.classList.remove('visible');
});

document.getElementById('confirmPrestigeButton').addEventListener('click', () => {
  prestige();
});

document.getElementById('startTutorialButton').addEventListener('click', () => {
  tutorialOverlay.classList.remove('visible');
  setView('gamble');
  document.body.classList.remove('tutorial-active');
  document.getElementById('rollButton').classList.remove('tutorial-roll-focus');
  tutorialOverlay.style.removeProperty('--tutorial-roll-x');
  tutorialOverlay.style.removeProperty('--tutorial-roll-y');
  document.getElementById('rollButton').focus();
});

applySettings();
renderAll();
setView(gameState.timesGambled === 0 ? 'gamble' : 'home');
showTutorialIfNeeded();
setInterval(() => {
  updateStats();
  showAutomation();
  tickGoldenEvent();
}, 1000);
startAutomation();
