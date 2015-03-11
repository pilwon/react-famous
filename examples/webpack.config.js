var path = require('path');

var webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: {
    main: path.join(__dirname, 'index.js')
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel?blacklist[]=react', exclude: /node_modules/},
      {test: /\.jsx$/, loaders: ['react-hot', 'babel']},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.less$/, loader: 'style!css!less'}
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist/examples'),
    publicPath: '/_assets/'
  },
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
