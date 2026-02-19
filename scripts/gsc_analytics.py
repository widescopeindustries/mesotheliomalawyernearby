#!/usr/bin/env python3
"""
Google Search Console Analytics Script
Fetches search performance data for mesotheliomalawyernearby.com
"""

import os
import json
from datetime import datetime, timedelta
from google.oauth2 import service_account
from googleapiclient.discovery import build

# Configuration
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
SERVICE_ACCOUNT_FILE = os.path.join(PROJECT_DIR, 'gsc-service-account.json')
SITE_URL = 'sc-domain:mesotheliomalawyernearby.com'  # Domain property format
SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly']


def get_service():
    """Initialize GSC service with credentials."""
    creds = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    return build('searchconsole', 'v1', credentials=creds)


def list_sites(service):
    """List all sites accessible by this service account."""
    print("\n=== ACCESSIBLE SITES ===")
    response = service.sites().list().execute()

    if 'siteEntry' in response:
        for site in response['siteEntry']:
            print(f"  - {site['siteUrl']} (Permission: {site['permissionLevel']})")
        return [site['siteUrl'] for site in response['siteEntry']]
    else:
        print("  No sites found.")
        return []


def get_search_analytics(service, site_url, start_date, end_date, dimensions=['query'], row_limit=25):
    """Fetch search analytics data."""
    request = {
        'startDate': start_date,
        'endDate': end_date,
        'dimensions': dimensions,
        'rowLimit': row_limit,
        'startRow': 0
    }

    response = service.searchanalytics().query(siteUrl=site_url, body=request).execute()
    return response.get('rows', [])


def print_query_performance(service, site_url, days=28):
    """Print top queries by clicks."""
    end_date = datetime.now().strftime('%Y-%m-%d')
    start_date = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')

    print(f"\n=== TOP QUERIES (Last {days} days) ===")
    print(f"Period: {start_date} to {end_date}\n")

    rows = get_search_analytics(service, site_url, start_date, end_date,
                                dimensions=['query'], row_limit=25)

    if not rows:
        print("  No data available.")
        return

    # Sort by clicks (descending)
    rows.sort(key=lambda x: x['clicks'], reverse=True)

    print(f"{'Query':<50} {'Clicks':>8} {'Impr':>8} {'CTR':>8} {'Pos':>8}")
    print("-" * 86)

    total_clicks = 0
    total_impressions = 0

    for row in rows:
        query = row['keys'][0][:48]
        clicks = row['clicks']
        impressions = row['impressions']
        ctr = row['ctr'] * 100
        position = row['position']

        total_clicks += clicks
        total_impressions += impressions

        print(f"{query:<50} {clicks:>8} {impressions:>8} {ctr:>7.1f}% {position:>7.1f}")

    print("-" * 86)
    overall_ctr = (total_clicks / total_impressions * 100) if total_impressions > 0 else 0
    print(f"{'TOTAL':<50} {total_clicks:>8} {total_impressions:>8} {overall_ctr:>7.1f}%")


def print_page_performance(service, site_url, days=28):
    """Print top pages by clicks."""
    end_date = datetime.now().strftime('%Y-%m-%d')
    start_date = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')

    print(f"\n=== TOP PAGES (Last {days} days) ===\n")

    rows = get_search_analytics(service, site_url, start_date, end_date,
                                dimensions=['page'], row_limit=20)

    if not rows:
        print("  No data available.")
        return

    rows.sort(key=lambda x: x['clicks'], reverse=True)

    print(f"{'Page':<60} {'Clicks':>8} {'Impr':>8} {'CTR':>8}")
    print("-" * 88)

    for row in rows:
        page = row['keys'][0].replace('https://mesotheliomalawyernearby.com', '')[:58] or '/'
        clicks = row['clicks']
        impressions = row['impressions']
        ctr = row['ctr'] * 100

        print(f"{page:<60} {clicks:>8} {impressions:>8} {ctr:>7.1f}%")


def print_daily_trend(service, site_url, days=14):
    """Print daily performance trend."""
    end_date = datetime.now().strftime('%Y-%m-%d')
    start_date = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')

    print(f"\n=== DAILY TREND (Last {days} days) ===\n")

    rows = get_search_analytics(service, site_url, start_date, end_date,
                                dimensions=['date'], row_limit=days)

    if not rows:
        print("  No data available.")
        return

    rows.sort(key=lambda x: x['keys'][0])

    print(f"{'Date':<12} {'Clicks':>8} {'Impr':>10} {'CTR':>8} {'Pos':>8}")
    print("-" * 50)

    for row in rows:
        date = row['keys'][0]
        clicks = row['clicks']
        impressions = row['impressions']
        ctr = row['ctr'] * 100
        position = row['position']

        # Visual bar for clicks
        bar = '#' * min(clicks, 20)
        print(f"{date:<12} {clicks:>8} {impressions:>10} {ctr:>7.1f}% {position:>7.1f}  {bar}")


def print_country_performance(service, site_url, days=28):
    """Print performance by country."""
    end_date = datetime.now().strftime('%Y-%m-%d')
    start_date = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')

    print(f"\n=== PERFORMANCE BY COUNTRY (Last {days} days) ===\n")

    rows = get_search_analytics(service, site_url, start_date, end_date,
                                dimensions=['country'], row_limit=10)

    if not rows:
        print("  No data available.")
        return

    rows.sort(key=lambda x: x['clicks'], reverse=True)

    print(f"{'Country':<20} {'Clicks':>8} {'Impr':>10} {'CTR':>8}")
    print("-" * 50)

    for row in rows:
        country = row['keys'][0]
        clicks = row['clicks']
        impressions = row['impressions']
        ctr = row['ctr'] * 100

        print(f"{country:<20} {clicks:>8} {impressions:>10} {ctr:>7.1f}%")


def main():
    print("=" * 60)
    print("  GOOGLE SEARCH CONSOLE REPORT")
    print("  mesotheliomalawyernearby.com")
    print(f"  Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print("=" * 60)

    try:
        service = get_service()

        # List accessible sites
        sites = list_sites(service)

        # Find our site
        site_url = None
        for s in sites:
            if 'mesotheliomalawyernearby' in s:
                site_url = s
                break

        if not site_url:
            print(f"\nERROR: Site not found. Make sure the service account has access.")
            print("Add this email to GSC: mesotheliomalawyernearby@static-dock-486114-g9.iam.gserviceaccount.com")
            return

        print(f"\nUsing site: {site_url}")

        # Run reports
        print_daily_trend(service, site_url, days=14)
        print_query_performance(service, site_url, days=28)
        print_page_performance(service, site_url, days=28)
        print_country_performance(service, site_url, days=28)

        print("\n" + "=" * 60)
        print("  Report complete!")
        print("=" * 60 + "\n")

    except Exception as e:
        print(f"\nERROR: {str(e)}")
        import traceback
        traceback.print_exc()


if __name__ == '__main__':
    main()
