/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // Custom dark mode colors for consistency
        dark: {
          100: '#f3f4f6', // Text & icons (lightest)
          200: '#e5e7eb', // Secondary text
          300: '#d1d5db', // Borders, secondary text
          800: '#1f2937', // Secondary backgrounds
          850: '#1a1e2a', // Card backgrounds
          900: '#111827', // Main background
        }
      }
    },
  },
  plugins: [],
}