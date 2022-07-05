module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto Condensed']
      },
      animation: {
        "flip": "rotate 3s linear infinite"
      },
      keyframes: {
        rotate: {
          "0%": {transform: "rotateY(0deg)"},
          "100%": { transform: "rotateY(360deg)"},

        }
      },
    },
  },
  plugins: [],
}
