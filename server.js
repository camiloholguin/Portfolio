const Webpack = require('webpack');
const config = require('./webpack.config');
const WebpackDevServer = require('webpack-dev-server');

const compiler = Webpack(config);
const PORT = 3000;

const devServerOptions = Object.assign({}, {
  contentBase: config.output.path,
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true,
  },
  historyApiFallback: true,
});

const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(PORT, 'localhost', () => {
  console.log(`Listening at ${PORT}`);
});
