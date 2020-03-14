// Default Config: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
const plugin = require('tailwindcss/plugin');
const _ = require('lodash');
const colorShades = require('./assets/scripts/base/colorshades');

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
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
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

      primary: '#37b57b',
      secondary: '#695b8e',
      accent: '#ba95e8',
    },
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    cursor: {
      default: 'default',
      pointer: 'pointer',
      'not-allowed': 'not-allowed',
    },
    fontFamily: {
      body: [
        '"Open Sans"',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      bold: '700',
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
    },
    extend: {
      spacing: {
        'gap-0': '0',
        'gap-xs': '1.25rem',
        'gap-sm': '2rem',
        'gap-md': '3rem',
        'gap-lg': '5rem',
        'gap-xl': '8rem',
      },
    },
  },
  variants: {
    display: ['responsive', 'ie'],
  },
  corePlugins: {},
  plugins: [
    require('tailwindcss-aspect-ratio'),
    plugin(function({ addUtilities, config, e }) {
      const newUtilities = _.map(config('theme.colors'), (value, key) => {
        if (typeof value != 'string') {
          return;
        }
        const customColors = ['primary', 'secondary', 'accent'];
        if (customColors.includes(key)) {
          let lightResult = colorShades(value, 0.3);
          let darkResult = colorShades(value, -0.3);
          const newColors = config('theme.colors');
          newColors[`${key}-light`] = lightResult;
          newColors[`${key}-dark`] = darkResult;
          return;
        }
      });
      addUtilities(newUtilities);
    }),
    require('tailwind-css-variables')(
      {
        colors: 'color',
      },
      {
        // options
      }
    ),
    plugin(function({ addVariant, e, postcss }) {
      addVariant('ie', ({ container, separator }) => {
        const supportsRule = postcss.atRule({ name: 'media', params: 'all and (-ms-high-contrast: none), (-ms-high-contrast: active)' });
        supportsRule.append(container.nodes);
        container.append(supportsRule);
        supportsRule.walkRules((rule) => {
          rule.selector = `.${e(`ie${separator}${rule.selector.slice(1)}`)}`;
        });
      });
    }),
  ],
};
