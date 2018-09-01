const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
  // devtool: 'eval-source-map',

  module: {
    rules: [
      
      // Compile Styles
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },

    ],
  },

  plugins: [
    // Export CSS
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
  ],

});