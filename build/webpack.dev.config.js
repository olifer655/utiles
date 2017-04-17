const path = require('path');
const entryData = require('../entry')
const entryNames = Object.keys(entryData);

var createLibrary = (name, libraryName) => ({
  entry: `./src/${name}`,
  output: {
    library: '[name]',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  }
});

module.exports = entryNames.map(name => {
  return Object.assign(createLibrary(name, entryData[name]), require('./webpack.base'));
});
