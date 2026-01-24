// High-value, low-difficulty keywords from research data
export const TARGET_KEYWORDS = [
  // UNICORN Keywords - KD 0-5, CPC $100+
  {
    keyword: "new mexico mesothelioma lawyer",
    state: "New Mexico",
    city: "Albuquerque", 
    kd: 0,
    cpc: 155,
    volume: 700,
    slug: "new-mexico/albuquerque"
  },
  {
    keyword: "missouri mesothelioma lawyer", 
    state: "Missouri",
    city: "St. Louis",
    kd: 5,
    cpc: 115,
    volume: 90,
    slug: "missouri/st-louis"
  },
  {
    keyword: "los angeles mesothelioma lawyer",
    state: "California", 
    city: "Los Angeles",
    kd: 4,
    cpc: 100,
    volume: 150,
    slug: "california/los-angeles"
  },
  {
    keyword: "mesothelioma lawyer nj",
    state: "New Jersey",
    city: "Newark", 
    kd: 3,
    cpc: 90,
    volume: 60,
    slug: "new-jersey/newark"
  },
  
  // Additional High-Value Targets - KD <10, CPC $30+
  {
    keyword: "montana mesothelioma attorney",
    state: "Montana",
    city: "Billings",
    kd: 0, 
    cpc: 30,
    volume: 250,
    slug: "montana/billings"
  },
  {
    keyword: "mesothelioma lawyer kentucky",
    state: "Kentucky", 
    city: "Louisville",
    kd: 0,
    cpc: 40,
    volume: 90,
    slug: "kentucky/louisville"
  },
  {
    keyword: "chicago mesothelioma lawyer",
    state: "Illinois",
    city: "Chicago", 
    kd: 7,
    cpc: 55,
    volume: 50,
    slug: "illinois/chicago"
  },
  {
    keyword: "michigan mesothelioma lawyer",
    state: "Michigan",
    city: "Detroit",
    kd: 9, 
    cpc: 40,
    volume: 500,
    slug: "michigan/detroit"
  }
] as const

// Asbestos exposure sites data for authority content
export const EXPOSURE_SITES = {
  "New Mexico": [
    { name: "International Minerals & Chemical", city: "Carlsbad", type: "Potash Mining" },
    { name: "Four Corners Generating Station", city: "Fruitland", type: "Coal Power" },
    { name: "Los Alamos National Laboratory", city: "Los Alamos", type: "Government Research" },
    { name: "Burlington Northern Santa Fe", city: "Clovis", type: "Railroad" }
  ],
  "Missouri": [
    { name: "Lake City Army Ammunition Plant", city: "Independence", type: "Military Manufacturing" },
    { name: "Weldon Spring Chemical Plant", city: "St. Charles", type: "Chemical Processing" },
    { name: "Standard Oil Amoco Refinery", city: "Sugar Creek", type: "Oil Refinery" },
    { name: "Mack Truck Assembly Plant", city: "Joplin", type: "Automotive Manufacturing" }
  ],
  "Illinois": [
    { name: "W.R. Grace & Company", city: "Chicago", type: "Chemical Processing" },
    { name: "Johns-Manville Disposal Site", city: "Waukegan", type: "Asbestos Disposal" },
    { name: "Citgo Oil Refinery", city: "Lemont", type: "Oil Refinery" },
    { name: "Great Lakes Naval Training Center", city: "Great Lakes", type: "Naval Facility" }
  ],
  "New Jersey": [
    { name: "Johns-Manville Plant", city: "Manville", type: "Asbestos Manufacturing" },
    { name: "Exxon Bayway Refinery", city: "Linden", type: "Oil Refinery" },
    { name: "Federal Shipbuilding & Drydock", city: "Kearny", type: "Shipyard" },
    { name: "Oyster Creek Nuclear Station", city: "Forked River", type: "Power Generation" }
  ]
} as const

// Navy ship database for veteran long-tail SEO
export const NAVY_SHIPS = [
  { name: "USS America (CV-66)", class: "Aircraft Carrier", risk: "High" },
  { name: "USS Midway (CVB-41)", class: "Aircraft Carrier", risk: "High" },
  { name: "USS Missouri (BB-63)", class: "Battleship", risk: "High" },
  { name: "USS New Jersey (BB-62)", class: "Battleship", risk: "High" },
  { name: "USS Enterprise (CVN-65)", class: "Aircraft Carrier", risk: "High" },
  { name: "USS Cassin Young (DD-793)", class: "Destroyer", risk: "Medium" },
  { name: "USS Oldendorf (DD-972)", class: "Destroyer", risk: "Medium" },
  { name: "USS Long Beach (CGN-9)", class: "Cruiser", risk: "Medium" },
  { name: "USS Los Angeles (CA-135)", class: "Cruiser", risk: "Medium" },
  { name: "USS Ajax (AR-6)", class: "Auxiliary Ship", risk: "High" }
] as const

// VA benefits data for veteran authority content
export const VA_BENEFITS = {
  disability: {
    rating: "100%",
    conditions: ["Mesothelioma", "Asbestosis", "Lung Cancer from Asbestos"],
    monthlyCompensation: "$3,621.95 (2026 rate)"
  },
  healthCare: {
    eligibility: "Free VA healthcare for asbestos-related conditions",
    enrollment: "Automatic with 100% disability rating"
  },
  dependency: {
    eligibility: "Spouse and children may qualify for Dependency and Indemnity Compensation (DIC)",
    monthly: "$1,548.17 (2026 rate)"
  }
} as const