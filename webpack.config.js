const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const FireConstants = require('./fire-constants.config');

const ASSET_PATH = './assets';

module.exports = function(env = { production: false }) {
  const isProduction = env.production === true;

  console.info('Environment: ', env);

  const aliases = {
    '@global': path.resolve(__dirname, 'assets/scripts/global.js'),
    '@libs': path.resolve(__dirname, 'assets/scripts/libs'),
    '@common': path.resolve(__dirname, 'assets/scripts/common'),
    '@content': path.resolve(__dirname, 'templates/content'),
    '@block': path.resolve(__dirname, 'templates/block'),
    '@views': path.resolve(__dirname, 'templates/views'),
    '@navigation': path.resolve(__dirname, 'templates/navigation'),
    '@include': path.resolve(__dirname, 'templates/include'),
    '@page': path.resolve(__dirname, 'templates/page'),
  };

  const postCssLoader = {
    loader: 'postcss-loader',
    options: {
      parser: 'postcss-scss',
      plugins: [require('autoprefixer')(), isProduction ? require('cssnano')() : () => {}],
    },
  };

  const styleLoaders = [
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', postCssLoader, 'sass-loader'],
      }),
    },
  ];

  const fontLoaders = [
    {
      test: /\.(ttf|eot|woff|woff2)$/,
      loader: 'url-loader',
      options: { limit: 10000, name: 'fonts/[name].[ext]' },
    },
  ];

  const config = {
    mode: isProduction === true ? 'production' : 'development',
    entry: { 'bundle.css': path.resolve(__dirname, `./main.scss`), 'bundle.js': path.resolve(__dirname, `./main.js`) },
    output: { path: path.resolve(__dirname, './dist'), filename: '[name]' },
    module: { rules: [...styleLoaders, ...fontLoaders] },
    resolve: { alias: aliases },
    plugins: [
      new ExtractTextPlugin('bundle.css'),
      new CleanWebpackPlugin(path.resolve(__dirname, `${ASSET_PATH}/dist`)),
      new BrowserSyncPlugin({
        proxy: FireConstants.PROXY_URL,
        port: process.env.PORT || FireConstants.DEFAULT_PORT,
        files: [path.resolve(__dirname, '**/*.twig')],
      }),
    ],
  };

  return config;
};
