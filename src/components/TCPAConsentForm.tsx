'use client'

import { useForm, ValidationError } from '@formspree/react'
import { Button } from '@/components/ui/button'
import { Phone, CheckCircle, Loader2, Shield, Lock } from 'lucide-react'
import { useEffect } from 'react'
import { trackPhoneClick } from '@/components/Analytics'

export function TCPAConsentForm() {
  const [state, handleSubmit] = useForm("xeeandap")

  useEffect(() => {
    if (state.succeeded) {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          'event_category': 'form',
          'event_label': 'meso_lead_evaluation'
        });
      }
    }
  }, [state.succeeded]);

  // Success State - reassuring, clear next steps
  if (state.succeeded) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-secondary/10 border-2 border-secondary rounded-2xl p-8 md:p-12 text-center">
        <div className="h-20 w-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-secondary" aria-hidden="true" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Thank You!
        </h3>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          We&apos;ve received your information. Someone will call you soon to
          discuss your situation and answer any questions you have.
        </p>
        <p className="text-base text-muted-foreground mb-4">
          Need to talk right now? Call us:
        </p>
        <a
          href="tel:214-699-4543"
          onClick={() => trackPhoneClick('214-699-4543', 'Form Success')}
          className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-5 rounded-xl font-bold text-xl transition-all"
          aria-label="Call us at 214-699-4543"
        >
          <Phone className="h-6 w-6" aria-hidden="true" />
          (214) 699-4543
        </a>
      </div>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-card border-2 border-border rounded-2xl p-8 md:p-12 shadow-card">
      {/* Header - clear purpose */}
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Request a Free Consultation
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Fill out this form and we&apos;ll call you. No obligation, completely confidential.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name Fields - large inputs */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-base font-bold text-foreground mb-3">
              First Name <span className="text-destructive">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              required
              autoComplete="given-name"
              className="w-full px-5 py-4 text-lg border-2 border-border rounded-xl bg-background focus:ring-4 focus:ring-accent/30 focus:border-accent transition-all"
            />
            <ValidationError prefix="First Name" field="firstName" errors={state.errors} className="text-destructive text-base mt-2 block" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-base font-bold text-foreground mb-3">
              Last Name <span className="text-destructive">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              required
              autoComplete="family-name"
              className="w-full px-5 py-4 text-lg border-2 border-border rounded-xl bg-background focus:ring-4 focus:ring-accent/30 focus:border-accent transition-all"
            />
            <ValidationError prefix="Last Name" field="lastName" errors={state.errors} className="text-destructive text-base mt-2 block" />
          </div>
        </div>

        {/* Phone Number - large, prominent */}
        <div>
          <label htmlFor="phone" className="block text-base font-bold text-foreground mb-3">
            Phone Number <span className="text-destructive">*</span>
          </label>
          <p className="text-muted-foreground text-base mb-3">
            We&apos;ll call you at this number to discuss your case.
          </p>
          <div className="relative">
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              autoComplete="tel"
              placeholder="(555) 123-4567"
              className="w-full px-5 py-4 text-lg border-2 border-border rounded-xl bg-background focus:ring-4 focus:ring-accent/30 focus:border-accent transition-all pr-14"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Phone className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
            </div>
          </div>
          <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-destructive text-base mt-2 block" />
        </div>

        {/* Who is this for - large dropdown */}
        <div>
          <label htmlFor="inquiringFor" className="block text-base font-bold text-foreground mb-3">
            Who is this case for? <span className="text-destructive">*</span>
          </label>
          <select
            id="inquiringFor"
            name="inquiringFor"
            required
            className="w-full px-5 py-4 text-lg border-2 border-border rounded-xl bg-background focus:ring-4 focus:ring-accent/30 focus:border-accent transition-all appearance-none cursor-pointer"
          >
            <option value="">Please select one</option>
            <option value="Myself - I have been diagnosed">Myself - I have been diagnosed</option>
            <option value="My spouse or partner">My spouse or partner</option>
            <option value="My parent">My parent</option>
            <option value="Another family member">Another family member</option>
            <option value="I am a caregiver">I am a caregiver</option>
          </select>
        </div>

        {/* Email - optional, clearly marked */}
        <div>
          <label htmlFor="email" className="block text-base font-bold text-foreground mb-3">
            Email <span className="text-muted-foreground font-normal">(Optional)</span>
          </label>
          <p className="text-muted-foreground text-base mb-3">
            If you&apos;d like us to send you helpful information by email.
          </p>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            className="w-full px-5 py-4 text-lg border-2 border-border rounded-xl bg-background focus:ring-4 focus:ring-accent/30 focus:border-accent transition-all"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-destructive text-base mt-2 block" />
        </div>

        {/* Consent Checkboxes - clear, large touchable areas */}
        <div className="bg-muted/50 p-6 md:p-8 rounded-2xl border border-border space-y-6">
          <h4 className="font-bold text-lg text-foreground">Your Permission</h4>

          <label className="flex items-start gap-4 cursor-pointer p-3 rounded-xl hover:bg-muted/70 transition-colors">
            <input
              type="checkbox"
              name="phoneConsent"
              value="I agree to be contacted by phone"
              className="mt-1 h-6 w-6 rounded border-2 border-border text-accent focus:ring-accent flex-shrink-0"
              required
            />
            <span className="text-base text-foreground leading-relaxed">
              Yes, please call me about my legal options for mesothelioma.
              <span className="text-destructive ml-1">*</span>
            </span>
          </label>

          <label className="flex items-start gap-4 cursor-pointer p-3 rounded-xl hover:bg-muted/70 transition-colors">
            <input
              type="checkbox"
              name="disclaimer"
              value="I understand this is a legal referral service"
              className="mt-1 h-6 w-6 rounded border-2 border-border text-accent focus:ring-accent flex-shrink-0"
              required
            />
            <span className="text-base text-foreground leading-relaxed">
              I understand this is a referral service that will connect me with an attorney.
              <span className="text-destructive ml-1">*</span>
            </span>
          </label>
        </div>

        {/* Hidden field */}
        <input type="hidden" name="_subject" value="New Lead from Homepage" />

        {/* Submit Button - huge, friendly */}
        <Button
          type="submit"
          size="lg"
          className="w-full text-xl py-6 h-auto rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg hover:shadow-xl transition-all min-h-[64px]"
          disabled={state.submitting}
        >
          {state.submitting ? (
            <>
              <Loader2 className="h-6 w-6 mr-3 animate-spin" aria-hidden="true" />
              <span>Sending Your Request...</span>
            </>
          ) : (
            <>
              <Phone className="h-6 w-6 mr-3" aria-hidden="true" />
              <span>Request My Free Consultation</span>
            </>
          )}
        </Button>
      </form>

      {/* Trust & Privacy - reassuring footer */}
      <div className="mt-8 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5" aria-hidden="true" />
            <span className="text-base">100% Confidential</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5" aria-hidden="true" />
            <span className="text-base">Veteran-Owned</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" aria-hidden="true" />
            <span className="text-base">No Obligation</span>
          </div>
        </div>
      </div>
    </div>
  )
}