/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      colors: {
        primary: '#ed1c23',
        secondary: '#2a2a30',
        tertiary: '#333846',
      },
      gradientColorStops: theme => ({
        'primary': '#ed1c23',
        'secondary': '#2a2a30',
        'danger': '#FFD700'
      })
    },
  },
  plugins: [],
}

