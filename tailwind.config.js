const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        accent: '#1E88E5',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
