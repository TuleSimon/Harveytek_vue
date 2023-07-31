/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
    ],
  theme: {
    extend: {
      colors: {
        background: {
          100: "#151517",
        },
        border: {
          100 :"#232324"
        },
        accent:{
          100:"#1A8EFF",
          200:"#2D99FF"
        },
        alert:{
          100:"#FF6640"
        },
        surface:{
          100:"#202123"
        },
        body:{
          300:"#9E9E9E",
          200:"#E8E8E8",
        }
      },
    },
  },
  plugins: [],
}

