const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  SRC: path.join(__dirname, 'src'),
  DEST: path.join(__dirname, 'dist'),
};

module.exports = () => {
  // Base set of plugins.
  const plugins = [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      inject: false,
      appMountId: 'app',
    }),
  ];

  return {
    mode: process.env.NODE_ENV,

    entry: path.join(PATHS.SRC, 'pages', 'index'),

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          loader: 'file-loader',
        },
        {
          test: /\.svg$/,
          loader: 'raw-loader',
        },
      ],
    },

    devServer: {
      contentBase: PATHS.DEST,
      compress: true,
      open: false,
      port: 8080,
      clientLogLevel: 'warning',
      stats: 'errors-only',
    },

    plugins,
  };
};
