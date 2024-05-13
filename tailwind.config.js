/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.jsx','node_modules/preline/dist/*.jsx'],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
}
