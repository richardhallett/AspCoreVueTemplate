const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bundleOutputDir = './wwwroot/dist';

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    return [{
        stats: { modules: false },
        context: __dirname,
        resolve: { 
            extensions: [ '.js', '.ts', '.vue'],

        },
        entry: { 'main': './App/boot.ts' },
        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: '[name].js',
            publicPath: '/dist/'
        },
        module: {
            rules: [
                { 
                    test: /\.vue$/, 
                    include: /App/, 
                    loader: 'vue-loader',
                },
                { 
                    test: /\.ts$/, 
                    include: /App/, 
                    loader: 'ts-loader', 
                    options: { appendTsSuffixTo: [/\.vue$/] } 
                },
                { 
                    test: /\.css$/, 
                    use: isDevBuild ? ['style-loader', 'css-loader'] : 
                    ExtractTextPlugin.extract({ use: 'css-loader' }) 
                },
                { 
                    test: /\.(png|jpg|jpeg|gif|svg)$/, 
                    use: 'url-loader?limit=25000'
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(isDevBuild ? 'development' : 'production')
                }
            }),

        ].concat(isDevBuild ? [
            // Development plugins
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map', // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
            })
        ] : [
            // Production Plugins
            new webpack.optimize.UglifyJsPlugin()
        ])
    }];
};
