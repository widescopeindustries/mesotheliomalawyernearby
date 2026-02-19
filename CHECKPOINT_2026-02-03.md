# Mesothelioma Lawyer Nearby - Analytics Checkpoint
**Date:** 2026-02-03
**Site Age:** 3 days
**Domain:** mesotheliomalawyernearby.com

---

## EXECUTIVE SUMMARY

Site is 3 days old. Early data shows indexing is progressing but traffic patterns reveal a potential structural issue: **location pages are not receiving any traffic despite being the core SEO play.**

---

## INDEXING STATUS

### Google Search Console
| Metric | Value |
|--------|-------|
| Sitemap Submitted | 120 pages |
| Sitemap "Indexed" | 0 (lagging metric) |
| Actual Indexed (site: search) | ~7 pages |
| Total Impressions (28d) | 20 |
| Total Clicks | 0 |

### Pages Confirmed Indexed (via site: search)
1. Homepage (http + https)
2. /contact
3. /disclaimer
4. /location/tennessee-nashville
5. /exposure-sites/four-corners-generating-station
6. /exposure-sites/hunters-point-naval-shipyard
7. /sitemap.xml

### GSC Top Queries
| Query | Impressions | Position |
|-------|-------------|----------|
| tennessee mesothelioma lawyer | 5 | 32.6 |
| mesothelioma lawyer tennessee | 6 | 43.5 |
| tennessee mesothelioma attorney | 3 | 33.7 |
| mesothelioma lawyer | 3 | 15.0 |

**Observation:** Tennessee Nashville page is getting GSC impressions but...

---

## GA4 TRAFFIC ANALYSIS

### Overview (28 days)
| Metric | Value |
|--------|-------|
| Sessions | 19 |
| Users | 17 (all new) |
| Page Views | 18 |
| Bounce Rate | 94.7% |
| Engaged Sessions | 1 |

### Pages Actually Visited
| Page | Views | Avg Time | Bounce |
|------|-------|----------|--------|
| / (homepage) | 14 | 17.2s | 92.9% |
| /exposure-sites/hunters-point-naval-shipyard | 4 | 0.6s | 100% |

### THE BIG PROBLEM

**Zero visits to location pages in GA4.**

The site has:
- 87 location pages (state + city)
- 19 exposure site pages
- Core pages (home, contact, about, etc.)

But GA4 shows traffic ONLY to:
- Homepage
- ONE exposure site page

**Where is the Tennessee Nashville traffic?** GSC shows 19 impressions for that page, but GA4 shows 0 visits.

---

## POSSIBLE EXPLANATIONS

### 1. Click vs Impression Gap
- GSC: 19 impressions, 0 clicks for Tennessee page
- No clicks = no GA4 visits
- Position ~35 means users don't see it on page 1

### 2. Testing Traffic Skew
- 14 homepage visits could be owner testing
- 4 Hunters Point visits could be testing
- Real organic traffic: potentially near zero

### 3. ~~GA4 Tracking Issue?~~ VERIFIED OK
- GA4 tracking code is on all pages via layout.tsx
- Measurement ID verified: G-TE3T9D4KC0
- Single data stream, no crossover

### 4. Indexing Bottleneck
- Only 7 pages indexed out of 120
- Location pages may not be indexed yet
- Need to wait for Google to crawl sitemap

---

## GA4 ACCOUNT VERIFICATION (2026-02-03)

**Account Structure - CLEAN:**
```
yourwonclaim (Account: 371113279)
└── mesothelioma nearby fresh (Property: 522469846)
    └── G-TE3T9D4KC0 (Web Stream) → mesotheliomalawyernearby.com
```

- Only 1 account
- Only 1 property
- Only 1 data stream
- Correct measurement ID on live site: VERIFIED
- No data leak or crossover detected

---

## DEVICE BREAKDOWN

| Device | Sessions | Bounce | Avg Time |
|--------|----------|--------|----------|
| Desktop | 12 | 100% | 0.5s |
| Mobile | 7 | 85.7% | 34.1s |

**Red Flag:** Desktop users bounce in 0.5 seconds. Either:
- Bot traffic
- Testing clicks
- Serious desktop UX issue

---

## TRAFFIC SOURCES

| Source | Sessions | Bounce |
|--------|----------|--------|
| Direct | 14 | 92.9% |
| Google Organic | 4 | 100% |
| Ahrefs (referral) | 1 | 100% |

**Note:** Direct traffic is likely owner/testing. Google organic is the real signal.

---

## SITE STRUCTURE REMINDER

```
Total Pages: ~120

Location Pages (87):
├── State pages: 34
└── City pages: 53

Exposure Site Pages (19):
└── Naval shipyards, factories, plants

Core Pages (5+):
├── Homepage
├── /contact
├── /about
├── /disclaimer
├── /veteran-resources
└── /types/peritoneal-mesothelioma
```

---

## CONVERSION TRACKING

**Current State:** NO conversion events set up

**Needed:**
- [ ] Form submission event
- [ ] Phone number click event
- [ ] Scroll depth (25%, 50%, 75%, 90%)
- [ ] CTA button clicks
- [ ] Time on page thresholds

---

## ACTION ITEMS

### Immediate (Today)
1. **Verify GA4 on location pages** - Check if tracking fires
2. **Check page load speed** - Desktop 0.5s bounce suggests issue
3. **Separate test traffic** - Use IP filter or test in incognito

### This Week
4. **Wait for indexing** - 120 pages takes 1-2 weeks
5. **Set up conversion events** - Can't optimize without data
6. **Monitor GSC daily** - Watch for more pages getting impressions

### Next Week
7. **Re-run forensic report** - Need more data for real insights
8. **Analyze which location pages get indexed first** - Prioritize content updates

---

## SCRIPTS CREATED

| Script | Purpose |
|--------|---------|
| `scripts/gsc_analytics.py` | GSC search performance report |
| `scripts/ga4_analytics.py` | GA4 basic overview report |
| `scripts/ga4_forensics.py` | GA4 detailed behavior analysis |
| `scripts/check_indexing_coverage.py` | Indexing status checker |
| `scripts/batch-index-all.js` | Submit URLs to Indexing API |

---

## NEXT CHECKPOINT

Recommended: **2026-02-10** (1 week)

By then:
- More pages should be indexed
- Real organic traffic data
- Can identify actual problem pages vs noise

---

## KEY QUESTION TO ANSWER

**Is the 94.7% bounce rate real user behavior, or is it testing/bot noise?**

With only 19 sessions over 3 days on a brand new site, the data is not yet actionable. The "problems" shown may be statistical noise.

**Patience, grasshopper.** Check back in 1 week with 100+ sessions.
