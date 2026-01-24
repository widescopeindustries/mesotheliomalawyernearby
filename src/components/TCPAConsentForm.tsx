'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, User, CheckCircle } from 'lucide-react'

export function TCPAConsentForm() {
  const [consent, setConsent] = useState({
    phoneConsent: false,
    emailConsent: false,
    selectedAttorney: '',
    disclaimer: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (consent.phoneConsent && consent.disclaimer) {
      // Process Pay Per Call lead
      console.log('Lead captured:', consent)
      // Redirect to thank you or call tracking
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto border-2 border-primary/20">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-4">Free Case Evaluation</h3>
          <p className="text-muted-foreground">
            100% Confidential • No Obligation • FCC Compliant
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <input
                type="tel"
                placeholder="(555) 123-4567"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
              <div className="absolute right-3 top-3">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* FCC Consent Checkboxes */}
          <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Required Consents</h4>
            
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consent.phoneConsent}
                onChange={(e) => setConsent({...consent, phoneConsent: e.target.checked})}
                className="mt-1 h-4 w-4 text-primary focus:ring-primary"
                required
              />
              <span className="text-sm">
                I agree to be contacted by phone about mesothelioma legal options. 
                <span className="text-red-600">*</span> Required
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consent.emailConsent}
                onChange={(e) => setConsent({...consent, emailConsent: e.target.checked})}
                className="mt-1 h-4 w-4 text-primary focus:ring-primary"
              />
              <span className="text-sm">
                I agree to receive email updates about mesothelioma resources (optional)
              </span>
            </label>
          </div>

          {/* Attorney Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Preferred Contact Method
            </label>
            <select
              value={consent.selectedAttorney}
              onChange={(e) => setConsent({...consent, selectedAttorney: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="">Select your preference</option>
              <option value="phone">Immediate Phone Call</option>
              <option value="callback">Schedule Callback</option>
              <option value="email">Email First</option>
            </select>
          </div>

          {/* Disclaimer */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consent.disclaimer}
                onChange={(e) => setConsent({...consent, disclaimer: e.target.checked})}
                className="mt-1 h-4 w-4 text-primary focus:ring-primary"
                required
              />
              <span className="text-sm">
                I understand that this is a legal referral service and not an attorney-client relationship. 
                <span className="text-red-600">*</span> Required
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            size="lg" 
            className="w-full text-lg py-4 h-auto"
            disabled={!consent.phoneConsent || !consent.disclaimer}
          >
            <Phone className="h-5 w-5 mr-2" />
            Get Free Legal Help Now
          </Button>
        </form>

        {/* FCC Compliance Notice */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
          <h4 className="font-semibold mb-2">📋 FCC Compliant Communication</h4>
          <p>
            By submitting this form, you provide prior express written consent for one-to-one communication 
            with participating mesothelioma attorneys. We will not share your information with multiple firms. 
            You can withdraw consent at any time.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p>🔒 Encrypted & Secure</p>
          <p>✅ No Spam Guarantee</p>
          <p>🛡️ Licensed Attorneys Only</p>
          <p>🇺🇸 Veteran-Owned Service</p>
        </div>
      </CardContent>
    </Card>
  )
}