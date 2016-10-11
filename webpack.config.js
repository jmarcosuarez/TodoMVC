var webpack = require('webpack'); //  require the webpack lib

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // Setting the URL for the hot reload
    'webpack/hot/only-dev-server', // Reload only the dev server
    './src/index.js',
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: __dirname + './dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true, // Activate hot loading
  },
  eslint: {
    configFile: './.eslintrc',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Wire in the hot replacement plugin
  ],
};
