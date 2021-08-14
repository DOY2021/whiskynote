const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    publicPath: 'http://locallhost:3000/',
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api/': {
        target: 'http://127.0.0.1:8000',
      },
    },
  },
};

module.exports = merge(common, config);
