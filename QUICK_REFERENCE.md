# 🚀 Quick Reference Card - Programmatic Pages

## Essential Commands

```bash
# Development
npm run dev                    # Start dev server
npm run build                  # Build for production
npm start                      # Start production server

# Page Management
npm run pages:list             # List all 8 location pages
npm run pages:validate         # Check setup (should all pass ✅)
npm run pages:stats            # Show keyword distribution

# Testing
http://localhost:3000/sitemap.xml           # View sitemap
http://localhost:3000/robots.txt            # View robots.txt
http://localhost:3000/location/new-mexico/albuquerque  # Sample page
```

## File Locations

| File | Purpose |
|------|---------|
| `src/app/sitemap.ts` | Auto-generates sitemap.xml |
| `src/app/robots.ts` | Auto-generates robots.txt |
| `src/app/location/[slug]/page.tsx` | Template for all location pages |
| `src/data/keywords.ts` | Data source (8 keywords) |
| `scripts/manage-pages.js` | Management utility |

## Add New Location (3 Steps)

1. Edit `src/data/keywords.ts`:
   ```typescript
   {
     keyword: "city state mesothelioma lawyer",
     state: "State",
     city: "City",
     kd: 3,
     cpc: 100,
     volume: 200,
     slug: "state/city"
   }
   ```

2. Optional - Add exposure sites to `EXPOSURE_SITES`

3. Rebuild:
   ```bash
   npm run build
   ```

## Current Status

✅ 8 location pages configured  
✅ Sitemap auto-generates  
✅ Robots.txt configured  
✅ All SEO metrics sanitized  
✅ Build passing  

## Before Production

🚨 **CRITICAL**: Replace phone number `(800) 123-4567` in 9 files  
⚠️ Update domain in `sitemap.ts` and `robots.ts`  
⚠️ Add authentication to `/admin` route  

## URLs

**Public Pages:**
- Homepage: `/`
- About: `/about`
- Veteran Resources: `/veteran-resources`
- Locations: `/location/{state}/{city}`

**Internal Only:**
- Admin Dashboard: `/admin` (noindex)

## Scale to 100+ Pages

Simply add more keywords to `src/data/keywords.ts` and rebuild.
Each page auto-generates with unique SEO metadata.

---

**Build Status**: ✅ PASSING  
**Pages**: 11 total (3 core + 8 locations)  
**Ready**: After phone number updates
