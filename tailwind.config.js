/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  corePlugins: {
    preflight: false // make sure tailwind default overrides won't work
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light']
  }
};
