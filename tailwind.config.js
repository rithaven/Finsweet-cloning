/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg-rgba': 'rgba(255, 255, 255, 0.59)',
        'bg-rgba-2':'rgba(215, 152, 225, 0.15)',
        'bg-rgba-3':'rgba(97, 153, 237, 0.26)',
        'bg-rgba-4':"rgba(255, 255, 255, 0.69)"
      },
    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}
