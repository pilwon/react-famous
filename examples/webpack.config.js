var path = require('path');

var webpack = require('webpack');
// var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: {
    examples: path.join(__dirname, 'examples')
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel?blacklist[]=react', exclude: /node_modules/},
      {test: /\.jsx$/, loaders: ['imports?React=react', 'react-hot', 'babel']},
      {test: /\.css$/, loader: 'style!css'}
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist/examples'),
    publicPath: '/_assets/'
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   output: {
    //     comments: false
    //   }
    // }),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.NoErrorsPlugin(),
    // new CommonsChunkPlugin('_shared.js')
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
