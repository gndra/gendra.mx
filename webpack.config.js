const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require("copy-webpack-plugin")
const Dotenv = require('dotenv-webpack')
const webpack = require('webpack')

module.exports = {
  entry: [
    path.resolve(__dirname, 'src', 'main.css'),
    path.resolve(__dirname, 'src', 'app.js')
  ],
  output: {
    publicPath: '',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ],
      },
      {
        test: /\.(svg|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
  },
  plugins: [
    process.env.NODE_ENV === 'production' ? new webpack.EnvironmentPlugin(['API_URL', 'RECAPTCHA_SITE_KEY']) : new Dotenv(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: "public" }
      ],
    }),
],
}