#!/usr/bin/env python3
"""
Content Analyzer using Google Natural Language API
Analyzes page content for entity optimization
Requires: Cloud Natural Language API enabled
"""

import os
import json
import requests
from datetime import datetime

# Configuration
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
SERVICE_ACCOUNT_FILE = os.path.join(PROJECT_DIR, 'gsc-service-account.json')

from google.oauth2 import service_account
from google.cloud import language_v1

SCOPES = ['https://www.googleapis.com/auth/cloud-language']


def get_client():
    """Initialize Natural Language client."""
    creds = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    return language_v1.LanguageServiceClient(credentials=creds)


def analyze_text(client, text):
    """Analyze text for entities and sentiment."""
    document = language_v1.Document(
        content=text,
        type_=language_v1.Document.Type.PLAIN_TEXT,
    )
    
    # Get entities
    entities_response = client.analyze_entities(
        request={'document': document, 'encoding_type': language_v1.EncodingType.UTF8}
    )
    
    # Get sentiment
    sentiment_response = client.analyze_sentiment(
        request={'document': document, 'encoding_type': language_v1.EncodingType.UTF8}
    )
    
    # Get categories
    try:
        categories_response = client.classify_text(request={'document': document})
        categories = [(c.name, c.confidence) for c in categories_response.categories]
    except:
        categories = []
    
    return {
        'entities': [
            {
                'name': e.name,
                'type': language_v1.Entity.Type(e.type_).name,
                'salience': e.salience,
                'sentiment': e.sentiment.score if e.sentiment else 0
            }
            for e in entities_response.entities
        ],
        'sentiment': {
            'score': sentiment_response.document_sentiment.score,
            'magnitude': sentiment_response.document_sentiment.magnitude
        },
        'categories': categories
    }


def analyze_page(client, url):
    """Fetch and analyze a page."""
    try:
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        
        # Basic text extraction (you could use BeautifulSoup for better extraction)
        from html.parser import HTMLParser
        
        class TextExtractor(HTMLParser):
            def __init__(self):
                super().__init__()
                self.text = []
                self.skip = False
                
            def handle_starttag(self, tag, attrs):
                if tag in ['script', 'style', 'nav', 'footer', 'header']:
                    self.skip = True
                    
            def handle_endtag(self, tag):
                if tag in ['script', 'style', 'nav', 'footer', 'header']:
                    self.skip = False
                    
            def handle_data(self, data):
                if not self.skip:
                    self.text.append(data.strip())
        
        parser = TextExtractor()
        parser.feed(response.text)
        text = ' '.join(parser.text)
        
        # Limit text length for API
        text = text[:5000]
        
        return analyze_text(client, text)
        
    except Exception as e:
        return {'error': str(e)}


def compare_with_competitor(client, our_url, competitor_url):
    """Compare our content with a competitor."""
    print(f"\nAnalyzing: {our_url}")
    our_analysis = analyze_page(client, our_url)
    
    print(f"Analyzing: {competitor_url}")
    competitor_analysis = analyze_page(client, competitor_url)
    
    if 'error' in our_analysis or 'error' in competitor_analysis:
        print("Error in analysis")
        return
    
    # Find entities they have that we don't
    our_entities = {e['name'].lower() for e in our_analysis['entities']}
    competitor_entities = {e['name'].lower(): e for e in competitor_analysis['entities']}
    
    missing_entities = []
    for name, entity in competitor_entities.items():
        if name not in our_entities and entity['salience'] > 0.01:
            missing_entities.append(entity)
    
    missing_entities.sort(key=lambda x: x['salience'], reverse=True)
    
    print("\n=== ENTITY GAP ANALYSIS ===")
    print("\nEntities competitor has that you're missing:")
    print(f"{'Entity':<40} {'Type':<15} {'Salience':>10}")
    print("-" * 70)
    
    for e in missing_entities[:20]:
        print(f"{e['name']:<40} {e['type']:<15} {e['salience']:>10.3f}")
    
    # Compare sentiment
    print("\n=== SENTIMENT COMPARISON ===")
    print(f"Your page:       Score {our_analysis['sentiment']['score']:.2f}, Magnitude {our_analysis['sentiment']['magnitude']:.2f}")
    print(f"Competitor:      Score {competitor_analysis['sentiment']['score']:.2f}, Magnitude {competitor_analysis['sentiment']['magnitude']:.2f}")
    
    # Categories
    print("\n=== CONTENT CATEGORIES ===")
    print("Your page:", our_analysis.get('categories', []))
    print("Competitor:", competitor_analysis.get('categories', []))


def main():
    print("=" * 70)
    print("  CONTENT ANALYZER - Natural Language API")
    print(f"  Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    print("=" * 70)
    
    try:
        client = get_client()
        
        # Analyze our homepage
        print("\n=== HOMEPAGE ENTITY ANALYSIS ===\n")
        
        analysis = analyze_page(client, 'https://mesotheliomalawyernearby.com/')
        
        if 'error' in analysis:
            print(f"Error: {analysis['error']}")
            return
        
        print(f"Found {len(analysis['entities'])} entities\n")
        print(f"{'Entity':<40} {'Type':<15} {'Salience':>10}")
        print("-" * 70)
        
        for e in sorted(analysis['entities'], key=lambda x: x['salience'], reverse=True)[:25]:
            print(f"{e['name']:<40} {e['type']:<15} {e['salience']:>10.3f}")
        
        print(f"\nOverall Sentiment: {analysis['sentiment']['score']:.2f}")
        print(f"Categories: {analysis.get('categories', [])}")
        
        # Example competitor comparison (uncomment to use)
        # compare_with_competitor(
        #     client,
        #     'https://mesotheliomalawyernearby.com/location/texas-houston',
        #     'https://www.mesothelioma.com/lawyers/texas/'
        # )
        
    except Exception as e:
        print(f"\nError: {e}")
        print("\nMake sure Cloud Natural Language API is enabled:")
        print("https://console.cloud.google.com/apis/library/language.googleapis.com")


if __name__ == '__main__':
    main()
