'use client'

import { useForm, ValidationError } from '@formspree/react'
import { Button } from '@/components/ui/button'
import { Phone, CheckCircle, Loader2 } from 'lucide-react'

const US_STATES = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
]

export function ContactForm() {
    const [state, handleSubmit] = useForm("xeeandap")

    if (state.succeeded) {
        return (
            <div className="text-center py-8">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                <p className="text-muted-foreground mb-4">
                    We&apos;ve received your information and will contact you within 24 hours.
                </p>
                <p className="text-sm text-muted-foreground">
                    Need immediate assistance? Call us now:
                </p>
                <a href="tel:682-999-0953" className="text-xl font-bold text-primary hover:underline">
                    (682) 999-0953
                </a>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Row */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name *</label>
                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                    <ValidationError prefix="First Name" field="firstName" errors={state.errors} className="text-red-600 text-sm mt-1" />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name *</label>
                    <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                    <ValidationError prefix="Last Name" field="lastName" errors={state.errors} className="text-red-600 text-sm mt-1" />
                </div>
            </div>

            {/* Contact Row */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone *</label>
                    <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        placeholder="(XXX) XXX-XXXX"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-600 text-sm mt-1" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-sm mt-1" />
                </div>
            </div>

            {/* State */}
            <div>
                <label htmlFor="state" className="block text-sm font-medium mb-1">State *</label>
                <select
                    id="state"
                    name="state"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                >
                    <option value="">Select your state</option>
                    {US_STATES.map(state => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
                <ValidationError prefix="State" field="state" errors={state.errors} className="text-red-600 text-sm mt-1" />
            </div>

            {/* Diagnosis Status */}
            <div>
                <label htmlFor="diagnosisStatus" className="block text-sm font-medium mb-1">Have you been diagnosed with mesothelioma? *</label>
                <select
                    id="diagnosisStatus"
                    name="diagnosisStatus"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                >
                    <option value="">Select an option</option>
                    <option value="Yes, I have been diagnosed">Yes, I have been diagnosed</option>
                    <option value="A family member has been diagnosed">A family member has been diagnosed</option>
                    <option value="Suspected, awaiting diagnosis">Suspected, awaiting diagnosis</option>
                    <option value="No diagnosis">No diagnosis</option>
                </select>
                <ValidationError prefix="Diagnosis Status" field="diagnosisStatus" errors={state.errors} className="text-red-600 text-sm mt-1" />
            </div>

            {/* Veteran Status */}
            <div>
                <label htmlFor="veteranStatus" className="block text-sm font-medium mb-1">Are you a veteran or family member of a veteran?</label>
                <select
                    id="veteranStatus"
                    name="veteranStatus"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                >
                    <option value="">Select an option</option>
                    <option value="Yes, I am a veteran">Yes, I am a veteran</option>
                    <option value="Family member of a veteran">Family member of a veteran</option>
                    <option value="No">No</option>
                </select>
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Tell us about your situation</label>
                <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Please briefly describe your asbestos exposure history..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-sm mt-1" />
            </div>

            {/* Consent */}
            <div className="bg-gray-50 p-4 rounded-lg">
                <label className="flex items-start gap-3 cursor-pointer">
                    <input
                        type="checkbox"
                        name="consent"
                        required
                        value="I agree to be contacted"
                        className="mt-1 h-4 w-4 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-muted-foreground">
                        I agree to be contacted by phone and/or email about my mesothelioma case.
                        I understand this is a legal referral service and not a law firm. *
                    </span>
                </label>
            </div>

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
                        Get Free Consultation
                    </>
                )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
                🔒 Your information is secure and confidential
            </p>
        </form>
    )
}
