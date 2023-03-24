const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './frontend/index.js',
  output: {
    // publicPath: 'dist',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
    // clean: true
  },
  target: 'web',
  devServer: {
    static: './dist'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env'
            ]
          }
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "development",
      template: './index.html'
    })
  ],
  // optimization: {
  //   runtimeChunk: 'single',
  // }
};