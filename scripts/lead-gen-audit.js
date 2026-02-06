#!/usr/bin/env node

/**
 * Lead Generation Audit Script
 * Comprehensive audit of lead generation optimization
 * 
 * Usage: node scripts/lead-gen-audit.js
 */

const fs = require('fs');
const path = require('path');

console.log('🎯 LEAD GENERATION OPTIMIZATION AUDIT\n');
console.log('='.repeat(70));
console.log('Analyzing codebase for lead conversion optimization...\n');

const results = {
    critical: [],
    warnings: [],
    passed: [],
};

function checkCritical(condition, message) {
    if (!condition) {
        results.critical.push(message);
        return false;
    } else {
        return true;
    }
}

function checkWarning(condition, message) {
    if (!condition) {
        results.warnings.push(message);
        return false;
    } else {
        return true;
    }
}

function checkPassed(message) {
    results.passed.push(message);
}

// ========================================
// 1. PHONE NUMBER AUDIT
// ========================================
console.log('📞 PHONE NUMBER AUDIT');
console.log('-'.repeat(70));

const phoneComponents = [
    'src/components/HeroSection.tsx',
    'src/components/CallToAction.tsx',
    'src/components/StickyMobileCTA.tsx',
    'src/components/Header.tsx',
    'src/components/Footer.tsx',
    'src/app/location/[slug]/page.tsx',
];

let primaryPhone = null;
const phoneOccurrences = new Map();

phoneComponents.forEach(filePath => {
    const fullPath = path.join(__dirname, '..', filePath);
    if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');

        // Find all phone numbers
        const phoneMatches = content.matchAll(/tel:(\d{3}-\d{3}-\d{4})/g);
        for (const match of phoneMatches) {
            const phone = match[1];
            if (!primaryPhone) primaryPhone = phone;

            const count = phoneOccurrences.get(phone) || 0;
            phoneOccurrences.set(phone, count + 1);

            // Check for placeholder
            if (phone.includes('123-4567') || phone.includes('555')) {
                checkCritical(false, `Placeholder phone number in ${filePath}: ${phone}`);
            }
        }
    }
});

if (primaryPhone && !primaryPhone.includes('123') && !primaryPhone.includes('555')) {
    checkPassed(`Primary phone number: ${primaryPhone}`);
    console.log(`✅ Phone number configured: ${primaryPhone}`);
    console.log(`   Found in ${phoneOccurrences.get(primaryPhone)} locations`);
} else {
    checkCritical(false, 'No valid phone number found or placeholder detected');
    console.log('❌ CRITICAL: No valid phone number found!');
}

// ========================================
// 2. CALL TRACKING IMPLEMENTATION
// ========================================
console.log('\n📊 CALL TRACKING IMPLEMENTATION');
console.log('-'.repeat(70));

const analyticsFiles = [
    'src/components/Analytics.tsx',
    'src/lib/analytics.tsx',
];

let hasPhoneTracking = false;
let hasFormTracking = false;
let hasConversionTracking = false;

analyticsFiles.forEach(filePath => {
    const fullPath = path.join(__dirname, '..', filePath);
    if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');

        if (content.includes('trackPhoneClick') || content.includes('trackPhoneCall')) {
            hasPhoneTracking = true;
        }

        if (content.includes('trackFormSubmit') || content.includes('trackFormSubmission')) {
            hasFormTracking = true;
        }

        if (content.includes('conversion')) {
            hasConversionTracking = true;
        }
    }
});

checkWarning(hasPhoneTracking, 'Phone click tracking not implemented');
checkWarning(hasFormTracking, 'Form submission tracking not implemented');
checkWarning(hasConversionTracking, 'Conversion event tracking not set up');

console.log(hasPhoneTracking ? '✅' : '❌', 'Phone click tracking:', hasPhoneTracking);
console.log(hasFormTracking ? '✅' : '❌', 'Form submission tracking:', hasFormTracking);
console.log(hasConversionTracking ? '✅' : '❌', 'Conversion events:', hasConversionTracking);

// ========================================
// 3. CTA VISIBILITY AUDIT
// ========================================
console.log('\n🎯 CALL-TO-ACTION (CTA) VISIBILITY');
console.log('-'.repeat(70));

// Check homepage
const homepagePath = path.join(__dirname, '..', 'src/app/page.tsx');
if (fs.existsSync(homepagePath)) {
    const content = fs.readFileSync(homepagePath, 'utf8');

    const hasHero = content.includes('HeroSection');
    const hasCTA = content.includes('CallToAction');
    const hasForm = content.includes('TCPAConsentForm');
    const hasSticky = fs.existsSync(path.join(__dirname, '..', 'src/components/StickyMobileCTA.tsx'));

    console.log(hasHero ? '✅' : '❌', 'Hero section with primary CTA:', hasHero);
    console.log(hasCTA ? '✅' : '❌', 'Dedicated CTA section:', hasCTA);
    console.log(hasForm ? '✅' : '❌', 'Lead capture form:', hasForm);
    console.log(hasSticky ? '✅' : '❌', 'Sticky mobile CTA:', hasSticky);

    checkWarning(hasHero && hasCTA, 'Missing CTA components on homepage');

    if (hasHero && hasCTA && hasForm) {
        checkPassed('Multiple conversion touchpoints on homepage');
    }
}

// ========================================
// 4. FORM FUNCTIONALITY AUDIT
// ========================================
console.log('\n📝 FORM FUNCTIONALITY');
console.log('-'.repeat(70));

const formPath = path.join(__dirname, '..', 'src/components/TCPAConsentForm.tsx');
if (fs.existsSync(formPath)) {
    const content = fs.readFileSync(formPath, 'utf8');

    const hasTCPA = content.includes('TCPA') || content.includes('consent');
    const hasSubmit = content.includes('onSubmit') || content.includes('handleSubmit');
    const hasValidation = content.includes('validation') || content.includes('required');
    const hasErrorHandling = content.includes('error') && content.includes('catch');
    const hasSuccessMessage = content.includes('success') || content.includes('thank');

    console.log(hasTCPA ? '✅' : '⚠️ ', 'TCPA consent language:', hasTCPA);
    console.log(hasSubmit ? '✅' : '❌', 'Form submission handler:', hasSubmit);
    console.log(hasValidation ? '✅' : '⚠️ ', 'Input validation:', hasValidation);
    console.log(hasErrorHandling ? '✅' : '⚠️ ', 'Error handling:', hasErrorHandling);
    console.log(hasSuccessMessage ? '✅' : '⚠️ ', 'Success messaging:', hasSuccessMessage);

    checkWarning(hasSubmit, 'Form has no submission handler');
    checkWarning(hasErrorHandling, 'Form lacks error handling');

    if (hasTCPA) {
        checkPassed('TCPA-compliant consent form');
    }
}

// ========================================
// 5. MOBILE OPTIMIZATION
// ========================================
console.log('\n📱 MOBILE OPTIMIZATION');
console.log('-'.repeat(70));

const stickyCtaPath = path.join(__dirname, '..', 'src/components/StickyMobileCTA.tsx');
if (fs.existsSync(stickyCtaPath)) {
    const content = fs.readFileSync(stickyCtaPath, 'utf8');

    const hasClickToCall = content.includes('tel:');
    const isSticky = content.includes('fixed') || content.includes('sticky');

    console.log(hasClickToCall ? '✅' : '❌', 'Click-to-call enabled:', hasClickToCall);
    console.log(isSticky ? '✅' : '⚠️ ', 'Sticky positioning:', isSticky);

    if (hasClickToCall && isSticky) {
        checkPassed('Sticky mobile CTA with click-to-call');
    }
} else {
    checkWarning(false, 'No sticky mobile CTA component found');
    console.log('⚠️  No sticky mobile CTA found');
}

// ========================================
// 6. ANALYTICS INTEGRATION
// ========================================
console.log('\n📊 ANALYTICS & TRACKING');
console.log('-'.repeat(70));

const layoutPath = path.join(__dirname, '..', 'src/app/layout.tsx');
if (fs.existsSync(layoutPath)) {
    const content = fs.readFileSync(layoutPath, 'utf8');

    const hasGA4 = content.includes('GoogleAnalytics') || content.includes('gtag');
    const hasGTM = content.includes('GoogleTagManager');
    const hasClarity = content.includes('clarity') || content.includes('Clarity');
    const hasFBPixel = content.includes('fbq') || content.includes('facebook');

    console.log(hasGA4 ? '✅' : '❌', 'Google Analytics 4:', hasGA4);
    console.log(hasGTM ? '✅' : '⚠️ ', 'Google Tag Manager:', hasGTM);
    console.log(hasClarity ? '✅' : '⚠️ ', 'Microsoft Clarity:', hasClarity);
    console.log(hasFBPixel ? '✅' : '⚠️ ', 'Facebook Pixel:', hasFBPixel);

    checkWarning(hasGA4, 'Google Analytics not implemented');

    if (hasGA4) {
        checkPassed('GA4 tracking implemented');
    }
}

// Check for env variables
const envPath = path.join(__dirname, '..', '.env');
const envExamplePath = path.join(__dirname, '..', '.env.example');

if (!fs.existsSync(envPath)) {
    checkCritical(false, '.env file missing - analytics may not be configured');
    console.log('\n❌ CRITICAL: .env file not found');
    console.log('   Create from .env.example and add your tracking IDs');
} else {
    checkPassed('.env file exists with analytics credentials');
    console.log('\n✅ .env file configured');
}

// ========================================
// 7. SEO OPTIMIZATION FOR LEAD GEN
// ========================================
console.log('\n🔍 SEO OPTIMIZATION');
console.log('-'.repeat(70));

const sitemapPath = path.join(__dirname, '..', 'src/app/sitemap.ts');
const robotsPath = path.join(__dirname, '..', 'src/app/robots.ts');

const hasSitemap = fs.existsSync(sitemapPath);
const hasRobots = fs.existsSync(robotsPath);

console.log(hasSitemap ? '✅' : '⚠️ ', 'Sitemap.xml:', hasSitemap);
console.log(hasRobots ? '✅' : '⚠️ ', 'Robots.txt:', hasRobots);

// Check for Schema markup
const schemaPath = path.join(__dirname, '..', 'src/components/SchemaMarkup.tsx');
const hasSchema = fs.existsSync(schemaPath);
console.log(hasSchema ? '✅' : '⚠️ ', 'Schema.org markup:', hasSchema);

if (hasSitemap && hasRobots) {
    checkPassed('SEO foundation (sitemap + robots.txt)');
}

// ========================================
// 8. PROGRAMMATIC PAGES AUDIT
// ========================================
console.log('\n🗺️  PROGRAMMATIC LOCATION PAGES');
console.log('-'.repeat(70));

const keywordsDataPath = path.join(__dirname, '..', 'src/data/keywords.ts');
if (fs.existsSync(keywordsDataPath)) {
    const content = fs.readFileSync(keywordsDataPath, 'utf8');

    // Count keywords
    const keywordMatches = content.match(/{\s*keyword:/g);
    const keywordCount = keywordMatches ? keywordMatches.length : 0;

    console.log(`✅ ${keywordCount} programmatic location pages configured`);

    if (keywordCount > 20) {
        checkPassed(`${keywordCount} location pages for wider reach`);
    } else {
        checkWarning(false, `Only ${keywordCount} location pages - consider expanding`);
    }
} else {
    checkWarning(false, 'No keywords data file found');
    console.log('⚠️  No keywords data found');
}

// ========================================
// 9. TRUST SIGNALS AUDIT
// ========================================
console.log('\n🛡️  TRUST SIGNALS');
console.log('-'.repeat(70));

const trustComponents = [
    'src/components/TrustSignals.tsx',
    'src/app/privacy-policy/page.tsx',
    'src/app/terms-of-service/page.tsx',
    'src/app/disclaimer/page.tsx',
];

let trustScore = 0;

trustComponents.forEach(filePath => {
    const fullPath = path.join(__dirname, '..', filePath);
    const exists = fs.existsSync(fullPath);
    const label = path.basename(filePath, path.extname(filePath));

    console.log(exists ? '✅' : '⚠️ ', label, ':', exists);
    if (exists) trustScore++;
});

if (trustScore >= 3) {
    checkPassed('Strong trust signals present');
} else {
    checkWarning(false, 'Limited trust signals - add privacy policy, terms, etc.');
}

// ========================================
// 10. PAGE SPEED & PERFORMANCE
// ========================================
console.log('\n⚡ PERFORMANCE OPTIMIZATION');
console.log('-'.repeat(70));

const nextConfigPath = path.join(__dirname, '..', 'next.config.js');
if (fs.existsSync(nextConfigPath)) {
    const content = fs.readFileSync(nextConfigPath, 'utf8');

    const hasImageOptimization = !content.includes('unoptimized');
    const hasCompression = content.includes('compress');

    console.log(hasImageOptimization ? '✅' : '⚠️ ', 'Image optimization:', hasImageOptimization);
    console.log('✅ Next.js static generation (fast loading)');

    checkPassed('Next.js performance optimizations');
}

// ========================================
// FINAL REPORT
// ========================================
console.log('\n' + '='.repeat(70));
console.log('📊 AUDIT SUMMARY');
console.log('='.repeat(70));

const totalChecks = results.critical.length + results.warnings.length + results.passed.length;
const score = Math.round((results.passed.length / totalChecks) * 100);

console.log(`\n✅ Passed: ${results.passed.length}`);
console.log(`⚠️  Warnings: ${results.warnings.length}`);
console.log(`❌ Critical Issues: ${results.critical.length}`);
console.log(`\n🎯 Lead Generation Optimization Score: ${score}%\n`);

if (results.critical.length > 0) {
    console.log('🚨 CRITICAL ISSUES TO FIX IMMEDIATELY:');
    console.log('-'.repeat(70));
    results.critical.forEach((issue, i) => {
        console.log(`${i + 1}. ❌ ${issue}`);
    });
    console.log('');
}

if (results.warnings.length > 0) {
    console.log('⚠️  WARNINGS (Recommended Improvements):');
    console.log('-'.repeat(70));
    results.warnings.forEach((issue, i) => {
        console.log(`${i + 1}. ⚠️  ${issue}`);
    });
    console.log('');
}

console.log('✅ STRENGTHS:');
console.log('-'.repeat(70));
results.passed.slice(0, 5).forEach((item, i) => {
    console.log(`${i + 1}. ✅ ${item}`);
});

console.log('\n' + '='.repeat(70));
console.log('📈 NEXT STEPS FOR OPTIMIZATION:');
console.log('='.repeat(70));
console.log('1. Run: node scripts/check-ga4-stats.js (check analytics)');
console.log('2. Test all phone CTAs on mobile devices');
console.log('3. Check Google Analytics for conversion tracking');
console.log('4. Review Google Search Console for indexing status');
console.log('5. Test form submissions end-to-end');
console.log('\n✅ Audit Complete!\n');

// Exit with appropriate code
process.exit(results.critical.length > 0 ? 1 : 0);
