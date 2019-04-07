const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const common = {
  context: path.join(__dirname, 'app'),

  module: {
    rules: [{
      exclude: /node_modules|packages/,
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
      }],
    }],
  },
};

const development = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './scripts/index',
  ],

  output: {
    path: path.join(__dirname, '/app/'),
    publicPath: 'http://localhost:3000/',
    filename: '[name].js',
  },

  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },

  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'sass-loader',
      }],
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [{
        loader: 'image-webpack-loader',
        options: {
          bypassOnDebug: true,
          gifsicle: {
            interlaced: false,
          },
          optipng: {
            enabled: false,
          },
          pngquant: {
            quality: '65-90',
            speed: 4,
          },
        },
      }],
    }, {
      test: /\.(ttf|eot|woff|jpg|png|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      }],
    }],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

const production = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'scripts/[name].js',
  },

  entry: {
    main: ['./scripts/index'],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../',
        },
      }, {
        loader: 'css-loader',
      }, {
        loader: 'sass-loader',
      }],
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [{
        loader: 'image-webpack-loader',
      }],
    }, {
      test: /\.(ttf|eot|woff|jpg|png|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      }],
    }],
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[id].css',
    }),
    new CopyWebpackPlugin([{
      from: './images/',
      to: path.join(__dirname, '/dist/images/'),
    }], {
      ignore: [
        '*.DS_Store',
        'Thumbs.db',
        'ehthumbs.db',
      ],
    }),
    new HtmlPlugin({
      title: 'Camilo Holguin | Web developer',
      renderId: 'main',
      renderClass: 'main',
      template: 'index.ejs',
    }),
  ],
};

if (process.env.NODE_ENV === 'production') {
  module.exports = merge(production, common);
}

if (process.env.NODE_ENV === 'development') {
  module.exports = merge(development, common);
}
