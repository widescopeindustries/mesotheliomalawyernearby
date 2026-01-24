'use client'

import Script from 'next/script'

interface GoogleAnalyticsProps {
  gaId: string
}

export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  if (!gaId || gaId === 'G-XXXXXXXXXX') {
    // Don't load GA in development or if ID not configured
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

interface GoogleTagManagerProps {
  gtmId: string
}

export function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  if (!gtmId || gtmId === 'GTM-XXXXXXX') {
    return null
  }

  return (
    <>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}

// Analytics event tracking functions
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    })
  }
}

// Phone call tracking
export const trackPhoneCall = (phoneNumber: string, source?: string) => {
  trackEvent('call_initiated', 'engagement', `${phoneNumber} - ${source || 'unknown'}`)
}

// Form submission tracking
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent(
    success ? 'form_submit_success' : 'form_submit_error',
    'form',
    formName
  )
}

// Location page view tracking
export const trackLocationView = (city: string, state: string) => {
  trackEvent('location_page_view', 'location', `${city}, ${state}`)
}
