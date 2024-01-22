/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'inter':('Inter','sans-serif'),
        'Konexy-Personal':('KonexyPersonalUse'),
        'Gilroy':('Gilroy')
      }
    },
  },
  plugins: [],
}

