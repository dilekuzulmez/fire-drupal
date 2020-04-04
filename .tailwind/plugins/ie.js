const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addVariant, e, postcss }) {
  addVariant('ie', ({ container, separator }) => {
    const supportsRule = postcss.atRule({ name: 'media', params: 'all and (-ms-high-contrast: none), (-ms-high-contrast: active)' });
    supportsRule.append(container.nodes);
    container.append(supportsRule);
    supportsRule.walkRules((rule) => {
      rule.selector = `.${e(`ie${separator}${rule.selector.slice(1)}`)}`;
      rule.walkDecls((decl) => {
        decl.important = true;
      });
    });
  });
});
