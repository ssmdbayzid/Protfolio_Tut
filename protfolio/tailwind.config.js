/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  modu:'jit',
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "deep-blue": "#010026",
        "dark-blue": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)"
      },
      backgroundImage: (theme)=> ({
        "gradiant-rainbow" : "linaer-CanvasGradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradiant-rainblue" : "linaer-CanvasGradient(90deg, #24CBFF 14.53%, #FC59FF 69.37%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair", "sans-serif"],
        opensents : ["open Sans", "sans-sharif"]
      },
      content: {
        brush :"url('./assets/brush.png",
        person1 :"url('./assets/person-1.png",
        person2 :"url('./assets/person-2.png",
        person3 :"url('./assets/person-3.png",       
      },
      screens: {
        xs:"480px",
        sm:"768px",
        md:"1060px",
      },
    }
  },
  plugins: [],
}

