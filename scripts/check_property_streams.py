#!/usr/bin/env python3
"""Check data streams for a specific property"""

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

def check_property(client, prop_id):
    print(f"\n{'='*60}")
    print(f"  PROPERTY: {prop_id}")
    print('='*60)

    try:
        prop = client.get_property(name=f"properties/{prop_id}")
        print(f"\n  Name: {prop.display_name}")
        print(f"  Parent: {prop.parent}")
        print(f"  Created: {prop.create_time}")
    except Exception as e:
        print(f"  Error getting property: {e}")
        return

    print(f"\n  DATA STREAMS:")
    print("-" * 60)

    try:
        streams = list(client.list_data_streams(parent=f"properties/{prop_id}"))

        for i, stream in enumerate(streams, 1):
            print(f"\n  Stream #{i}: {stream.display_name}")
            print(f"    Type: {stream.type_.name}")
            if stream.web_stream_data:
                print(f"    Measurement ID: {stream.web_stream_data.measurement_id}")
                print(f"    URL: {stream.web_stream_data.default_uri}")
            print(f"    Created: {stream.create_time}")

        if not streams:
            print("  (No streams found)")

    except Exception as e:
        print(f"  Error: {e}")

def main():
    client = get_admin_client()

    # Check both properties
    check_property(client, "13389341063")  # aialwaysanswer
    check_property(client, "522469846")     # mesothelioma

    print("\n" + "="*60)
    print("  DIAGNOSIS")
    print("="*60)
    print("""
If mesothelioma URLs appear in aialwaysanswer property, check:
1. Does aialwaysanswer have a stream pointing to meso URL?
2. Is the same measurement ID used on both sites?
3. Was a stream moved between properties?
""")

if __name__ == '__main__':
    main()
