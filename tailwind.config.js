/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dotted-circle":
          'url("/src/assets/images/whyChooseUs/dottedCircle.svg")',
        "dotted-line": 'url("/src/assets/images/whyChooseUs/dottedLine.svg")',
      },
    },
  },
  plugins: [],
};
