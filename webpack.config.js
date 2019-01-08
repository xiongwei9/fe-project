const CleanWebpackPlugin = require('clean-webpack-plugin');

const commonConfig = require('./webpack.common');

const plugins = [
    new CleanWebpackPlugin(['./dist/*']),
    ...commonConfig.plugins,
];

const config = {
    ...commonConfig,
    mode: 'production',
    devtool: 'source-map',
    plugins,
}

module.exports = config;
