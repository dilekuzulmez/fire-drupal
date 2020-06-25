const path = require('path');

module.exports = {
  PROXY_URL: 'http://fire.fire',
  DEFAULT_PORT: 3000,

  ASSET_PATH: path.resolve(__dirname, './theme/assets'),
  DESTINATION_PATH: path.resolve(__dirname, './dist'),

  WATCHED_FILES: [
    path.resolve(__dirname, './theme/**/*.html.twig'),
    path.resolve(__dirname, './theme/**/*.twig'),
    path.resolve(__dirname, './theme/**/*.js'),
    path.resolve(__dirname, './theme/**/*.css'),
  ],

  PURGE_CSS_WHITELIST: ['cke_editable'],
  PURGE_CSS_WHITELIST_PATTERNS: [/slick/, /webform/, /admin-toolbar-visible/, /gap/],
  PURGE_CSS_WHITELIST_PATTERNS_CHILDREN: [/slick/, /fire-editor/, /webform/, /admin-toolbar-visible/, /is-ie11/],
};
