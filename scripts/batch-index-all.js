/**
 * Batch index all location pages via Google Indexing API
 * 
 * Usage: node scripts/batch-index-all.js
 * 
 * This will submit all pages from your TARGET_KEYWORDS to Google for indexing.
 * Daily quota is 200 requests, so we'll batch accordingly.
 */

const { google } = require('googleapis');
const path = require('path');

// Path to service account credentials
const SERVICE_ACCOUNT_FILE = path.join(__dirname, '..', 'gsc-service-account.json');

// Base URL for the site
const BASE_URL = 'https://mesotheliomalawyernearby.vercel.app';

// All location slugs from TARGET_KEYWORDS
const LOCATION_SLUGS = [
  // Original locations
  'new-mexico-albuquerque',
  'missouri-st-louis',
  'california-los-angeles',
  'new-jersey-newark',
  'montana-billings',
  'kentucky-louisville',
  'illinois-chicago',
  'michigan-detroit',
  'texas-houston',
  'texas-dallas',
  'florida-tampa',
  'florida-miami',
  'pennsylvania-philadelphia',
  'pennsylvania-pittsburgh',
  'ohio-cleveland',
  'new-york-new-york-city',
  'new-york-buffalo',
  'washington-seattle',
  'virginia-norfolk',
  'massachusetts-boston',
  'louisiana-new-orleans',
  'arizona-phoenix',
  'maryland-baltimore',
  'wisconsin-milwaukee',
  'indiana-indianapolis',
  'minnesota-minneapolis',
  'alabama-birmingham',
  'west-virginia-charleston',
  'tennessee-nashville',
  'arizona-tucson',
  'ohio-columbus',
  'maryland-annapolis',
  // NEW KD 0 pages
  'utah-salt-lake-city',
  'kansas-wichita',
  'arkansas-little-rock',
  'peritoneal-mesothelioma',
  // NEW KD 1-5 pages
  'colorado-denver',
  'georgia-atlanta',
  'south-carolina-charleston',
  'north-carolina-charlotte',
  'oklahoma-oklahoma-city',
  'mississippi-jackson',
  'connecticut-hartford',
  'iowa-des-moines',
  'nebraska-omaha',
  'nevada-las-vegas',
  'new-hampshire-manchester',
  'rhode-island-providence',
  'delaware-wilmington',
  // Texas cities
  'texas-fort-worth',
  'texas-san-antonio',
  'texas-austin',
  // California cities
  'california-san-diego',
  'california-san-francisco',
  'california-sacramento',
  // Florida cities
  'florida-jacksonville',
  'florida-orlando',
  // Ohio cities
  'ohio-cincinnati',
  // Other
  'colorado-colorado-springs',
  'oregon-portland',
  'louisiana-baton-rouge',
];

// Additional important pages
const OTHER_PAGES = [
  '',           // Homepage
  '/about',
  '/contact',
  '/veteran-resources',
];

async function batchIndex() {
  try {
    // Load service account credentials
    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_FILE,
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const client = await auth.getClient();
    
    // Create indexing client
    const indexing = google.indexing({
      version: 'v3',
      auth: client,
    });

    // Build list of all URLs
    const urls = [
      ...OTHER_PAGES.map(page => `${BASE_URL}${page}`),
      ...LOCATION_SLUGS.map(slug => `${BASE_URL}/location/${slug}`),
    ];

    console.log(`\n📋 Total URLs to index: ${urls.length}`);
    console.log(`📊 Daily quota: 200 requests`);
    console.log(`⏱️  Starting batch indexing...\n`);

    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      
      try {
        console.log(`[${i + 1}/${urls.length}] Indexing: ${url}`);
        
        await indexing.urlNotifications.publish({
          requestBody: {
            url: url,
            type: 'URL_UPDATED',
          },
        });

        successCount++;
        console.log(`   ✅ Success`);

        // Small delay to avoid rate limiting (600/min max)
        await new Promise(resolve => setTimeout(resolve, 150));

      } catch (error) {
        errorCount++;
        
        if (error.code === 429) {
          console.error(`   ❌ QUOTA EXCEEDED - stopping batch`);
          console.log(`\n📊 Processed ${i} URLs before hitting quota.`);
          console.log(`   Remaining URLs will need to be indexed tomorrow.`);
          break;
        } else {
          console.error(`   ❌ Error: ${error.message}`);
        }
      }
    }

    console.log(`\n========================================`);
    console.log(`📊 BATCH INDEXING COMPLETE`);
    console.log(`========================================`);
    console.log(`✅ Successful: ${successCount}`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log(`📋 Total attempted: ${successCount + errorCount}`);
    console.log(`\nCheck Google Search Console in 24-48 hours for indexing status.`);

  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('❌ Service account file not found!');
      console.error('   Please complete Google Cloud setup:');
      console.error('   1. Go to console.cloud.google.com');
      console.error('   2. Enable "Web Search Indexing API"');
      console.error('   3. Create service account and download JSON key');
      console.error('   4. Save as gsc-service-account.json in project root');
    } else {
      console.error('❌ Error:', error.message);
    }
    process.exit(1);
  }
}

// Run
batchIndex();
