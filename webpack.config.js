const path = require('path')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react'],
          plugins: [require('babel-plugin-transform-class-properties')]
        }
      }
    ]
  }
}
module.exports = config
