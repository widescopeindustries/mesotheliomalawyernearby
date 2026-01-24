#!/usr/bin/env node

/**
 * Programmatic Page Manager for Mesothelioma Lead Gen Site
 * 
 * This script helps manage the programmatic generation of location pages.
 * Run with: node scripts/manage-pages.js [command]
 */

const fs = require('fs');
const path = require('path');

// Load keywords data
const keywordsPath = path.join(__dirname, '../src/data/keywords.ts');
const keywordsContent = fs.readFileSync(keywordsPath, 'utf8');

// Parse TARGET_KEYWORDS array (basic parsing - for production use proper TS parser)
const keywordsMatch = keywordsContent.match(/export const TARGET_KEYWORDS = \[([\s\S]*?)\] as const/);

function listPages() {
    console.log('\n📄 Programmatic Location Pages:\n');
    console.log('Current setup uses Next.js Dynamic Routes with generateStaticParams()');
    console.log('Location: src/app/location/[slug]/page.tsx\n');

    // Count keywords from the data file
    const keywordCount = (keywordsContent.match(/slug:/g) || []).length;

    console.log(`✅ ${keywordCount} location pages configured\n`);
    console.log('Pages are generated at build time for:');

    // Extract and display keywords
    const slugMatches = keywordsContent.matchAll(/slug: "([^"]+)"/g);
    let index = 1;
    for (const match of slugMatches) {
        const slug = match[1];
        const [state, city] = slug.split('/');
        console.log(`  ${index}. /location/${slug}`);
        index++;
    }

    console.log('\n💡 To add more pages, edit: src/data/keywords.ts');
    console.log('💡 Pages are auto-generated at build time via generateStaticParams()');
}

function validatePages() {
    console.log('\n🔍 Validating Programmatic Pages Setup...\n');

    const checks = [
        {
            name: 'Dynamic route file exists',
            path: 'src/app/location/[slug]/page.tsx',
            check: () => fs.existsSync(path.join(__dirname, '../src/app/location/[slug]/page.tsx'))
        },
        {
            name: 'Keywords data file exists',
            path: 'src/data/keywords.ts',
            check: () => fs.existsSync(path.join(__dirname, '../src/data/keywords.ts'))
        },
        {
            name: 'generateStaticParams function exists',
            path: 'src/app/location/[slug]/page.tsx',
            check: () => {
                const content = fs.readFileSync(path.join(__dirname, '../src/app/location/[slug]/page.tsx'), 'utf8');
                return content.includes('generateStaticParams')
            }
        },
        {
            name: 'Sitemap generator exists',
            path: 'src/app/sitemap.ts',
            check: () => fs.existsSync(path.join(__dirname, '../src/app/sitemap.ts'))
        },
        {
            name: 'Keywords have required fields',
            path: 'src/data/keywords.ts',
            check: () => {
                return keywordsContent.includes('slug:') &&
                    keywordsContent.includes('city:') &&
                    keywordsContent.includes('state:')
            }
        }
    ];

    let allPassed = true;

    checks.forEach(check => {
        const passed = check.check();
        const icon = passed ? '✅' : '❌';
        console.log(`${icon} ${check.name}`);
        if (!passed) {
            console.log(`   Path: ${check.path}`);
            allPassed = false;
        }
    });

    console.log('');

    if (allPassed) {
        console.log('✅ All validation checks passed!');
        console.log('\n📝 Next steps:');
        console.log('   1. Run: npm run build');
        console.log('   2. Verify generated pages in .next/server/app/location/');
        console.log('   3. Check sitemap at: http://localhost:3000/sitemap.xml\n');
    } else {
        console.log('❌ Some checks failed. Please fix the issues above.\n');
    }
}

function stats() {
    console.log('\n📊 Programmatic Pages Statistics:\n');

    const keywordCount = (keywordsContent.match(/slug:/g) || []).length;

    // Count by keyword difficulty
    const kdMatches = keywordsContent.matchAll(/kd: (\d+)/g);
    const kdCounts = { unicorn: 0, easy: 0, medium: 0, hard: 0 };

    for (const match of kdMatches) {
        const kd = parseInt(match[1]);
        if (kd === 0) kdCounts.unicorn++;
        else if (kd <= 5) kdCounts.easy++;
        else if (kd <= 10) kdCounts.medium++;
        else kdCounts.hard++;
    }

    console.log(`Total Pages: ${keywordCount}`);
    console.log(`\nKeyword Distribution:`);
    console.log(`  🦄 Unicorn (KD 0): ${kdCounts.unicorn}`);
    console.log(`  🟢 Easy (KD 1-5): ${kdCounts.easy}`);
    console.log(`  🟡 Medium (KD 6-10): ${kdCounts.medium}`);
    console.log(`  🔴 Hard (KD > 10): ${kdCounts.hard}`);

    // Count by state
    const stateMatches = keywordsContent.matchAll(/state: "([^"]+)"/g);
    const stateCounts = {};

    for (const match of stateMatches) {
        const state = match[1];
        stateCounts[state] = (stateCounts[state] || 0) + 1;
    }

    console.log(`\nPages by State:`);
    Object.entries(stateCounts)
        .sort((a, b) => b[1] - a[1])
        .forEach(([state, count]) => {
            console.log(`  ${state}: ${count}`);
        });

    console.log('');
}

function help() {
    console.log(`
📚 Mesothelioma Programmatic Pages Manager

Usage: node scripts/manage-pages.js [command]

Commands:
  list        List all programmatic location pages
  validate    Validate the setup and configuration
  stats       Show statistics about your pages
  help        Show this help message

Examples:
  node scripts/manage-pages.js list
  node scripts/manage-pages.js validate
  node scripts/manage-pages.js stats

Technical Details:
  - Uses Next.js 14 App Router with Dynamic Routes
  - Static generation via generateStaticParams()
  - SEO metadata generated per location
  - Sitemap auto-updated at build time
  
Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
  `);
}

// Main execution
const command = process.argv[2] || 'help';

switch (command) {
    case 'list':
        listPages();
        break;
    case 'validate':
        validatePages();
        break;
    case 'stats':
        stats();
        break;
    case 'help':
    default:
        help();
        break;
}
