const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const FireConstants = require('./fire-constants.config');

module.exports = function(env = { production: false }) {
  const isProduction = env.production === true;

  console.info('Environment: ', env);

  const aliases = {
    '@global': path.resolve(__dirname, 'assets/scripts/global.js'),
    '@libs': path.resolve(__dirname, 'assets/scripts/libs'),
    '@common': path.resolve(__dirname, 'assets/scripts/common'),
    '@content': path.resolve(__dirname, 'templates/content'),
    '@component': path.resolve(__dirname, 'templates/components'),
    '@block': path.resolve(__dirname, 'templates/block'),
    '@views': path.resolve(__dirname, 'templates/views'),
    '@navigation': path.resolve(__dirname, 'templates/navigation'),
    '@include': path.resolve(__dirname, 'templates/include'),
    '@page': path.resolve(__dirname, 'templates/page'),
  };

  const styleLoaders = [
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader', options: { sourceMap: true } },
          {
            loader: 'postcss-loader',
            options: {
              parser: 'postcss-scss',
              sourceMap: true,
              plugins: [require('autoprefixer')(), isProduction ? require('cssnano')() : () => {}],
            },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      }),
    },
  ];

  const scriptLoaders = [
    {
      test: /\.m?js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', { shippedProposals: true }]],
          plugins: [['@babel/plugin-proposal-object-rest-spread', { loose: true, useBuiltIns: true }]],
        },
      },
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
    output: { path: FireConstants.DESTINATION_PATH, filename: '[name]' },
    module: { rules: [...scriptLoaders, ...styleLoaders, ...fontLoaders] },
    resolve: { alias: aliases },
    devtool: 'source-map',
    plugins: [
      new ExtractTextPlugin('bundle.css'),
      new CleanWebpackPlugin(FireConstants.DESTINATION_PATH),
      new BrowserSyncPlugin(
        {
          proxy: FireConstants.PROXY_URL,
          port: process.env.PORT || FireConstants.DEFAULT_PORT,
          files: [path.resolve(__dirname, '**/*.twig')],
        },
        {
          injectCss: true,
        },
      ),
    ],
  };

  return config;
};
