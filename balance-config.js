// balance-config.js - Centralized game balance configuration
export const balanceConfig = {

/****************************************
 *                                      *
 *             EMPLOYEES                *
 *                                      *
 ****************************************/
  employees: {
    // Scaling factors
    productionScaling: 1.0,
    wageExponent: 1.15, // Balanced scaling within tiers (reduced from 1.5)

    // Individual employee configs
    rookie: {
      baseProduction: 2,
      baseWage: 0,
      maxOwned: 10,
      purchaseCost: 5,
      costScaling: 2,
      wageScaling: false,
      oneTimePurchase: true,
    },
    intern: {
      baseProduction: 15,
      baseWage: 25, // Start higher
      maxOwned: 20,
      wageScaling: true,
      wageExponent: 1.1,
    },
    novice: {
      baseProduction: 50, // 5x intern
      baseWage: 2000, // 40x cost for 5x production
      maxOwned: 25,
      wageScaling: true,
    },
    patty: {
      baseProduction: 300, // 6x novice
      baseWage: 50000, // 25x cost for 6x production
      maxOwned: 30,
      wageScaling: true,
    },
    grill: {
      baseProduction: 2000, // ~7x patty
      baseWage: 1500000, // 30x cost - millions now
      maxOwned: 35,
      wageScaling: true,
    },
    technician: {
      baseProduction: 15000, // 7.5x grill
      baseWage: 50000000, // 50 million/s
      maxOwned: 40,
      wageScaling: true,
    },
    flame: {
      baseProduction: 125000, // ~8x technician
      baseWage: 2000000000, // 2 billion/s
      maxOwned: 45,
      wageScaling: true,
    },
    griddle: {
      baseProduction: 1000000, // 8x flame - 1M BPS!
      baseWage: 100000000000, // 100 billion/s
      maxOwned: 50,
      wageScaling: true,
    },
  },

/****************************************
 *                                      *
 *             CASHIERS                 *
 *                                      *
 ****************************************/
  cashiers: {
    // Cost scaling configuration
    costScaling: {
      csp: 5,      // CSP cashiers scale 5x per level
      default: 1.5  // Other cashiers scale 1.5x per level
    },

    // Cashier type definitions
    types: {
      free: {
        name: "You (Original Cashier)",
        maxOwned: 1,
        cost: { type: "free" },
        requirement: { type: "flips", amount: 0 },
        description: "That's you! The original cashier who started it all.",
      },

      burger1: {
        name: "Intern Cashier",
        maxOwned: 1,
        cost: { type: "money", amount: 5000000 }, // One-time $5M cost
        requirement: { type: "totalBurgersSold", amount: 750000 },
        description: "Intern Cashier - flips and sells burgers! One-time cost of $5M",
      },

      burger2: {
        name: "Burger Enthusiast",
        maxOwned: 1,
        cost: { type: "burgers", amount: 150 }, // 150 burgers/sec ongoing
        requirement: { type: "production", amount: 300 },
        description: "Passionate about burgers - costs 150 burgers/sec to keep happy",
      },

      csp1: {
        name: "Customer Expert",
        maxOwned: 999,
        cost: { type: "csp", amount: 5 }, // 5 CSP/sec base (scales 5x)
        requirement: { type: "resource", resource: "csp", amount: 5000 },
        description: "Masters customer satisfaction - costs CSP per second",
      },

      money1: {
        name: "Professional Cashier",
        maxOwned: 999,
        cost: { type: "money", amount: 10000 }, // $10k/sec base (scales 1.5x)
        requirement: { type: "income", amount: 1000000 },
        description: "Reliable and efficient - costs $10,000/sec",
      },
    }
  },

/****************************************
 *                                      *
 *           ADVERTISING                *
 *                                      *
 ****************************************/
  advertising: {
    // System unlock requirement
    systemUnlockRequirement: 1000000, // 1 trillion burgers sold

    // Advertising upgrade definitions
    upgrades: {
      // Early game - unlocked by burgers sold
      localFlyers: {
        name: 'Local Flyers',
        description: 'Hand out flyers in the neighborhood',
        cost: 100,
        demandMultiplier: 0.2, // +20%
        priceBonusPercent: 0.1, // +10% of base price
        unlockRequirement: { type: 'totalBurgersSold', amount: 1000 },
        tier: 'early'
      },
      newspaperAd: {
        name: 'Newspaper Ad',
        description: 'Advertise in the local newspaper',
        cost: 500,
        demandMultiplier: 0.3, // +30%
        priceBonusPercent: 0.2, // +20% of base price
        unlockRequirement: { type: 'totalBurgersSold', amount: 5000 },
        tier: 'early'
      },
      radioSpot: {
        name: 'Radio Spot',
        description: 'Get your burgers on the radio waves',
        cost: 2500,
        demandMultiplier: 0.5, // +50%
        priceBonusPercent: 0.4, // +40% of base price
        unlockRequirement: { type: 'totalBurgersSold', amount: 25000 },
        tier: 'early'
      },

      // Late game - unlocked by total money earned
      socialMedia: {
        name: 'Social Media Campaign',
        description: 'Go viral with burger content',
        cost: 50000,
        demandMultiplier: 1.0, // +100%
        priceBonusPercent: 1.0, // +100% of base price
        unlockRequirement: { type: 'moneyEarned', amount: 100000 },
        tier: 'late'
      },
      tvCommercial: {
        name: 'TV Commercial',
        description: 'Prime time burger advertising',
        cost: 500000,
        demandMultiplier: 2.0, // +200%
        priceBonusPercent: 4.0, // +400% of base price
        unlockRequirement: { type: 'moneyEarned', amount: 1000000 },
        tier: 'late'
      },
      globalBrand: {
        name: 'Global Brand',
        description: 'Become a worldwide burger phenomenon',
        cost: 5000000,
        demandMultiplier: 5.0, // +500%
        priceBonusPercent: 20.0, // +2000% of base price
        unlockRequirement: { type: 'moneyEarned', amount: 10000000 },
        tier: 'late'
      }
    }
  },

/****************************************
 *                                      *
 *        OPERATIONS CENTER             *
 *                                      *
 ****************************************/
  operations: {
    upgrades: {
      rookieEfficiency: {
        name: "Rookie Efficiency Program",
        icon: "👶",
        description: "Professional training to boost Rookie productivity",
        unlockRequirement: "Own 10 Rookies",
        costs: [
          10000, 100000, 500000, 2500000, 20000000,
          50000000, 200000000, 1000000000, 5000000000, 25000000000
        ],
        maxLevel: 10,
        category: "training",
        currency: "cash",
        baseMultiplier: 1.5, // 50% increase per level, multiplicative
      },

      burgerRecovery: {
        name: "Burger Recovery Protocol",
        icon: "🔄",
        description: "Recover a percentage of wasted burgers",
        unlockRequirement: "Reach 25 burgers/sec waste",
        costs: [25000, 250000, 5000000, 50000000, 500000000],
        maxLevel: 5,
        category: "thresholds",
        currency: "cash",
        recoveryRates: [0, 10, 20, 30, 40, 50], // Recovery percentages per level
      },

      wageReduction: {
        name: "Wage Negotiation",
        icon: "💰",
        description: "Reduce employee wages through better contracts",
        unlockRequirement: "Reach $1,000/s in wages",
        costs: [
          100000, 500000, 2500000, 12500000, 62500000,
          312500000, 1562500000, 7812500000, 39062500000, 195312500000
        ],
        maxLevel: 10,
        category: "cost-reduction",
        currency: "cash",
        reductionPerLevel: 5, // 5% reduction per level
      },

      flippingRobot: {
        name: "Automated Flipping Robot",
        icon: "🤖",
        description: "Advanced robotics that flip burgers automatically - no wages required!",
        unlockRequirement: "Sell 2,000,000 burgers",
        costs: [
          50000000,      // Level 1 - 500 BPS
          5000000000,    // Level 2 - 1,000 BPS
          50000000000,   // Level 3 - 2,000 BPS
          500000000000,  // Level 4 - 4,000 BPS
          5000000000000  // Level 5 - 8,000 BPS
        ],
        maxLevel: 5,
        category: "automation",
        currency: "cash",
        rarity: "legendary",
        baseProduction: 500, // Base BPS, doubles each level
      },

      smartPricing: {
        name: "Dynamic Price Controls",
        icon: "📊",
        description: "Price increment buttons automatically adjust based on your burger price",
        unlockRequirement: "Reach $25 burger price",
        costs: [
          500000, 2500000, 15000000, 125000000,
          1250000000, 25000000000, 250000000000
        ],
        maxLevel: 7,
        category: "interface",
        currency: "cash",
        rarity: "common",
        priceThresholds: [25, 50, 100, 500, 1000, 5000, 50000],
      }
    }
  },

/****************************************
 *                                      *
 *           INGREDIENTS                *
 *                                      *
 ****************************************/
ingredients: { // Root object for ingredient upgrades
  priceMultiplier: 1.0, // Base multiplier applied to all ingredient costs
  costExponent: 2.5, // Exponential scaling factor for later level costs

  lettuce: { // Lettuce ingredient definition
    levels: [ // Array of lettuce upgrade levels
      { cost: 10, priceBoostPercent: 10 }, // Level 1 — very cheap starter boost (+10%)
      { cost: 6000, priceBoostPercent: 200 }, // Level 2 — early mid-game boost (+200%)
      { cost: 487500, priceBoostPercent: 400 }, // Level 3 — stronger boost (+400%)
      { cost: 5000000, priceBoostPercent: 1000 }, // Level 4 — big jump (+1000%)
      { cost: 100000000, priceBoostPercent: 2000 }, // Level 5 — late-game scaling (+2000%)
      { cost: 1000000000, priceBoostPercent: 4000 }, // Level 6 — hefty boost (+4000%)
      { cost: 20000000000, priceBoostPercent: 8000 }, // Level 7 — endgame tier (+8000%)
      { cost: 200000000000, priceBoostPercent: 16000 }, // Level 8 — massive boost (+16000%)
      { cost: 2000000000000, priceBoostPercent: 32000 }, // Level 9 — huge multiplier (+32000%)
      { cost: 100000000000000, priceBoostPercent: 64000 }, // Level 10 — capstone (+64000%)
    ], // End lettuce levels
  }, // End lettuce

  tomatoes: { // Tomatoes ingredient definition
    levels: [
      { cost: 25, priceBoostPercent: 20 }, // Level 1 — starter boost (+20%)
      { cost: 12000, priceBoostPercent: 250 }, // Level 2 — early boost (+250%)
      { cost: 585000, priceBoostPercent: 500 }, // Level 3 — moderate boost (+500%)
      { cost: 10000000, priceBoostPercent: 1250 }, // Level 4 — big jump (+1250%)
      { cost: 150000000, priceBoostPercent: 2500 }, // Level 5 — scaling (+2500%)
      { cost: 1500000000, priceBoostPercent: 5000 }, // Level 6 — large boost (+5000%)
      { cost: 30000000000, priceBoostPercent: 10000 }, // Level 7 — endgame tier (+10000%)
      { cost: 300000000000, priceBoostPercent: 20000 }, // Level 8 — huge boost (+20000%)
      { cost: 3000000000000, priceBoostPercent: 40000 }, // Level 9 — massive boost (+40000%)
      { cost: 200000000000000, priceBoostPercent: 80000 }, // Level 10 — capstone (+80000%)
    ],
  },

  onions: {
    levels: [
      { cost: 100, priceBoostPercent: 30 }, // Level 1 — starter boost (+30%)
      { cost: 18000, priceBoostPercent: 300 }, // Level 2 — early boost (+300%)
      { cost: 731250, priceBoostPercent: 600 }, // Level 3 — moderate boost (+600%)
      { cost: 15000000, priceBoostPercent: 1500 }, // Level 4 — big jump (+1500%)
      { cost: 200000000, priceBoostPercent: 3000 }, // Level 5 — scaling (+3000%)
      { cost: 2000000000, priceBoostPercent: 6000 }, // Level 6 — large boost (+6000%)
      { cost: 40000000000, priceBoostPercent: 12000 }, // Level 7 — endgame tier (+12000%)
      { cost: 400000000000, priceBoostPercent: 24000 }, // Level 8 — huge boost (+24000%)
      { cost: 4000000000000, priceBoostPercent: 48000 }, // Level 9 — massive boost (+48000%)
      { cost: 300000000000000, priceBoostPercent: 96000 }, // Level 10 — capstone (+96000%)
    ],
  },

  pickles: {
    levels: [
      { cost: 150, priceBoostPercent: 40 }, // Level 1 — starter boost (+40%)
      { cost: 24000, priceBoostPercent: 350 }, // Level 2 — early boost (+350%)
      { cost: 877500, priceBoostPercent: 700 }, // Level 3 — moderate boost (+700%)
      { cost: 20000000, priceBoostPercent: 1750 }, // Level 4 — big jump (+1750%)
      { cost: 250000000, priceBoostPercent: 3500 }, // Level 5 — scaling (+3500%)
      { cost: 2500000000, priceBoostPercent: 7000 }, // Level 6 — large boost (+7000%)
      { cost: 50000000000, priceBoostPercent: 14000 }, // Level 7 — endgame tier (+14000%)
      { cost: 500000000000, priceBoostPercent: 28000 }, // Level 8 — huge boost (+28000%)
      { cost: 5000000000000, priceBoostPercent: 56000 }, // Level 9 — massive boost (+56000%)
      { cost: 400000000000000, priceBoostPercent: 112000 }, // Level 10 — capstone (+112000%)
    ],
  },

  ketchup: {
    levels: [
      { cost: 200, priceBoostPercent: 50 }, // Level 1 — starter boost (+50%)
      { cost: 30000, priceBoostPercent: 400 }, // Level 2 — early boost (+400%)
      { cost: 1072500, priceBoostPercent: 800 }, // Level 3 — moderate boost (+800%)
      { cost: 25000000, priceBoostPercent: 2000 }, // Level 4 — big jump (+2000%)
      { cost: 300000000, priceBoostPercent: 4000 }, // Level 5 — scaling (+4000%)
      { cost: 3000000000, priceBoostPercent: 8000 }, // Level 6 — large boost (+8000%)
      { cost: 60000000000, priceBoostPercent: 16000 }, // Level 7 — endgame tier (+16000%)
      { cost: 600000000000, priceBoostPercent: 32000 }, // Level 8 — huge boost (+32000%)
      { cost: 6000000000000, priceBoostPercent: 64000 }, // Level 9 — massive boost (+64000%)
      { cost: 500000000000000, priceBoostPercent: 128000 }, // Level 10 — capstone (+128000%)
    ],
  },

  mushrooms: {
    levels: [
      { cost: 300, priceBoostPercent: 60 }, // Level 1 — starter boost (+60%)
      { cost: 60000, priceBoostPercent: 450 }, // Level 2 — early boost (+450%)
      { cost: 1316250, priceBoostPercent: 900 }, // Level 3 — moderate boost (+900%)
      { cost: 30000000, priceBoostPercent: 2250 }, // Level 4 — big jump (+2250%)
      { cost: 350000000, priceBoostPercent: 4500 }, // Level 5 — scaling (+4500%)
      { cost: 3500000000, priceBoostPercent: 9000 }, // Level 6 — large boost (+9000%)
      { cost: 70000000000, priceBoostPercent: 18000 }, // Level 7 — endgame tier (+18000%)
      { cost: 700000000000, priceBoostPercent: 36000 }, // Level 8 — huge boost (+36000%)
      { cost: 7000000000000, priceBoostPercent: 72000 }, // Level 9 — massive boost (+72000%)
      { cost: 600000000000000, priceBoostPercent: 144000 }, // Level 10 — capstone (+144000%)
    ],
  },

  jalapenos: {
    levels: [
      { cost: 500, priceBoostPercent: 70 }, // Level 1 — starter boost (+70%)
      { cost: 90000, priceBoostPercent: 500 }, // Level 2 — early boost (+500%)
      { cost: 1608750, priceBoostPercent: 1000 }, // Level 3 — moderate boost (+1000%)
      { cost: 35000000, priceBoostPercent: 2500 }, // Level 4 — big jump (+2500%)
      { cost: 400000000, priceBoostPercent: 5000 }, // Level 5 — scaling (+5000%)
      { cost: 4000000000, priceBoostPercent: 10000 }, // Level 6 — large boost (+10000%)
      { cost: 80000000000, priceBoostPercent: 20000 }, // Level 7 — endgame tier (+20000%)
      { cost: 800000000000, priceBoostPercent: 40000 }, // Level 8 — huge boost (+40000%)
      { cost: 8000000000000, priceBoostPercent: 80000 }, // Level 9 — massive boost (+80000%)
      { cost: 700000000000000, priceBoostPercent: 160000 }, // Level 10 — capstone (+160000%)
    ],
  },

  bacon: {
    levels: [
      { cost: 750, priceBoostPercent: 80 }, // Level 1 — starter boost (+80%)
      { cost: 120000, priceBoostPercent: 600 }, // Level 2 — early boost (+600%)
      { cost: 1950000, priceBoostPercent: 1200 }, // Level 3 — moderate boost (+1200%)
      { cost: 40000000, priceBoostPercent: 3000 }, // Level 4 — big jump (+3000%)
      { cost: 450000000, priceBoostPercent: 6000 }, // Level 5 — scaling (+6000%)
      { cost: 4500000000, priceBoostPercent: 12000 }, // Level 6 — large boost (+12000%)
      { cost: 90000000000, priceBoostPercent: 24000 }, // Level 7 — endgame tier (+24000%)
      { cost: 900000000000, priceBoostPercent: 48000 }, // Level 8 — huge boost (+48000%)
      { cost: 9000000000000, priceBoostPercent: 96000 }, // Level 9 — massive boost (+96000%)
      { cost: 800000000000000, priceBoostPercent: 192000 }, // Level 10 — capstone (+192000%)
    ],
  },

  dijon: {
    levels: [
      { cost: 1000, priceBoostPercent: 90 }, // Level 1 — starter boost (+90%)
      { cost: 180000, priceBoostPercent: 750 }, // Level 2 — early boost (+750%)
      { cost: 2437500, priceBoostPercent: 1500 }, // Level 3 — moderate boost (+1500%)
      { cost: 45000000, priceBoostPercent: 3750 }, // Level 4 — big jump (+3750%)
      { cost: 500000000, priceBoostPercent: 7500 }, // Level 5 — scaling (+7500%)
      { cost: 5000000000, priceBoostPercent: 15000 }, // Level 6 — large boost (+15000%)
      { cost: 100000000000, priceBoostPercent: 30000 }, // Level 7 — endgame tier (+30000%)
      { cost: 1000000000000, priceBoostPercent: 60000 }, // Level 8 — huge boost (+60000%)
      { cost: 10000000000000, priceBoostPercent: 120000 }, // Level 9 — massive boost (+120000%)
      { cost: 900000000000000, priceBoostPercent: 240000 }, // Level 10 — capstone (+240000%)
    ],
  },

  cheese: {
    levels: [
      { cost: 2500, priceBoostPercent: 100 }, // Level 1 — starter boost (+100%)
      { cost: 240000, priceBoostPercent: 1000 }, // Level 2 — early boost (+1000%)
      { cost: 2925000, priceBoostPercent: 2000 }, // Level 3 — moderate boost (+2000%)
      { cost: 50000000, priceBoostPercent: 5000 }, // Level 4 — big jump (+5000%)
      { cost: 550000000, priceBoostPercent: 10000 }, // Level 5 — scaling (+10000%)
      { cost: 5500000000, priceBoostPercent: 20000 }, // Level 6 — large boost (+20000%)
      { cost: 110000000000, priceBoostPercent: 40000 }, // Level 7 — endgame tier (+40000%)
      { cost: 1100000000000, priceBoostPercent: 80000 }, // Level 8 — huge boost (+80000%)
      { cost: 11000000000000, priceBoostPercent: 160000 }, // Level 9 — massive boost (+160000%)
      { cost: 1000000000000000, priceBoostPercent: 320000 }, // Level 10 — capstone (+320000%)
    ],
  },
},

/****************************************
 *                                      *
 *             QUALITY                  *
 *                                      *
 ****************************************/
  quality: {
    priceMultiplier: 1.0,

    grillMarks: {
      cost: 250,
      priceBoostPercent: 50,
    },
    artisanBuns: {
      cost: 2500,
      priceBoostPercent: 50,
    },
    rareCook: {
      cost: 250,
      costType: "csp",
      priceBoostPercent: 75,
    },
    burgerPlating: {
      cost: 12500,
      priceBoostPercent: 100,
    },
    signature: {
      cost: 1000,
      costType: "csp",
      priceBoostPercent: 150,
    },
    prestige: {
      cost: 50000,
      priceBoostPercent: 250,
    },
    gourmet: {
      cost: 250000,
      priceBoostPercent: 500,
    },
    michelin: {
      cost: 1250000,
      priceBoostPercent: 1000,
    },
  },

/****************************************
 *                                      *
 *             SPATULA                  *
 *                                      *
 ****************************************/
  spatula: {
    costExponent: 2.0,
    powerMultiplier: 1.0,

    stainless: {
      burgersPerClick: 2,
      cost: 0,
    },
    ergonomic: {
      burgersPerClick: 5,
      cost: 10000,
    },
    titanium: {
      burgersPerClick: 10,
      cost: 100000,
    },
    quantum: {
      burgersPerClick: 25,
      cost: 1000000,
    },
    laser: {
      burgersPerClick: 50,
      cost: 10000000,
    },
    robotic: {
      burgersPerClick: 100,
      cost: 250000000,
    },
    plasma: {
      burgersPerClick: 250,
      cost: 1000000000,
    },
    temporal: {
      burgersPerClick: 500,
      cost: 5000000000,
    },
    cosmic: {
      burgersPerClick: 1000,
      cost: 250000000000,
    },
    infinity: {
      burgersPerClick: 5000,
      cost: 1000000000000,
    },
  },

/****************************************
 *                                      *
 *            PACKAGING                 *
 *                                      *
 ****************************************/
  packaging: {
    double: {
      burgersPerSale: 2,
      cost: 1000,
    },
    family: {
      burgersPerSale: 3.5,
      cost: 5000,
    },
    party: {
      burgersPerSale: 5,
      cost: 25000,
    },
    catering: {
      burgersPerSale: 8,
      cost: 100000,
    },
    mega: {
      burgersPerSale: 12,
      cost: 500000,
    },
    industrial: {
      burgersPerSale: 20,
      cost: 2500000,
    },
    quantum: {
      burgersPerSale: 50,
      cost: 10000000,
    },
    dimensional: {
      burgersPerSale: 100,
      cost: 100000000,
    },
    infinite: {
      burgersPerSale: 1000,
      cost: 1000000000,
    },
  },

/****************************************
 *                                      *
 *          MEAT UPGRADES               *
 *                                      *
 ****************************************/
  meatUpgrades: {
    tiers: [
      {
        name: "Bulk Bag",
        multiplier: 2,
        cost: 1000,
        description: "Increase meat packs from 1x to 2x",
      },
      {
        name: "Box Deal",
        multiplier: 3,
        cost: 5000,
        description: "Increase meat packs from 2x to 3x",
      },
      {
        name: "Family Bundle",
        multiplier: 5,
        cost: 30000,
        description: "Increase meat packs from 3x to 5x",
      },
      {
        name: "Better Packaging",
        multiplier: 10,
        cost: 500000,
        description: "Increase meat packs from 5x to 10x",
      },
      {
        name: "Wholesale Deal",
        multiplier: 25,
        cost: 5000000,
        description: "Increase meat packs from 10x to 25x",
      },
      {
        name: "Supply Chain",
        multiplier: 50,
        cost: 50000000,
        description: "Increase meat packs from 25x to 50x",
      },
      {
        name: "Industrial Network",
        multiplier: 100,
        cost: 1000000000,
        description: "Increase meat packs from 50x to 100x",
      },
      {
        name: "Regional Monopoly",
        multiplier: 250,
        cost: 50000000000,
        description: "Increase meat packs from 100x to 250x",
      },
      {
        name: "National Consortium",
        multiplier: 500,
        cost: 5000000000000,
        description: "Increase meat packs from 250x to 500x",
      },
      {
        name: "Global Pipeline",
        multiplier: 1000,
        cost: 1000000000000000,
        description: "Increase meat packs from 500x to 1000x",
      },
      {
        name: "Quantum Compression",
        multiplier: 2500,
        cost: 500000000000000000,
        description: "Increase meat packs from 1000x to 2500x",
      },
      {
        name: "Dimensional Storage",
        multiplier: 5000,
        cost: 100000000000000000000,
        description: "Increase meat packs from 2500x to 5000x",
      },
      {
        name: "Time Dilation Chamber",
        multiplier: 10000,
        cost: 5000000000000000000000,
        description: "Increase meat packs from 5000x to 10000x",
      },
      {
        name: "Meat Singularity",
        multiplier: 50000,
        cost: 100000000000000000000000,
        description: "Increase meat packs from 10000x to 50000x",
      },
    ],
  },

/****************************************
 *                                      *
 *       GOLDEN SPATULA UPGRADES        *
 *                                      *
 ****************************************/
  goldenSpatulaUpgrades: {
    // Tier 1 upgrades (1 spatula each)
    tier1: [
      {
        id: 'starting-capital',
        name: 'Starting Capital',
        description: 'Start each new burger frontier with $1,000 starter cash. Perfect for getting your equipment and employees up and running quickly.',
        cost: 1,
        icon: '💰',
        zone: 'economic',
        stackable: true
      },
      {
        id: 'rookie-squad',
        name: 'Rookie Squad',
        description: 'Hit the ground running with a pre-trained team of 8 rookie employees ready to flip burgers from day one.',
        cost: 1,
        icon: '👥',
        zone: 'workforce',
        stackable: false
      },
      {
        id: 'demand-boost',
        name: 'Demand Boost',
        description: 'Launch with pre-existing buzz! Your restaurant starts with 150% customer demand thanks to an aggressive marketing campaign.',
        cost: 1,
        icon: '📈',
        zone: 'economic',
        stackable: false
      },
      {
        id: 'rookie-training',
        name: 'Rookie Training',
        description: 'Implement an advanced training program that makes all rookie employees 50% more productive at flipping burgers.',
        cost: 1,
        icon: '⭐',
        zone: 'workforce',
        stackable: false
      },
      {
        id: 'starting-meat',
        name: 'Meat Reserve',
        description: 'Begin operations with a strategic meat stockpile of 5,000 units, ensuring you never run out during the critical early rush.',
        cost: 1,
        icon: '🥩',
        zone: 'economic',
        stackable: true
      }
    ],

    // Tier 2 upgrades (2 spatulas each)
    tier2: [
      {
        id: 'employee-discount',
        name: 'Employee Discount',
        description: 'Negotiate better hiring contracts! All employee types cost 10% less to hire, helping you build your workforce faster.',
        cost: 2,
        icon: '👷',
        zone: 'workforce',
        stackable: false
      },
      {
        id: 'production-boost',
        name: 'Production Line',
        description: 'Optimize your kitchen workflow! All employees produce 25% more burgers through improved processes and equipment.',
        cost: 2,
        icon: '⚙️',
        zone: 'operations',
        stackable: false
      },
      {
        id: 'ingredient-savings',
        name: 'Ingredient Savings',
        description: 'Bulk purchasing agreements reduce all ingredient costs by 10%, improving your profit margins on every burger sold.',
        cost: 2,
        icon: '🧄',
        zone: 'efficiency',
        stackable: false
      }
    ],

    // Tier 3 upgrades (3 spatulas each)
    tier3: [
      {
        id: 'spatula-mastery',
        name: 'Spatula Mastery',
        description: 'Master the art of burger flipping! Start with your first 3 spatula upgrades already purchased and active.',
        cost: 3,
        icon: '🥘',
        zone: 'operations',
        stackable: false
      }
    ],

    // Tier 5 upgrades (5 spatulas each)
    tier5: [
      {
        id: 'presence-detector-unlock',
        name: 'Presence Detector',
        description: 'Start with the Presence Detection system already unlocked and active, giving you immediate access to customer presence bonuses.',
        cost: 5,
        icon: '👁️',
        zone: 'operations',
        stackable: false
      },
      {
        id: 'recovery-protocol',
        name: 'Recovery Protocol',
        description: 'Never lose a burger again! Start with the Burger Recovery System already installed at Tier 1, saving dropped burgers.',
        cost: 5,
        icon: '🔄',
        zone: 'operations',
        stackable: false
      },
      {
        id: 'automation-suite',
        name: 'Automation Suite',
        description: 'Embrace the future of burger production! Start with an auto-flipper system and 1 robot chef to automate your kitchen.',
        cost: 5,
        icon: '🤖',
        zone: 'efficiency',
        stackable: false
      }
    ],

    // Tier 10 upgrades (10 spatulas each)
    tier10: [
      {
        id: 'catering-unlock',
        name: 'Catering System',
        description: 'Start with the Catering system already unlocked and ready for orders, bypassing the 50k burger requirement.',
        cost: 10,
        icon: '🍽️',
        zone: 'economic',
        stackable: false
      },
      {
        id: 'burger-stockpile',
        name: 'Burger Stockpile',
        description: 'Start your new restaurant with 10,000 pre-made burgers ready to sell, giving you a massive head start.',
        cost: 10,
        icon: '🍔',
        zone: 'operations',
        stackable: false
      }
    ]
  },

/****************************************
 *                                      *
 *    GOLDEN SPATULA HYBRID SYSTEM      *
 *                                      *
 ****************************************/
  goldenSpatulaHybridSystem: {
    // Basic system configuration
    config: {
      architectTransitionTier: 5, // After prestige 5, switch to infinite system
      passiveSpatulaUnlockTier: 5, // Tier when passive spatula generation becomes available
      spatulaGeneratorCost: 50, // Cost in golden spatulas to unlock passive generation
      basePassiveRate: 0.1, // Starting passive spatula generation rate
    },

    // Infinite upgrade tiers
    upgrades: {
      // Linear Tier (1-100 spatulas) - Basic percentage improvements
      linear: [
        {
          id: 'linear-production-1',
          name: 'Production Boost I',
          description: 'Increase burger production by 10%',
          cost: 5,
          maxLevel: 20,
          effectPerLevel: 0.1, // 10% per level
          effectType: 'production'
        },
        {
          id: 'linear-price-1',
          name: 'Price Optimization I',
          description: 'Increase burger prices by 5%',
          cost: 8,
          maxLevel: 15,
          effectPerLevel: 0.05, // 5% per level
          effectType: 'price'
        },
        {
          id: 'linear-demand-1',
          name: 'Marketing Campaign I',
          description: 'Increase customer demand by 8%',
          cost: 12,
          maxLevel: 12,
          effectPerLevel: 0.08, // 8% per level
          effectType: 'demand'
        }
      ],

      // Exponential Tier (101-1000 spatulas) - Exponential scaling effects
      exponential: [
        {
          id: 'exp-automation-1',
          name: 'Automation Matrix',
          description: 'Exponentially increase automated production',
          cost: 150,
          maxLevel: 10,
          effectBase: 1.5, // 1.5^level
          effectType: 'automation'
        },
        {
          id: 'exp-quality-1',
          name: 'Quality Revolution',
          description: 'Exponentially improve burger quality',
          cost: 200,
          maxLevel: 8,
          effectBase: 1.8, // 1.8^level
          effectType: 'quality'
        },
        {
          id: 'exp-spatula-gen-1',
          name: 'Spatula Forge',
          description: 'Increase passive golden spatula generation rate',
          cost: 300,
          maxLevel: 20,
          effectPerLevel: 0.05, // +0.05 spatulas/sec per level
          effectType: 'spatulaGeneration'
        },
        {
          id: 'exp-spatula-mult-1',
          name: 'Spatula Amplifier',
          description: 'Multiply passive spatula generation rate',
          cost: 500,
          maxLevel: 10,
          effectPerLevel: 0.5, // +0.5x multiplier per level
          effectType: 'spatulaMultiplier'
        }
      ],

      // Power Tier (1001-10000 spatulas) - Power-law scaling
      power: [
        {
          id: 'power-burger-engine',
          name: 'Quantum Burger Engine',
          description: 'Production scales with log of burgers in inventory',
          cost: 2000,
          maxLevel: 10,
          effectPerLevel: 0.1, // 10% of log10(burgers) per level
          effectType: 'logBurgerProduction'
        },
        {
          id: 'power-price-scaling',
          name: 'Economic Singularity',
          description: 'Burger prices scale with log of total money earned',
          cost: 3500,
          maxLevel: 5,
          effectPerLevel: 0.05, // 5% of log10(money) per level
          effectType: 'logMoneyPrice'
        },
        {
          id: 'power-demand-cascade',
          name: 'Viral Marketing Matrix',
          description: 'Demand scales with log of burgers sold this prestige',
          cost: 5000,
          maxLevel: 8,
          effectPerLevel: 0.08, // 8% of log10(burgers sold) per level
          effectType: 'logBurgerDemand'
        },
        {
          id: 'power-spatula-factory',
          name: 'Spatula Manufacturing Plant',
          description: 'Passive spatulas scale with log of total burgers sold',
          cost: 8000,
          maxLevel: 10,
          effectPerLevel: 0.1, // +0.1 spatulas/sec per log10(burgers) per level
          effectType: 'logBurgerSpatula'
        }
      ],

      // Transcendent Tier (10001+ spatulas) - Reality-breaking multipliers
      transcendent: [
        {
          id: 'trans-time-dilation',
          name: 'Time Dilation Field',
          description: 'Game runs faster per level (affects all production)',
          cost: 10000,
          maxLevel: 10,
          effectPerLevel: 0.1, // +10% game speed per level
          effectType: 'gameSpeed'
        },
        {
          id: 'trans-reality-break',
          name: 'Reality Fracture',
          description: 'All numbers in the game are raised to higher powers',
          cost: 25000,
          maxLevel: 10,
          effectPerLevel: 0.1, // Power increases by 0.1 per level (1.1, 1.2, 1.3, etc)
          effectType: 'realityExponent'
        },
        {
          id: 'trans-dimension-merger',
          name: 'Dimensional Convergence',
          description: 'Merge parallel burger universes - all effects multiply by universe count',
          cost: 50000,
          maxLevel: 5,
          effectPerLevel: 1, // +1 universe per level (2x, 3x, 4x, etc)
          effectType: 'dimensionalMultiplier'
        }
      ]
    },

    // Cost scaling configuration
    costScaling: {
      linear: 1.5, // Linear tier cost multiplier
      exponential: 1.8, // Exponential tier cost multiplier
      power: 2.2, // Power tier cost multiplier
      transcendent: 2.5 // Transcendent tier cost multiplier
    }
  },

/****************************************
 *                                      *
 *           AUTO-FLIPPER               *
 *                                      *
 ****************************************/
  autoFlipper: {
    // Basic configuration
    config: {
      baseClicksPerSecond: 1, // Starting CPS when first unlocked
      maxLevel: 20, // Maximum upgrade level
      unlockRequirement: 1000000, // $1M to unlock from shop
    },

    // Clicks per second for each level (1-20)
    clickRates: [
      1,  // Level 1
      2,  // Level 2
      3,  // Level 3
      4,  // Level 4
      5,  // Level 5
      6,  // Level 6
      7,  // Level 7
      8,  // Level 8
      9,  // Level 9
      10, // Level 10
      11, // Level 11
      12, // Level 12
      13, // Level 13
      14, // Level 14
      15, // Level 15
      16, // Level 16
      17, // Level 17
      18, // Level 18
      19, // Level 19
      20, // Level 20
      21, // Level 21 (if expanded)
    ],

    // Upgrade costs scale exponentially (cost to upgrade TO each level)
    upgradeCosts: [
      0,                    // Level 1 (starting level, no cost)
      50000,                // Level 2 -> 3 CPS
      250000,               // Level 3 -> 4 CPS
      1250000,              // Level 4 -> 5 CPS
      6250000,              // Level 5 -> 6 CPS
      31250000,             // Level 6 -> 7 CPS
      156250000,            // Level 7 -> 8 CPS
      781250000,            // Level 8 -> 9 CPS
      3906250000,           // Level 9 -> 10 CPS
      19531250000,          // Level 10 -> 11 CPS
      97656250000,          // Level 11 -> 12 CPS
      488281250000,         // Level 12 -> 13 CPS
      2441406250000,        // Level 13 -> 14 CPS
      12207031250000,       // Level 14 -> 15 CPS
      61035156250000,       // Level 15 -> 16 CPS
      305175781250000,      // Level 16 -> 17 CPS
      1525878906250000,     // Level 17 -> 18 CPS
      7629394531250000,     // Level 18 -> 19 CPS
      38146972656250000,    // Level 19 -> 20 CPS
      190734863281250000,   // Level 20 -> 21 CPS (if expanded)
    ],

    // Cost scaling factor for future expansion
    costScalingFactor: 5, // Each level costs 5x the previous
  },

/****************************************
 *                                      *
 *           STOCK MARKET               *
 *                                      *
 ****************************************/
  stockMarket: {
    // Market configuration
    config: {
      marketUpdateInterval: 10000, // 10 seconds
      marketTrendVolatility: 0.1, // How volatile market trends are
      marketEventChance: 0.01, // 1% chance per update for market events
      minDuration: 60, // 1 minute minimum investment
      maxDuration: 3600, // 1 hour maximum investment
      baseReturnBonus: 0.01, // 1% bonus per minute over base time
    },

    // All investment companies (15 total)
    companies: [
      {
        id: 'burgers-r-us',
        name: "Burgers R' Us",
        description: "A stable burger company with low risk. The perfect starter investment.",
        riskLevel: 1,
        baseReturnRate: 0.03, // 3% base return
        volatility: 0.01,
        unlockCost: 0,
        minInvestment: 10,
        maxInvestmentMultiplier: 10
      },
      {
        id: 'beef-basics',
        name: "Beef Basics",
        description: "Simple, reliable burger joint with consistent returns.",
        riskLevel: 2,
        baseReturnRate: 0.04, // 4% base return
        volatility: 0.015,
        unlockCost: 500,
        minInvestment: 50,
        maxInvestmentMultiplier: 12
      },
      {
        id: 'patty-palace',
        name: "Patty Palace",
        description: "Family-owned burger restaurant with steady business.",
        riskLevel: 2,
        baseReturnRate: 0.045, // 4.5% base return
        volatility: 0.02,
        unlockCost: 1000,
        minInvestment: 75,
        maxInvestmentMultiplier: 15
      },
      {
        id: 'grill-masters',
        name: "Grill Masters",
        description: "Expanding local chain with moderate growth potential.",
        riskLevel: 3,
        baseReturnRate: 0.05, // 5% base return
        volatility: 0.025,
        unlockCost: 2500,
        minInvestment: 100,
        maxInvestmentMultiplier: 20
      },
      {
        id: 'urban-patty',
        name: "Urban Patty",
        description: "Trendy burger spot in high-traffic urban locations.",
        riskLevel: 3,
        baseReturnRate: 0.06, // 6% base return
        volatility: 0.03,
        unlockCost: 5000,
        minInvestment: 150,
        maxInvestmentMultiplier: 25
      },
      {
        id: 'veggie-burger-co',
        name: "Veggie Burger Co.",
        description: "Plant-based burger startup with growing market share.",
        riskLevel: 4,
        baseReturnRate: 0.065, // 6.5% base return
        volatility: 0.035,
        unlockCost: 7500,
        minInvestment: 200,
        maxInvestmentMultiplier: 30
      },
      {
        id: 'burger-shack',
        name: "Burger Shack",
        description: "Well-known burger chain with franchises nationwide.",
        riskLevel: 4,
        baseReturnRate: 0.07, // 7% base return
        volatility: 0.04,
        unlockCost: 10000,
        minInvestment: 250,
        maxInvestmentMultiplier: 35
      },
      {
        id: 'gourmet-grind',
        name: "Gourmet Grind",
        description: "Upscale burger restaurant with innovative menu items.",
        riskLevel: 5,
        baseReturnRate: 0.08, // 8% base return
        volatility: 0.045,
        unlockCost: 15000,
        minInvestment: 300,
        maxInvestmentMultiplier: 40
      },
      {
        id: 'fastflip-burgers',
        name: "FastFlip Burgers",
        description: "Quick-service burger joint with aggressive expansion plans.",
        riskLevel: 5,
        baseReturnRate: 0.09, // 9% base return
        volatility: 0.05,
        unlockCost: 25000,
        minInvestment: 400,
        maxInvestmentMultiplier: 45
      },
      {
        id: 'burgertech',
        name: "BurgerTech",
        description: "Technology-focused burger company with automated cooking systems.",
        riskLevel: 6,
        baseReturnRate: 0.1, // 10% base return
        volatility: 0.06,
        unlockCost: 40000,
        minInvestment: 500,
        maxInvestmentMultiplier: 50
      },
      {
        id: 'global-grill',
        name: "Global Grill",
        description: "International burger chain with uncertain regulations.",
        riskLevel: 6,
        baseReturnRate: 0.11, // 11% base return
        volatility: 0.07,
        unlockCost: 60000,
        minInvestment: 750,
        maxInvestmentMultiplier: 60
      },
      {
        id: 'luxury-bites',
        name: "Luxury Bites",
        description: "Premium burgers for the luxury market with volatile demand.",
        riskLevel: 7,
        baseReturnRate: 0.12, // 12% base return
        volatility: 0.08,
        unlockCost: 80000,
        minInvestment: 1000,
        maxInvestmentMultiplier: 70
      },
      {
        id: 'lab-patties',
        name: "Lab Patties",
        description: "Lab-grown meat burgers - unproven tech with massive potential.",
        riskLevel: 8,
        baseReturnRate: 0.15, // 15% base return
        volatility: 0.1,
        unlockCost: 150000,
        minInvestment: 2000,
        maxInvestmentMultiplier: 90
      },
      {
        id: 'quantum-burgers',
        name: "Quantum Burgers",
        description: "Revolutionary burger delivery using experimental teleportation.",
        riskLevel: 9,
        baseReturnRate: 0.2, // 20% base return
        volatility: 0.15,
        unlockCost: 500000,
        minInvestment: 5000,
        maxInvestmentMultiplier: 100
      },
      {
        id: 'cosmic-consumption',
        name: "Cosmic Consumption",
        description: "Theoretical burgers made from dark matter. May collapse reality.",
        riskLevel: 10,
        baseReturnRate: 0.5, // 50% base return (!!)
        volatility: 0.5,
        unlockCost: 10000000,
        minInvestment: 100000,
        maxInvestmentMultiplier: 500
      }
    ],

    // Market upgrades
    upgrades: {
      returnBoost: {
        name: "Market Analyst",
        description: "Increase investment returns by analyzing market trends",
        maxLevel: 10,
        baseCost: 1000,
        baseEffect: 0.05, // 5% boost per level
        costMultiplier: 1.5
      },
      riskReduction: {
        name: "Risk Management",
        description: "Reduce investment volatility with better risk management",
        maxLevel: 10,
        baseCost: 2000,
        baseEffect: 0.1, // 10% volatility reduction per level
        costMultiplier: 1.5
      },
      autoInvest: {
        name: "Auto-Investment",
        description: "Automatically reinvest returns",
        maxLevel: 1,
        baseCost: 25000
      },
      longerDuration: {
        name: "Extended Investments",
        description: "Increase maximum investment duration for higher returns",
        maxLevel: 4,
        baseCost: 25000,
        baseEffect: 0.25, // 25% duration boost per level
        costMultiplier: 2
      }
    }
  },

/****************************************
 *                                      *
 *            CATERING                  *
 *                                      *
 ****************************************/
  catering: {
    // System configuration
    config: {
      unlockRequirement: 50000, // 50k burgers sold to unlock
      baseOrderSize: 5000, // Base order size
      baseCookTime: 900, // Base cook time in seconds (15 minutes)
      basePayoutMultiplier: 1, // Base payout multiplier
      orderCooldownTime: 1800, // 30 minutes between orders
      maxOrderSlots: 5, // Maximum number of simultaneous orders
    },

    // Caterer staff upgrades (5 tiers)
    caterers: {
      junior: {
        name: "Junior Caterer",
        description: "Entry-level catering staff",
        burgerBonus: 2500, // Additional burgers per order
        cost: 1000000, // $1M
        scaling: 2.0 // Cost multiplier for each additional hire
      },
      line: {
        name: "Line Caterer",
        description: "Experienced line catering staff",
        burgerBonus: 5000,
        cost: 10000000, // $10M
        scaling: 2.3
      },
      sous: {
        name: "Sous Chef Caterer",
        description: "Skilled sous chef for catering operations",
        burgerBonus: 12500,
        cost: 125000000, // $125M
        scaling: 2.6
      },
      executive: {
        name: "Executive Caterer",
        description: "High-level executive catering specialist",
        burgerBonus: 25000,
        cost: 2000000000, // $2B
        scaling: 2.9
      },
      celebrity: {
        name: "Celebrity Chef Caterer",
        description: "World-renowned celebrity chef catering",
        burgerBonus: 62500,
        cost: 40000000000, // $40B
        scaling: 3.2
      }
    },

    // Equipment upgrades (10 tiers)
    equipment: {
      prep: {
        name: "Prep Station",
        description: "Basic food preparation equipment",
        timeReduction: 90, // Seconds reduced from cook time
        cost: 10000000 // $10M
      },
      commercial: {
        name: "Commercial Oven",
        description: "Large-scale commercial cooking equipment",
        timeReduction: 90,
        cost: 100000000 // $100M
      },
      convection: {
        name: "Convection System",
        description: "Advanced convection cooking system",
        timeReduction: 90,
        cost: 1000000000 // $1B
      },
      blast: {
        name: "Blast Chiller",
        description: "Rapid cooling and preparation system",
        timeReduction: 90,
        cost: 10000000000 // $10B
      },
      molecular: {
        name: "Molecular Gastronomy Kit",
        description: "High-tech molecular cooking equipment",
        timeReduction: 90,
        cost: 100000000000 // $100B
      },
      quantum: {
        name: "Quantum Cooker",
        description: "Quantum-powered cooking technology",
        timeReduction: 90,
        cost: 1000000000000 // $1T
      },
      temporal: {
        name: "Temporal Accelerator",
        description: "Time-manipulation cooking device",
        timeReduction: 90,
        cost: 10000000000000 // $10T
      },
      dimensional: {
        name: "Dimensional Kitchen",
        description: "Multi-dimensional cooking space",
        timeReduction: 90,
        cost: 100000000000000 // $100T
      },
      cosmic: {
        name: "Cosmic Forge",
        description: "Harness the power of stars for cooking",
        timeReduction: 90,
        cost: 1000000000000000 // $1 Quadrillion
      },
      infinite: {
        name: "Infinite Culinary Matrix",
        description: "Transcendent cooking beyond comprehension",
        timeReduction: 90,
        cost: 10000000000000000 // $10 Quadrillion
      }
    },

    // Management upgrades (5 tiers)
    managers: {
      assistant: {
        name: "Assistant Manager",
        description: "Helps coordinate catering operations",
        effect: "Reduces order cooldown by 10%",
        cost: 100000000 // $100M
      },
      manager: {
        name: "Catering Manager",
        description: "Professional catering management",
        effect: "Increases order size by 15%",
        cost: 100000000 // $100M
      },
      director: {
        name: "Operations Director",
        description: "High-level operations oversight",
        effect: "Reduces cook time by 20%",
        cost: 1000000000 // $1B
      },
      coordinator: {
        name: "Event Coordinator",
        description: "Specialized event management",
        effect: "Increases payout by 25%",
        cost: 5000000000 // $5B
      },
      ceo: {
        name: "Catering CEO",
        description: "Ultimate catering leadership",
        effect: "All catering bonuses +50%",
        cost: 500000000000 // $500B
      }
    }
  },

/****************************************
 *                                      *
 *        PRESENCE DETECTOR             *
 *                                      *
 ****************************************/
  presenceDetector: {
    // Configuration
    config: {
      unlockRequirement: 10000, // 10,000 burgers sold
      unlockCost: 10000, // $10,000 to unlock
      displayUpdateInterval: 100 // ms between display updates
    },

    // Upgrade definitions
    upgrades: {
      maxMultiplier: {
        values: [1.25, 1.3, 1.35, 1.4, 1.45, 1.5], // Starting at 1.25x
        costs: [50000, 500000, 5000000, 100000000, 5000000000], // Money costs
        names: ["1.25x", "1.30x", "1.35x", "1.40x", "1.45x", "1.50x"],
        currency: "money",
        description: "Maximum price multiplier when presence is at 100%"
      },
      activityIncrease: {
        values: [0.01, 0.012, 0.014, 0.016, 0.018, 0.02],
        costs: [10, 50, 200, 500, 1000], // Catering points (when implemented)
        names: ["1%", "1.2%", "1.4%", "1.6%", "1.8%", "2%"],
        currency: "catering",
        description: "Amount of presence gained per activity/click"
      },
      decayDelay: {
        values: [5, 7, 10, 15, 20, 30], // Starting at 5 seconds
        costs: [50, 100, 250, 500, 1000], // CSP costs
        names: ["5s", "7s", "10s", "15s", "20s", "30s"],
        currency: "csp",
        description: "Time before presence starts decaying after last activity"
      },
      decayRate: {
        values: [0.1, 0.08, 0.06, 0.04, 0.02, 0.01], // Slower decay
        costs: [25, 75, 200, 400, 800], // CSP costs
        names: ["10%/s", "8%/s", "6%/s", "4%/s", "2%/s", "1%/s"],
        currency: "csp",
        description: "Rate at which presence decays when idle"
      }
    }
  },

/****************************************
 *                                      *
 *         BURGER INDUSTRIES            *
 *                                      *
 ****************************************/
  burgerIndustries: {
    // Configuration
    config: {
      unlockRequirement: 5, // Prestige 5
      updateInterval: 100 // ms
    },

    // Research Lab levels
    researchLab: {
      baseConsumption: 100,
      baseProduction: 1,
      levels: [
        { name: "No Lab", consumption: 0, production: 0, cost: 0 },
        { name: "Basic Lab", consumption: 100, production: 1, cost: 50000000 },
        { name: "Advanced Lab", consumption: 500, production: 6, cost: 500000000 },
        { name: "Quantum Lab", consumption: 2500, production: 35, cost: 5000000000 },
        { name: "Interdimensional Lab", consumption: 10000, production: 150, cost: 50000000000 }
      ],
      experiments: {
        1: { duration: 1, multiplier: 2 },    // 1 hour = 2x multiplier
        4: { duration: 4, multiplier: 3 },    // 4 hours = 3x multiplier
        8: { duration: 8, multiplier: 5 }     // 8 hours = 5x multiplier
      }
    },

    // Research Shop items
    researchShop: {
      // Tier 1 - Basic Upgrades
      efficiency1: {
        id: 'efficiency1',
        name: 'Efficiency Protocol I',
        description: '+10% global burger production',
        cost: 100,
        tier: 1,
        effect: 'permanentProductionMultiplier',
        multiplier: 1.1
      },
      demand1: {
        id: 'demand1',
        name: 'Market Research I',
        description: '+5% to maximum demand cap',
        cost: 250,
        tier: 1,
        effect: 'maxDemand',
        multiplier: 1.05
      },
      meatSaver1: {
        id: 'meatSaver1',
        name: 'Meat Conservation I',
        description: '-5% meat usage per burger',
        cost: 500,
        tier: 1,
        effect: 'meatConsumptionMultiplier',
        multiplier: 0.95
      },
      priceElasticity1: {
        id: 'priceElasticity1',
        name: 'Price Elasticity Study',
        description: '+10% price without losing demand',
        cost: 1000,
        tier: 1,
        effect: 'priceFloor',
        multiplier: 1.1
      },

      // Tier 2 - Advanced Upgrades
      quantumSpatulas: {
        id: 'quantumSpatulas',
        name: 'Quantum Spatula Theory',
        description: 'Unlock a new tier of spatula upgrades',
        cost: 5000,
        tier: 2,
        effect: 'unlock',
        unlocks: 'spatulaTier'
      },
      autoExperiment: {
        id: 'autoExperiment',
        name: 'Automated Experiments',
        description: 'Experiments auto-restart when completed',
        cost: 10000,
        tier: 2,
        effect: 'autoExperiment',
        enabled: true
      },

      // Tier 3 - Powerful Upgrades
      efficiency2: {
        id: 'efficiency2',
        name: 'Efficiency Protocol II',
        description: '+25% global burger production',
        cost: 25000,
        tier: 3,
        requires: ['efficiency1'],
        effect: 'permanentProductionMultiplier',
        multiplier: 1.25
      },
      burgerScience: {
        id: 'burgerScience',
        name: 'Advanced Burger Science',
        description: 'Research points also boost income by 0.1% each',
        cost: 50000,
        tier: 3,
        effect: 'researchIncomeBonus',
        enabled: true
      }
    }
  },

/****************************************
 *                                      *
 *           CSP UPGRADES               *
 *                                      *
 ****************************************/
  cspUpgrades: {
    chance: [
      { chance: 0.01, cost: 100 },
      { chance: 0.02, cost: 500 },
      { chance: 0.03, cost: 2000 },
      { chance: 0.04, cost: 8000 },
      { chance: 0.05, cost: 25000 },
      { chance: 0.06, cost: 100000 },
      { chance: 0.07, cost: 400000 },
      { chance: 0.08, cost: 1600000 },
      { chance: 0.09, cost: 6400000 },
      { chance: 0.1, cost: 25600000 },
    ],
    amount: [
      { amount: 1, cost: 100000 },
      { amount: 2, cost: 500000 },
      { amount: 3, cost: 2000000 },
      { amount: 5, cost: 10000000 },
      { amount: 10, cost: 50000000 },
      { amount: 20, cost: 200000000 },
      { amount: 50, cost: 1000000000 },
      { amount: 100, cost: 5000000000 },
    ],
  },

/****************************************
 *                                      *
 *         GAME PROGRESSION             *
 *                                      *
 ****************************************/
  progression: {
    prestigeRequirement: 1e12,

    demandCapMultipliers: [10, 50, 250, 1000, 5000],

    startingMoney: 0,
    startingMeat: 1000,
    startingPrice: 0.5,
    baseDemand: 100,
    maxDemand: 1500,
  },

/****************************************
 *                                      *
 *         DEVELOPER MODE               *
 *                                      *
 ****************************************/
  devMode: {
    enabled: false,
    multipliers: {
      money: 1,
      production: 1,
      demand: 1,
      prices: 1,
    },
  },
};

/****************************************
 *                                      *
 *         HELPER FUNCTIONS             *
 *                                      *
 ****************************************/
export function getEmployeeConfig(type) {
  const config = balanceConfig.employees[type];
  if (!config) return null;

  return {
    baseProduction:
      config.baseProduction * balanceConfig.employees.productionScaling,
    baseWage: config.baseWage,
    wageExponent: balanceConfig.employees.wageExponent,
    wageScaling: config.wageScaling !== false, // Default true unless explicitly false
    maxOwned: config.maxOwned,
    freeUnits: config.freeUnits || 0,
  };
}

// Calculate the wage for the Nth employee of a type
export function calculateEmployeeWage(type, employeeNumber) {
  const config = getEmployeeConfig(type);
  if (!config) return 0;

  // If wage scaling is disabled (rookies), return base wage
  if (!config.wageScaling) {
    return config.baseWage;
  }

  // Calculate scaled wage: baseWage * (wageExponent ^ (employeeNumber - 1))
  // For the 1st employee, exponent is 0, so multiplier is 1
  // For the 2nd employee, exponent is 1, so multiplier is wageExponent
  // etc.
  return config.baseWage * Math.pow(config.wageExponent, employeeNumber - 1);
}

// Calculate total wages per second for all employees of a type
export function calculateTotalWagesForType(type, ownedCount) {
  const config = getEmployeeConfig(type);
  if (!config || ownedCount === 0) return 0;

  let totalWages = 0;

  // Handle free units (rookies)
  const freeUnits = config.freeUnits || 0;
  const chargeableUnits = Math.max(0, ownedCount - freeUnits);

  if (!config.wageScaling) {
    // No scaling - all employees cost the same
    totalWages = config.baseWage * chargeableUnits;
  } else {
    // With scaling - each employee costs more
    for (let i = freeUnits + 1; i <= ownedCount; i++) {
      totalWages += calculateEmployeeWage(type, i - freeUnits);
    }
  }

  return totalWages;
}

// Get all employee configs at once
export function getAllEmployeeConfigs() {
  const configs = {};
  const types = [
    "rookie",
    "intern",
    "novice",
    "patty",
    "grill",
    "technician",
    "flame",
    "griddle",
  ];

  types.forEach((type) => {
    configs[type] = getEmployeeConfig(type);
  });

  return configs;
}

export function getIngredientConfig(type, level) {
  const ingredient = balanceConfig.ingredients[type];
  if (!ingredient || !ingredient.levels[level]) return null;

  const levelConfig = ingredient.levels[level];
  return {
    cost: levelConfig.cost,
    priceBoostPercent:
      levelConfig.priceBoostPercent * balanceConfig.ingredients.priceMultiplier,
  };
}

export function getQualityConfig(type) {
  const config = balanceConfig.quality[type];
  return {
    ...config,
    priceBoostPercent:
      config.priceBoostPercent * balanceConfig.quality.priceMultiplier,
  };
}

export function getMeatUpgradeConfig(tierIndex) {
  const tier = balanceConfig.meatUpgrades.tiers[tierIndex];
  if (!tier) return null;

  return {
    name: tier.name,
    multiplier: tier.multiplier,
    cost: tier.cost,
    description: tier.description
  };
}

export function getAllMeatUpgradeTiers() {
  return balanceConfig.meatUpgrades.tiers;
}

export function getGoldenSpatulaUpgradesByTier(tier) {
  const tierKey = `tier${tier}`;
  return balanceConfig.goldenSpatulaUpgrades[tierKey] || [];
}

export function getAllGoldenSpatulaUpgrades() {
  const allUpgrades = [];
  Object.values(balanceConfig.goldenSpatulaUpgrades).forEach(tier => {
    if (Array.isArray(tier)) {
      allUpgrades.push(...tier);
    }
  });
  return allUpgrades;
}

export function getGoldenSpatulaUpgradeById(id) {
  const allUpgrades = getAllGoldenSpatulaUpgrades();
  return allUpgrades.find(upgrade => upgrade.id === id);
}

export function getHybridSystemConfig() {
  return balanceConfig.goldenSpatulaHybridSystem.config;
}

export function getHybridSystemUpgradesByTier(tier) {
  return balanceConfig.goldenSpatulaHybridSystem.upgrades[tier] || [];
}

export function getAllHybridSystemUpgrades() {
  const upgrades = balanceConfig.goldenSpatulaHybridSystem.upgrades;
  return [
    ...(upgrades.linear || []),
    ...(upgrades.exponential || []),
    ...(upgrades.power || []),
    ...(upgrades.transcendent || [])
  ];
}

export function getHybridSystemUpgradeById(id) {
  const allUpgrades = getAllHybridSystemUpgrades();
  return allUpgrades.find(upgrade => upgrade.id === id);
}

export function getHybridSystemCostScaling() {
  return balanceConfig.goldenSpatulaHybridSystem.costScaling;
}

export function getAutoFlipperConfig() {
  return balanceConfig.autoFlipper.config;
}

export function getAutoFlipperClickRate(level) {
  return balanceConfig.autoFlipper.clickRates[level - 1] || level;
}

export function getAutoFlipperUpgradeCost(level) {
  return balanceConfig.autoFlipper.upgradeCosts[level] || Infinity;
}

export function getAutoFlipperClickRates() {
  return balanceConfig.autoFlipper.clickRates;
}

export function getAutoFlipperUpgradeCosts() {
  return balanceConfig.autoFlipper.upgradeCosts;
}

export function getStockMarketConfig() {
  return balanceConfig.stockMarket.config;
}

export function getStockMarketCompanies() {
  return balanceConfig.stockMarket.companies;
}

export function getStockMarketCompanyById(id) {
  return balanceConfig.stockMarket.companies.find(company => company.id === id);
}

export function getStockMarketUpgrades() {
  return balanceConfig.stockMarket.upgrades;
}

export function getStockMarketUpgradeById(id) {
  return balanceConfig.stockMarket.upgrades[id];
}

export function getStockMarketCompaniesByRiskLevel(riskLevel) {
  return balanceConfig.stockMarket.companies.filter(company => company.riskLevel === riskLevel);
}

// ===============================================
//           CATERING HELPER FUNCTIONS
// ===============================================

export function getCateringConfig() {
  return balanceConfig.catering.config;
}

export function getCateringCaterers() {
  return balanceConfig.catering.caterers;
}

export function getCateringCatererById(id) {
  return balanceConfig.catering.caterers[id];
}

export function getCateringEquipment() {
  return balanceConfig.catering.equipment;
}

export function getCateringEquipmentById(id) {
  return balanceConfig.catering.equipment[id];
}

export function getCateringManagers() {
  return balanceConfig.catering.managers;
}

export function getCateringManagerById(id) {
  return balanceConfig.catering.managers[id];
}

export function getAllCateringItems() {
  return {
    caterers: balanceConfig.catering.caterers,
    equipment: balanceConfig.catering.equipment,
    managers: balanceConfig.catering.managers
  };
}

// ===============================================
//      PRESENCE DETECTOR HELPER FUNCTIONS
// ===============================================

export function getPresenceDetectorConfig() {
  return balanceConfig.presenceDetector.config;
}

export function getPresenceDetectorUpgrades() {
  return balanceConfig.presenceDetector.upgrades;
}

export function getPresenceDetectorUpgradeById(id) {
  return balanceConfig.presenceDetector.upgrades[id];
}

export function getPresenceDetectorUpgradeValues(upgradeId) {
  const upgrade = balanceConfig.presenceDetector.upgrades[upgradeId];
  return upgrade ? upgrade.values : [];
}

export function getPresenceDetectorUpgradeCosts(upgradeId) {
  const upgrade = balanceConfig.presenceDetector.upgrades[upgradeId];
  return upgrade ? upgrade.costs : [];
}

export function getPresenceDetectorUpgradeNames(upgradeId) {
  const upgrade = balanceConfig.presenceDetector.upgrades[upgradeId];
  return upgrade ? upgrade.names : [];
}

export function getPresenceDetectorUpgradeCurrency(upgradeId) {
  const upgrade = balanceConfig.presenceDetector.upgrades[upgradeId];
  return upgrade ? upgrade.currency : 'money';
}

export function getAllPresenceDetectorData() {
  return {
    config: balanceConfig.presenceDetector.config,
    upgrades: balanceConfig.presenceDetector.upgrades
  };
}

// ===============================================
//      BURGER INDUSTRIES HELPER FUNCTIONS
// ===============================================

export function getBurgerIndustriesConfig() {
  return balanceConfig.burgerIndustries.config;
}

export function getResearchLabConfig() {
  return balanceConfig.burgerIndustries.researchLab;
}

export function getResearchLabLevels() {
  return balanceConfig.burgerIndustries.researchLab.levels;
}

export function getResearchLabLevel(levelIndex) {
  const levels = balanceConfig.burgerIndustries.researchLab.levels;
  return levels[levelIndex] || null;
}

export function getResearchLabExperiments() {
  return balanceConfig.burgerIndustries.researchLab.experiments;
}

export function getResearchLabExperiment(duration) {
  return balanceConfig.burgerIndustries.researchLab.experiments[duration];
}

export function getResearchShopItems() {
  return balanceConfig.burgerIndustries.researchShop;
}

export function getResearchShopItem(itemId) {
  return balanceConfig.burgerIndustries.researchShop[itemId];
}

export function getResearchShopItemsByTier(tier) {
  const items = balanceConfig.burgerIndustries.researchShop;
  return Object.values(items).filter(item => item.tier === tier);
}

export function getAllBurgerIndustriesData() {
  return {
    config: balanceConfig.burgerIndustries.config,
    researchLab: balanceConfig.burgerIndustries.researchLab,
    researchShop: balanceConfig.burgerIndustries.researchShop
  };
}

// Live reload function
export function reloadBalance() {
  if (window.employees) window.employees.reloadFromConfig();
  if (window.ingredients) window.ingredients.reloadFromConfig();
  if (window.quality) window.quality.reloadFromConfig();
  if (window.spatula) window.spatula.reloadFromConfig();
  if (window.packaging) window.packaging.reloadFromConfig();
  if (window.meatUpgrades) window.meatUpgrades.reloadFromConfig();
  if (window.cspUpgrades) window.cspUpgrades.reloadFromConfig();
  if (window.reloadGoldenSpatulaUpgrades) window.reloadGoldenSpatulaUpgrades();
  if (window.goldenSpatulaHybridSystem && window.goldenSpatulaHybridSystem.reloadFromConfig) {
    window.goldenSpatulaHybridSystem.reloadFromConfig();
  }
  if (window.autoFlipper && window.autoFlipper.reloadFromConfig) {
    window.autoFlipper.reloadFromConfig();
  }
  if (window.stockMarket && window.stockMarket.reloadFromConfig) {
    window.stockMarket.reloadFromConfig();
  }
  if (window.catering && window.catering.reloadFromConfig) {
    window.catering.reloadFromConfig();
  }
  if (window.presenceDetector && window.presenceDetector.reloadFromConfig) {
    window.presenceDetector.reloadFromConfig();
  }
  if (window.burgerIndustries && window.burgerIndustries.reloadFromConfig) {
    window.burgerIndustries.reloadFromConfig();
  }
  if (window.researchShop && window.researchShop.reloadFromConfig) {
    window.researchShop.reloadFromConfig();
  }
}

// Make available globally
window.balanceConfig = balanceConfig;
window.reloadBalance = reloadBalance;

// Auto-load saved balance config on startup
(function loadSavedBalance() {
  const saved = localStorage.getItem("burgerIdleBalanceConfig");
  if (saved) {
    try {
      const loadedConfig = JSON.parse(saved);

      // Apply loaded values to balanceConfig
      if (loadedConfig.employees) {
        Object.assign(balanceConfig.employees, loadedConfig.employees);
      }

      if (loadedConfig.ingredients) {
        if (loadedConfig.ingredients.demandMultiplier !== undefined) {
          balanceConfig.ingredients.demandMultiplier =
            loadedConfig.ingredients.demandMultiplier;
        }
        if (
          loadedConfig.ingredients.lettuce &&
          loadedConfig.ingredients.lettuce.levels
        ) {
          balanceConfig.ingredients.lettuce.levels[0] =
            loadedConfig.ingredients.lettuce.levels[0];
        }
      }

      if (loadedConfig.progression) {
        Object.assign(balanceConfig.progression, loadedConfig.progression);
      }

    } catch (e) {
      console.error("Failed to load saved balance config:", e);
    }
  }
})();
