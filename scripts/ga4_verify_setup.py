#!/usr/bin/env python3
"""
Verify GA4 Property & Data Stream Configuration
Check for data stream issues
"""

import os
from google.oauth2 import service_account
from google.analytics.admin import AnalyticsAdminServiceClient
from google.analytics.admin_v1alpha.types import ListDataStreamsRequest, ListPropertiesRequest

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
SERVICE_ACCOUNT_FILE = os.path.join(PROJECT_DIR, 'gsc-service-account.json')
GA4_PROPERTY_ID = '522469846'
SCOPES = ['https://www.googleapis.com/auth/analytics.readonly']


def get_admin_client():
    creds = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    return AnalyticsAdminServiceClient(credentials=creds)


def check_property_details(client):
    """Get property details"""
    print("\n=== GA4 PROPERTY DETAILS ===\n")

    try:
        property_name = f"properties/{GA4_PROPERTY_ID}"
        prop = client.get_property(name=property_name)

        print(f"Property Name: {prop.display_name}")
        print(f"Property ID: {GA4_PROPERTY_ID}")
        print(f"Create Time: {prop.create_time}")
        print(f"Industry: {prop.industry_category}")
        print(f"Time Zone: {prop.time_zone}")
        print(f"Currency: {prop.currency_code}")
        print(f"Parent (Account): {prop.parent}")

        return prop
    except Exception as e:
        print(f"Error getting property: {e}")
        return None


def check_data_streams(client):
    """List all data streams for this property"""
    print("\n=== DATA STREAMS ===\n")
    print("Each property can have multiple streams. Data goes to the stream's measurement ID.\n")

    try:
        parent = f"properties/{GA4_PROPERTY_ID}"
        streams = client.list_data_streams(parent=parent)

        stream_count = 0
        for stream in streams:
            stream_count += 1
            print(f"Stream #{stream_count}")
            print(f"  Name: {stream.display_name}")
            print(f"  Type: {stream.type_.name}")

            if stream.web_stream_data:
                web = stream.web_stream_data
                print(f"  Measurement ID: {web.measurement_id}")
                print(f"  Default URI: {web.default_uri}")
                print(f"  Firebase App ID: {web.firebase_app_id or 'None'}")

            print(f"  Create Time: {stream.create_time}")
            print()

        if stream_count == 0:
            print("  No data streams found! This is a problem.")
        elif stream_count > 1:
            print(f"  WARNING: {stream_count} streams found. Data may be split!")
        else:
            print("  OK: Single data stream configured.")

    except Exception as e:
        print(f"Error listing streams: {e}")


def check_account_access(client):
    """List all accounts this service account can access"""
    print("\n=== ACCOUNTS ACCESSIBLE ===\n")
    print("Shows all GA4 accounts this service account has access to.\n")

    try:
        accounts = client.list_accounts()

        for account in accounts:
            print(f"Account: {account.display_name}")
            print(f"  ID: {account.name}")
            print(f"  Create Time: {account.create_time}")
            print()

    except Exception as e:
        print(f"Error listing accounts: {e}")


def main():
    print("=" * 60)
    print("  GA4 CONFIGURATION VERIFICATION")
    print("  Property ID: " + GA4_PROPERTY_ID)
    print("=" * 60)

    try:
        client = get_admin_client()

        check_account_access(client)
        check_property_details(client)
        check_data_streams(client)

        print("\n" + "=" * 60)
        print("  WHAT TO CHECK MANUALLY IN GA4 ADMIN:")
        print("=" * 60)
        print("""
1. Go to GA4 -> Admin -> Property Settings
   - Verify property ID matches: 522469846

2. Go to Admin -> Data Streams
   - Should see ONE web stream
   - Measurement ID should be G-XXXXXXXXXX
   - Default URI should be mesotheliomalawyernearby.com

3. Go to Admin -> Data Filters
   - Check for any filters excluding traffic

4. Go to Admin -> Property Access Management
   - Verify no unexpected users

5. Check the website source code:
   - The gtag('config', 'G-XXXXXXXXXX') ID must match
   - Should be on ALL pages, not just homepage
""")

    except Exception as e:
        print(f"\nERROR: {str(e)}")

        if "403" in str(e):
            print("\nPermission denied. Service account needs Admin API access.")
            print("Enable: https://console.cloud.google.com/apis/library/analyticsadmin.googleapis.com")


if __name__ == '__main__':
    main()
