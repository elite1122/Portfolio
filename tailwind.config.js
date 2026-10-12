/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'heading': ['Space Grotesk', 'sans-serif'],
        'mono': ['DM Mono', 'monospace'],
        'serif': ['Instrument Serif', 'Georgia', 'serif'],
        'display': ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Dark Editorial palette
        obsidian: {
          950: '#08090a', // Deep canvas
          900: '#0e1013', // Sub-canvas / modal backdrop
          850: '#14171c', // Card / module surface
          800: '#1c2026', // Elevated hover surface
          700: '#282e37', // Structural borders
          600: '#38404d', // Active borders
        },
        ivory: {
          50: '#ffffff',
          100: '#fbfbf9', // Primary high-contrast editorial headline
          200: '#f0f0eb', // Secondary headers
          300: '#d6d7cf', // Body copy
          400: '#9fa197', // Secondary descriptions
          500: '#6b6d64', // Technical metadata / timestamps
        },
        lime: {
          accent: '#c6f135', // Restrained electric-lime accent
          hover: '#b5df2b',  // Interactive hover
          muted: 'rgba(198, 241, 53, 0.10)',
          border: 'rgba(198, 241, 53, 0.28)',
        },
        // Compatibility aliases for existing components
        'primary': '#c6f135',
        'secondary': '#9fa197', 
        'accent': '#c6f135',
        'background': '#08090a',
        'surface': '#14171c',
        'surface-light': '#1c2026',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["dark"],
    darkTheme: "dark",
  },
}

