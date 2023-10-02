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
        logoText:'#800000',
        btnBg:'#FC7300',
        navText:'#FC7300'
      }
    },
  },
  plugins: [],
}

