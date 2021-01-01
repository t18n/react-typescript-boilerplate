const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
  entry: {
    main: ['./src/index.tsx'],
  },
  resolve: {
    alias: {
      src: path.resolve('src'),
    },
  },
  module: {
    rules: [
      // The regular expression to take all .js* files for Babel to compile
      {
        test: /\.(t|j)sx?$/,
        use: { loader: 'awesome-typescript-loader' },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },

      // Encode imgs files using the Base64 encoding.
      // Keep limits below 25kb
      // Example: Logo
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100 * 1024, // Images larger than 25 KB won’t be inlined
            esModule: false,
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
    // Clean bundle
    new CleanWebpackPlugin(),

    // Initiate html template
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    // Copy all assets to dist folder
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/images', to: 'assets/images' },
        { from: 'src/assets/photos', to: 'assets/photos' },
        { from: 'src/config/sitemap.xml', to: 'sitemap.xml' },
        { from: 'src/config/robots.txt', to: 'robots.txt' },
      ],
    }),

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
