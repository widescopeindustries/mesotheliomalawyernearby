// Common Types and Interfaces

export interface Location {
  state: string
  city: string
  slug: string
}

export interface ExposureSite {
  id: string
  name: string
  location: string
  industry: string
  yearsActive: string
  description: string
  veteranConnection?: string
}

export interface Metadata {
  title: string
  description: string
  keywords?: string[]
  openGraph?: {
    title: string
    description: string
    type: string
    url: string
  }
}

export interface FormData {
  firstName: string
  lastName: string
  email?: string
  phone: string
  inquiringFor: string
  contactMethod?: string
  phoneConsent: boolean
  emailConsent?: boolean
  disclaimer: boolean
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface NavigationItem {
  name: string
  href: string
}

// Component Props Types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

export interface CardProps {
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
}
