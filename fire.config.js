const path = require('path');

module.exports = {
  PROXY_URL: 'http://fire.fire',
  DEFAULT_PORT: 3000,

  ASSET_PATH: path.resolve(__dirname, './assets'),
  DESTINATION_PATH: path.resolve(__dirname, './dist'),

  PURGE_CSS_WHITELIST: ['cke_editable'],
  PURGE_CSS_WHITELIST_PATTERNS: [/slick/, /aspect-ratio-/, /webform/, /admin-toolbar-visible/, /gap/],
  PURGE_CSS_WHITELIST_PATTERNS_CHILDREN: [/slick/, /fire-editor/, /webform/, /admin-toolbar-visible/, /is-ie11/],
};
