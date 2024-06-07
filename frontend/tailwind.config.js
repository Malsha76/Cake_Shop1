// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#49557e',
        'tomato': 'tomato',
        'lightsalmon': 'lightsalmon',
      },
    },
  },
  plugins: [],
};
