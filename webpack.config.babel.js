const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = { dev: true }) => {

  return {
    entry: {
      app: resolve('index'),
    },
    output: {
      path: resolve('dist'),
      filename: '[name]-bundle.js',
      publicPath: '/',
    },
    resolve: {
      extensions: [ '.js', '.jsx' ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve('index.tpl.html'),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: 'babel-loader',
        }
      ]
    }
  }
}