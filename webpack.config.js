const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const plugins = [
    new CleanWebpackPlugin(['./dist/*']),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        chunks: [
            'index',
        ],
        hash: true,
        minify: true,
    }),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
    }),
];

const config = {
    mode: 'production',
    devtool: 'source-map',
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
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../',
                    },
                },
                'css-loader',
                'sass-loader',
            ],
            exclude: /node_modules/,
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
                'file-loader',
            ],
        }],
    },
    plugins,
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, './src/'),
        }
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                parallel: true,
                sourceMap: true,
            }),
            new OptimizeCSSAssetsPlugin({}),// 这个会阻止webpack4 production模式的自动压缩功能，需要单独使用UglifyJsPlugin
        ],
    },
}

module.exports = config;
