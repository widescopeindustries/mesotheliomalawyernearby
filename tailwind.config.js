/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1200px",
        "2xl": "1280px", // Narrower max-width for readability
      },
    },
    extend: {
      // ELDERLY-ACCESSIBLE FONT SIZES (18px base = 1rem)
      fontSize: {
        'xs': ['0.889rem', { lineHeight: '1.5' }],     // 16px
        'sm': ['1rem', { lineHeight: '1.6' }],         // 18px
        'base': ['1.111rem', { lineHeight: '1.7' }],   // 20px
        'lg': ['1.333rem', { lineHeight: '1.6' }],     // 24px
        'xl': ['1.556rem', { lineHeight: '1.5' }],     // 28px
        '2xl': ['1.778rem', { lineHeight: '1.4' }],    // 32px
        '3xl': ['2.222rem', { lineHeight: '1.3' }],    // 40px
        '4xl': ['2.667rem', { lineHeight: '1.2' }],    // 48px
        '5xl': ['3.333rem', { lineHeight: '1.1' }],    // 60px
        '6xl': ['4rem', { lineHeight: '1.1' }],        // 72px
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Semantic Colors for accessibility
        navy: {
          DEFAULT: '#1a365d',
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#1a365d',
        },
        amber: {
          DEFAULT: '#d97706',
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        forest: {
          DEFAULT: '#166534',
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#166534',
          800: '#14532d',
          900: '#052e16',
        },
      },
      fontFamily: {
        // Atkinson Hyperlegible - designed for accessibility
        sans: ['"Atkinson Hyperlegible"', 'system-ui', '-apple-system', 'sans-serif'],
        // Georgia for headings - highly readable serif
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      },
      // GENEROUS SPACING for elderly users
      spacing: {
        '0': '0',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '11': '44px',
        '12': '48px',
        '14': '56px',
        '16': '64px',
        '18': '72px',
        '20': '80px',
        '24': '96px',
        '28': '112px',
        '32': '128px',
      },
      borderRadius: {
        'lg': "0.75rem",
        'md': "0.5rem",
        'sm': "0.375rem",
        'xl': "1rem",
        '2xl': "1.5rem",
        '3xl': "2rem",
      },
      // Subtle, non-jarring shadows
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)',
        'elevated': '0 12px 40px rgba(0, 0, 0, 0.12)',
      },
      // 48px minimum touch targets
      minHeight: {
        'touch': '48px',
        'button': '56px',
      },
      minWidth: {
        'touch': '48px',
        'button': '120px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Gentle fade-in for content
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
      // Max widths for optimal reading
      maxWidth: {
        'reading': '70ch',
        'content': '750px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}