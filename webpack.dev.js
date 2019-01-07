const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        chunks: [
            'index',
        ],
        hash: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
];

const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        host: '0.0.0.0',// can be accessed by other hosts
        proxy: {
            '/api': 'http://localhost:8081'
        },
    },
    entry: {
        index: ['./src/index.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            use: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.(css|scss)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ],
            exclude: /node_modules/,
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
                'file-loader',
            ],
            exclude: /node_modules/,
        }],
    },
    plugins,
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, './src/'),
        }
    }
}

module.exports = config;
