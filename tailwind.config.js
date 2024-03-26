/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dotted-circle":
          'url("/src/assets/images/whyChooseUs/dottedCircle.svg")',
        "dotted-line": 'url("/src/assets/images/whyChooseUs/dottedLine.svg")',
        "dotted-half-circle": 'url("/src/assets/images/software/dottedHalfCircle.svg")',
        "bin-blue":
          'url("/src/assets/images/Industries/bin.svg")',
        "bin-white":
          'url("/src/assets/images/Industries/bin_white.svg")',
        "container-blue": 'url("/src/assets/images/Industries/container.svg")',
        "container-white":
          'url("/src/assets/images/Industries/container_white.svg")',
        "silo-blue": 'url("/src/assets/images/Industries/silo.svg")',
        "silo-white": 'url("/src/assets/images/Industries/silo_white.svg")',
        "factory-blue": 'url("/src/assets/images/Industries/factory.svg")',
        "factory-white":
        'url("/src/assets/images/Industries/factory_white.svg")',
        "liquid-blue": 'url("/src/assets/images/Industries/liquids.svg")',
        "liquid-white": 'url("/src/assets/images/Industries/liquids_white.svg")',
        "theme_park-blue": 'url("/src/assets/images/Industries/theme_park.svg")',
        "theme_park-white": 'url("/src/assets/images/Industries/theme_park_white.svg")',
        "call-to-action": 'url("/src/assets/images/callToAction/cta_bg.svg")',
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
