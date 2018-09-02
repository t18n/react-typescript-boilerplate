const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
          loader: 'babel-loader',
          // options: {
          //   presets: [
          //     // Not compile our ES6 modules to CommonJs modules.
          //     // Allow ES6 imports/exports to do tree-shaking
          //     [
          //       "es2015", { 
          //         "modules": false 
          //     }]
          //   ]
          // }
        }
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

    new CopyWebpackPlugin([
      { from: 'src/assets/images', to: 'assets/images' },
      { from: 'src/assets/photos', to: 'assets/photos' }
    ]),
  ]
}