/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/**/*.{html,js,jsx}'
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors : {
        'monoBlack':'#2B2A2A',
      }
    },
  },
  plugins: [],
}
