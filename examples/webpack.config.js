var fs = require('fs');
var path = require('path');

var webpack = require('webpack');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

function _getExamples() {
  return fs.readdirSync(__dirname)
    .filter(function (groupDir) {
      return fs.statSync(path.join(__dirname, groupDir)).isDirectory();
    })
    .reduce(function (result, groupDir) {
      result = result.concat(
        fs.readdirSync(path.join(__dirname, groupDir))
          .filter(function (idDir) {
            return fs.statSync(path.join(__dirname, groupDir, idDir)).isDirectory();
          })
          .map(function (idDir) {
            return {
              group: groupDir,
              id: idDir
            };
          })
      );
      return result;
    }, []);
}

module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: _getExamples().reduce(function (result, example) {
    result[example.group + '/' + example.id] = path.join(__dirname, example.group, example.id);
    return result;
  }, {}),
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
      'react-famous': path.join(__dirname, '../src')
    },
    extensions: [
      '',
      '.js',
      '.jsx'
    ],
    root: __dirname
  }
};
