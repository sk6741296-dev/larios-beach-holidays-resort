/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#f0f7f9',
          100: '#dbebf0',
          800: '#143c4d',
          900: '#0f2c3a',
          950: '#091c26',
        },
        sand: {
          50: '#fdfbf7',
          100: '#f7f2e8',
          200: '#ece2cf',
          300: '#dfcca9',
          400: '#d4a373',
          500: '#c28c57',
        },
        resort: {
          bg: '#fafaf7',
          card: '#ffffff',
          dark: '#16191d',
          accent: '#c99663',
          muted: '#6b7280',
        }
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
