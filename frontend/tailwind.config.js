/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode colors
        dark: {
          bg: '#0a0a0a',
          card: '#141414',
          border: '#1e1e1e',
          accent: '#22c55e',
          highlight: '#d4a20a',
          text: '#e5e5e5',
          muted: '#737373',
        },
        // Light mode colors
        light: {
          bg: '#e0f2fe',
          card: '#ffffff',
          border: '#bae6fd',
          accent: '#0284c7',
          highlight: '#d4a20a',
          text: '#0f172a',
          muted: '#64748b',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'bento': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'bento-dark': '0 2px 15px -3px rgba(0, 0, 0, 0.4), 0 10px 20px -2px rgba(0, 0, 0, 0.3)',
        'bento-hover': '0 8px 30px -5px rgba(0, 0, 0, 0.12), 0 15px 25px -5px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
