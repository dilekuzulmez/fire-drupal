const isProduction = process.env.NODE_ENV === 'production';

// prettier-ignore
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('tailwindcss'),
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'focus-within-pseudo-class': false
      }
    }),
    isProduction ? require('cssnano')({
      preset: 'default',
    }) : null,
  ]
};
