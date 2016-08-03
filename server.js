const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');
const WebpackDevServer = require('webpack-dev-server');

const compiler = webpack(config);
const PORT = 3000;

const server = new WebpackDevServer(compiler, {
  contentBase: config.output.path,
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true
  },
  historyApiFallback: true
});

server.listen(PORT, 'localhost', function(err) {
  if (err) return console.log(err);
  console.log(`Listening at ${PORT}`);
});