/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
<<<<<<< HEAD
      backgroundImage: (theme) => ({
        'primary': `linear-gradient(to top,#3EB489,#00E18F})`,
      }),
      colors:{
        light:"#F1F1F1",
      }
=======
      colors: {
        primary: '#1E3A8A',
        secondary: '#E0E0E0', 
      },
>>>>>>> 779bb7ab30c1a041d4108929311aa9b19b1c46db
    },
  },
  plugins: [],
}