module.exports = {
  important: false,
  theme: {
    extend: {
      margin: {
        96: '24rem',
        128: '32rem',
      },
    },
    colors: {
      black: '#000',
      white: '#fff',

      'gray-900': '#3d3d3d',

      primary: '#37b57b',
      secondary: '#695b8e',
      accent: '#ba95e8',
    },
    fontFamily: {
      body: ['Open Sans', 'sans-serif'],
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      bold: '700',
    },
    screens: {
      sm: { max: '639px' },
      md: { max: '767px' },
      lg: { max: '1023px' },
      xl: { max: '1279px' },
    },
  },
  variants: {
    opacity: ['responsive', 'hover'],
  },
};
