const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const commonConfig = require('./webpack.common');

const port = 8080;

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: [path.join(__dirname, './public/')],
    hot: true,
    host: '0.0.0.0',// can be accessed by other hosts
    port,
    proxy: { // 将符合条件的api请求代理到指定服务器
      '/api': 'http://localhost:8081'
    },
    before: app => { // 在devServer的其它插件之前执行，可以拦截proxy的请求代理
      app.get('/api/data', (req, res) => res.json({}));
    },
    after: app => { // 在devServer的其它插件之后执行，这里设置的请求有可能会被before/proxy拦截
      app.get('/api/data', (req, res) => res.json({}));
    },
    quiet: true,
    compress: true,
    // https: true,
    // open: true,
    // openPage: 'index.html',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://localhost:${port}`],
      },
    }),
  ],
});
