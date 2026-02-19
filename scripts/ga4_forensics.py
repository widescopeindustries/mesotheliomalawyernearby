#!/usr/bin/env python3
"""
GA4 Forensic Analytics - Know exactly what to fix
Tracks user behavior at granular level
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
    FilterExpression,
    Filter,
)

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
SERVICE_ACCOUNT_FILE = os.path.join(PROJECT_DIR, 'gsc-service-account.json')
GA4_PROPERTY_ID = '522469846'
SCOPES = ['https://www.googleapis.com/auth/analytics.readonly']


def get_client():
    creds = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    return BetaAnalyticsDataClient(credentials=creds)


def run_report(client, dimensions, metrics, days=28, limit=50, order_by=None, order_desc=True):
    end_date = datetime.now().strftime('%Y-%m-%d')
    start_date = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')

    request = RunReportRequest(
        property=f"properties/{GA4_PROPERTY_ID}",
        dimensions=[Dimension(name=d) for d in dimensions],
        metrics=[Metric(name=m) for m in metrics],
        date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
        limit=limit,
    )

    if order_by:
        request.order_bys = [OrderBy(metric=OrderBy.MetricOrderBy(metric_name=order_by), desc=order_desc)]

    return client.run_report(request)


def print_section(title):
    print(f"\n{'='*70}")
    print(f"  {title}")
    print('='*70 + "\n")


def landing_page_performance(client, days=28):
    """Where users ENTER - first impression pages"""
    print_section("LANDING PAGE PERFORMANCE (First Impressions)")
    print("These are entry points. High bounce = bad first impression.\n")

    response = run_report(
        client,
        dimensions=['landingPage'],
        metrics=['sessions', 'bounceRate', 'averageSessionDuration', 'engagementRate'],
        days=days,
        limit=20,
        order_by='sessions'
    )

    if not response.rows:
        print("  No data.")
        return

    print(f"{'Landing Page':<45} {'Sessions':>8} {'Bounce':>8} {'Engage':>8} {'AvgTime':>8}")
    print("-" * 81)

    for row in response.rows:
        page = row.dimension_values[0].value[:43]
        sessions = int(row.metric_values[0].value)
        bounce = float(row.metric_values[1].value) * 100
        duration = float(row.metric_values[2].value)
        engage = float(row.metric_values[3].value) * 100

        # Flag problems
        flag = ""
        if bounce > 80:
            flag = " !! FIX"
        elif bounce > 60:
            flag = " ! watch"

        print(f"{page:<45} {sessions:>8} {bounce:>7.1f}% {engage:>7.1f}% {duration:>7.1f}s{flag}")


def exit_page_analysis(client, days=28):
    """Where users LEAVE - using bounce as proxy"""
    print_section("PAGE DROP-OFF ANALYSIS (Where Users Disengage)")
    print("High bounce + low engagement = users leaving here.\n")

    response = run_report(
        client,
        dimensions=['pagePath'],
        metrics=['sessions', 'bounceRate', 'screenPageViews', 'engagementRate'],
        days=days,
        limit=20,
        order_by='screenPageViews'
    )

    if not response.rows:
        print("  No data.")
        return

    print(f"{'Page':<45} {'Views':>7} {'Sessions':>9} {'Bounce':>8} {'Engage':>8}")
    print("-" * 81)

    for row in response.rows:
        page = row.dimension_values[0].value[:43]
        sessions = int(row.metric_values[0].value)
        bounce = float(row.metric_values[1].value) * 100
        views = int(row.metric_values[2].value)
        engage = float(row.metric_values[3].value) * 100

        flag = ""
        if bounce > 80 and engage < 20:
            flag = " << LEAKING"
        elif bounce > 60:
            flag = " < watch"

        print(f"{page:<45} {views:>7} {sessions:>9} {bounce:>7.1f}% {engage:>7.1f}%{flag}")


def page_engagement_deep(client, days=28):
    """Per-page engagement - time, scroll, interactions"""
    print_section("PAGE ENGAGEMENT BREAKDOWN")
    print("Low time + high bounce = content not resonating.\n")

    response = run_report(
        client,
        dimensions=['pagePath'],
        metrics=['screenPageViews', 'userEngagementDuration', 'engagedSessions', 'bounceRate', 'averageSessionDuration'],
        days=days,
        limit=25,
        order_by='screenPageViews'
    )

    if not response.rows:
        print("  No data.")
        return

    print(f"{'Page':<40} {'Views':>6} {'TotalTime':>10} {'AvgTime':>8} {'Bounce':>8}")
    print("-" * 76)

    for row in response.rows:
        page = row.dimension_values[0].value[:38]
        views = int(row.metric_values[0].value)
        total_time = float(row.metric_values[1].value)
        engaged = int(row.metric_values[2].value)
        bounce = float(row.metric_values[3].value) * 100
        avg_time = float(row.metric_values[4].value)

        # Calculate avg time per view
        time_per_view = total_time / views if views > 0 else 0

        flag = ""
        if avg_time < 10 and bounce > 70:
            flag = " << PROBLEM"
        elif avg_time > 60:
            flag = " (good!)"

        print(f"{page:<40} {views:>6} {total_time:>9.0f}s {avg_time:>7.1f}s {bounce:>7.1f}%{flag}")


def user_journey_flow(client, days=28):
    """Entry -> Second page flow"""
    print_section("USER JOURNEY: Landing -> Next Page")
    print("Shows what users do AFTER landing. No second page = bounced.\n")

    response = run_report(
        client,
        dimensions=['landingPage', 'pagePath'],
        metrics=['sessions'],
        days=days,
        limit=30,
        order_by='sessions'
    )

    if not response.rows:
        print("  No data.")
        return

    print(f"{'Landing Page':<35} -> {'Next Page':<30} {'Sessions':>8}")
    print("-" * 80)

    for row in response.rows:
        landing = row.dimension_values[0].value[:33]
        next_page = row.dimension_values[1].value[:28]
        sessions = int(row.metric_values[0].value)

        if landing == next_page:
            next_page = "(stayed/bounced)"

        print(f"{landing:<35} -> {next_page:<30} {sessions:>8}")


def traffic_source_quality(client, days=28):
    """Which traffic sources convert vs bounce"""
    print_section("TRAFFIC SOURCE QUALITY")
    print("High bounce from a source = wrong audience or bad ad targeting.\n")

    response = run_report(
        client,
        dimensions=['sessionSource', 'sessionMedium'],
        metrics=['sessions', 'bounceRate', 'averageSessionDuration', 'engagementRate'],
        days=days,
        limit=15,
        order_by='sessions'
    )

    if not response.rows:
        print("  No data.")
        return

    print(f"{'Source / Medium':<35} {'Sessions':>8} {'Bounce':>8} {'Engage':>8} {'AvgTime':>8}")
    print("-" * 71)

    for row in response.rows:
        source = row.dimension_values[0].value
        medium = row.dimension_values[1].value
        source_medium = f"{source} / {medium}"[:33]
        sessions = int(row.metric_values[0].value)
        bounce = float(row.metric_values[1].value) * 100
        duration = float(row.metric_values[2].value)
        engage = float(row.metric_values[3].value) * 100

        flag = ""
        if bounce > 90:
            flag = " << BAD TRAFFIC"
        elif engage > 50:
            flag = " (quality!)"

        print(f"{source_medium:<35} {sessions:>8} {bounce:>7.1f}% {engage:>7.1f}% {duration:>7.1f}s{flag}")


def device_performance(client, days=28):
    """Mobile vs Desktop - find device-specific issues"""
    print_section("DEVICE PERFORMANCE")
    print("Big difference = device-specific UX problem.\n")

    response = run_report(
        client,
        dimensions=['deviceCategory'],
        metrics=['sessions', 'bounceRate', 'averageSessionDuration', 'engagementRate'],
        days=days,
        order_by='sessions'
    )

    if not response.rows:
        print("  No data.")
        return

    print(f"{'Device':<15} {'Sessions':>10} {'Bounce':>10} {'Engage':>10} {'AvgTime':>10}")
    print("-" * 59)

    results = []
    for row in response.rows:
        device = row.dimension_values[0].value
        sessions = int(row.metric_values[0].value)
        bounce = float(row.metric_values[1].value) * 100
        duration = float(row.metric_values[2].value)
        engage = float(row.metric_values[3].value) * 100
        results.append({'device': device, 'bounce': bounce, 'engage': engage})

        print(f"{device:<15} {sessions:>10} {bounce:>9.1f}% {engage:>9.1f}% {duration:>9.1f}s")

    # Compare mobile vs desktop
    if len(results) >= 2:
        mobile = next((r for r in results if r['device'] == 'mobile'), None)
        desktop = next((r for r in results if r['device'] == 'desktop'), None)
        if mobile and desktop:
            diff = mobile['bounce'] - desktop['bounce']
            if diff > 15:
                print(f"\n  !! Mobile bounce {diff:.0f}% higher than desktop - MOBILE UX PROBLEM")
            elif diff < -15:
                print(f"\n  !! Desktop bounce {abs(diff):.0f}% higher than mobile - DESKTOP UX PROBLEM")


def hourly_pattern(client, days=14):
    """When users visit - find peak hours"""
    print_section("HOURLY TRAFFIC PATTERN")
    print("Know when your users are active.\n")

    response = run_report(
        client,
        dimensions=['hour'],
        metrics=['sessions', 'engagementRate'],
        days=days,
        limit=24
    )

    if not response.rows:
        print("  No data.")
        return

    # Sort by hour
    rows = sorted(response.rows, key=lambda x: int(x.dimension_values[0].value))

    print(f"{'Hour':<6} {'Sessions':>10} {'Engage':>10}  Activity")
    print("-" * 50)

    max_sessions = max(int(r.metric_values[0].value) for r in rows) or 1

    for row in rows:
        hour = int(row.dimension_values[0].value)
        sessions = int(row.metric_values[0].value)
        engage = float(row.metric_values[1].value) * 100

        bar_len = int((sessions / max_sessions) * 20)
        bar = '#' * bar_len

        hour_fmt = f"{hour:02d}:00"
        print(f"{hour_fmt:<6} {sessions:>10} {engage:>9.1f}%  {bar}")


def event_tracking(client, days=28):
    """What users click/do"""
    print_section("USER EVENTS (What They Actually Do)")
    print("Shows clicks, form interactions, scroll events.\n")

    response = run_report(
        client,
        dimensions=['eventName'],
        metrics=['eventCount', 'totalUsers'],
        days=days,
        limit=20,
        order_by='eventCount'
    )

    if not response.rows:
        print("  No event data.")
        return

    print(f"{'Event':<40} {'Count':>10} {'Users':>10}")
    print("-" * 64)

    for row in response.rows:
        event = row.dimension_values[0].value[:38]
        count = int(row.metric_values[0].value)
        users = int(row.metric_values[1].value)

        print(f"{event:<40} {count:>10} {users:>10}")


def page_title_performance(client, days=28):
    """Performance by page title - see what headlines work"""
    print_section("PAGE TITLE PERFORMANCE")
    print("Which headlines/titles keep users engaged.\n")

    response = run_report(
        client,
        dimensions=['pageTitle', 'pagePath'],
        metrics=['screenPageViews', 'averageSessionDuration', 'bounceRate'],
        days=days,
        limit=20,
        order_by='screenPageViews'
    )

    if not response.rows:
        print("  No data.")
        return

    print(f"{'Title':<50} {'Views':>6} {'Time':>7} {'Bounce':>8}")
    print("-" * 75)

    for row in response.rows:
        title = row.dimension_values[0].value[:48]
        views = int(row.metric_values[0].value)
        duration = float(row.metric_values[1].value)
        bounce = float(row.metric_values[2].value) * 100

        print(f"{title:<50} {views:>6} {duration:>6.1f}s {bounce:>7.1f}%")


def new_vs_returning(client, days=28):
    """New vs returning user behavior"""
    print_section("NEW VS RETURNING USERS")
    print("Returning users = your content resonates.\n")

    response = run_report(
        client,
        dimensions=['newVsReturning'],
        metrics=['sessions', 'bounceRate', 'averageSessionDuration', 'screenPageViewsPerSession'],
        days=days,
        order_by='sessions'
    )

    if not response.rows:
        print("  No data.")
        return

    print(f"{'User Type':<15} {'Sessions':>10} {'Bounce':>10} {'AvgTime':>10} {'Pages/Sess':>12}")
    print("-" * 61)

    for row in response.rows:
        user_type = row.dimension_values[0].value
        sessions = int(row.metric_values[0].value)
        bounce = float(row.metric_values[1].value) * 100
        duration = float(row.metric_values[2].value)
        pages = float(row.metric_values[3].value)

        print(f"{user_type:<15} {sessions:>10} {bounce:>9.1f}% {duration:>9.1f}s {pages:>11.2f}")


def conversion_funnel(client, days=28):
    """Track key conversion events"""
    print_section("CONVERSION EVENTS")
    print("Key actions users take (form submissions, clicks, etc).\n")

    # Look for conversion-related events
    response = run_report(
        client,
        dimensions=['eventName', 'pagePath'],
        metrics=['eventCount'],
        days=days,
        limit=30,
        order_by='eventCount'
    )

    if not response.rows:
        print("  No conversion events tracked yet.")
        print("\n  TIP: Set up these events in GA4:")
        print("    - form_submit (contact form)")
        print("    - click (on phone number)")
        print("    - scroll (90% depth)")
        return

    # Filter for likely conversion events
    conversion_keywords = ['click', 'submit', 'form', 'contact', 'call', 'scroll', 'generate_lead']

    print(f"{'Event':<30} {'Page':<35} {'Count':>8}")
    print("-" * 77)

    found = False
    for row in response.rows:
        event = row.dimension_values[0].value
        page = row.dimension_values[1].value[:33]
        count = int(row.metric_values[0].value)

        if any(kw in event.lower() for kw in conversion_keywords):
            found = True
            print(f"{event:<30} {page:<35} {count:>8}")

    if not found:
        print("  No conversion-specific events found.")
        print("  Seeing: page_view, session_start, first_visit, scroll, etc.")


def main():
    print("\n" + "#" * 70)
    print("#" + " " * 68 + "#")
    print("#" + "  GA4 FORENSIC REPORT - mesotheliomalawyernearby.com".center(68) + "#")
    print("#" + f"  Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}".center(68) + "#")
    print("#" + " " * 68 + "#")
    print("#" * 70)

    try:
        client = get_client()

        # The money reports - each wrapped to prevent one failure stopping all
        reports = [
            ("Landing Page Performance", lambda: landing_page_performance(client, days=28)),
            ("Exit Page Analysis", lambda: exit_page_analysis(client, days=28)),
            ("Page Engagement", lambda: page_engagement_deep(client, days=28)),
            ("User Journey", lambda: user_journey_flow(client, days=28)),
            ("Traffic Source Quality", lambda: traffic_source_quality(client, days=28)),
            ("Device Performance", lambda: device_performance(client, days=28)),
            ("New vs Returning", lambda: new_vs_returning(client, days=28)),
            ("Event Tracking", lambda: event_tracking(client, days=28)),
            ("Page Title Performance", lambda: page_title_performance(client, days=28)),
            ("Hourly Pattern", lambda: hourly_pattern(client, days=14)),
            ("Conversion Funnel", lambda: conversion_funnel(client, days=28)),
        ]

        for name, report_fn in reports:
            try:
                report_fn()
            except Exception as e:
                print(f"\n  [!] {name} report failed: {str(e)[:60]}")

        print_section("ACTIONABLE SUMMARY")
        print("Based on the data above, focus on:")
        print("  1. Pages with high bounce rate (>80%) - fix content/UX")
        print("  2. Exit pages with high exit rate - add CTAs/engagement")
        print("  3. Mobile vs Desktop gaps - fix device-specific issues")
        print("  4. Traffic sources with bad engagement - stop wasting $")
        print("  5. Pages with <10s avg time - content not engaging")
        print("\n" + "#" * 70 + "\n")

    except Exception as e:
        print(f"\nERROR: {str(e)}")
        import traceback
        traceback.print_exc()


if __name__ == '__main__':
    main()
