const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CONSTANTS = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
};

const PATHS = {
  SRC: path.join(__dirname, 'src'),
  DEST: path.join(__dirname, 'dist'),
};

module.exports = () => {
  // Determine if running in production or development.
  const isProduction = process.env.NODE_ENV === CONSTANTS.PRODUCTION;

  // Base set of plugins.
  const plugins = [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      inject: false,
      appMountId: 'app',
      title: 'Jon Balon - Modern JavaScript Developer',
    }),
  ];

  // Base optimization.
  const optimization = {};

  // Create vendor bundle chunk.
  if (isProduction) {
    optimization.splitChunks = {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    };
  }

  return {
    mode: process.env.NODE_ENV,

    entry: {
      index: path.join(PATHS.SRC, 'pages', 'index'),
    },

    output: {
      filename: '[name].bundle.js',
      path: path.join(PATHS.DEST),
    },

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
          options: {
            name: `[folder]/[name].${new Date().getTime()}.[ext]`,
          },
        },
        {
          test: /\.svg$/,
          loader: 'raw-loader',
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
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

    optimization,
  };
};
