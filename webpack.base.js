module.exports = {
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
