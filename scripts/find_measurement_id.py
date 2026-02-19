#!/usr/bin/env python3
"""
Find which GA4 property a measurement ID belongs to.
Uses OAuth to access all properties under your Google account.

First run: Will open browser for authentication
Subsequent runs: Uses cached credentials
"""

import os
import sys
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google.analytics.admin import AnalyticsAdminServiceClient
from google.analytics.admin_v1alpha.types import ListPropertiesRequest
import pickle

SCOPES = ['https://www.googleapis.com/auth/analytics.readonly']
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
TOKEN_FILE = os.path.join(SCRIPT_DIR, 'oauth_token.pickle')
# You'll need to create OAuth credentials in Google Cloud Console
# Download as client_secret.json
CLIENT_SECRET_FILE = os.path.join(SCRIPT_DIR, 'client_secret.json')


def get_oauth_credentials():
    """Get OAuth credentials (opens browser on first run)."""
    creds = None

    # Load cached credentials
    if os.path.exists(TOKEN_FILE):
        with open(TOKEN_FILE, 'rb') as token:
            creds = pickle.load(token)

    # Refresh or get new credentials
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not os.path.exists(CLIENT_SECRET_FILE):
                print("ERROR: client_secret.json not found!")
                print("\nTo set up OAuth:")
                print("1. Go to https://console.cloud.google.com/apis/credentials")
                print("2. Create OAuth 2.0 Client ID (Desktop app)")
                print("3. Download JSON and save as: scripts/client_secret.json")
                sys.exit(1)

            flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRET_FILE, SCOPES)
            creds = flow.run_local_server(port=0)

        # Save credentials
        with open(TOKEN_FILE, 'wb') as token:
            pickle.dump(creds, token)

    return creds


def find_measurement_id(target_id):
    """Search all accessible GA4 properties for a measurement ID."""
    print(f"\nSearching for measurement ID: {target_id}\n")
    print("=" * 60)

    creds = get_oauth_credentials()
    client = AnalyticsAdminServiceClient(credentials=creds)

    # List all accounts
    accounts = list(client.list_accounts())
    print(f"Found {len(accounts)} GA4 account(s)\n")

    found = False

    for account in accounts:
        account_id = account.name.split('/')[-1]
        print(f"[Account] {account.display_name} ({account_id})")

        # List properties
        try:
            request = ListPropertiesRequest(filter=f"parent:accounts/{account_id}")
            properties = list(client.list_properties(request=request))

            for prop in properties:
                prop_id = prop.name.split('/')[-1]
                print(f"  [Property] {prop.display_name} ({prop_id})")

                # List data streams
                try:
                    streams = list(client.list_data_streams(parent=prop.name))

                    for stream in streams:
                        if stream.web_stream_data:
                            mid = stream.web_stream_data.measurement_id
                            url = stream.web_stream_data.default_uri

                            if mid == target_id:
                                print(f"    >>> FOUND! Stream: {stream.display_name}")
                                print(f"        Measurement ID: {mid}")
                                print(f"        URL: {url}")
                                found = True
                            else:
                                print(f"    [Stream] {mid} -> {url}")

                except Exception as e:
                    print(f"    Error listing streams: {e}")

        except Exception as e:
            print(f"  Error listing properties: {e}")

        print()

    print("=" * 60)
    if found:
        print(f"SUCCESS: Found {target_id}")
    else:
        print(f"NOT FOUND: {target_id} is not in any accessible property")
        print("It may be deleted or in an account you don't have access to.")

    return found


def main():
    target = sys.argv[1] if len(sys.argv) > 1 else "G-RMF02ZX0XS"
    find_measurement_id(target)


if __name__ == '__main__':
    main()
