
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
        border: '#e2e2e2',
        input: '#e2e2e2',
        ring: '#888888',
        background: '#FFFFFF',
        foreground: '#222222',
        primary: {
          DEFAULT: '#ea384c',
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#f5f5f5',
          foreground: '#222222'
        },
        destructive: {
          DEFAULT: '#7f1d1d',
          foreground: '#FFFFFF'
        },
        muted: {
          DEFAULT: '#f5f5f5',
          foreground: '#888888'
        },
        accent: {
          DEFAULT: '#f5f5f5',
          foreground: '#222222'
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#222222'
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#222222'
        },
        sidebar: {
          DEFAULT: '#FFFFFF',
          foreground: '#222222',
          primary: '#ea384c',
          'primary-foreground': '#FFFFFF',
          accent: '#f5f5f5',
          'accent-foreground': '#222222',
          border: '#e2e2e2',
          ring: '#888888'
        },
        pizza: {
          DEFAULT: '#ea384c',
          light: '#f5f5f5',
          dark: '#c42838',
          accent: '#e66d7a',
          cream: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
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
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      backgroundImage: {
        'flour-texture': "url('/flour-texture.jpg')",
        'hero-pizza': "url('/lovable-uploads/10240500-8679-4a2d-9667-7895246fe108.png')",
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
