const path = require('path')
const webpack = require('webpack')

const staticPath = path.resolve(__dirname, '../website/static') + '/';
const buildPath = staticPath + 'build/';

module.exports = {
    entry: {
        main: staticPath + "/js/main.js",
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                loader: "file-loader",

                options: {
                    name: "[name].[ext]",
                    outputPath: "../../static/dist",
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    enforce: true,
                    chunks: 'initial'
                }
            }
        }
    },
    stats: {
        all: false,
        builtAt: true,
        errors: true,
        errorDetails: true,
        timings: true,
        warnings: true
    },
    output: {
        path: buildPath + "js",
        filename: "[name].bundle.js",
    },
};