module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    // I want to override the color value of `yellow-500`
    // colors: {
    //   "yellow-500": "#FFF",
    // },
    // I want add a value in colors
    // extend: {
    //   colors: {
    //     // I had the `yellow-501` color
    //     "yellow-501": "#000",
    //   },
    // },
  },
  variants: {
    // Not useful with the JIT compiler
    extend: {},
  },
  plugins: [],
}
