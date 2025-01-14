/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'dotted-circle':
          'url("/src/assets/images/whyChooseUs/dottedCircle.svg")',
        'dotted-line': 'url("/src/assets/images/whyChooseUs/dottedLine.svg")',
        'dotted-half-circle':
          'url("/src/assets/images/software/benefits/dotted_half_circle.png")',
        'call-to-action': 'url("/src/assets/images/callToAction/cta_bg.svg")',
      },
      boxShadow: {
        around: '0 0 20px 1px rgba(0, 0, 0, 0.25)',
      },
      objectPosition: {
        'center-right': '80% 50%',
      },
      fontFamily: {
        sans: ['Poppins'],
      },
    },
  },
  plugins: [],
};
