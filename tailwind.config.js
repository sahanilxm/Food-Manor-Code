/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors:{
        itemBg:'#FFFFED',
        restaurantBg: '#F5F5F5',
        userText:'#800000',
        btnBg:'#FC7300',
        navText:'#FC7300'
      },
      fontFamily: {
        logoFont: ['Lobster Two', 'cursive'],
        navFont: ['Archivo Narrow', 'sans-serif'],
        restaurantFont : ['Asap Condensed', 'sans-serif'],
        itemFont: ['Patrick Hand', 'cursive']
      }
    },
  },
  plugins: [],
}

