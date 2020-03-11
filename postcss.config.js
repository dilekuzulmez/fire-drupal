const isProduction = process.env.NODE_ENV === 'production';
const purgecss = require('@fullhuman/postcss-purgecss');

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
      whitelist: ['block-fire-local-tasks', 'user-login-form']
    }) : null
  ]
};
