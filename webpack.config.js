const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => ({
    mode: env.production ? 'production' : 'development',
    entry: './src/index.tsx',
    devtool: 'source-map',
    devServer: {
        port: 3000,
        static: {
            directory: path.resolve(__dirname, 'static'),
        },
        historyApiFallback: true,
        allowedHosts: 'all',
    },
    watchOptions: {
        ignored: [path.resolve(__dirname, 'dist'), path.resolve(__dirname, 'node_modules')],
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    { loader: 'less-loader', options: { lessOptions: { javascriptEnabled: true } } },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: env.basepath || '/',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'static/index.html' }),
        // Inject the content of the .env file into the "process.env" global variable
        // See https://www.npmjs.com/package/dotenv-webpack for configuration options
        new Dotenv({
            systemvars: true,
        }),
    ],
});
