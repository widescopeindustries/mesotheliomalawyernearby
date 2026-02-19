#!/usr/bin/env python3
"""
PageSpeed Insights Bulk Audit
Checks Core Web Vitals for all site pages
Requires: PageSpeed Insights API enabled
"""

import os
import json
import time
import requests
from datetime import datetime
from concurrent.futures import ThreadPoolExecutor, as_completed

# Configuration
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)

# Get API key from environment - leave blank for free tier (rate limited)
API_KEY = os.environ.get('GOOGLE_PAGESPEED_KEY', '')

BASE_URL = 'https://mesotheliomalawyernearby.com'

# Key pages to audit
PAGES_TO_AUDIT = [
    '/',
    '/contact',
    '/about',
    '/location/texas-houston',
    '/location/louisiana-baton-rouge',
    '/location/california-los-angeles',
    '/location/florida-miami',
    '/exposure-sites/hunters-point-naval-shipyard',
    '/exposure-sites/long-beach-naval-shipyard',
    '/types/pleural-mesothelioma',
    '/types/peritoneal-mesothelioma',
]


def get_pagespeed_data(url, strategy='mobile'):
    """Fetch PageSpeed Insights data for a URL."""
    api_url = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed'
    
    params = {
        'url': url,
        'strategy': strategy,
        'category': ['performance', 'accessibility', 'best-practices', 'seo']
    }
    
    if API_KEY:
        params['key'] = API_KEY
    
    try:
        response = requests.get(api_url, params=params, timeout=60)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        return {'error': str(e), 'url': url}


def extract_metrics(data):
    """Extract key metrics from PageSpeed response."""
    if 'error' in data:
        return data
    
    try:
        lhr = data.get('lighthouseResult', {})
        categories = lhr.get('categories', {})
        audits = lhr.get('audits', {})
        
        # Core Web Vitals
        metrics = {
            'url': data.get('id', ''),
            'performance': int(categories.get('performance', {}).get('score', 0) * 100),
            'accessibility': int(categories.get('accessibility', {}).get('score', 0) * 100),
            'best_practices': int(categories.get('best-practices', {}).get('score', 0) * 100),
            'seo': int(categories.get('seo', {}).get('score', 0) * 100),
            
            # Core Web Vitals
            'lcp': audits.get('largest-contentful-paint', {}).get('displayValue', 'N/A'),
            'fid': audits.get('max-potential-fid', {}).get('displayValue', 'N/A'),
            'cls': audits.get('cumulative-layout-shift', {}).get('displayValue', 'N/A'),
            'fcp': audits.get('first-contentful-paint', {}).get('displayValue', 'N/A'),
            'ttfb': audits.get('server-response-time', {}).get('displayValue', 'N/A'),
            'tti': audits.get('interactive', {}).get('displayValue', 'N/A'),
            
            # Issues
            'opportunities': [],
            'diagnostics': []
        }
        
        # Get top opportunities
        for key, audit in audits.items():
            if audit.get('details', {}).get('type') == 'opportunity':
                savings = audit.get('details', {}).get('overallSavingsMs', 0)
                if savings > 100:
                    metrics['opportunities'].append({
                        'title': audit.get('title', key),
                        'savings_ms': savings
                    })
        
        # Sort by potential savings
        metrics['opportunities'].sort(key=lambda x: x['savings_ms'], reverse=True)
        metrics['opportunities'] = metrics['opportunities'][:5]  # Top 5
        
        return metrics
        
    except Exception as e:
        return {'error': str(e), 'url': data.get('id', '')}


def print_results(results):
    """Print formatted results."""
    print("\n" + "=" * 80)
    print("  PAGESPEED INSIGHTS AUDIT")
    print(f"  {BASE_URL}")
    print(f"  Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print("=" * 80)
    
    # Summary table
    print(f"\n{'Page':<45} {'Perf':>6} {'A11y':>6} {'BP':>6} {'SEO':>6}")
    print("-" * 75)
    
    good_count = 0
    needs_work = []
    
    for r in results:
        if 'error' in r:
            print(f"{r.get('url', 'Unknown'):<45} ERROR: {r['error'][:25]}")
            continue
            
        page = r['url'].replace(BASE_URL, '')[:43] or '/'
        perf = r['performance']
        a11y = r['accessibility']
        bp = r['best_practices']
        seo = r['seo']
        
        # Color coding (emoji indicators)
        perf_icon = '🟢' if perf >= 90 else '🟡' if perf >= 50 else '🔴'
        
        print(f"{page:<45} {perf_icon}{perf:>4} {a11y:>6} {bp:>6} {seo:>6}")
        
        if perf >= 90:
            good_count += 1
        else:
            needs_work.append(r)
    
    # Core Web Vitals details
    print(f"\n{'Page':<35} {'LCP':>10} {'FID':>10} {'CLS':>10}")
    print("-" * 70)
    
    for r in results:
        if 'error' in r:
            continue
        page = r['url'].replace(BASE_URL, '')[:33] or '/'
        print(f"{page:<35} {r['lcp']:>10} {r['fid']:>10} {r['cls']:>10}")
    
    # Top opportunities across all pages
    print("\n=== TOP OPTIMIZATION OPPORTUNITIES ===\n")
    
    all_opps = {}
    for r in results:
        if 'error' in r:
            continue
        for opp in r.get('opportunities', []):
            title = opp['title']
            if title not in all_opps:
                all_opps[title] = {'count': 0, 'total_savings': 0}
            all_opps[title]['count'] += 1
            all_opps[title]['total_savings'] += opp['savings_ms']
    
    sorted_opps = sorted(all_opps.items(), key=lambda x: x[1]['total_savings'], reverse=True)
    
    for title, data in sorted_opps[:10]:
        print(f"  • {title}")
        print(f"    Affects {data['count']} pages, ~{data['total_savings']:.0f}ms total savings")
    
    # Summary
    print("\n" + "=" * 80)
    print(f"  SUMMARY: {good_count}/{len(results)} pages with good performance (90+)")
    print("=" * 80 + "\n")


def main():
    print("Starting PageSpeed audit...")
    print(f"Auditing {len(PAGES_TO_AUDIT)} pages (mobile strategy)\n")
    
    results = []
    
    # Run audits (sequential to avoid rate limits)
    for i, page in enumerate(PAGES_TO_AUDIT):
        url = f"{BASE_URL}{page}"
        print(f"  [{i+1}/{len(PAGES_TO_AUDIT)}] {page}...", end=' ', flush=True)
        
        data = get_pagespeed_data(url, strategy='mobile')
        metrics = extract_metrics(data)
        results.append(metrics)
        
        if 'error' in metrics:
            print(f"ERROR")
        else:
            print(f"Perf: {metrics['performance']}")
        
        # Rate limit - wait between requests (free tier is very limited)
        if not API_KEY:
            time.sleep(5)  # 5 sec delay for free tier
    
    print_results(results)
    
    # Save raw results
    output_file = os.path.join(PROJECT_DIR, 'data', 'pagespeed-audit.json')
    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    
    with open(output_file, 'w') as f:
        json.dump({
            'generated': datetime.now().isoformat(),
            'results': results
        }, f, indent=2)
    
    print(f"Raw data saved to: {output_file}")


if __name__ == '__main__':
    main()
