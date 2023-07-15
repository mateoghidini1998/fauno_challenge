/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'green-950': '#00C08B',
        'black-1000': '#05060f',
      },
      boxShadow: {
        '3xl': '.4rem .4rem #05060f',
      },
      borderWidth: {
        DEFAULT: '1px',
        9: '.5vmin',
      },
    },
  },
  plugins: [],
};
