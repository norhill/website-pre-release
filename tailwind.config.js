/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'nordic-blue': '#0D2A4F',
        'forest-green': '#1E5A2E',
        'slate-gray': '#3A4558',
        'burgundy': '#5A4A5A',
        // Secondary Colors
        'sky-blue': '#5B8FA3',
        'sage-green': '#7A9B7A',
        // Accent Colors
        'amber-gold': '#D4A574',
        'deep-plum': '#6B4A6B',
        // Neutral Colors
        'light-gray': '#F5F7FA',
        'medium-gray': '#E2E8F0',
        'dark-gray': '#2D3748',
        'near-black': '#1A202C',
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Lora', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

