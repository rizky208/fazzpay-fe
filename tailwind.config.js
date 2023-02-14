/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/bg1.png')",
      },
    },
  },
  // plugins: [require("daisyui")],
  plugins: [],
};
