/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"','sans-serif'],
        Jakarta: ['"Plus Jakarta Sans"','sans-serif'],
      },
    },
  },
  plugins: [],
}

