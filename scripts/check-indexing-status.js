/**
 * Check indexing status for a URL via Google Indexing API
 * 
 * Usage: node scripts/check-indexing-status.js <url>
 */

const { google } = require('googleapis');
const path = require('path');

const SERVICE_ACCOUNT_FILE = path.join(__dirname, '..', 'gsc-service-account.json');

async function checkStatus(url) {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: SERVICE_ACCOUNT_FILE,
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const client = await auth.getClient();
    
    const indexing = google.indexing({
      version: 'v3',
      auth: client,
    });

    console.log(`Checking indexing status for: ${url}`);
    
    const response = await indexing.urlNotifications.getMetadata({
      url: url,
    });

    console.log('\n📊 Indexing Status:');
    console.log(JSON.stringify(response.data, null, 2));
    
    return response.data;
  } catch (error) {
    if (error.code === 404) {
      console.log('ℹ️  URL has not been submitted for indexing yet.');
    } else {
      console.error('❌ Error:', error.message);
    }
    throw error;
  }
}

if (require.main === module) {
  const url = process.argv[2];
  
  if (!url) {
    console.log('Usage: node scripts/check-indexing-status.js <url>');
    process.exit(1);
  }

  checkStatus(url)
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}

module.exports = { checkStatus };
