module.exports = {
  purge: [
    './src/sass/**/*.sass',
    './src/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        gendra: {
          'primary': '#394C64',
          'secondary': '#00A8B4',
          'text-strong': '#878787',
          'text-light': '#B2B2B2',
        }
      },
      fontFamily: {
        'header': "'Heebo', sans-serif",
        'body': "'Rasa', serif"
      }
    }
  },
  variants: {},
  plugins: [],
}