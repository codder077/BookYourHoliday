/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
    container: {
      padding: "10rem",
    },
  },
  plugins: [],
}
