/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: "#121212",
        light: "#1a1a1a"
      },
      height: {
        '76': '18.75rem',
      }
    },
   
  },
  plugins: [],
}
