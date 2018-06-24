const webpack = require('webpack');
const path = require('path');

const endPath = path.resolve(__dirname, 'public');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.json', '.css', '.scss'],
    alias: {
      '@app': path.resolve(__dirname, 'src'),
    },
  },
  cache: true,
  entry: [
    'react-hot-loader/patch', // Activa Hot Module Reloading HMR para React
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server',
    './src/index.jsx',
  ],
  output: {
    path: endPath,
    filename: 'app.js',
    publicPath: '/', // Necesario para el Hot-Reloading
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: '/node_modules/',
        use: 'babel-loader',
      },
      {
        test: /.json$/,
        use: 'json-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: endPath,
    inline: true,
    compress: true,
    port: 9000,
    publicPath: '/',
  },
};
