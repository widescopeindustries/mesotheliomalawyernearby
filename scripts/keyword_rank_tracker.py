#!/usr/bin/env python3
"""
Keyword Rank Tracker using Custom Search API
Tracks rankings for target keywords
Requires: Custom Search JSON API enabled + Programmable Search Engine
"""

import os
import json
import requests
from datetime import datetime

# Configuration
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)

# You'll need to set these up:
# 1. Enable Custom Search JSON API
# 2. Create a Programmable Search Engine at https://programmablesearchengine.google.com/
# 3. Set it to search the entire web
API_KEY = os.environ.get('GOOGLE_API_KEY', 'YOUR_API_KEY_HERE')
SEARCH_ENGINE_ID = os.environ.get('GOOGLE_CSE_ID', 'YOUR_CSE_ID_HERE')

SITE_DOMAIN = 'mesotheliomalawyernearby.com'

# Target keywords to track
TARGET_KEYWORDS = [
    # High value - national
    'mesothelioma lawyer',
    'mesothelioma attorney',
    'asbestos lawyer',
    'asbestos attorney',
    'mesothelioma law firm',
    
    # Location specific (your top pages)
    'baton rouge mesothelioma lawyer',
    'new orleans mesothelioma attorney',
    'houston mesothelioma lawyer',
    'nashville mesothelioma attorney',
    
    # Long tail
    'navy veteran mesothelioma',
    'mesothelioma lawsuit settlements',
    'asbestos exposure lawyer',
    'mesothelioma compensation',
    
    # Exposure sites
    'hunters point naval shipyard asbestos',
    'long beach naval shipyard mesothelioma',
]


def search_google(query, num_results=100):
    """Search Google via Custom Search API."""
    results = []
    
    # API returns max 10 per request, need to paginate
    for start in range(1, min(num_results, 100), 10):
        url = 'https://www.googleapis.com/customsearch/v1'
        params = {
            'key': API_KEY,
            'cx': SEARCH_ENGINE_ID,
            'q': query,
            'start': start,
            'num': 10
        }
        
        try:
            response = requests.get(url, params=params, timeout=30)
            response.raise_for_status()
            data = response.json()
            
            items = data.get('items', [])
            for i, item in enumerate(items):
                results.append({
                    'position': start + i,
                    'url': item.get('link', ''),
                    'title': item.get('title', ''),
                    'snippet': item.get('snippet', '')
                })
                
        except Exception as e:
            print(f"  Error at position {start}: {e}")
            break
    
    return results


def find_site_ranking(results, domain):
    """Find where our site ranks in results."""
    for r in results:
        if domain in r['url']:
            return r['position'], r['url']
    return None, None


def track_keywords():
    """Track rankings for all target keywords."""
    print("=" * 70)
    print("  KEYWORD RANK TRACKER")
    print(f"  Domain: {SITE_DOMAIN}")
    print(f"  Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print("=" * 70)
    
    if 'YOUR_' in API_KEY or 'YOUR_' in SEARCH_ENGINE_ID:
        print("\n⚠️  SETUP REQUIRED:")
        print("1. Enable Custom Search JSON API in Google Cloud Console")
        print("2. Create a Programmable Search Engine at:")
        print("   https://programmablesearchengine.google.com/")
        print("3. Set environment variables:")
        print("   export GOOGLE_API_KEY='your-api-key'")
        print("   export GOOGLE_CSE_ID='your-search-engine-id'")
        return
    
    rankings = []
    
    print(f"\nTracking {len(TARGET_KEYWORDS)} keywords...\n")
    print(f"{'Keyword':<50} {'Rank':>6} {'URL'}")
    print("-" * 90)
    
    for keyword in TARGET_KEYWORDS:
        results = search_google(keyword)
        position, url = find_site_ranking(results, SITE_DOMAIN)
        
        if position:
            rank_display = str(position)
            url_display = url.replace(f'https://{SITE_DOMAIN}', '')[:30]
            icon = '🟢' if position <= 10 else '🟡' if position <= 30 else '🔴'
        else:
            rank_display = '100+'
            url_display = '-'
            icon = '⚫'
        
        print(f"{keyword:<50} {icon}{rank_display:>4} {url_display}")
        
        rankings.append({
            'keyword': keyword,
            'position': position,
            'url': url,
            'checked_at': datetime.now().isoformat()
        })
    
    # Summary
    ranked = [r for r in rankings if r['position'] is not None]
    top_10 = [r for r in ranked if r['position'] <= 10]
    top_30 = [r for r in ranked if r['position'] <= 30]
    
    print("\n" + "=" * 70)
    print(f"  SUMMARY")
    print(f"  Keywords tracked: {len(TARGET_KEYWORDS)}")
    print(f"  Ranking (any position): {len(ranked)}")
    print(f"  Top 10 (page 1): {len(top_10)}")
    print(f"  Top 30 (pages 1-3): {len(top_30)}")
    print("=" * 70)
    
    # Save results
    output_file = os.path.join(PROJECT_DIR, 'data', 'rank-tracking.json')
    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    
    # Load existing data and append
    history = []
    if os.path.exists(output_file):
        with open(output_file, 'r') as f:
            history = json.load(f)
    
    history.append({
        'date': datetime.now().isoformat(),
        'rankings': rankings
    })
    
    # Keep last 30 days
    history = history[-30:]
    
    with open(output_file, 'w') as f:
        json.dump(history, f, indent=2)
    
    print(f"\nData saved to: {output_file}")


def main():
    track_keywords()


if __name__ == '__main__':
    main()
