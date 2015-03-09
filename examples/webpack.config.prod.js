var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: {
    main: path.join(__dirname, 'index.js')
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel?blacklist[]=react', exclude: /node_modules/},
      {test: /\.jsx$/, loaders: ['imports?React=react', 'react-hot', 'babel']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')},
      {test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!less')}
    ]
  },
  output: {
    chunkFilename: 'js/[name].js?[chunkhash]',
    filename: 'js/[name].js?[chunkhash]',
    path: path.join(__dirname, '../dist/examples')
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('css/[name].css?[contenthash]')
  ],
  resolve: {
    alias: {
      'react-famous': path.join(__dirname, '../src'),
      'react-router': 'react-router/build/npm'
    },
    extensions: [
      '',
      '.js',
      '.jsx'
    ],
    root: __dirname
  }
};
