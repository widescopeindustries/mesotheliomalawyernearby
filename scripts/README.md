# Programmatic Page Generation Scripts

This directory contains utility scripts for managing the programmatic location pages.

## Available Scripts

### `manage-pages.js`
Main utility for managing programmatic location pages.

**Commands:**
```bash
# List all programmatic pages
node scripts/manage-pages.js list

# Validate setup
node scripts/manage-pages.js validate

# Show statistics
node scripts/manage-pages.js stats

# Show help
node scripts/manage-pages.js help
```

## How It Works

### Next.js Dynamic Routes
The site uses Next.js 14 App Router with dynamic routes:
- **Template**: `src/app/location/[slug]/page.tsx`
- **Data Source**: `src/data/keywords.ts`
- **Generation**: `generateStaticParams()` function

### Build Process
1. During `npm run build`, Next.js calls `generateStaticParams()`
2. Returns all slugs from `TARGET_KEYWORDS`
3. Generates static HTML for each location
4. Outputs to `.next/server/app/location/[slug]/`

### Adding New Locations
1. Edit `src/data/keywords.ts`
2. Add new keyword object with required fields:
   ```typescript
   {
     keyword: "city state mesothelioma lawyer",
     state: "State Name",
     city: "City Name",
     kd: 0,      // Keyword difficulty
     cpc: 100,   // Cost per click
     volume: 500, // Monthly search volume
     slug: "state-name/city-name"
   }
   ```
3. Run `npm run build` to generate pages
4. Sitemap auto-updates

### Sitemap Generation
- **File**: `src/app/sitemap.ts`
- **Auto-generated**: Includes all location pages from `TARGET_KEYWORDS`
- **URL**: `/sitemap.xml` (auto-served by Next.js)

## Testing

```bash
# Development mode
npm run dev

# Visit location page
http://localhost:3000/location/new-mexico/albuquerque

# Check sitemap
http://localhost:3000/sitemap.xml

# Build and test
npm run build
npm start
```

## Validation Checklist

- [ ] Dynamic route exists: `src/app/location/[slug]/page.tsx`
- [ ] Keywords data exists: `src/data/keywords.ts`
- [ ] `generateStaticParams` function implemented
- [ ] Sitemap generator exists: `src/app/sitemap.ts`
- [ ] All keywords have required fields (slug, city, state)
- [ ] Build completes without errors
- [ ] All pages accessible after build

## Production Deployment

After adding new locations:
1. Commit changes to Git
2. Push to repository
3. Deployment platform auto-builds
4. New pages go live automatically
5. Sitemap updates automatically

## Troubleshooting

**Problem**: Pages not generating
- Run: `node scripts/manage-pages.js validate`
- Check build output for errors
- Verify `TARGET_KEYWORDS` array syntax

**Problem**: Sitemap missing pages
- Check `src/app/sitemap.ts` imports
- Verify `TARGET_KEYWORDS` export
- Rebuild: `npm run build`

**Problem**: 404 errors on location pages
- Ensure `generateStaticParams` returns correct slugs
- Check slug format matches route pattern
- Verify Next.js version (14+)
