const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',

    devServer: {
        contentBase: './dist',
    },

    entry: {
        index: './src/index.js',
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        // new CleanWebpackPlugin(),
        // new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        // new HtmlWebpackPlugin({
        //     hash: true,
        //     filename: './dist/index.html',
        //     template: './src/index.html',
        //     title: 'Output Management',
        // }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            minify: {
              removeComments: true,
              collapseWhitespace: true
            },
          })
    ],

    module: {

        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
        
    },
};