#!/usr/bin/env node

/**
 * Google Search Console Stats Script
 * Fetches performance data from GSC API
 * 
 * Setup:
 * 1. Create a service account in Google Cloud Console
 * 2. Enable Search Console API
 * 3. Add service account email as user in GSC
 * 4. Download JSON key file as gsc-service-account.json
 * 5. Set GOOGLE_APPLICATION_CREDENTIALS in .env
 * 
 * Usage: node scripts/check-gsc-stats.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration - Use sc-domain: format for domain properties
const SITE_URL = 'sc-domain:mesotheliomalawyernearby.com';
const SITE_DISPLAY = 'https://mesotheliomalawyernearby.com';
const CREDENTIALS_PATH = path.join(__dirname, '..', 'gsc-service-account.json');

console.log('📊 Google Search Console Performance Report\n');
console.log('='.repeat(70));
console.log(`Site: ${SITE_URL}`);
console.log(`Date: ${new Date().toLocaleDateString()}\n`);

// Check if credentials exist
if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.log('⚠️  Service account credentials not found.');
    console.log('');
    console.log('To enable GSC API access:');
    console.log('1. Go to: https://console.cloud.google.com/');
    console.log('2. Create a project or select existing');
    console.log('3. Enable "Google Search Console API"');
    console.log('4. Create a Service Account');
    console.log('5. Download the JSON key file');
    console.log('6. Save it as: gsc-service-account.json in the project root');
    console.log('7. Add the service account email to GSC as a user');
    console.log('');
    console.log('For now, here\'s how to check your stats manually:\n');
    showManualInstructions();
    process.exit(0);
}

// If credentials exist, attempt to load and use them
try {
    const { google } = require('googleapis');

    async function getGSCStats() {
        const auth = new google.auth.GoogleAuth({
            keyFile: CREDENTIALS_PATH,
            scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
        });

        const searchconsole = google.searchconsole({ version: 'v1', auth });

        // Calculate date range (last 7 days)
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 7);

        const formatDate = (d) => d.toISOString().split('T')[0];

        console.log(`\n📅 Date Range: ${formatDate(startDate)} to ${formatDate(endDate)}\n`);

        try {
            // Get overall performance
            console.log('📈 OVERALL PERFORMANCE (Last 7 Days)');
            console.log('-'.repeat(70));

            const response = await searchconsole.searchanalytics.query({
                siteUrl: SITE_URL,
                requestBody: {
                    startDate: formatDate(startDate),
                    endDate: formatDate(endDate),
                    dimensions: [],
                    rowLimit: 1,
                },
            });

            if (response.data.rows && response.data.rows.length > 0) {
                const row = response.data.rows[0];
                console.log(`   Clicks:      ${row.clicks.toLocaleString()}`);
                console.log(`   Impressions: ${row.impressions.toLocaleString()}`);
                console.log(`   CTR:         ${(row.ctr * 100).toFixed(2)}%`);
                console.log(`   Avg Position: ${row.position.toFixed(1)}`);
            } else {
                console.log('   No data available yet (site may be new)');
            }

            // Get top queries
            console.log('\n🔍 TOP SEARCH QUERIES');
            console.log('-'.repeat(70));

            const queriesResponse = await searchconsole.searchanalytics.query({
                siteUrl: SITE_URL,
                requestBody: {
                    startDate: formatDate(startDate),
                    endDate: formatDate(endDate),
                    dimensions: ['query'],
                    rowLimit: 10,
                    orderBy: [{ field: 'clicks', order: 'DESC' }],
                },
            });

            if (queriesResponse.data.rows && queriesResponse.data.rows.length > 0) {
                console.log('   Query                                    Clicks  Impr   CTR    Pos');
                console.log('   ' + '-'.repeat(67));
                queriesResponse.data.rows.forEach((row) => {
                    const query = row.keys[0].substring(0, 40).padEnd(40);
                    const clicks = row.clicks.toString().padStart(6);
                    const impressions = row.impressions.toString().padStart(6);
                    const ctr = (row.ctr * 100).toFixed(1).padStart(5) + '%';
                    const position = row.position.toFixed(1).padStart(5);
                    console.log(`   ${query} ${clicks} ${impressions} ${ctr} ${position}`);
                });
            } else {
                console.log('   No query data available yet');
            }

            // Get top pages
            console.log('\n📄 TOP PAGES');
            console.log('-'.repeat(70));

            const pagesResponse = await searchconsole.searchanalytics.query({
                siteUrl: SITE_URL,
                requestBody: {
                    startDate: formatDate(startDate),
                    endDate: formatDate(endDate),
                    dimensions: ['page'],
                    rowLimit: 10,
                    orderBy: [{ field: 'clicks', order: 'DESC' }],
                },
            });

            if (pagesResponse.data.rows && pagesResponse.data.rows.length > 0) {
                console.log('   Page                                              Clicks  Impr');
                console.log('   ' + '-'.repeat(67));
                pagesResponse.data.rows.forEach((row) => {
                    const page = row.keys[0].replace(SITE_URL, '').substring(0, 50).padEnd(50) || '/';
                    const clicks = row.clicks.toString().padStart(6);
                    const impressions = row.impressions.toString().padStart(6);
                    console.log(`   ${page} ${clicks} ${impressions}`);
                });
            } else {
                console.log('   No page data available yet');
            }

            // Get indexing status
            console.log('\n📑 INDEXING STATUS');
            console.log('-'.repeat(70));

            try {
                const inspectResponse = await searchconsole.urlInspection.index.inspect({
                    requestBody: {
                        inspectionUrl: SITE_URL,
                        siteUrl: SITE_URL,
                    },
                });

                const result = inspectResponse.data.inspectionResult;
                if (result) {
                    console.log(`   Homepage Indexed: ${result.indexStatusResult?.verdict || 'Unknown'}`);
                    console.log(`   Last Crawl: ${result.indexStatusResult?.lastCrawlTime || 'Unknown'}`);
                }
            } catch (e) {
                console.log('   Unable to fetch indexing status');
            }

            // Get device breakdown
            console.log('\n📱 DEVICE BREAKDOWN');
            console.log('-'.repeat(70));

            const deviceResponse = await searchconsole.searchanalytics.query({
                siteUrl: SITE_URL,
                requestBody: {
                    startDate: formatDate(startDate),
                    endDate: formatDate(endDate),
                    dimensions: ['device'],
                    rowLimit: 5,
                },
            });

            if (deviceResponse.data.rows && deviceResponse.data.rows.length > 0) {
                deviceResponse.data.rows.forEach((row) => {
                    const device = row.keys[0].padEnd(10);
                    const clicks = row.clicks;
                    const impressions = row.impressions;
                    console.log(`   ${device}: ${clicks} clicks, ${impressions} impressions`);
                });
            }

            console.log('\n' + '='.repeat(70));
            console.log('✅ GSC Report Complete!\n');

        } catch (error) {
            console.error('Error fetching GSC data:', error.message);
            if (error.message.includes('403')) {
                console.log('\n⚠️  Permission denied. Make sure the service account has access to GSC.');
            }
        }
    }

    getGSCStats();

} catch (e) {
    // googleapis not installed
    console.log('⚠️  googleapis package not installed.');
    console.log('Run: npm install googleapis\n');
    showManualInstructions();
}

function showManualInstructions() {
    console.log('='.repeat(70));
    console.log('📊 MANUAL CHECK INSTRUCTIONS');
    console.log('='.repeat(70));

    console.log('\n🔍 GOOGLE SEARCH CONSOLE:');
    console.log('-'.repeat(70));
    console.log('1. Go to: https://search.google.com/search-console/');
    console.log('2. Select property: mesotheliomalawyernearby.com');
    console.log('3. Click "Performance" in left sidebar');
    console.log('');
    console.log('   Key Metrics to Check:');
    console.log('   • Total Clicks (users who clicked your site)');
    console.log('   • Total Impressions (times your site appeared)');
    console.log('   • Average CTR (click-through rate)');
    console.log('   • Average Position (where you rank)');
    console.log('');
    console.log('4. Click "Pages" tab to see which pages get traffic');
    console.log('5. Click "Queries" tab to see search terms');
    console.log('6. Click "Indexing" > "Pages" to see indexed count');

    console.log('\n📈 GOOGLE ANALYTICS 4:');
    console.log('-'.repeat(70));
    console.log('1. Go to: https://analytics.google.com/');
    console.log('2. Select your property (G-TE3T9D4KC0)');
    console.log('3. Reports > Realtime (for live visitors)');
    console.log('4. Reports > Engagement > Events');
    console.log('');
    console.log('   Key Events to Track:');
    console.log('   • page_view (total page views)');
    console.log('   • phone_call (CTA clicks)');
    console.log('   • form_submit (lead form submissions)');
    console.log('   • conversion (goal completions)');

    console.log('\n📞 CONVERSION TRACKING:');
    console.log('-'.repeat(70));
    console.log('Phone Number: 214-699-4543');
    console.log('');
    console.log('To track actual calls:');
    console.log('1. Check phone carrier call logs');
    console.log('2. Or set up call tracking service:');
    console.log('   - CallRail: https://callrail.com/');
    console.log('   - Invoca: https://invoca.com/');
    console.log('   - WhatConverts: https://whatconverts.com/');

    console.log('\n🎯 WEEK 1 BENCHMARKS (New Site):');
    console.log('-'.repeat(70));
    console.log('Expected for a new mesothelioma site after 1 week:');
    console.log('   • Impressions: 50-500 (depending on indexing)');
    console.log('   • Clicks: 1-20');
    console.log('   • Indexed Pages: 20-50 (of 140+ total)');
    console.log('   • Average Position: 30-80 (new sites rank lower)');
    console.log('');
    console.log('💡 Tip: It takes 2-4 weeks for Google to fully');
    console.log('   index and rank a new site. Be patient!');

    console.log('\n' + '='.repeat(70));
    console.log('✅ Check these dashboards for live stats!\n');
}
