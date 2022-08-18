/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    screens : {
      "xs" : "375px",
      "xl" : "1440px"
    },
    extend: {
      fontSize : {
        "para" : "18px"
      },
      colors : {
        "soft_blue" : "hsl(215, 51%, 70%)",
        "cyan" : "hsl(178, 100%, 50%)",
        "main_bg" : "hsl(217, 54%, 11%)",
        "card_bg" : "hsl(216, 50%, 16%)",
        "hr" : "hsl(215, 32%, 27%)",
        "white" : "hsl(0, 0%, 100%)"
      }
    },
  },
  plugins: [],
}
