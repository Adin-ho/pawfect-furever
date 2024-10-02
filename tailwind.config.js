/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {

      colors: {
        'textTittle' : '#570F29',
        'textParagraph' : '#7C1A3E',
        'backgroundColor' : '#F8EDE3',
        'footerColor' : '#EBE3D5',
        'Orange/70' : '#C5705D',
        'Orange/20' : '#EEC6A1',
        'Orange/10' : '#FF8A8A',
        'Green/10' : '#BDD2B6',
        'Green/40' : '#A2B29F',
        'Green/70' : '#798777',
        'statusGrooming' : '#FFE500',
        'statusSelesai' : '#61FF00',
        'statusOntheway' : '#FF7A00',
        'white' : '#ffffff',
        'black' : '#000000',
      },

      fontSize: {
        'heroTittle/Bold' : ['100px', '1'],
        'Header1' : ['70px', '1'],
        'Header2' : ['40px', '1'],
        'Header3' : ['30px', '36px'],
        'Header4' : ['25px', '32px'],
        'Large' : ['20px', '28px'],
        'Base' : ['16px', '24px'],
        'small' : ['12px', '16px'],
        
      },

      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'Quicksand': ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}