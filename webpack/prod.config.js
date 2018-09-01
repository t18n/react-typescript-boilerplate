const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const path = require('path');

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(baseConfig, {

  // Define Build output
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'index.bundle.js'
  },

  module: {
    rules: [
    ],
  },

  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  }
});