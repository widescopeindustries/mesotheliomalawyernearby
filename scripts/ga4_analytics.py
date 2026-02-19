#!/usr/bin/env python3
"""
Google Analytics 4 Data API Script
Fetches analytics data for mesotheliomalawyernearby.com
"""

import os
from datetime import datetime, timedelta
from google.oauth2 import service_account
from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import (
    RunReportRequest,
    DateRange,
    Dimension,
    Metric,
    OrderBy,
)

# Configuration
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
SERVICE_ACCOUNT_FILE = os.path.join(PROJECT_DIR, 'gsc-service-account.json')
GA4_PROPERTY_ID = '522469846'
SCOPES = ['https://www.googleapis.com/auth/analytics.readonly']


def get_client():
    """Initialize GA4 client with credentials."""
    creds = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    return BetaAnalyticsDataClient(credentials=creds)


def run_report(client, dimensions, metrics, date_range_days=28, limit=25, order_by_metric=None):
    """Run a GA4 report."""
    end_date = datetime.now().strftime('%Y-%m-%d')
    start_date = (datetime.now() - timedelta(days=date_range_days)).strftime('%Y-%m-%d')

    request = RunReportRequest(
        property=f"properties/{GA4_PROPERTY_ID}",
        dimensions=[Dimension(name=d) for d in dimensions],
        metrics=[Metric(name=m) for m in metrics],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
        limit=limit,
    )

    if order_by_metric:
        request.order_bys = [OrderBy(metric=OrderBy.MetricOrderBy(metric_name=order_by_metric), desc=True)]

    return client.run_report(request)


def print_overview(client, days=28):
    """Print overall site metrics."""
    print(f"\n=== SITE OVERVIEW (Last {days} days) ===\n")

    response = run_report(
        client,
        dimensions=[],
        metrics=['sessions', 'totalUsers', 'newUsers', 'screenPageViews',
                 'averageSessionDuration', 'bounceRate', 'engagedSessions'],
        date_range_days=days
    )

    if not response.rows:
        print("  No data available.")
        return

    row = response.rows[0]
    metrics = {
        'Sessions': int(row.metric_values[0].value),
        'Total Users': int(row.metric_values[1].value),
        'New Users': int(row.metric_values[2].value),
        'Page Views': int(row.metric_values[3].value),
        'Avg Session Duration': f"{float(row.metric_values[4].value):.1f}s",
        'Bounce Rate': f"{float(row.metric_values[5].value) * 100:.1f}%",
        'Engaged Sessions': int(row.metric_values[6].value),
    }

    for name, value in metrics.items():
        print(f"  {name:<22} {value:>12}")


def print_daily_trend(client, days=14):
    """Print daily sessions trend."""
    print(f"\n=== DAILY TREND (Last {days} days) ===\n")

    response = run_report(
        client,
        dimensions=['date'],
        metrics=['sessions', 'totalUsers', 'screenPageViews'],
        date_range_days=days,
        limit=days
    )

    if not response.rows:
        print("  No data available.")
        return

    # Sort by date
    rows = sorted(response.rows, key=lambda x: x.dimension_values[0].value)

    print(f"{'Date':<12} {'Sessions':>10} {'Users':>10} {'Views':>10}")
    print("-" * 46)

    for row in rows:
        date = row.dimension_values[0].value
        date_fmt = f"{date[:4]}-{date[4:6]}-{date[6:]}"
        sessions = int(row.metric_values[0].value)
        users = int(row.metric_values[1].value)
        views = int(row.metric_values[2].value)

        bar = '#' * min(sessions, 30)
        print(f"{date_fmt:<12} {sessions:>10} {users:>10} {views:>10}  {bar}")


def print_top_pages(client, days=28):
    """Print top pages by views."""
    print(f"\n=== TOP PAGES (Last {days} days) ===\n")

    response = run_report(
        client,
        dimensions=['pagePath'],
        metrics=['screenPageViews', 'sessions', 'averageSessionDuration'],
        date_range_days=days,
        limit=20,
        order_by_metric='screenPageViews'
    )

    if not response.rows:
        print("  No data available.")
        return

    print(f"{'Page':<50} {'Views':>8} {'Sessions':>10}")
    print("-" * 72)

    for row in response.rows:
        page = row.dimension_values[0].value[:48]
        views = int(row.metric_values[0].value)
        sessions = int(row.metric_values[1].value)

        print(f"{page:<50} {views:>8} {sessions:>10}")


def print_traffic_sources(client, days=28):
    """Print traffic sources."""
    print(f"\n=== TRAFFIC SOURCES (Last {days} days) ===\n")

    response = run_report(
        client,
        dimensions=['sessionSource', 'sessionMedium'],
        metrics=['sessions', 'totalUsers'],
        date_range_days=days,
        limit=15,
        order_by_metric='sessions'
    )

    if not response.rows:
        print("  No data available.")
        return

    print(f"{'Source / Medium':<40} {'Sessions':>10} {'Users':>10}")
    print("-" * 64)

    for row in response.rows:
        source = row.dimension_values[0].value
        medium = row.dimension_values[1].value
        sessions = int(row.metric_values[0].value)
        users = int(row.metric_values[1].value)

        source_medium = f"{source} / {medium}"[:38]
        print(f"{source_medium:<40} {sessions:>10} {users:>10}")


def print_devices(client, days=28):
    """Print device breakdown."""
    print(f"\n=== DEVICES (Last {days} days) ===\n")

    response = run_report(
        client,
        dimensions=['deviceCategory'],
        metrics=['sessions', 'totalUsers'],
        date_range_days=days,
        order_by_metric='sessions'
    )

    if not response.rows:
        print("  No data available.")
        return

    print(f"{'Device':<20} {'Sessions':>10} {'Users':>10}")
    print("-" * 44)

    for row in response.rows:
        device = row.dimension_values[0].value
        sessions = int(row.metric_values[0].value)
        users = int(row.metric_values[1].value)

        print(f"{device:<20} {sessions:>10} {users:>10}")


def print_locations(client, days=28):
    """Print top locations."""
    print(f"\n=== TOP LOCATIONS (Last {days} days) ===\n")

    response = run_report(
        client,
        dimensions=['country', 'region'],
        metrics=['sessions', 'totalUsers'],
        date_range_days=days,
        limit=15,
        order_by_metric='sessions'
    )

    if not response.rows:
        print("  No data available.")
        return

    print(f"{'Location':<35} {'Sessions':>10} {'Users':>10}")
    print("-" * 59)

    for row in response.rows:
        country = row.dimension_values[0].value
        region = row.dimension_values[1].value
        sessions = int(row.metric_values[0].value)
        users = int(row.metric_values[1].value)

        location = f"{region}, {country}"[:33] if region != '(not set)' else country[:33]
        print(f"{location:<35} {sessions:>10} {users:>10}")


def main():
    print("=" * 60)
    print("  GOOGLE ANALYTICS 4 REPORT")
    print("  mesotheliomalawyernearby.com")
    print(f"  Property ID: {GA4_PROPERTY_ID}")
    print(f"  Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print("=" * 60)

    try:
        client = get_client()

        print_overview(client, days=28)
        print_daily_trend(client, days=14)
        print_top_pages(client, days=28)
        print_traffic_sources(client, days=28)
        print_devices(client, days=28)
        print_locations(client, days=28)

        print("\n" + "=" * 60)
        print("  Report complete!")
        print("=" * 60 + "\n")

    except Exception as e:
        print(f"\nERROR: {str(e)}")
        if "403" in str(e) or "permission" in str(e).lower():
            print("\nTo fix permission issues:")
            print("1. Enable Google Analytics Data API:")
            print("   https://console.cloud.google.com/apis/library/analyticsdata.googleapis.com?project=static-dock-486114-g9")
            print("\n2. Add service account to GA4 property:")
            print("   - Go to GA4 Admin -> Property Access Management")
            print("   - Add: mesotheliomalawyernearby@static-dock-486114-g9.iam.gserviceaccount.com")
            print("   - Role: Viewer")
        import traceback
        traceback.print_exc()


if __name__ == '__main__':
    main()
