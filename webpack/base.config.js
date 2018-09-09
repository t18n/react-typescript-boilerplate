const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
  entry: {
    main: [
      // '@babel/polyfill',
      './src/index.js'],
  },
  resolve: {
    alias: {
      Assets: path.resolve('src/assets/'),
      Sass: path.resolve('src/sass/'),
      Includes: path.resolve('src/includes/'),
      Components: path.resolve('src/components/'),
      Containers: path.resolve('src/containers/'),
    },
  },
  module: {
    rules: [

      // The regular expression to take all .js* files for Babel to compile
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              // Not compile our ES6 modules to CommonJs modules.
              // Allow ES6 imports/exports to do tree-shaking
              [
                '@babel/preset-env', {
                  modules: false,
                }],
            ],
          },
        },
      },

      // Encode imgs files using the Base64 encoding.
      // Keep limits below 25kb
      // Example: Logo
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            // Images larger than 25 KB won’t be inlined
            limit: 100 * 1024,
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
        },
      },

    ],
  },
  plugins: [

    // Initiate html template
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    // Copy all assets to dist folder
    new CopyWebpackPlugin([
      { from: 'src/assets/images', to: 'assets/images' },
      { from: 'src/assets/photos', to: 'assets/photos' },
      { from: 'src/config/sitemap.xml', to: 'sitemap.xml' },
      { from: 'src/config/robots.txt', to: 'robots.txt' },
    ]),

    // Optimmize images
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      include: [
        path.resolve(__dirname, 'dist/assets'),
      ],
      cacheFolder: path.resolve('dist/assets/img-cached'),
      optipng: { optimizationLevel: 7 },
      gifsicle: { optimizationLevel: 3 },
      pngquant: { quality: '65-70', speed: 4 },
      svgo: { removeViewBox: false },
      jpegtran: null,
      plugins: [imageminMozjpeg({ quality: 50 })],
    }),

  ],
};
