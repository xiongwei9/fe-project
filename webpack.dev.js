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
        proxy: {
            '/api': 'http://localhost:8081'
        },
        quiet: true,
        compress: true,
        // https: true,
        // open: true,
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
