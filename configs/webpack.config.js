const path = require('path');

console.log(path.resolve(__dirname, '../build/src/'));

module.exports = {
  entry: {
    app: "./build/src/app.js",
  },
  mode: 'development',
  resolve: {
    extensions: [ '.js', '.json' ],
    alias: {
      src: path.resolve(__dirname, '../build/src')
    }
  },
  output: {
    path: path.join(__dirname, '../build/dist'),
    filename: '[name]-bundle.js'
  }
};

