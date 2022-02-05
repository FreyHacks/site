module.exports = {
  mode:"jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkmode: true,
  theme: {
    extend: {
      backgroundImage: {
        'faq-svg': "url('/faq-svg.svg')",
      }
    },
  },
  plugins: [],
}
