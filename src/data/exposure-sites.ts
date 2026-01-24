// Detailed exposure site data with history, dates, and context for E-E-A-T content
export interface ExposureSiteDetail {
    id: string
    name: string
    city: string
    state: string
    type: string
    yearsActive: string
    peakExposure: string
    estimatedWorkers: string
    asbestosProducts: string[]
    history: string
    exposureDetails: string
    healthImpact: string
    legalHistory: string
    currentStatus: string
    relatedSites?: string[]
}

export const EXPOSURE_SITE_DETAILS: ExposureSiteDetail[] = [
    // NEW MEXICO
    {
        id: "los-alamos-national-laboratory",
        name: "Los Alamos National Laboratory",
        city: "Los Alamos",
        state: "New Mexico",
        type: "Government Research Facility",
        yearsActive: "1943–Present",
        peakExposure: "1940s–1970s",
        estimatedWorkers: "Over 15,000 during peak years",
        asbestosProducts: [
            "Pipe insulation",
            "Building insulation",
            "Laboratory equipment insulation",
            "Fire-resistant materials",
            "HVAC system components"
        ],
        history: "Los Alamos National Laboratory was established in 1943 as part of the Manhattan Project, the secret World War II program that developed the first nuclear weapons. The facility expanded rapidly during the Cold War, with numerous buildings constructed using asbestos-containing materials that were standard in government construction at the time.",
        exposureDetails: "Workers at Los Alamos faced significant asbestos exposure through multiple pathways. Scientists, technicians, and maintenance workers were exposed to asbestos fibers during the installation, repair, and removal of insulation materials. The laboratory's specialized equipment and high-temperature processes required extensive use of heat-resistant asbestos products. Many workers were unaware of the dangers, as the government did not widely acknowledge asbestos health risks until decades later.",
        healthImpact: "Former Los Alamos workers have developed mesothelioma, asbestosis, and lung cancer at elevated rates compared to the general population. The Energy Employees Occupational Illness Compensation Program Act (EEOICPA) recognizes these workers and provides compensation for asbestos-related diseases contracted at the facility.",
        legalHistory: "Los Alamos workers and their families have filed numerous lawsuits against asbestos product manufacturers. Many cases have resulted in significant settlements and verdicts. The Department of Energy has also faced claims related to inadequate worker protection.",
        currentStatus: "Los Alamos continues to operate as a major national security research facility. Extensive asbestos abatement programs have been conducted, but older buildings may still contain asbestos materials. Strict protocols are now in place for any work that might disturb asbestos-containing materials."
    },
    {
        id: "four-corners-generating-station",
        name: "Four Corners Generating Station",
        city: "Fruitland",
        state: "New Mexico",
        type: "Coal-Fired Power Plant",
        yearsActive: "1963–Present",
        peakExposure: "1963–1980s",
        estimatedWorkers: "Thousands of construction and maintenance workers",
        asbestosProducts: [
            "Boiler insulation",
            "Pipe lagging",
            "Turbine insulation",
            "Gaskets and packing",
            "Cement materials",
            "Refractory materials"
        ],
        history: "The Four Corners Generating Station is one of the largest coal-fired power plants in the United States. Construction began in 1963, and the plant expanded over the following decades. During its construction and early operational years, asbestos was extensively used throughout the facility due to its heat-resistant properties essential for power generation.",
        exposureDetails: "Power plant workers at Four Corners faced daily exposure to asbestos during boiler maintenance, pipe repairs, and turbine servicing. Insulation workers, pipefitters, boilermakers, and electricians were at highest risk. The confined spaces within the plant meant asbestos fibers could accumulate to dangerous concentrations. Workers often brought asbestos fibers home on their clothing, exposing family members to secondary asbestos exposure.",
        healthImpact: "Multiple former Four Corners workers have been diagnosed with mesothelioma, lung cancer, and asbestosis. The latency period of 20-50 years means workers exposed in the 1960s and 1970s may still be receiving diagnoses today.",
        legalHistory: "Arizona Public Service and various asbestos product suppliers have faced litigation from former workers. Settlements have been reached in numerous cases, with some families receiving compensation after wrongful death claims.",
        currentStatus: "The plant has undergone significant modifications to meet environmental regulations. Units 1, 2, and 3 were retired in 2013. Remaining units continue to operate with modern safety protocols. Asbestos abatement has been conducted, but workers in maintenance roles must still follow strict asbestos handling procedures when encountering legacy materials."
    },
    // TEXAS
    {
        id: "houston-ship-channel-refineries",
        name: "Houston Ship Channel Refineries",
        city: "Houston",
        state: "Texas",
        type: "Oil Refinery Complex",
        yearsActive: "1901–Present",
        peakExposure: "1940s–1980s",
        estimatedWorkers: "Hundreds of thousands over decades",
        asbestosProducts: [
            "Pipe insulation throughout refineries",
            "Tank insulation",
            "Valve packing and gaskets",
            "Brake materials",
            "Refractory cement",
            "Fireproofing materials"
        ],
        history: "The Houston Ship Channel has been the heart of America's petrochemical industry since the early 1900s. Stretching 52 miles from the Port of Houston to Galveston Bay, the channel hosts one of the largest concentrations of refineries and chemical plants in the world. During the industry's expansion from the 1940s through the 1980s, asbestos was ubiquitous in refinery construction and maintenance.",
        exposureDetails: "Refinery workers along the Houston Ship Channel faced constant asbestos exposure. Pipefitters, insulators, boilermakers, and maintenance workers handled asbestos-containing materials daily. The extreme heat of refinery operations required extensive insulation, much of it containing asbestos. During turnarounds (planned maintenance shutdowns), workers would remove and replace insulation in confined spaces with poor ventilation, dramatically increasing fiber exposure. Contract workers moved between multiple facilities, compounding their exposure risk.",
        healthImpact: "The Houston Ship Channel has produced one of the highest concentrations of mesothelioma cases in the United States. Texas has more mesothelioma deaths than any other state, with a significant portion linked to petrochemical work along the Ship Channel. Family members have also developed mesothelioma from secondary exposure to fibers brought home on work clothes.",
        legalHistory: "Houston has become a major center for asbestos litigation due to the Ship Channel's history. Thousands of lawsuits have been filed against oil companies, refiners, and asbestos product manufacturers. Some of the largest mesothelioma verdicts in U.S. history have come from Houston juries.",
        currentStatus: "The Ship Channel refineries continue to operate as a vital part of America's energy infrastructure. Modern safety regulations prohibit new asbestos use, but legacy asbestos remains in older facilities. Strict abatement protocols are required for any maintenance work that might disturb asbestos-containing materials."
    },
    {
        id: "todd-shipyards-galveston",
        name: "Todd Shipyards",
        city: "Galveston",
        state: "Texas",
        type: "Shipyard",
        yearsActive: "1917–1994",
        peakExposure: "1940s–1970s",
        estimatedWorkers: "Over 20,000 during World War II",
        asbestosProducts: [
            "Ship insulation",
            "Boiler room materials",
            "Pipe covering",
            "Deck flooring materials",
            "Welding blankets",
            "Electrical insulation"
        ],
        history: "Todd Shipyards in Galveston was a major shipbuilding and repair facility that played a crucial role during World War II. At its peak, the yard employed over 20,000 workers building and repairing Naval vessels. The facility continued operating into the 1990s, maintaining and repairing commercial and military ships.",
        exposureDetails: "Shipyard workers faced some of the highest asbestos exposures of any industrial occupation. The confined spaces of ship construction meant workers breathed concentrated asbestos fibers during installation of insulation, pipe coverings, and fireproofing materials. Insulators, pipefitters, electricians, and welders were at greatest risk, but all trades working in shipyard environments faced exposure. The U.S. Navy's specifications for ships required extensive use of asbestos for fire protection.",
        healthImpact: "Former Todd Shipyards workers have experienced elevated rates of mesothelioma and asbestos-related lung cancer. Many cases didn't appear until 30-50 years after initial exposure, meaning workers from the 1950s and 1960s continue to be diagnosed today.",
        legalHistory: "Todd Shipyards and numerous asbestos material suppliers have been named in lawsuits. The U.S. government has also faced claims for its role in specifying asbestos materials in Naval ships. Many families have received compensation through settlements and trust fund claims.",
        currentStatus: "The Todd Shipyards Galveston facility closed in 1994. The site has been redeveloped, but the legacy of asbestos exposure continues through ongoing health monitoring and legal claims by former workers and their families."
    },
    // CALIFORNIA
    {
        id: "long-beach-naval-shipyard",
        name: "Long Beach Naval Shipyard",
        city: "Long Beach",
        state: "California",
        type: "Naval Shipyard",
        yearsActive: "1943–1997",
        peakExposure: "1943–1970s",
        estimatedWorkers: "Over 17,000 at peak employment",
        asbestosProducts: [
            "Ship hull insulation",
            "Steam pipe insulation",
            "Boiler insulation",
            "Turbine lagging",
            "Gaskets and packing",
            "Fire curtains and blankets"
        ],
        history: "Long Beach Naval Shipyard was established in 1943 to support World War II naval operations in the Pacific. The shipyard grew to become one of the largest naval repair facilities on the West Coast, servicing battleships, aircraft carriers, and submarines. The facility was closed in 1997 as part of the Base Realignment and Closure (BRAC) process.",
        exposureDetails: "Naval shipyard work was among the most hazardous for asbestos exposure. Workers in Long Beach built, repaired, and overhauled ships that were filled with asbestos-containing materials. Insulators faced the highest exposure, but every trade working on ships encountered asbestos. The Navy's strict fire protection requirements meant every inch of steam piping, every boiler, and every engine room was insulated with asbestos. Workers often labored in poorly ventilated spaces where asbestos fibers accumulated to dangerous levels.",
        healthImpact: "Veterans and civilian workers from Long Beach Naval Shipyard have developed mesothelioma at significantly elevated rates. The Department of Veterans Affairs recognizes asbestos exposure as a service-connected condition for naval veterans. Many former shipyard workers continue to be diagnosed with asbestos-related diseases decades after their exposure.",
        legalHistory: "Thousands of lawsuits have been filed by Long Beach Naval Shipyard workers against asbestos product manufacturers. The Federal government has also faced claims through the Federal Tort Claims Act. Asbestos trust funds established by bankrupt manufacturers continue to pay claims to qualifying victims.",
        currentStatus: "The shipyard closed in 1997 and has been redeveloped as a commercial port and real estate development. While the physical shipyard is gone, the health impacts continue. Veterans and former civilian workers are encouraged to participate in medical monitoring programs and to contact a mesothelioma attorney if diagnosed with an asbestos-related disease."
    },
    {
        id: "hunters-point-naval-shipyard",
        name: "Hunters Point Naval Shipyard",
        city: "San Francisco",
        state: "California",
        type: "Naval Shipyard",
        yearsActive: "1941–1974",
        peakExposure: "1941–1970s",
        estimatedWorkers: "Over 18,000 at peak",
        asbestosProducts: [
            "Pipe insulation",
            "Boiler covering",
            "Ship deck materials",
            "Electrical components",
            "Friction materials",
            "Cement products"
        ],
        history: "Hunters Point Naval Shipyard in San Francisco was a major ship repair and maintenance facility during World War II and the Korean War. The shipyard also served as a radiological testing facility after atomic bomb tests in the Pacific. The facility was decommissioned in 1974 but has been designated a Superfund site due to extensive contamination, including asbestos.",
        exposureDetails: "Workers at Hunters Point faced the classic shipyard exposure pattern: intensive work in confined spaces with asbestos-containing materials. The facility's role in maintaining warships meant workers constantly handled asbestos insulation, pipe coverings, and fireproofing materials. Minority workers, particularly African Americans recruited from the South during the Great Migration, were often assigned the most hazardous insulation and boiler room work.",
        healthImpact: "Former Hunters Point workers and nearby community residents have experienced elevated rates of mesothelioma and other asbestos-related diseases. Environmental justice advocates have noted that the predominantly minority workforce and surrounding community bore a disproportionate health burden from the site's contamination.",
        legalHistory: "Litigation has targeted both the U.S. Navy and private contractors who manufactured and supplied asbestos materials to the shipyard. The Superfund cleanup has been controversial, with questions raised about the thoroughness of remediation efforts.",
        currentStatus: "Hunters Point remains a Superfund site with ongoing environmental remediation. Plans for residential and commercial redevelopment have been complicated by concerns about remaining contamination. Former workers and community members continue to advocate for accountability and compensation."
    },
    // PENNSYLVANIA
    {
        id: "philadelphia-naval-shipyard",
        name: "Philadelphia Naval Shipyard",
        city: "Philadelphia",
        state: "Pennsylvania",
        type: "Naval Shipyard",
        yearsActive: "1801–1996",
        peakExposure: "1940s–1970s",
        estimatedWorkers: "Over 40,000 at World War II peak",
        asbestosProducts: [
            "Ship insulation throughout",
            "Steam line coverings",
            "Boiler room materials",
            "Turbine lagging",
            "Fireproofing compounds",
            "Gaskets and valve packing"
        ],
        history: "The Philadelphia Naval Shipyard was America's first naval shipyard, established in 1801. The facility built and repaired ships for nearly two centuries, including major operations during both World Wars, the Korean War, and the Cold War. At its peak during World War II, the shipyard employed over 40,000 workers and launched ships at a remarkable pace.",
        exposureDetails: "Philadelphia Naval Shipyard workers faced the intensive asbestos exposure common to all naval shipyards. The facility's long history meant multiple generations of workers were exposed to asbestos. Insulators, pipefitters, boilermakers, and electricians worked directly with asbestos materials. Other trades faced secondary exposure from working alongside insulation operations. The urgency of wartime production often meant workers had little or no respiratory protection.",
        healthImpact: "The Philadelphia region has one of the highest concentrations of mesothelioma cases in the northeastern United States, with many cases traced to naval shipyard exposure. Both veterans and civilian workers have been diagnosed with mesothelioma, asbestosis, and asbestos-related lung cancer at elevated rates.",
        legalHistory: "Philadelphia-area asbestos litigation has resulted in numerous settlements and verdicts for shipyard workers. Pennsylvania courts have been active venues for asbestos cases. Multiple asbestos trust funds have paid claims to former Philadelphia Naval Shipyard workers and their families.",
        currentStatus: "The naval shipyard was closed in 1996 but portions continue to operate as a commercial shipbuilding facility. Environmental remediation has addressed some asbestos contamination, but workers at the successor facility must still follow protocols when encountering legacy asbestos materials."
    },
    // VIRGINIA
    {
        id: "norfolk-naval-shipyard",
        name: "Norfolk Naval Shipyard",
        city: "Portsmouth",
        state: "Virginia",
        type: "Naval Shipyard",
        yearsActive: "1767–Present",
        peakExposure: "1940s–1970s",
        estimatedWorkers: "Over 40,000 at peak",
        asbestosProducts: [
            "Hull insulation",
            "Machinery insulation",
            "Pipe lagging",
            "Boiler covering",
            "Electrical insulation",
            "Fireproofing materials"
        ],
        history: "Norfolk Naval Shipyard is the oldest and largest shipyard in the United States, operating continuously since 1767. The facility has built and repaired ships for the U.S. Navy through every American conflict. During World War II, the shipyard employed over 40,000 workers and continues today as a vital naval facility.",
        exposureDetails: "Norfolk Naval Shipyard workers experienced the full range of shipyard asbestos exposure over more than two centuries. The facility's role as the nation's primary nuclear submarine maintenance yard added additional exposure dimensions. Workers overhauling nuclear vessels handled asbestos insulation in confined spaces with specialized ventilation requirements. The shipyard's continuous operation means exposure continued longer than at shipyards that closed earlier.",
        healthImpact: "The Hampton Roads region of Virginia has elevated mesothelioma rates directly linked to the shipyard. Veterans who served on ships maintained at Norfolk and civilian shipyard workers alike have developed asbestos-related diseases. The Department of Veterans Affairs recognizes this exposure for disability claims.",
        legalHistory: "Norfolk-area asbestos litigation has been extensive, with cases filed against dozens of asbestos product manufacturers. Virginia's legal framework for asbestos cases has evolved through cases originating from shipyard exposure. Substantial settlements and verdicts have compensated affected workers and families.",
        currentStatus: "Norfolk Naval Shipyard continues to operate as the Navy's largest maintenance facility. Modern safety protocols strictly regulate asbestos handling.  Workers encountering legacy asbestos materials must follow comprehensive abatement procedures. Medical surveillance programs monitor long-term workers for asbestos-related conditions."
    },
    {
        id: "newport-news-shipbuilding",
        name: "Newport News Shipbuilding",
        city: "Newport News",
        state: "Virginia",
        type: "Shipyard",
        yearsActive: "1886–Present",
        peakExposure: "1940s–1970s",
        estimatedWorkers: "Over 30,000 at peak",
        asbestosProducts: [
            "Ship insulation systems",
            "Pipe and valve insulation",
            "Turbine coverings",
            "Electrical insulation",
            "Welding materials",
            "Deck and bulkhead materials"
        ],
        history: "Newport News Shipbuilding is one of only two facilities in the United States capable of building nuclear-powered aircraft carriers and one of only a few that can build nuclear submarines. The shipyard has operated since 1886 and has been a cornerstone of American naval power projection. During peak production, the shipyard employed over 30,000 workers.",
        exposureDetails: "Newport News workers faced intensive asbestos exposure during the construction and repair of some of the Navy's largest vessels. Aircraft carriers and submarines required massive amounts of insulation for fire protection and thermal efficiency. Workers spent months working on individual ships, accumulating significant cumulative exposures. The complexity of modern warships meant multiple trades working in proximity, spreading asbestos fibers throughout work areas.",
        healthImpact: "Former Newport News workers have developed mesothelioma at rates significantly above the general population. The shipyard's workforce has included multiple generations of local families, meaning asbestos-related diseases have affected entire communities in the Hampton Roads area.",
        legalHistory: "Newport News Shipbuilding and numerous asbestos material suppliers have been defendants in thousands of lawsuits. The shipyard's prominent role in American defense has added complexity to litigation, with national security implications sometimes affecting case proceedings.",
        currentStatus: "Newport News Shipbuilding continues as America's premier builder of nuclear-powered vessels. The company (now part of Huntington Ingalls Industries) has implemented comprehensive asbestos management programs. New construction is asbestos-free, but repair work on older vessels may still encounter legacy asbestos materials."
    },
    // MICHIGAN
    {
        id: "ford-rouge-plant",
        name: "Ford Motor Company Rouge Plant",
        city: "Dearborn",
        state: "Michigan",
        type: "Automotive Manufacturing",
        yearsActive: "1917–Present",
        peakExposure: "1930s–1970s",
        estimatedWorkers: "Over 100,000 at peak",
        asbestosProducts: [
            "Brake linings and pads",
            "Clutch facings",
            "Furnace insulation",
            "Pipe lagging",
            "Electrical components",
            "Foundry materials"
        ],
        history: "The Ford Rouge Plant was once the largest integrated industrial complex in the world. At its peak, the facility employed over 100,000 workers and included its own steel mill, glass plant, and power station. The plant produced Model A automobiles, World War II bombers, and generations of Ford trucks. Raw materials entered one end and finished vehicles rolled out the other.",
        exposureDetails: "Rouge Plant workers faced asbestos exposure from multiple sources. Brake and clutch manufacturing involved direct handling of asbestos-containing friction materials. The steel mill, power plant, and foundry operations all used asbestos insulation extensively. Maintenance workers across the complex handled asbestos materials during equipment repairs. The plant's massive scale meant asbestos exposure affected workers in nearly every department.",
        healthImpact: "Former Rouge Plant workers have been diagnosed with mesothelioma, lung cancer, and asbestosis at elevated rates. Michigan has significant mesothelioma incidence linked to automotive manufacturing, with the Rouge Plant being a major contributor. Families of workers have also developed asbestos-related diseases from secondary exposure.",
        legalHistory: "Ford Motor Company and asbestos material suppliers have faced extensive litigation from Rouge Plant workers. The company's long awareness of asbestos hazards has been documented in court proceedings. Substantial settlements have been paid to affected workers and families.",
        currentStatus: "The Rouge Plant continues to operate in a much-reduced form, producing F-150 trucks. The facility has undergone significant modernization, including asbestos abatement. The famous Dearborn truck plant demonstrates modern sustainable manufacturing practices, though legacy asbestos remains in older portions of the complex."
    },
    // OHIO
    {
        id: "republic-steel-cleveland",
        name: "Republic Steel",
        city: "Cleveland",
        state: "Ohio",
        type: "Steel Mill",
        yearsActive: "1930–1984",
        peakExposure: "1940s–1970s",
        estimatedWorkers: "Over 13,000 at peak",
        asbestosProducts: [
            "Furnace linings",
            "Ladle linings",
            "Pipe insulation",
            "Boiler coverings",
            "Heat shields",
            "Protective clothing"
        ],
        history: "Republic Steel was one of America's largest steel producers, formed in 1930 from the merger of several smaller companies. The Cleveland works was one of the company's major facilities, producing steel for construction, automotive, and industrial applications. Republic Steel merged with LTV Steel in 1984.",
        exposureDetails: "Steel mill workers faced some of the most intense heat environments in industry, which required extensive asbestos insulation for worker protection and process efficiency. Furnace workers, ladle operators, and maintenance crews worked in close proximity to asbestos materials daily. The extreme heat would cause asbestos fibers to become airborne, where workers would inhale them. The physically demanding nature of steel work often meant workers breathed heavily, increasing fiber intake.",
        healthImpact: "Cleveland steelworkers have experienced elevated mesothelioma rates. The closure of major steel operations in the 1980s means many exposed workers are now in their 70s and 80s, when asbestos diseases typically manifest. Ohio's industrial decline has left many affected workers without employer-provided health benefits.",
        legalHistory: "Republic Steel's successor companies and numerous asbestos suppliers have faced litigation. The company's bankruptcy and subsequent corporate restructuring has complicated recovery for some victims, though asbestos trust funds continue to provide compensation.",
        currentStatus: "The Republic Steel Cleveland works no longer operates. Much of the industrial land has been redeveloped. Former workers are encouraged to undergo medical monitoring and to consult with asbestos attorneys if diagnosed with related conditions."
    },
    // NEW JERSEY
    {
        id: "johns-manville-manville",
        name: "Johns-Manville Plant",
        city: "Manville",
        state: "New Jersey",
        type: "Asbestos Manufacturing",
        yearsActive: "1912–1986",
        peakExposure: "1920s–1970s",
        estimatedWorkers: "Thousands over decades of operation",
        asbestosProducts: [
            "Asbestos insulation",
            "Asbestos cement products",
            "Asbestos roofing",
            "Asbestos brake products",
            "Asbestos textiles",
            "Asbestos gaskets"
        ],
        history: "The Johns-Manville plant in Manville, New Jersey was one of the company's major asbestos product manufacturing facilities. Johns-Manville was the largest asbestos company in the United States, and the Manville plant was central to its operations. The town was literally named after the company. The facility manufactured a wide range of asbestos-containing products from raw asbestos fiber shipped from mines in Canada and elsewhere.",
        exposureDetails: "Workers at the Manville plant faced direct exposure to raw asbestos fiber and asbestos dust from manufacturing processes. Exposure levels were extraordinarily high by modern standards, with workers often covered in visible asbestos dust by the end of their shifts. The entire town was affected, as asbestos waste was used for playground surfaces, driveways, and fill material. Family members developed mesothelioma from secondary exposure to fibers brought home on work clothes.",
        healthImpact: "The Johns-Manville Manville plant has been linked to one of the highest concentrations of mesothelioma cases in the United States. Workers, family members, and even community residents who never worked at the plant have developed asbestos-related diseases. The town's experience became a stark example of corporate knowledge and concealment of asbestos dangers.",
        legalHistory: "Johns-Manville's liability for asbestos injuries became so extensive that the company filed for bankruptcy in 1982, becoming one of the first major asbestos bankruptcies. The Manville Personal Injury Settlement Trust was established to compensate victims and continues to pay claims today. Internal company documents revealed during litigation showed that Johns-Manville knew of asbestos health hazards for decades while continuing production.",
        currentStatus: "The Manville plant closed in 1986. The site has undergone environmental remediation. The Manville Personal Injury Settlement Trust remains one of the largest asbestos bankruptcy trusts, having paid billions in claims. The town has worked to move beyond its asbestos legacy while honoring those affected."
    },
    // LOUISIANA
    {
        id: "avondale-shipyard",
        name: "Avondale Shipyard",
        city: "Avondale",
        state: "Louisiana",
        type: "Shipyard",
        yearsActive: "1938–2014",
        peakExposure: "1940s–1980s",
        estimatedWorkers: "Over 26,000 at peak",
        asbestosProducts: [
            "Ship insulation",
            "Pipe coverings",
            "Boiler insulation",
            "Electrical components",
            "Deck materials",
            "Fire barriers"
        ],
        history: "Avondale Shipyard was the largest private employer in Louisiana for much of its history. The facility built ships for the U.S. Navy, Coast Guard, and commercial customers. During its peak production years, Avondale employed over 26,000 workers. The shipyard built destroyers, amphibious assault ships, oil tankers, and container ships over its 76-year history.",
        exposureDetails: "Avondale workers faced the intensive asbestos exposure typical of shipbuilding. The facility's Gulf Coast location meant workers often labored in high heat and humidity, which may have increased the health impact of fiber exposure. Insulators, pipefitters, and boilermakers handled asbestos materials directly, while other trades faced secondary exposure. The shipyard's long operational history meant multiple generations of Louisiana families worked and were exposed there.",
        healthImpact: "Louisiana's mesothelioma rates are significantly influenced by Avondale exposure. Workers who built ships in the 1960s and 1970s are now developing mesothelioma at elevated rates. The African American community, which made up a significant portion of Avondale's workforce, has been particularly affected.",
        legalHistory: "Avondale and numerous asbestos product suppliers have faced extensive litigation. Louisiana courts have handled thousands of asbestos cases, many originating from Avondale exposure. Substantial verdicts and settlements have been awarded to affected workers and families.",
        currentStatus: "Avondale Shipyard closed in 2014 after Northrop Grumman decided not to bid on new contracts. The site is being redeveloped for other industrial uses. Former workers are encouraged to undergo medical monitoring and to consult with mesothelioma attorneys if diagnosed with asbestos-related diseases."
    }
]

// Helper function to get site by ID
export function getExposureSiteById(id: string): ExposureSiteDetail | undefined {
    return EXPOSURE_SITE_DETAILS.find(site => site.id === id)
}

// Helper function to get sites by state
export function getExposureSitesByState(state: string): ExposureSiteDetail[] {
    return EXPOSURE_SITE_DETAILS.filter(site => site.state === state)
}
