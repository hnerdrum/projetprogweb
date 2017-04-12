const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            __DEV_TOOLS__: true,
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.template.html'
        }),
        new CaseSensitivePathsPlugin()
    ],
    resolve: {
        alias: {
            'assets': path.resolve('assets'),
            'components': path.resolve('src', 'components')
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.css$/,
            exclude: /(node_modules|assets)/,
            use: ['style-loader', 'css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]', 'postcss-loader']
        },  {
            test: /[\/\\](node_modules|assets)[\/\\].*\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }, {
            test: /\.scss$/,
            exclude: /(node_modules|assets)/,
            use: ['style-loader', 'css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]', 'postcss-loader', 'sass-loader']
        }, {
            test: /[\/\\](node_modules|assets)[\/\\].*\.scss$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }, {
            test: /\.json$/,
            use: ['json-loader']
        },  {
            test: /\.svg$/,
            use: ['babel-loader', 'svg-react']
        }, {
            test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }, {
            test: /\.(png|jpg|gif|mp4)$/,
            loader: "file-loader?name=img/img-[hash:6].[ext]"
        }]
    }
};
