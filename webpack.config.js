const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const staticPath = path.join(__dirname, 'www');
const buildPath  = path.join(staticPath, 'dist');

module.exports = {
  // TODO add CSS minifier?
  // https://github.com/webpack-contrib/mini-css-extract-plugin#minimizing-for-production
  entry: {
    main: './www/app/app.js'
  },
  output: {
    path: buildPath,
    filename: '[name].js'
  },
  module: {
    rules: [
      // { test: /\.css$/, use: ['style-loader', 'css-loader'] }
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']}
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: process.env.NODE_ENV === 'production' ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js'
    }
  }
};
