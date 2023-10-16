/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      textColor: {
        'sage' : '#555843',
        'creame' : '#F8F4EA',
        'red' : '#D80032',
        'grey' : '#393E46'
      },
      fontFamily: {
        poppins : ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        'sage' : '#555843',
        'creame' : '#F8F4EA',
        'red' : '#D80032'
      },
      borderColor: {
        'sage': '#555843'
      },
    },
  },
  plugins: [],
}

