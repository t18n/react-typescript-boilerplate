const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['babel-polyfill', './src/index.js'],
  },
  resolve: {
    alias: {
      Assets: path.resolve('src/assets/'),
      Components: path.resolve('src/components/'),
      Containers: path.resolve('src/containers/'),
    }
  },
  module: {
    rules: [

      // The regular expression to take all .js* files for Babel to compile
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      // Compile Styles
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
            limit: 100000,
          },
        },
      }

    ],
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