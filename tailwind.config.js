/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: { 
      colors:{
      primary_orange: '#D87D4A',
      primary_orange_hovered: '#FBAF85',
      secondary_black: '#101010',
      secondary_black_hovered: '#000000',
      secondary_black_50: 'rgba(16,16,16,0.5)',
      secondary_black_25: 'rgba(16,16,16,0.25)',
      tertiary_grey: '#F1F1F1',
      tertiary_grey_outline: '#FFFFFF',
      tertiary_white: '#FAFAFA',
    },
    fontFamily: {
      heading: ['Manrope', 'sans-serif'],
    },
    fontSize: {
      'h1': ['56px', { lineHeight: '58px' }],
      'h2': ['40px', { lineHeight: '1.2' }],
      'h3': ['32px', { lineHeight: '1.2' }],
      'h4': ['28px', { lineHeight: '1.2' }],
      'h5': ['24px', { lineHeight: '1.2' }],
      'h6': ['18px', { lineHeight: '1.2' }],
      'body': ['15px', { lineHeight: '25px' }],
      'overline': ['14px', { lineHeight: '1.5' }],
      'subtitle': ['13px', { lineHeight: '1.5' }],
      'caption': ['12px', { lineHeight: '1.5' }],
    },
    fontWeight: {
      'h1': 'bold', 
      'h2': 'bold',
      'h3': 'bold',
      'h4': 'bold',
      'h5': 'bold',
      'h6': 'bold',
      'body': 'normal',
      'overline': 'normal',
      'subtitle': 'normal',
    },
    
  },
  },
  plugins: [],
}

