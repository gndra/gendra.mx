module.exports = {
  purge: {
    content: [
      './src/sass/**/*.sass',
      './src/**/*.html',
    ]
  },
  future: {
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        gendra: {
          'primary': '#002B37',
          'secondary': '#00A8B4',
          'text-strong': '#878787',
          'text-light': '#B2B2B2',
        }
      },
      fontFamily: {
        'header': "'Heebo', sans-serif",
        'sans': "'Nunito', serif"
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}