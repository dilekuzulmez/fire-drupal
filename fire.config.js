const path = require('path');

module.exports = {
  PROXY_URL: 'http://fire.fire',
  DEFAULT_PORT: 3000,

  ASSET_PATH: path.resolve(__dirname, './assets'),
  DESTINATION_PATH: path.resolve(__dirname, './dist'),

  PURGE_CSS_WHITELIST: [
    'block-fire-local-tasks',
    'user-login-form',

    // headings
    'display-1',
    'display-2',
    'display-3',
    'display-4',
    'display-5',
    'display-6',
    'heading-1',
    'heading-2',
    'heading-3',
    'heading-4',
    'heading-5',
    'heading-6',

    // ckeditor styles
    'cke_editable',

    // forms
    'form-textarea',
  ],
  PURGE_CSS_WHITELIST_PATTERNS: [/slick/, /status-messages/, /aspect-ratio-/, /webform/, /admin-toolbar-visible/, /gap/, /link/, /button/],
  PURGE_CSS_WHITELIST_PATTERNS_CHILDREN: [/wizzy$/, /slick/, /status-messages/, /fire-editor/, /webform/, /admin-toolbar-visible/, /is-ie11/, /site-header/],
};
