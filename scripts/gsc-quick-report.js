const { google } = require('googleapis');
const fs = require('fs');
const auth = new google.auth.GoogleAuth({ keyFile: './gsc-service-account.json', scopes: ['https://www.googleapis.com/auth/webmasters.readonly'] });
const sc = google.searchconsole({ version: 'v1', auth });
const site = 'sc-domain:mesotheliomalawyernearby.com';
const end = new Date().toISOString().split('T')[0];
const start = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

async function run() {
    let report = '';
    report += '# GSC Performance Report\n\n';
    report += '**Site:** mesotheliomalawyernearby.com\n\n';
    report += '**Period:** ' + start + ' to ' + end + ' (Last 7 days)\n\n';
    report += '**Generated:** ' + new Date().toLocaleString() + '\n\n';

    // Overall stats
    const overall = await sc.searchanalytics.query({ siteUrl: site, requestBody: { startDate: start, endDate: end, dimensions: [], rowLimit: 1 } });
    if (overall.data.rows && overall.data.rows[0]) {
        const d = overall.data.rows[0];
        report += '## Overall Performance\n\n';
        report += '| Metric | Value |\n';
        report += '|--------|-------|\n';
        report += '| Clicks | ' + d.clicks + ' |\n';
        report += '| Impressions | ' + d.impressions + ' |\n';
        report += '| CTR | ' + (d.ctr * 100).toFixed(2) + '% |\n';
        report += '| Avg Position | ' + d.position.toFixed(1) + ' |\n\n';
    }

    // Top queries
    report += '## Top Search Queries\n\n';
    report += '| # | Query | Impressions | Clicks | Position |\n';
    report += '|---|-------|-------------|--------|----------|\n';
    const queries = await sc.searchanalytics.query({ siteUrl: site, requestBody: { startDate: start, endDate: end, dimensions: ['query'], rowLimit: 25, orderBy: [{ field: 'impressions', order: 'DESC' }] } });
    if (queries.data.rows) {
        queries.data.rows.forEach((row, i) => {
            report += '| ' + (i + 1) + ' | ' + row.keys[0] + ' | ' + row.impressions + ' | ' + row.clicks + ' | ' + row.position.toFixed(1) + ' |\n';
        });
    }

    // Top pages
    report += '\n## Top Pages\n\n';
    report += '| # | Page | Impressions | Clicks | Position |\n';
    report += '|---|------|-------------|--------|----------|\n';
    const pages = await sc.searchanalytics.query({ siteUrl: site, requestBody: { startDate: start, endDate: end, dimensions: ['page'], rowLimit: 20, orderBy: [{ field: 'impressions', order: 'DESC' }] } });
    if (pages.data.rows) {
        pages.data.rows.forEach((row, i) => {
            const page = row.keys[0].replace('https://mesotheliomalawyernearby.com', '') || '/';
            report += '| ' + (i + 1) + ' | ' + page + ' | ' + row.impressions + ' | ' + row.clicks + ' | ' + row.position.toFixed(1) + ' |\n';
        });
    }

    fs.writeFileSync('GSC_REPORT.md', report);
    console.log('Report saved to GSC_REPORT.md');
}

run().catch(e => console.log('Error:', e.message));
