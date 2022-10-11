const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}'
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        h1: [
          '75px',
          {
            lineHeight: '80px',
            letterSpacing: '0.003em',
            fontWeight: '600'
          }
        ],
        'h1-m': [
          '40px',
          {
            lineHeight: '50px',
            letterSpacing: '0.003em',
            fontWeight: '600'
          }
        ],
        h2: [
          '45px',
          {
            lineHeight: '50px',
            letterSpacing: '0.003em',
            fontWeight: '600'
          }
        ],
        'h2-m': [
          '34px',
          {
            lineHeight: '40px',
            letterSpacing: '0.003em',
            fontWeight: '600'
          }
        ]
      }
    }
  },
  plugins: []
}
