# Google Search Console Indexing API Setup

This guide will help you set up programmatic indexing for your mesothelioma site to bypass manual quota limits.

## Step 1: Enable the Indexing API in Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select your existing project
3. Navigate to **APIs & Services > Library**
4. Search for "**Web Search Indexing API**" (also called "Indexing API")
5. Click **Enable**

## Step 2: Create a Service Account

1. Go to **APIs & Services > Credentials**
2. Click **Create Credentials > Service Account**
3. Fill in the details:
   - **Service account name:** `gsc-indexing-service`
   - **Service account ID:** `gsc-indexing-service` (auto-filled)
   - **Description:** "Service account for Google Search Console Indexing API"
4. Click **Create and Continue**
5. Grant this service account the **Owner** role (or at minimum, **Indexing API Editor**)
6. Click **Continue**, then **Done**

## Step 3: Create and Download Service Account Key

1. In **APIs & Services > Credentials**, find your service account
2. Click on the service account name
3. Go to the **Keys** tab
4. Click **Add Key > Create new key**
5. Select **JSON** format
6. Click **Create** - the JSON file will download automatically
7. **IMPORTANT:** Save this file as `gsc-service-account.json` in your project root
8. **Add to .gitignore immediately** to prevent committing credentials

## Step 4: Add Service Account to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property (https://mesotheliomalawyernearby.com)
3. Click **Settings** (gear icon) in the left sidebar
4. Click **Users and permissions**
5. Click **Add user**
6. Enter the service account email (format: `gsc-indexing-service@YOUR-PROJECT-ID.iam.gserviceaccount.com`)
   - You can find this email in the downloaded JSON file under `client_email`
7. Set permission to **Owner**
8. Click **Add**

## Step 5: Install Required Dependencies

```bash
npm install googleapis --save
```

## Step 6: Update .gitignore

Make sure the following is in your `.gitignore`:
```
gsc-service-account.json
.env.local
```

## Step 7: Update Environment Variables

Add to your `.env.local`:
```
GOOGLE_APPLICATION_CREDENTIALS=./gsc-service-account.json
```

## Step 8: Use the Indexing Scripts

We've created two utility scripts:

### Request Indexing for a Single URL
```bash
node scripts/request-indexing.js https://mesotheliomalawyernearby.com/location/texas-houston
```

### Batch Index All Location Pages
```bash
node scripts/batch-index-all.js
```

## API Quotas and Limits

- **Daily quota:** 200 requests per day (per project)
- **Rate limit:** 600 requests per minute
- **Batch size:** We batch in groups of 100 to stay within limits

## Monitoring Indexing Status

Check the status of your indexing requests:
```bash
node scripts/check-indexing-status.js https://mesotheliomalawyernearby.com/
```

## Important Notes

1. **Job Postings & Live Streams:** The Indexing API works best for JobPosting and BroadcastEvent schema types
2. **Other Content:** For regular pages (like your location pages), the API still works but Google prioritizes job/livestream content
3. **No Guarantee:** Requesting indexing doesn't guarantee immediate indexing - it's a signal to Google
4. **Quota Management:** With 32 location pages, you'll use 32 of your 200 daily quota

## Troubleshooting

### "Permission Denied" Error
- Verify the service account email is added to GSC with Owner permissions
- Wait 5-10 minutes after adding the service account to GSC

### "Quota Exceeded" Error
- You've hit the 200/day limit
- Wait 24 hours for quota reset
- Consider prioritizing high-value pages

### "Invalid Credentials" Error
- Check that `gsc-service-account.json` exists in project root
- Verify the JSON file is valid (not corrupted)
- Ensure `GOOGLE_APPLICATION_CREDENTIALS` env var points to the correct file

## Next Steps After Setup

1. Run the batch indexing script to submit all pages
2. Monitor Google Search Console for indexing status over the next 24-48 hours
3. Set up a weekly cron job to re-submit pages if needed
4. Track which pages get indexed fastest to optimize your strategy

---

**Ready to proceed?** Once you've completed Steps 1-4 in Google Cloud Console and GSC, the scripts are ready to use!
