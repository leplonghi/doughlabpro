
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: '#e0e0e0',
        input: '#e0e0e0',
        ring: '#787878',
        background: '#FFFFFF',
        foreground: '#252525',
        primary: {
          DEFAULT: '#3b5998',
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#f5f7fa',
          foreground: '#252525'
        },
        destructive: {
          DEFAULT: '#d32f2f',
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: '#f5f7fa',
          foreground: '#787878'
        },
        accent: {
          DEFAULT: '#f8f9fc',
          foreground: '#252525'
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#252525'
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#252525'
        },
        sidebar: {
          DEFAULT: '#FFFFFF',
          foreground: '#252525',
          primary: '#252525',
          'primary-foreground': '#FFFFFF',
          accent: '#f8f9fc',
          'accent-foreground': '#252525',
          border: '#e0e0e0',
          ring: '#787878'
        },
        pizza: {
          DEFAULT: '#3b5998',
          light: '#f5f7fa',
          dark: '#344e86',
          accent: '#8b9dc3',
          cream: '#dfe3ee',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['Georgia', '"Times New Roman"', 'serif'],
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        },
        'scale': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.03)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scale': 'scale 0.15s ease-in-out'
      },
      backgroundImage: {
        'flour-texture': "url('/flour-texture.jpg')",
        'hero-pizza': "url('/lovable-uploads/10240500-8679-4a2d-9667-7895246fe108.png')",
        'gradient-primary': 'linear-gradient(135deg, #3b5998 0%, #8b9dc3 100%)',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
