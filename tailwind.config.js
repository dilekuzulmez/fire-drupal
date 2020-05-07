// Default Config: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js

module.exports = {
  important: false,
  theme: {
    screens: {
      smd: { max: '575px' },
      mdd: { max: '768px' },
      lgd: { max: '992px' },
      xld: { max: '1200px' },
      sm: '575px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      gray: {
        100: '#F5F5F5',
        200: '#E7E7E7',
        300: '#D8D8D8',
        400: '#BBBBBB',
        500: '#9E9E9E',
        600: '#8E8E8E',
        700: '#5F5F5F',
        800: '#474747',
        900: '#2F2F2F',
      },
      red: {
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#f56565',
        600: '#e53e3e',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a',
      },
      green: {
        100: '#f0fff4',
        200: '#c6f6d5',
        300: '#9ae6b4',
        400: '#68d391',
        500: '#48bb78',
        600: '#38a169',
        700: '#2f855a',
        800: '#276749',
        900: '#22543d',
      },

      primary: {
        100: '#EBF8F2',
        200: '#CDEDDE',
        300: '#AFE1CA',
        400: '#73CBA3',
        500: '#37B57B',
        600: '#32A36F',
        700: '#216D4A',
        800: '#195137',
        900: '#113625',
      },
      secondary: {
        100: '#F0EFF4',
        200: '#DAD6E3',
        300: '#C3BDD2',
        400: '#968CB0',
        500: '#695B8E',
        600: '#5F5280',
        700: '#3F3755',
        800: '#2F2940',
        900: '#201B2B',
      },
      accent: {
        100: '#F8F4FD',
        200: '#EEE5F9',
        300: '#E3D5F6',
        400: '#CFB5EF',
        500: '#BA95E8',
        600: '#A786D1',
        700: '#70598B',
        800: '#544368',
        900: '#382D46',
      },
    },
    boxShadow: {
      none: 'none',
      500: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    cursor: {
      default: 'default',
      pointer: 'pointer',
      'not-allowed': 'not-allowed',
      move: 'move',
    },
    fontFamily: {
      body: ['Open Sans', 'Arial', 'sans-serif'],
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      bold: '700',
    },
    fontSize: {
      xs: ['0.75rem', '1rem'], // 12px
      sm: ['0.875rem', '1rem'], // 14px
      base: ['1rem', '1.25rem'], // 16px
      lg: ['1.125rem', '1.5rem'], // 18px
      xl: ['1.25rem', '1.5rem'], // 20px
      '2xl': ['1.5rem', '1.75rem'], // 24px
      '3xl': ['1.625rem', '1.75rem'], // 26px
      '4xl': ['1.75rem', '2.125rem'], // 28px,
      '5xl': ['2.125rem', '2.5rem'], // 34px
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '21/9': [21, 9],
      '16/9': [16, 9],
      '16/5': [16, 5],
      '4/3': [4, 3],
      '5/3': [5, 3],
      '5/4': [5, 4],
      '4/5': [4, 5],
      '3/2': [3, 2],
      '3/4': [3, 4],
    },
    filter: {
      none: 'none',
    },
    backdropFilter: {
      none: 'none',
    },
    extend: {
      screens: {
        ie: { raw: 'all and (-ms-high-contrast: none), (-ms-high-contrast: active)' },
      },
      spacing: {
        '13': '3.25rem',
        '14': '3.5rem',
        '17': '4.25rem',
        '18': '4.5rem',

        'gap-0': '0',
        'gap-xs': '1.25rem',
        'gap-sm': '2rem',
        'gap-md': '3rem',
        'gap-lg': '5rem',
        'gap-xl': '8rem',
      },
      maxHeight: {
        0: '0',
      },
      width: {
        unset: 'unset',
      },
      height: {
        unset: 'unset',
      },
      borderWidth: {
        1: '1px',
      },
      zIndex: {
        '-1': '-1',
      },
      opacity: {
        10: '.10',
        20: '.20',
        30: '.30',
        40: '.40',
        50: '.50',
        60: '.60',
        70: '.70',
        90: '.90',
        90: '.90',
      },
      inset: {
        full: '100%',
        '1/2': '50%',
        '-1/2': '-50%',
      },
    },
  },
  variants: {
    display: ['responsive'],
    opacity: ['responsive', 'hover', 'focus', 'focus-within', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    maxHeight: ['responsive', 'hover', 'focus', 'group-hover'],
    aspectRatio: ['responsive'],
    width: ['responsive'],
    height: ['responsive'],
    filter: ['group-hover'],
    backdropFilter: ['group-hover'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    position: ['responsive'],
  },
  corePlugins: {},
  plugins: [require('tailwindcss-aspect-ratio'), require('tailwindcss-filters')],
};
