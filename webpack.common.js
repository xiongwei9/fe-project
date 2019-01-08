const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const isProd = process.env.NODE_ENV === 'production';

const entry = {
    index: ['./src/index.js'],
};

const plugins = [
    new HtmlWebpackPlugin({
        // template: './src/index.html',
        title: 'fe-project',
        filename: 'index.html',
        meta: { 'viewport': 'width=device-width, initial-scale=1.0' },
        chunks: ['vendors', 'index'],
        hash: true,
    }),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "css/[name].css",
        chunkFilename: "[id].css"
    }),
];

const output = {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',// http://localhost:8080
};

// module是CommonJS的模块变量，在此使用modules代替
const modules = {
    rules: [
        {
            test: /\.jsx?/,
            use: 'babel-loader',
            include: [path.resolve(__dirname, './src')],
            exclude: /node_modules/,
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
                'file-loader',
            ],
            include: [path.resolve(__dirname, './src')],
            exclude: /node_modules/,
        }, {
            test: /\.(css|scss)$/,
            use: [
                'css-hot-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ],
            include: [path.resolve(__dirname, './src')],
            exclude: /node_modules/,
        }
    ],
};

const resolve = {
    alias: {
        '@src': path.resolve(__dirname, './src/'),
    },
};

const optimization = {
    splitChunks: {
        chunks: 'initial',
        cacheGroups: {
            vendors: {
                name: 'vendors',
                test: /node_modules/,
                priority: -10,
            },
        }
    },
    // runtimeChunk: {
    //     name: 'runtime',
    // },
    minimizer: [
        new UglifyJsPlugin({
            parallel: true,
            sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin({}),// 这个会阻止webpack4 production模式的自动压缩功能，需要单独使用UglifyJsPlugin
    ],
};

module.exports = {
    entry,
    output,
    plugins,
    resolve,
    module: modules,
    optimization,
};
