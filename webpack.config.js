const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');

const common = {
  context: path.join(__dirname, 'app'),

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }]
  }
};

const development = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './scripts/index'
  ],

  output: {
    path: path.join(__dirname, '/app/'),
    publicPath: 'http://localhost:3000/',
    filename: '[name].js'
  },

  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },

  module: {
    loaders: [{
      test: /\.scss$/,
      loader: 'style-loader!css!sass-loader'
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader: 'file-loader'
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

const production = {
  output: {
    path: path.join(__dirname, '/dist/'),
    publicPath: './',
    filename: 'scripts/[name].js'
  },

  entry: {
    main: ['./scripts/index'],
  },

  module: {
    loaders: [{
      test: /\.scss$/,
      loader: ExtractText.extract(['css', 'sass'], {
        publicPath: '../'
      })
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[path][name].[ext]',
        'image-webpack',
      ]
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader: 'file?name=[path][name].[ext]'
    }]
  },

  plugins: [
    new ExtractText('styles/[name].css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new CopyWebpackPlugin([{
      from: './images/',
      to: path.join(__dirname, '/dist/images/'),
    }], {
      ignore: [
        '*.DS_Store',
        'Thumbs.db',
        'ehthumbs.db',
      ]
    }),
    new HtmlPlugin({
      title: 'Camilo Holguin | Web developer',
      renderId: 'main',
      renderClass: 'main',
      template: 'index.ejs',
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports = merge(production, common);
}

if (process.env.NODE_ENV === 'development') {
  module.exports = merge(development, common);
}
