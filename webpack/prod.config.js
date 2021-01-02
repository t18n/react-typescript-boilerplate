const { merge } = require('webpack-merge');
const path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // eslint-disable-line
const CompressionPlugin = require('compression-webpack-plugin');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  // Define Build output
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[chunkhash].bundle.js',
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
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              sourceMap: true,
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

    // Create an interactive treemap visualization of the contents of all your bundles
    new BundleAnalyzerPlugin({
      analyzerMode: 'static', // In static mode single HTML file with bundle report will be generated
      openAnalyzer: true, // Automatically open report in default browser.
      reportFilename: 'report/report.html',
      generateStatsFile: true,
      statsFilename: 'report/stats.json',
    }),

    // Compress
    new CompressionPlugin({
      test: /\.js$|\.css$|\.html$/,
      deleteOriginalAssets: false,
      algorithm: 'gzip',
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],

  optimization: {

    // Extract common dependencies into an existing entry chunk or an entirely new chunk
    // Code Splitting
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        utilities: {
          test: /[\\/]src[\\/]utilities[\\/]/,
          minSize: 0,
        },
      },
    },

    minimizer: [
      // Minify CSS
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),

      // Miniffy JS
      // new UglifyJsPlugin({
      //   uglifyOptions: {
      //     output: {
      //       comments: false,
      //       beautify: false,
      //     },
      //     compress: true,
      //   },
      //   cache: true,
      //   sourceMap: false,
      // }),

    ],
  },
});
