const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
        include: [
          path.resolve(__dirname, 'node_modules/complexviewer/src/css'),
        ],
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        include: [
          path.resolve(__dirname, 'node_modules/complexviewer'),
        ],
      },
    ],
  },
};
