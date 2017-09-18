/*eslint-env node*/
/*eslint no-nested-ternary: 0*/

const path           = require('path');
const webpack        = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const pkg            = require('./package.json');

const SRC    = 'src';
const DIST   = 'dist';
const ENV    = (process.env.NODE_ENV || 'dev').toLowerCase();
const DEVSRV = process.argv.find(arg => arg.includes('webpack-dev-server'));
const ISPROD = ENV === 'production';
const OUTPUT = path.join(__dirname, DEVSRV ? SRC : DIST);

const PLUGINS = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(ENV)
  })
];

const uglify = () => new UglifyJSPlugin({
  uglifyOptions: {ecma: 6}
});

module.exports = {
  entry: [
    path.join(__dirname, SRC, 'app.js')
  ],
  output: {
    path:     OUTPUT,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  plugins: ISPROD ? PLUGINS.concat(uglify()) : PLUGINS,
  module: {
    rules: [{
      test:    /\.html$/,
      use: ['text-loader']
    }, {
      test: /\.postcss$/,
      use: ['text-loader', 'postcss-loader']
    }, {
      test: /\.js?$/,
      // We need to transpile Polymer itself and other ES6 code
      // exclude: /(node_modules)/,
      use: [{
        loader:  'babel-loader',
        options: pkg.babel
      }]
    }]
  },
  devServer: {
    contentBase: OUTPUT,
    publicPath: '/',
    compress: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    port: 8180,
    watchOptions: {
      poll: true
    }
  }
};
