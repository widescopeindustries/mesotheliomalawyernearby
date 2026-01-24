'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface FormData {
    firstName: string
    lastName: string
    email: string
    phone: string
    state: string
    message: string
    diagnosisStatus: string
    veteranStatus: string
    consent: boolean
}

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
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        state: '',
        message: '',
        diagnosisStatus: '',
        veteranStatus: '',
        consent: false
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.consent) {
            setErrorMessage('Please agree to be contacted to proceed.')
            setStatus('error')
            return
        }

        setStatus('loading')
        setErrorMessage('')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if (!response.ok) {
                throw new Error('Failed to submit form')
            }

            setStatus('success')
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                state: '',
                message: '',
                diagnosisStatus: '',
                veteranStatus: '',
                consent: false
            })
        } catch (error) {
            setStatus('error')
            setErrorMessage('Something went wrong. Please call us directly at (682) 999-0953.')
        }
    }

    if (status === 'success') {
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
                    <label className="block text-sm font-medium mb-1">First Name *</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Last Name *</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                </div>
            </div>

            {/* Contact Row */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">Phone *</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(XXX) XXX-XXXX"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                </div>
            </div>

            {/* State */}
            <div>
                <label className="block text-sm font-medium mb-1">State *</label>
                <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                >
                    <option value="">Select your state</option>
                    {US_STATES.map(state => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
            </div>

            {/* Diagnosis Status */}
            <div>
                <label className="block text-sm font-medium mb-1">Have you been diagnosed with mesothelioma? *</label>
                <select
                    name="diagnosisStatus"
                    value={formData.diagnosisStatus}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                >
                    <option value="">Select an option</option>
                    <option value="yes-self">Yes, I have been diagnosed</option>
                    <option value="yes-family">A family member has been diagnosed</option>
                    <option value="suspected">Suspected, awaiting diagnosis</option>
                    <option value="no">No diagnosis</option>
                </select>
            </div>

            {/* Veteran Status */}
            <div>
                <label className="block text-sm font-medium mb-1">Are you a veteran or family member of a veteran?</label>
                <select
                    name="veteranStatus"
                    value={formData.veteranStatus}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                >
                    <option value="">Select an option</option>
                    <option value="veteran">Yes, I am a veteran</option>
                    <option value="family">Family member of a veteran</option>
                    <option value="no">No</option>
                </select>
            </div>

            {/* Message */}
            <div>
                <label className="block text-sm font-medium mb-1">Tell us about your situation</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Please briefly describe your asbestos exposure history..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
            </div>

            {/* Consent */}
            <div className="bg-gray-50 p-4 rounded-lg">
                <label className="flex items-start gap-3 cursor-pointer">
                    <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-muted-foreground">
                        I agree to be contacted by phone and/or email about my mesothelioma case.
                        I understand this is a legal referral service and not a law firm. *
                    </span>
                </label>
            </div>

            {/* Error Message */}
            {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="h-5 w-5" />
                    <span className="text-sm">{errorMessage}</span>
                </div>
            )}

            {/* Submit Button */}
            <Button
                type="submit"
                size="lg"
                className="w-full text-lg py-4 h-auto"
                disabled={status === 'loading'}
            >
                {status === 'loading' ? (
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
