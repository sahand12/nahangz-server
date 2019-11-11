const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',

  // see here: https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334
  node: {
    __dirname: false,
    __filename: false
  },
  externals: [nodeExternals()], // Need this to avoid error when working with Express

  entry: {
    server: './src/index.js'
  },
  output: {
    filename: 'server.js',
    path: path.join(__dirname, 'dist')
    // publicPath: '/'
    // libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          failOnError: false,
          failOnWarning: false
        }
      },
      { test: /\.js$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ }
    ]
  }
};
