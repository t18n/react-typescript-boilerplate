const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(baseConfig, {

  // Define Build output
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'index.bundle.js'
  },

  module: {
    rules: [

      // Compile sass/scss and change name to hash
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // If disable CSS Modular
              modules: false,

              // If enable CSS Modular, hence hashing classNames
              // modules: true,
              // localIdentName: '[hash:base64:6]'
            }
          },
          {
            loader: 'sass-loader'
          }
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

  optimization: {
    minimizer: [
      // Minify CSS
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: [
            'default', 
            { 
              discardComments: { removeAll: true } 
            }
          ],
        }
      }),

      // Miniffy JS
      new UglifyJsPlugin({
        extractComments: true,
        cache: true
      }),
    ]
  }
});