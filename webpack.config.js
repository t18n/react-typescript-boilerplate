const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    main: ['babel-polyfill', './src/index.js'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js'
  },
  resolve: {
    alias: {
      Assets: path.resolve('src/assets/')
    }
  },
  module: {
    rules: [{
        test: /\.js$/, // The regular expression to take all .js* files for Babel to compile
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000,
          },
        },
      }
    ],
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
}