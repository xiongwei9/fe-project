const CleanWebpackPlugin = require('clean-webpack-plugin');

const commonConfig = require('./webpack.common');

const config = {
    ...commonConfig,
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(['./dist/*']),
        ...commonConfig.plugins,
    ],
}

module.exports = config;
