const plugin = require('tailwindcss/plugin');
const _ = require('lodash');
const colorShades = require('../utilities/color-shades');

module.exports = plugin(function({ addUtilities, config, e }) {
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
});
