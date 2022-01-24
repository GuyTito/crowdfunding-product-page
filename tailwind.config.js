const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.html",],
  theme: {
    extend: {
      colors: {
        "Moderate-cyan": "hsl(176, 50%, 47%)",
        "Dark-cyan": "hsl(176, 72%, 28%)",
        "Dark-gray": "hsl(0, 0%, 48%)",
      },
      fontFamily: {
        sans : ["'Commissioner'", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "hero": "url('./images/image-hero-mobile.jpg')",
        "hero-d": "url('./images/image-hero-desktop.jpg')",
      },
    },
  },
  plugins: [],
}
