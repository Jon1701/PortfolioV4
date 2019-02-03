const path = require('path');

const PATHS = {
  SRC: path.join(__dirname, 'src'),
}

const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: path.join(PATHS.SRC, 'pages', 'index'),
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ],
  },
}

module.exports = webpackConfig;