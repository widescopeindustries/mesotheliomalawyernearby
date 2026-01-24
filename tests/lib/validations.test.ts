/**
 * Validation Schema Tests
 * Tests for Zod validation schemas used in forms
 */

import { describe, it, expect } from '@jest/globals'
import { tcpaFormSchema, contactFormSchema, formatZodError } from '@/lib/validations'

describe('TCPA Form Validation', () => {
  describe('firstName validation', () => {
    it('should accept valid first names', () => {
      const result = tcpaFormSchema.safeParse({
        firstName: 'John',
        lastName: 'Doe',
        phone: '(555) 123-4567',
        email: '',
        inquiringFor: 'Myself - I have been diagnosed',
        phoneConsent: true,
        emailConsent: false,
        contactMethod: '',
        disclaimer: true,
      })
      expect(result.success).toBe(true)
    })

    it('should reject first names that are too short', () => {
      const result = tcpaFormSchema.safeParse({
        firstName: 'J',
        lastName: 'Doe',
        phone: '(555) 123-4567',
        inquiringFor: 'Myself - I have been diagnosed',
        phoneConsent: true,
        disclaimer: true,
      })
      expect(result.success).toBe(false)
    })

    it('should reject first names with invalid characters', () => {
      const result = tcpaFormSchema.safeParse({
        firstName: 'John123',
        lastName: 'Doe',
        phone: '(555) 123-4567',
        inquiringFor: 'Myself - I have been diagnosed',
        phoneConsent: true,
        disclaimer: true,
      })
      expect(result.success).toBe(false)
    })
  })

  describe('phone validation', () => {
    it('should accept valid phone numbers', () => {
      const validPhones = [
        '(555) 123-4567',
        '555-123-4567',
        '5551234567',
        '+1 555 123 4567',
      ]

      validPhones.forEach((phone) => {
        const result = tcpaFormSchema.safeParse({
          firstName: 'John',
          lastName: 'Doe',
          phone,
          inquiringFor: 'Myself - I have been diagnosed',
          phoneConsent: true,
          disclaimer: true,
        })
        expect(result.success).toBe(true)
      })
    })

    it('should reject invalid phone numbers', () => {
      const invalidPhones = ['123', 'abc', '12-34']

      invalidPhones.forEach((phone) => {
        const result = tcpaFormSchema.safeParse({
          firstName: 'John',
          lastName: 'Doe',
          phone,
          inquiringFor: 'Myself - I have been diagnosed',
          phoneConsent: true,
          disclaimer: true,
        })
        expect(result.success).toBe(false)
      })
    })
  })

  describe('email validation', () => {
    it('should accept valid emails or empty string', () => {
      const validEmails = ['test@example.com', 'user.name@domain.co.uk', '']

      validEmails.forEach((email) => {
        const result = tcpaFormSchema.safeParse({
          firstName: 'John',
          lastName: 'Doe',
          phone: '(555) 123-4567',
          email,
          inquiringFor: 'Myself - I have been diagnosed',
          phoneConsent: true,
          disclaimer: true,
        })
        expect(result.success).toBe(true)
      })
    })

    it('should reject invalid emails', () => {
      const result = tcpaFormSchema.safeParse({
        firstName: 'John',
        lastName: 'Doe',
        phone: '(555) 123-4567',
        email: 'invalid-email',
        inquiringFor: 'Myself - I have been diagnosed',
        phoneConsent: true,
        disclaimer: true,
      })
      expect(result.success).toBe(false)
    })
  })

  describe('consent validation', () => {
    it('should require phone consent', () => {
      const result = tcpaFormSchema.safeParse({
        firstName: 'John',
        lastName: 'Doe',
        phone: '(555) 123-4567',
        inquiringFor: 'Myself - I have been diagnosed',
        phoneConsent: false,
        disclaimer: true,
      })
      expect(result.success).toBe(false)
    })

    it('should require disclaimer acceptance', () => {
      const result = tcpaFormSchema.safeParse({
        firstName: 'John',
        lastName: 'Doe',
        phone: '(555) 123-4567',
        inquiringFor: 'Myself - I have been diagnosed',
        phoneConsent: true,
        disclaimer: false,
      })
      expect(result.success).toBe(false)
    })
  })
})

describe('Contact Form Validation', () => {
  it('should validate a complete contact form', () => {
    const result = contactFormSchema.safeParse({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '(555) 123-4567',
      message: 'This is a test message with sufficient length.',
    })
    expect(result.success).toBe(true)
  })

  it('should require message to be at least 10 characters', () => {
    const result = contactFormSchema.safeParse({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Too short',
    })
    expect(result.success).toBe(false)
  })
})

describe('formatZodError', () => {
  it('should format Zod errors correctly', () => {
    const result = tcpaFormSchema.safeParse({
      firstName: '',
      lastName: 'D',
      phone: '123',
      inquiringFor: '',
      phoneConsent: false,
      disclaimer: false,
    })

    if (!result.success) {
      const formatted = formatZodError(result.error)
      expect(formatted).toHaveProperty('firstName')
      expect(formatted).toHaveProperty('lastName')
      expect(formatted).toHaveProperty('phone')
    }
  })
})
