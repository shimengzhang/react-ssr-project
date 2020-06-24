const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            [
              '@babel/preset-env',
              {
                targets: 'last 2 versions',
              },
            ],
          ],
          plugins: [
            [
              '@babel/plugin-transform-runtime',
              {
                absoluteRuntime: false,
                corejs: 3,
                helpers: true,
                regenerator: true,
                useESModules: false,
              },
            ],
          ],
        },
      },
    ],
  },
};
