/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 240px 200px rgba(0, 0, 0, 0.5)', // Corrected shadow value
      },
    },
  },
  plugins: [],
}

