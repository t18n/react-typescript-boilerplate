const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default

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

      // Encode imgs files using the Base64 encoding. 
      // Keep limits below 25kb
      // Example: Logo
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: {
          loader: "url-loader",
          options: {
            // Images larger than 25 KB won’t be inlined
            limit: 100 * 1024
          },
        },
      },

      // Encode svg files using the URL encoding
      // Keep limits below 15kb
      // Example: Error page
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          limit: 100 * 1024,
          noquotes: true,
        }
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

    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      cacheFolder: path.resolve('dist/assets/img-cached'),
    })

  ]
}