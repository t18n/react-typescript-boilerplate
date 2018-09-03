const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');


module.exports = merge(baseConfig, {

  // Define Build output
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[chunkhash].bundle.js'
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

    // Create an interactive treemap visualization of the contents of all your bundles
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // In static mode single HTML file with bundle report will be generated
      openAnalyzer: true, // Automatically open report in default browser.
      reportFilename: "report/dist.report.html",
      generateStatsFile: true,
      statsFilename: "report/dist.stats.json",
    }),

    // Compress
    new CompressionPlugin({
      asset: "compressed/[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],

  optimization: {
    
    // Extract common dependencies into an existing entry chunk or an entirely new chunk
    // Code Splitting
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        utilities: {
          test: /[\\/]src[\\/]utilities[\\/]/,
          minSize: 0
        }
      }
    },

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
        uglifyOptions: {
          output: {
            comments: false,
            beautify: false,
          },
          compress: true,
        },
        cache: true,
        sourceMap: false,
      }),

    ]
  }
});