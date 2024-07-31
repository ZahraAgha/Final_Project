

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
      button: {
        'base': 'border-2 px-12 py-3 transition duration-300 ease-in-out',
        'primary': 'border-black hover:bg-black hover:text-white'
      },
      height: {
        '60vh': '60vh',
      }


    },
  },
  plugins: [],
}