const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');


module.exports = {
    devtool: 'source-map',
    entry: {
        app: path.join(__dirname, '/src/index')
    },
    output: {
        filename: '[name]-[hash].min.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            __DEV_TOOLS__: false,
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        new StatsPlugin('webpack.stats.json', {
            source: false,
            modules: false
        }),
        new ExtractTextPlugin('[name]-[hash].min.css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.template.html'
        })
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
            include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules', 'components')]
        }, {
            test: /\.json?$/,
            loader: 'json-loader'
        }, {
            test: /\.css$/,
            exclude: /(node_modules|assets)/,
            loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss-loader'})
        },  {
            test: /[\/\\](node_modules|assets)[\/\\].*\.css$/,
            loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!postcss-loader'})
        }, {
            test: /\.scss$/,
            exclude: /(node_modules|assets)/,
            loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass-loader!postcss-loader'})
        }, {
            test: /[\/\\](node_modules|assets)[\/\\].*\.scss$/,
            loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!sass-loader!postcss-loader'})
        },   {
            test: /\.svg$/,
            loaders: ['babel-loader', 'svg-react']
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
