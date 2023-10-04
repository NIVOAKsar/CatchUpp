/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {}
    },
    plugins: [],
    corePlugins: {
        preflight: false // make sure tailwind default overrides won't work
    }
};
