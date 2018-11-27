const path = require('path');

module.exports = {
  PROXY_URL: 'http://fire-theme.fire',
  DEFAULT_PORT: 3000,
  ASSET_PATH: path.resolve(__dirname, './assets'),
  DESTINATION_PATH: path.resolve(__dirname, './dist'),
};
