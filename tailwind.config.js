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
        'gradient-hero-1':'background: linear-gradient(228.84deg, #00C65E 26.24%, rgba(0, 198, 94, 0) 91.23%);',
        'gradient-hero-2':'background: linear-gradient(224.65deg, #FFFFFF 25.5%, #00C65E 72.75%);',
        'gradient-hero-3':'background: linear-gradient(57.7deg, #FBB762 -8.8%, rgba(255, 255, 255, 0.54) 63.05%);',
        'gradient-hero-4':'background: conic-gradient(from 141deg at 66.28% 59.34%, #FFB762 -167.23deg, rgba(255, 255, 255, 0.22) 11.82deg, #FFB762 192.77deg, rgba(255, 255, 255, 0.22) 371.82deg);'
      },
    },
  },
  plugins: [],
}