const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const common = require("./webpack.common");

const config = {
  mode: "production",
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'js/main.[hash].js',
    publicPath: './',
  },

  plugins: [new CleanWebpackPlugin()],
};

module.exports = merge(common, config);
