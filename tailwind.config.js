/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dotted-circle":
          'url("/src/assets/images/whyChooseUs/dottedCircle.svg")',
        "dotted-line": 'url("/src/assets/images/whyChooseUs/dottedLine.svg")',
        "government-blue":
          'url("/src/assets/images/Industries/government.svg")',
        "government-white":
          'url("/src/assets/images/Industries/government_white.svg")',
        "collector-blue": 'url("/src/assets/images/Industries/collector.svg")',
        "collector-white":
          'url("/src/assets/images/Industries/collector_white.svg")',
        "park-blue": 'url("/src/assets/images/Industries/park.svg")',
        "park-white": 'url("/src/assets/images/Industries/park_white.svg")',
        "airport-blue": 'url("/src/assets/images/Industries/airport.svg")',
        "airport-white":
          'url("/src/assets/images/Industries/airport_white.svg")',
        "glass-blue": 'url("/src/assets/images/Industries/glass.svg")',
        // "glass-white": 'url("/src/assets/images/Industries/glass_white.svg")',
      },
      boxShadow: {
        "around": "0 0 20px 1px rgba(0, 0, 0, 0.25)",
      },
      objectPosition: {
        'center-right': '80% 50%',
      }
    },
  },
  plugins: [],
};
