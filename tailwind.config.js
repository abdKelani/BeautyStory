module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
        '1.25': '1.25'
      },  
      fontFamily: {
        ibm: ['IBM Plex Sans Arabic'],
        pingLight: ['pingLight', ],
        pingRegular: ['pingRegular'],
        pingMedium: ['pingMedium'],
        pingBold: ['pingBold']

      },
      colors: {
        yl: '#FFBE00',
        blk: '#222222',
        gr: '#5E5E5E',
        background: '#F2F2F2',
      },
      height: {
        screen8: '87vh'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    spacing: {
      'page-container': '4.3rem',
      'card-margine': '15px',
      '120': '30rem',
      '130': '33rem',
      '37rem': '37rem',
      '939': '58rem',
      '722': '45rem',
      '345': '21rem',
      '440': '27.5rem',
      '85': '85rem',
      '168': '168rem',
      '35rem': '35rem',
      '40rem': '40rem',
      '50rem': '50rem',
      '47rem': '47rem',
      '60rem': '60rem',
      '80rem': '80rem',
      600: '30rem',
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      13: '3.25rem',
      14: '3.5rem',
      16: '4rem',
      18: '4.5rem',
      20: '5rem',
      22: '5.5rem',
      23: '5.75rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      34: '8.5rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      76: '19.5rem',
      80: '20rem',
      96: '24rem',
      '9/10': '90%',
      '7/10': '70%',
      '7.3/10': '73%',
      '3/10': '30%',
      '3.55/10': '35.5%',
      '6/10': '60%',
      '4/10': '40%',
      '9.5/10': '95%',
      '8.7/10': '87%',
      '1.8/10': '18%',
      '4.3/10': '43%'
      
    },
  },
  
  plugins: [
    require('tailwind-scrollbar-hide'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '1300px',
          },
          
        }
      })
    }
  ],
}
