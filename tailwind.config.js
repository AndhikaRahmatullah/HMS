module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'a': ['Titan One', 'cursive'],
        'b': ['Lora', 'serif']
      },
    },
    plugins: [
      require('tw-elements/dist/plugin')
    ],
  }
}
