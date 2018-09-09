const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./base.config.js');


// TODO: Add Lazy Loading, Optimize code splitting, Split chunks

module.exports = merge(baseConfig, {
  // devtool: 'eval-source-map',

  module: {
    rules: [

      // Compile Styles
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // If enable CSS Modular, hence hashing classNames
              modules: true,
              localIdentName: '[local]',
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },

    ],
  },

  plugins: [
    // Export CSS
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],

  // Turn off performance hints during development
  performance: {
    hints: false,
  },

});
