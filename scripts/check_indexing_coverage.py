#!/usr/bin/env python3
"""
Check GSC Indexing Coverage Status
"""

import os
from datetime import datetime, timedelta
from google.oauth2 import service_account
from googleapiclient.discovery import build

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
SERVICE_ACCOUNT_FILE = os.path.join(PROJECT_DIR, 'gsc-service-account.json')
SITE_URL = 'sc-domain:mesotheliomalawyernearby.com'
SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly']


def get_service():
    creds = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    return build('searchconsole', 'v1', credentials=creds)


def check_sitemaps(service, site_url):
    """Check sitemap status."""
    print("\n=== SITEMAP STATUS ===\n")

    try:
        response = service.sitemaps().list(siteUrl=site_url).execute()

        if 'sitemap' in response:
            for sitemap in response['sitemap']:
                print(f"Sitemap: {sitemap.get('path', 'N/A')}")
                print(f"  Last Submitted: {sitemap.get('lastSubmitted', 'N/A')}")
                print(f"  Last Downloaded: {sitemap.get('lastDownloaded', 'N/A')}")
                print(f"  Pending: {sitemap.get('isPending', False)}")
                print(f"  Warnings: {sitemap.get('warnings', 0)}")
                print(f"  Errors: {sitemap.get('errors', 0)}")

                # Contents breakdown
                if 'contents' in sitemap:
                    for content in sitemap['contents']:
                        print(f"  Type: {content.get('type', 'N/A')}")
                        print(f"    Submitted: {content.get('submitted', 0)}")
                        print(f"    Indexed: {content.get('indexed', 0)}")
                print()
        else:
            print("  No sitemaps found.")
    except Exception as e:
        print(f"  Error: {e}")


def check_pages_with_impressions(service, site_url, days=7):
    """Check which pages are getting impressions (indicating indexation)."""
    print(f"\n=== PAGES WITH IMPRESSIONS (Last {days} days) ===\n")
    print("(Pages appearing here are indexed and ranking)\n")

    end_date = datetime.now().strftime('%Y-%m-%d')
    start_date = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')

    request = {
        'startDate': start_date,
        'endDate': end_date,
        'dimensions': ['page'],
        'rowLimit': 100,
    }

    try:
        response = service.searchanalytics().query(siteUrl=site_url, body=request).execute()
        rows = response.get('rows', [])

        if not rows:
            print("  No pages with impressions yet.")
            return []

        indexed_pages = []
        print(f"{'Page':<70} {'Impr':>6}")
        print("-" * 80)

        for row in rows:
            page = row['keys'][0]
            impressions = row['impressions']
            indexed_pages.append(page)

            # Shorten URL for display
            display_url = page.replace('https://mesotheliomalawyernearby.com', '')[:68] or '/'
            print(f"{display_url:<70} {impressions:>6}")

        print(f"\nTotal pages with impressions: {len(indexed_pages)}")
        return indexed_pages

    except Exception as e:
        print(f"  Error: {e}")
        return []


def estimate_indexing_progress():
    """Estimate indexing based on expected pages."""
    print("\n=== EXPECTED PAGES ===\n")

    # From batch-index-all.js
    location_pages = 87  # LOCATION_SLUGS count
    exposure_pages = 19  # EXPOSURE_SITE_IDS count
    other_pages = 5      # OTHER_PAGES count

    total_expected = location_pages + exposure_pages + other_pages

    print(f"  Location pages:     {location_pages}")
    print(f"  Exposure site pages: {exposure_pages}")
    print(f"  Other pages:         {other_pages}")
    print(f"  --------------------------")
    print(f"  TOTAL EXPECTED:      {total_expected}")

    return total_expected


def main():
    print("=" * 60)
    print("  GSC INDEXING COVERAGE CHECK")
    print("  mesotheliomalawyernearby.com")
    print(f"  Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print("=" * 60)

    try:
        service = get_service()

        # Check sitemaps
        check_sitemaps(service, SITE_URL)

        # Expected pages
        total_expected = estimate_indexing_progress()

        # Pages with impressions
        indexed_pages = check_pages_with_impressions(service, SITE_URL, days=7)

        # Summary
        print("\n" + "=" * 60)
        print("  INDEXING SUMMARY")
        print("=" * 60)
        print(f"\n  Expected pages:          {total_expected}")
        print(f"  Pages with impressions:  {len(indexed_pages)}")
        print(f"  Estimated not indexed:   {total_expected - len(indexed_pages)}")

        if len(indexed_pages) < total_expected:
            pct = (len(indexed_pages) / total_expected) * 100
            print(f"\n  Indexing progress:       {pct:.1f}%")
            print("\n  Note: Pages can be indexed but not yet have impressions.")
            print("  Check GSC > Indexing > Pages for authoritative count.")

        print("\n" + "=" * 60 + "\n")

    except Exception as e:
        print(f"\nERROR: {str(e)}")
        import traceback
        traceback.print_exc()


if __name__ == '__main__':
    main()
