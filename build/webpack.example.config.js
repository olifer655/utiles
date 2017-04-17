/*eslint-env node */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base');
const template = './example/entry.template.html';
const entryData = require('../entry')
const entryNames = Object.keys(entryData);

const entry = {};
entryNames.forEach(name => entry[name] = `./example/${name}`);

var plugins = [];
entryNames.forEach(name => {
  plugins.push(
    new HtmlWebpackPlugin({
      filename: `./example/${name}/index.html`,
      entryName: name,
      template,
      inject: false,
    })
  );
});

module.exports = Object.assign({
  entry,
  output: {
    filename: '[name].js',
    publicPath: '/',
    library: '[name]',
    libraryTarget: 'umd',
  },
  plugins
}, require('./webpack.base'));
