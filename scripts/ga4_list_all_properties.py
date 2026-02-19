#!/usr/bin/env python3
"""
List ALL properties under the GA4 account
Check for data stream crossover
"""

import os
from google.oauth2 import service_account
from google.analytics.admin import AnalyticsAdminServiceClient

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
SERVICE_ACCOUNT_FILE = os.path.join(PROJECT_DIR, 'gsc-service-account.json')
SCOPES = ['https://www.googleapis.com/auth/analytics.readonly']


def get_admin_client():
    creds = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    return AnalyticsAdminServiceClient(credentials=creds)


def list_everything(client):
    """List all accounts, properties, and data streams"""

    print("\n" + "=" * 70)
    print("  FULL GA4 ACCOUNT STRUCTURE")
    print("=" * 70)

    # List all accounts
    accounts = list(client.list_accounts())

    for account in accounts:
        account_id = account.name.split('/')[-1]
        print(f"\n[ACCOUNT] {account.display_name}")
        print(f"  ID: {account_id}")

        # List all properties under this account
        try:
            from google.analytics.admin_v1alpha.types import ListPropertiesRequest
            request = ListPropertiesRequest(filter=f"parent:accounts/{account_id}")
            properties = list(client.list_properties(request=request))

            if not properties:
                print("  (No properties)")
                continue

            for prop in properties:
                prop_id = prop.name.split('/')[-1]
                print(f"\n  [PROPERTY] {prop.display_name}")
                print(f"    ID: {prop_id}")
                print(f"    Time Zone: {prop.time_zone}")
                print(f"    Created: {prop.create_time.strftime('%Y-%m-%d')}")

                # List data streams for this property
                try:
                    streams = list(client.list_data_streams(parent=prop.name))

                    for stream in streams:
                        print(f"\n    [STREAM] {stream.display_name}")
                        print(f"      Type: {stream.type_.name}")
                        if stream.web_stream_data:
                            print(f"      Measurement ID: {stream.web_stream_data.measurement_id}")
                            print(f"      URL: {stream.web_stream_data.default_uri}")

                except Exception as e:
                    print(f"    Error listing streams: {e}")

        except Exception as e:
            print(f"  Error listing properties: {e}")

    print("\n" + "=" * 70)
    print("  Check if any measurement IDs overlap or URLs are wrong")
    print("=" * 70 + "\n")


def main():
    try:
        client = get_admin_client()
        list_everything(client)
    except Exception as e:
        print(f"Error: {e}")


if __name__ == '__main__':
    main()
