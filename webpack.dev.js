'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;

const rootDir = path.resolve(__dirname);

module.exports = {
  devServer: {
    contentBase: path.resolve(rootDir, 'build'),
    port: 9000
  },
  devtool: 'source-map',
  entry: {
    app: [ path.resolve(rootDir, 'src', 'bootstrap') ],
    vendor: [ path.resolve(rootDir, 'src', 'vendor') ]
  },
  module: {
    loaders: [
      { loader: 'raw-loader', test: /\.(css|html)$/ },
      { exclude: /node_modules/, loader: 'ts-loader', test: /\.ts$/ }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(rootDir, 'build')
  },
  plugins: [
    new ChunkWebpack({
      filename: 'vendor.bundle.js',
      minChunks: Infinity,
      name: 'vendor'
    }),
    new HtmlWebpack({
      filename: 'index.html',
      inject: 'body',
      template: path.resolve(rootDir, 'src', 'app.html')
    })
  ],
  resolve: {
    extensions: [ '.js', '.ts' ]
  }
};
