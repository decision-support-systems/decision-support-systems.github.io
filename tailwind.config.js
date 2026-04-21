/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5f7386',
        'secondary': '#cabed8',
      },
      fontFamily: {
        'sans': ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        'display': ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
