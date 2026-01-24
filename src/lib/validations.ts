import { z } from 'zod'

// TCPA Consent Form Schema
export const tcpaFormSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s-']+$/, 'First name can only contain letters, spaces, hyphens, and apostrophes'),

  lastName: z
    .string()
    .min(1, 'Last name is required')
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s-']+$/, 'Last name can only contain letters, spaces, hyphens, and apostrophes'),

  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      'Please enter a valid phone number'
    ),

  email: z
    .string()
    .email('Please enter a valid email address')
    .optional()
    .or(z.literal('')),

  inquiringFor: z
    .string()
    .min(1, 'Please select who this case is for'),

  phoneConsent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must agree to be contacted by phone',
    }),

  emailConsent: z.boolean().optional(),

  contactMethod: z.string().optional(),

  disclaimer: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must agree to the legal disclaimer',
    }),
})

export type TCPAFormData = z.infer<typeof tcpaFormSchema>

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),

  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),

  phone: z
    .string()
    .regex(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      'Please enter a valid phone number'
    )
    .optional()
    .or(z.literal('')),

  message: z
    .string()
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Helper function to format Zod errors for display
export function formatZodError(error: z.ZodError): Record<string, string> {
  const formattedErrors: Record<string, string> = {}

  error.errors.forEach((err) => {
    const path = err.path.join('.')
    formattedErrors[path] = err.message
  })

  return formattedErrors
}
