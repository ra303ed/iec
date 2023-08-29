/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      green:{
        900: "#172E08",
        600: "#5EDB12",
        500: "#ACFF7A",
        400: "#D8FFC0",
      },
      color1: "#FFBA86",
      color2: "#F8F0E5",
      color3: "#9ED2BE",
      color4: "#BB2525",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
