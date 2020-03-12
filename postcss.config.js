const isProduction = process.env.NODE_ENV === 'production';
const purgecss = require('@fullhuman/postcss-purgecss');
const FireConfig = require('./fire.config');

// prettier-ignore
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('tailwindcss'),
    require('postcss-preset-env')({ stage: 1 }),
    isProduction ? require('cssnano')({
      preset: 'default',
    }) : null,
    isProduction ? purgecss({
      content: ['./**/*.twig'],
      whitelist: FireConfig.SELECTOR_WHITELIST
    }) : null
  ]
};
