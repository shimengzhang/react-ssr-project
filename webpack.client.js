const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const clientConfig = {
  mode: 'development',
  watch: true,
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
          },
        }],
      },
    ],
  },
};

module.exports = merge(baseConfig, clientConfig);
