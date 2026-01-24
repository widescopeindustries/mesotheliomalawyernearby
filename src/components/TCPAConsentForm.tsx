'use client'

import { useForm, ValidationError } from '@formspree/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, CheckCircle, Loader2 } from 'lucide-react'

export function TCPAConsentForm() {
  const [state, handleSubmit] = useForm("xeeandap")

  if (state.succeeded) {
    return (
      <Card className="w-full max-w-2xl mx-auto border-2 border-green-200 bg-green-50">
        <CardContent className="p-8 text-center">
          <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-4">
            We&apos;ve received your information and will contact you within 24 hours.
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            Need immediate assistance? Call us now:
          </p>
          <a href="tel:682-999-0953" className="text-2xl font-bold text-primary hover:underline">
            (682) 999-0953
          </a>
        </CardContent>
      </Card>
    )
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
          {/* Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                First Name *
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <ValidationError prefix="First Name" field="firstName" errors={state.errors} className="text-red-600 text-sm mt-1" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                Last Name *
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <ValidationError prefix="Last Name" field="lastName" errors={state.errors} className="text-red-600 text-sm mt-1" />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="(XXX) XXX-XXXX"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
              <div className="absolute right-3 top-3">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-600 text-sm mt-1" />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email (Optional)
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-sm mt-1" />
          </div>

          {/* FCC Consent Checkboxes */}
          <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Required Consents</h4>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="phoneConsent"
                value="I agree to be contacted by phone"
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
                name="emailConsent"
                value="I agree to receive email updates"
                className="mt-1 h-4 w-4 text-primary focus:ring-primary"
              />
              <span className="text-sm">
                I agree to receive email updates about mesothelioma resources (optional)
              </span>
            </label>
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label htmlFor="contactMethod" className="block text-sm font-medium mb-2">
              Preferred Contact Method
            </label>
            <select
              id="contactMethod"
              name="contactMethod"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="">Select your preference</option>
              <option value="Immediate Phone Call">Immediate Phone Call</option>
              <option value="Schedule Callback">Schedule Callback</option>
              <option value="Email First">Email First</option>
            </select>
          </div>

          {/* Disclaimer */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="disclaimer"
                value="I understand this is a legal referral service"
                className="mt-1 h-4 w-4 text-primary focus:ring-primary"
                required
              />
              <span className="text-sm">
                I understand that this is a legal referral service and not an attorney-client relationship.
                <span className="text-red-600">*</span> Required
              </span>
            </label>
          </div>

          {/* Hidden field for form identification */}
          <input type="hidden" name="_subject" value="New Lead from Homepage" />

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full text-lg py-4 h-auto"
            disabled={state.submitting}
          >
            {state.submitting ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Phone className="h-5 w-5 mr-2" />
                Get Free Legal Help Now
              </>
            )}
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
          <p>🔒 Encrypted &amp; Secure</p>
          <p>✅ No Spam Guarantee</p>
          <p>🛡️ Licensed Attorneys Only</p>
          <p>🇺🇸 Veteran-Owned Service</p>
        </div>
      </CardContent>
    </Card>
  )
}