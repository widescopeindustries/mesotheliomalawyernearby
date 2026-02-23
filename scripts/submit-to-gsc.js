/**
 * submit-to-gsc.js — mesotheliomalawyernearby.com
 * 1. Submits/refreshes sitemap via Webmasters API
 * 2. Submits updated pages via Indexing API
 * Run: node scripts/submit-to-gsc.js
 */

const { google } = require("googleapis");
const https = require("https");

const SITE_PROPERTY = "sc-domain:mesotheliomalawyernearby.com";
const SITEMAP_URL = "https://mesotheliomalawyernearby.com/sitemap.xml";
const KEY_FILE = "./gsc-service-account.json";

const URLS_TO_INDEX = [
  // Blog posts (existing + contextually updated)
  "https://mesotheliomalawyernearby.com/blog/veterans-asbestos-exposure",
  "https://mesotheliomalawyernearby.com/blog/understanding-mesothelioma-diagnosis",
  "https://mesotheliomalawyernearby.com/blog/mesothelioma-treatment-options",
  "https://mesotheliomalawyernearby.com/blog/asbestos-trust-funds-explained",
  "https://mesotheliomalawyernearby.com/blog/filing-mesothelioma-lawsuit",
  "https://mesotheliomalawyernearby.com/blog",
  // Core pages (updated with new internal links)
  "https://mesotheliomalawyernearby.com",
  "https://mesotheliomalawyernearby.com/best-mesothelioma-lawyers",
  "https://mesotheliomalawyernearby.com/mesothelioma-lawyer-near-me",
  "https://mesotheliomalawyernearby.com/asbestos-lawyer",
  "https://mesotheliomalawyernearby.com/mesothelioma-lawsuit",
  "https://mesotheliomalawyernearby.com/veteran-resources",
  "https://mesotheliomalawyernearby.com/directory",
  // Top state location pages
  "https://mesotheliomalawyernearby.com/location/texas",
  "https://mesotheliomalawyernearby.com/location/california",
  "https://mesotheliomalawyernearby.com/location/florida",
  "https://mesotheliomalawyernearby.com/location/new-york",
  "https://mesotheliomalawyernearby.com/location/pennsylvania",
  "https://mesotheliomalawyernearby.com/location/ohio",
  "https://mesotheliomalawyernearby.com/location/virginia",
  "https://mesotheliomalawyernearby.com/location/illinois",
  "https://mesotheliomalawyernearby.com/location/georgia",
  "https://mesotheliomalawyernearby.com/location/north-carolina",
  // High-value city pages
  "https://mesotheliomalawyernearby.com/location/houston-texas",
  "https://mesotheliomalawyernearby.com/location/los-angeles-california",
  "https://mesotheliomalawyernearby.com/location/chicago-illinois",
  "https://mesotheliomalawyernearby.com/location/philadelphia-pennsylvania",
  // Type pages
  "https://mesotheliomalawyernearby.com/types/pleural-mesothelioma",
  "https://mesotheliomalawyernearby.com/types/peritoneal-mesothelioma",
  "https://mesotheliomalawyernearby.com/types/pericardial-mesothelioma",
];

function httpGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => resolve({ status: res.statusCode })).on("error", reject);
  });
}

async function submitSitemap(auth) {
  console.log("\n📋 STEP 1: Submit sitemap");
  const webmasters = google.webmasters({ version: "v3", auth });
  try {
    await webmasters.sitemaps.submit({ siteUrl: SITE_PROPERTY, feedpath: SITEMAP_URL });
    console.log(`  ✅ Sitemap submitted: ${SITEMAP_URL}`);
  } catch (err) {
    console.error(`  ✗ ${err.message?.split("\n")[0]}`);
  }
  try {
    const info = await webmasters.sitemaps.get({ siteUrl: SITE_PROPERTY, feedpath: SITEMAP_URL });
    const s = info.data;
    console.log(`  📊 Submitted: ${s.submitted || "?"} | Indexed: ${s.indexed || "?"} | Last downloaded: ${s.lastDownloaded || "never"}`);
  } catch (err) {
    console.log(`  ℹ  ${err.message?.split("\n")[0]}`);
  }
}

async function pingEndpoints() {
  console.log("\n📡 STEP 2: Ping endpoints");
  try {
    const g = await httpGet(`https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`);
    console.log(`  Google: HTTP ${g.status}`);
    const b = await httpGet(`https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`);
    console.log(`  Bing: HTTP ${b.status}`);
  } catch (err) {
    console.log(`  Ping: ${err.message}`);
  }
}

async function submitUrls(auth) {
  console.log("\n🚀 STEP 3: Submit URLs via Indexing API");
  const indexing = google.indexing({ version: "v3", auth });
  let ok = 0, fail = 0;

  for (const url of URLS_TO_INDEX) {
    try {
      await indexing.urlNotifications.publish({ requestBody: { url, type: "URL_UPDATED" } });
      console.log(`  ✅ ${url}`);
      ok++;
      await new Promise((r) => setTimeout(r, 300));
    } catch (err) {
      const msg = err.message || "";
      const code = msg.includes("403") ? "403 forbidden" : msg.includes("429") ? "rate limited" : msg.split("\n")[0];
      console.log(`  ✗  ${url} — ${code}`);
      fail++;
    }
  }
  console.log(`\n  Summary: ${ok} submitted, ${fail} failed`);
}

async function checkStatus(auth) {
  console.log("\n🔍 STEP 4: Index status check");
  const sc = google.searchconsole({ version: "v1", auth });
  const checkUrls = [
    "https://mesotheliomalawyernearby.com",
    "https://mesotheliomalawyernearby.com/blog",
    "https://mesotheliomalawyernearby.com/blog/veterans-asbestos-exposure",
    "https://mesotheliomalawyernearby.com/location/texas",
    "https://mesotheliomalawyernearby.com/location/houston-texas",
  ];
  for (const url of checkUrls) {
    try {
      const r = await sc.urlInspection.index.inspect({
        requestBody: { inspectionUrl: url, siteUrl: SITE_PROPERTY },
      });
      const idx = r.data.inspectionResult?.indexStatusResult;
      const verdict = idx?.verdict || "UNKNOWN";
      const crawled = idx?.lastCrawlTime ? new Date(idx.lastCrawlTime).toLocaleDateString() : "never";
      const icon = verdict === "PASS" ? "✅" : verdict === "NEUTRAL" ? "⚠ " : "❌";
      console.log(`  ${icon} ${url}`);
      console.log(`     ${verdict} | Last crawled: ${crawled}`);
    } catch (err) {
      console.log(`  ✗ ${url} — ${err.message?.split("\n")[0]}`);
    }
    await new Promise((r) => setTimeout(r, 500));
  }
}

async function main() {
  console.log("🦞 mesotheliomalawyernearby.com — GSC Submission");
  console.log("================================================");

  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE,
    scopes: [
      "https://www.googleapis.com/auth/webmasters",
      "https://www.googleapis.com/auth/indexing",
    ],
  });
  const client = await auth.getClient();
  google.options({ auth: client });

  await submitSitemap(client);
  await pingEndpoints();
  await submitUrls(client);
  await checkStatus(client);

  console.log("\n✅ Done. Check GSC Coverage in 24–48h.\n");
}

main().catch((err) => { console.error("Fatal:", err.message); process.exit(1); });
