var path = require('path');

module.exports = {
    context: path.join(__dirname),
    entry: './source/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname),
        filename: 'index.js',
        libraryTarget: 'umd',
        libary:'apiMiddleware'
    },
    externals: {

    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [

    ]
};
