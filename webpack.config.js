const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
    filename: 'bundle.js',
        path: path.resolve(__dirname, 'www', 'js')
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ]
};