const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: [path.join(__dirname, './public/')],
        hot: true,
        host: '0.0.0.0',// can be accessed by other hosts
        port: 8080,
        proxy: {
            '/api': 'http://localhost:8081'
        },
        compress: true,
        // https: true,
        // open: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});
