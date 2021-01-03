const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'main.css'),
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(svg|png|jpg)$/i,
        use: [
          {
            loader: 'url-loader'
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              // root: path.resolve(__dirname, 'src')
            }
          }
        ]
      }
    ],
  },
  devServer: {
    hot: true,
    hotOnly: true,
    injectHot: (compilerConfig) => compilerConfig.name === 'only-include'
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
}