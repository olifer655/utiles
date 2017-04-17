'use strict';

const webpack = require('webpack');

const rules = [
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      loaders: {
        'scss': 'vue-style-loader!css-loader!sass-loader',
        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
        'css': 'style-loader!css-loader',
      }
    },
    exclude: /node_modules/
  },{
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  },{
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'file-loader',
    options: {
      name: '[name].[ext]?[hash]'
    }
  },{
    test: /\.json$/,
    loader: 'json-loader'
  }
];

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ])
}

module.exports = {
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
  },
  externals: {
    vue: 'Vue',

  }
};
