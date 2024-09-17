/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'loading-wave': 'loading-wave-animation 1s ease-in-out infinite',
      },
      keyframes: {
        'loading-wave-animation': {
          '0%, 100%': { height: '0.5rem' },
          '50%': { height: '2.5rem' },
        },
      },
    },
  },
  plugins: [],
}

