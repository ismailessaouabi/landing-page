/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ajoute ce chemin pour détecter les fichiers React
  ],
  theme: {
    extend: {
      backgroundColor :{
        polor : '#fcede6'
      }
    },
   
    
  },
  plugins: [],
};
