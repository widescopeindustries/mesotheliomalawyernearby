#!/usr/bin/env node

/**
 * GA4 Analytics Status Check Script
 * Checks Google Analytics 4 implementation and provides debugging info
 * 
 * Usage: node scripts/check-ga4-stats.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Google Analytics 4 (GA4) Status Check\n');
console.log('='.repeat(60));

// Check for .env file
const envPath = path.join(__dirname, '..', '.env');
const envExamplePath = path.join(__dirname, '..', '.env.example');
const hasEnvFile = fs.existsSync(envPath);

console.log('\n📋 Environment Configuration:');
console.log('-'.repeat(60));

if (!hasEnvFile) {
  console.log('⚠️  WARNING: No .env file found!');
  console.log('   Create a .env file based on .env.example');
  console.log(`   Location: ${envPath}`);
} else {
  console.log('✅ .env file exists');
  
  // Read and check GA4 ID
  const envContent = fs.readFileSync(envPath, 'utf8');
  const gaIdMatch = envContent.match(/NEXT_PUBLIC_GA_ID=(.*)/);
  const gtmIdMatch = envContent.match(/NEXT_PUBLIC_GTM_ID=(.*)/);
  
  if (gaIdMatch) {
    const gaId = gaIdMatch[1].trim();
    if (gaId && gaId !== 'G-XXXXXXXXXX') {
      console.log(`✅ GA4 Measurement ID configured: ${gaId}`);
    } else {
      console.log('⚠️  GA4 Measurement ID is placeholder or empty');
      console.log('   Update NEXT_PUBLIC_GA_ID in .env file');
    }
  } else {
    console.log('❌ NEXT_PUBLIC_GA_ID not found in .env');
  }
  
  if (gtmIdMatch) {
    const gtmId = gtmIdMatch[1].trim();
    if (gtmId && gtmId !== 'GTM-XXXXXXX') {
      console.log(`✅ GTM ID configured: ${gtmId}`);
    } else {
      console.log('⚠️  GTM ID is placeholder or empty');
    }
  }
}

// Check implementation files
console.log('\n📁 Implementation Files:');
console.log('-'.repeat(60));

const filesToCheck = [
  { path: 'src/components/Analytics.tsx', required: true },
  { path: 'src/lib/analytics.tsx', required: true },
  { path: 'src/app/layout.tsx', required: true },
];

filesToCheck.forEach(({ path: filePath, required }) => {
  const fullPath = path.join(__dirname, '..', filePath);
  const exists = fs.existsSync(fullPath);
  
  if (exists) {
    console.log(`✅ ${filePath}`);
    
    // Check for GA4 tracking code
    const content = fs.readFileSync(fullPath, 'utf8');
    
    if (content.includes('gtag')) {
      console.log(`   ✓ Contains gtag implementation`);
    }
    
    if (content.includes('trackEvent')) {
      console.log(`   ✓ Has event tracking functions`);
    }
    
    if (content.includes('trackPhoneClick') || content.includes('trackPhoneCall')) {
      console.log(`   ✓ Phone call tracking enabled`);
    }
    
    if (content.includes('trackFormSubmit') || content.includes('trackFormSubmission')) {
      console.log(`   ✓ Form submission tracking enabled`);
    }
  } else {
    console.log(`${required ? '❌' : '⚠️'} ${filePath} - NOT FOUND`);
  }
});

// Check for tracking in CTA components
console.log('\n📞 Call-to-Action Tracking:');
console.log('-'.repeat(60));

const ctaComponents = [
  'src/components/HeroSection.tsx',
  'src/components/CallToAction.tsx',
  'src/components/StickyMobileCTA.tsx',
  'src/components/TCPAConsentForm.tsx',
];

let phoneNumberFound = null;
let phoneClicksTracked = false;

ctaComponents.forEach(filePath => {
  const fullPath = path.join(__dirname, '..', filePath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Extract phone number
    const phoneMatch = content.match(/tel:(\d{3}-\d{3}-\d{4})/);
    if (phoneMatch && !phoneNumberFound) {
      phoneNumberFound = phoneMatch[1];
    }
    
    // Check for tracking
    if (content.includes('trackPhoneClick') || content.includes('trackPhoneCall')) {
      phoneClicksTracked = true;
      console.log(`✅ ${path.basename(filePath)} - Phone tracking enabled`);
    } else {
      console.log(`⚠️  ${path.basename(filePath)} - No phone tracking detected`);
    }
  }
});

if (phoneNumberFound) {
  console.log(`\n📞 Phone Number: ${phoneNumberFound}`);
} else {
  console.log(`\n⚠️  No phone number found in CTA components`);
}

// GA4 Setup Instructions
console.log('\n📊 GA4 Setup Status:');
console.log('-'.repeat(60));

// Check if GA4 is actually configured in layout
const layoutPath = path.join(__dirname, '..', 'src/app/layout.tsx');
if (fs.existsSync(layoutPath)) {
  const layoutContent = fs.readFileSync(layoutPath, 'utf8');
  
  if (layoutContent.includes('GoogleAnalytics')) {
    console.log('✅ GoogleAnalytics component is imported in layout');
    
    // Check for hardcoded ID
    const hardcodedIdMatch = layoutContent.match(/gaId=.*["']([G]-[A-Z0-9]+)["']/);
    if (hardcodedIdMatch) {
      const hardcodedId = hardcodedIdMatch[1];
      console.log(`✅ Hardcoded GA4 ID found in layout: ${hardcodedId}`);
      console.log('   📊 This will be used if NEXT_PUBLIC_GA_ID is not set');
    }
  } else {
    console.log('⚠️  GoogleAnalytics component not found in layout');
  }
}

console.log('\n🎯 Conversion Tracking Events:');
console.log('-'.repeat(60));
console.log('The following events should be tracked:');
console.log('  1. Phone Call Clicks (trackPhoneClick)');
console.log('  2. Form Submissions (trackFormSubmit)');
console.log('  3. Page Views (automatic)');
console.log('  4. Location Page Views (trackLocationView)');

console.log('\n📈 How to Check Live Analytics:');
console.log('-'.repeat(60));
console.log('1. Go to: https://analytics.google.com/');
console.log('2. Select your property');
console.log('3. Go to Reports > Realtime');
console.log('4. Check for live events and users');
console.log('\nFor the first week stats:');
console.log('5. Go to Reports > Engagement > Events');
console.log('6. Check date range for last 7 days');
console.log('7. Look for custom events: phone_call, form_submit, conversion');

console.log('\n🔧 Quick Setup Guide (if not configured):');
console.log('-'.repeat(60));
console.log('1. Create GA4 property at https://analytics.google.com/');
console.log('2. Copy your Measurement ID (starts with G-)');
console.log('3. Create .env file from .env.example');
console.log('4. Add: NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX');
console.log('5. Redeploy your application');
console.log('6. Test by visiting your site and checking Realtime reports');

console.log('\n' + '='.repeat(60));
console.log('✅ GA4 Status Check Complete\n');

// Exit with appropriate code
if (!hasEnvFile) {
  console.log('⚠️  Action Required: Create .env file with GA4 credentials\n');
  process.exit(1);
} else {
  console.log('✓ Basic setup looks good! Check live stats in GA4 dashboard\n');
  process.exit(0);
}
