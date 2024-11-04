/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'nav':'#363A45',
        'bg-nav':'#F7F7F7',
        'nayti':'#DADCDC',
        'yashil':'#00C65E',
      }
    },
  },
  plugins: [],
}