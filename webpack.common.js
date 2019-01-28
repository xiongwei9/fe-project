const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

// const isProd = process.env.NODE_ENV === 'production';

// 遍历`./src/pages/`，找出里面的JS，并生成webpack entry
const getEntry = (() => {
    let entry = null;
    return () => {
        if (entry) {
            return entry;
        }
        entry = {};
        const root = './src/pages/';
        for (let filename of glob.sync(root + '**/*.[jt]s')) {
            const idx = filename.lastIndexOf(root) + root.length;
            const entryKey = filename.slice(idx, -3);
            entry[entryKey] = filename;
        }
        return entry;
    }
})();

const entry = getEntry();

// 根据entry生成对应的HtmlWebpackPlugin()插件配置
const htmls = [];
for (let key in entry) {
    const conf = {
        title: 'fe-project',
        filename: 'index.html',
        meta: { 'viewport': 'width=device-width, initial-scale=1.0' },
        chunks: ['common/vendors', key],
        hash: true,
    };
    if (key.indexOf('index/index') >= 0) {
        htmls.push(new HtmlWebpackPlugin(conf));
        continue;
    }
    if (key == 'index') {
        htmls.push(new HtmlWebpackPlugin({...conf, filename: 'tsIndex.html'}));
        continue;
    }
    htmls.push(new HtmlWebpackPlugin({
        ...conf,
        template: './src/pages/' + key + '.html',
        filename: path.basename(key) + '.html',
    }))
}

const plugins = [
    ...htmls,
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
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, {
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
        '@css': path.resolve(__dirname, './src/css/'),
        '@lib': path.resolve(__dirname, './src/lib'),
    },
};

const optimization = {
    splitChunks: {
        chunks: 'initial',
        cacheGroups: {
            vendors: {
                name: 'common/vendors',
                test: /node_modules/,
                priority: -10,
            },
        }
    },
    // runtimeChunk: {
    //     name: 'runtime',
    // },
    minimizer: [
        new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: true, // Must be set to true if using source-maps in production
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
