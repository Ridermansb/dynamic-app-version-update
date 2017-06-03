const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const GitRevisionPlugin = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRevisionPlugin()

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Calculator',
      template: 'index.ejs',
    }),
    new webpack.DefinePlugin({
      'VERSION': JSON.stringify(gitRevisionPlugin.version()),
      'COMMITHASH': JSON.stringify(gitRevisionPlugin.commithash()),
      'BRANCH': JSON.stringify(gitRevisionPlugin.branch()),
    })
  ]
};
