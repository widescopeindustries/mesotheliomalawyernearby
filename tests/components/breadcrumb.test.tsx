/**
 * Breadcrumb Component Tests
 * Tests for the Breadcrumb navigation component
 */

import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { Breadcrumb } from '@/components/common/breadcrumb'

describe('Breadcrumb Component', () => {
  it('should render breadcrumb items correctly', () => {
    const items = [
      { label: 'Category', href: '/category' },
      { label: 'Subcategory', href: '/category/subcategory' },
      { label: 'Current Page' },
    ]

    render(<Breadcrumb items={items} />)

    // Check that all items are rendered
    expect(screen.getByText('Category')).toBeInTheDocument()
    expect(screen.getByText('Subcategory')).toBeInTheDocument()
    expect(screen.getByText('Current Page')).toBeInTheDocument()
  })

  it('should render home icon link', () => {
    const items = [{ label: 'Test Page' }]

    render(<Breadcrumb items={items} />)

    // Home link should always be present
    const homeLink = screen.getByRole('link', { name: /home/i })
    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toHaveAttribute('href', '/')
  })

  it('should render last item without link', () => {
    const items = [
      { label: 'Category', href: '/category' },
      { label: 'Current Page' },
    ]

    render(<Breadcrumb items={items} />)

    const currentPage = screen.getByText('Current Page')
    expect(currentPage).toBeInTheDocument()
    expect(currentPage).toHaveAttribute('aria-current', 'page')
  })

  it('should render intermediate items as links', () => {
    const items = [
      { label: 'Category', href: '/category' },
      { label: 'Subcategory', href: '/category/subcategory' },
      { label: 'Current Page' },
    ]

    render(<Breadcrumb items={items} />)

    const categoryLink = screen.getByRole('link', { name: 'Category' })
    const subcategoryLink = screen.getByRole('link', { name: 'Subcategory' })

    expect(categoryLink).toHaveAttribute('href', '/category')
    expect(subcategoryLink).toHaveAttribute('href', '/category/subcategory')
  })

  it('should have proper accessibility attributes', () => {
    const items = [{ label: 'Test Page' }]

    const { container } = render(<Breadcrumb items={items} />)

    const nav = container.querySelector('nav')
    expect(nav).toHaveAttribute('aria-label', 'Breadcrumb')
  })
})
