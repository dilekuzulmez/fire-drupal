const isProduction = process.env.NODE_ENV === 'production';

// prettier-ignore
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({ stage: 1 }),
    isProduction ? require('cssnano')({
      preset: 'default',
    }) : null
  ]
};
