
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        primary:'#C7A87D',
        textColor:'#3A3D3F',
        borderColor:'#1B3A57',
      }
    }, // Customize the default Tailwind theme if needed
  },
  plugins: [],
};
