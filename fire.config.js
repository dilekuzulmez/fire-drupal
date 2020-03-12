const path = require('path');

module.exports = {
  PROXY_URL: 'http://fire.fire',
  DEFAULT_PORT: 3000,

  ASSET_PATH: path.resolve(__dirname, './assets'),
  DESTINATION_PATH: path.resolve(__dirname, './dist'),

  PURGE_CSS_WHITELIST: [
    'block-fire-local-tasks',
    'user-login-form',

    // desktop gaps
    'mt-gap-0',
    'mt-gap-xs',
    'mt-gap-sm',
    'mt-gap-md',
    'mt-gap-lg',
    'mt-gap-xl',
    'mb-gap-0',
    'mb-gap-xs',
    'mb-gap-sm',
    'mb-gap-md',
    'mb-gap-lg',
    'mb-gap-xl',

    // tablet gaps
    'md:mt-gap-0',
    'md:mt-gap-xs',
    'md:mt-gap-sm',
    'md:mt-gap-md',
    'md:mt-gap-lg',
    'md:mt-gap-xl',
    'md:mb-gap-0',
    'md:mb-gap-xs',
    'md:mb-gap-sm',
    'md:mb-gap-md',
    'md:mb-gap-lg',
    'md:mb-gap-xl',

    // mobile gaps
    'sm:mt-gap-0',
    'sm:mt-gap-xs',
    'sm:mt-gap-sm',
    'sm:mt-gap-md',
    'sm:mt-gap-lg',
    'sm:mt-gap-xl',
    'sm:mb-gap-0',
    'sm:mb-gap-xs',
    'sm:mb-gap-sm',
    'sm:mb-gap-md',
    'sm:mb-gap-lg',
    'sm:mb-gap-xl',

    // wizzy editor
    'text-align-center',
    'text-align-left',
    'text-align-right',
  ],
};
