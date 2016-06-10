var path = require("path");

var components_dir = path.resolve(__dirname, 'src/components');
var build_dir = path.resolve(__dirname, 'src/build');
var app_dir = path.resolve(__dirname, 'src/app');
var config = {
    entry: app_dir + '/index.jsx',
    output:{
        path: build_dir,
        filename: 'bundle.js'
    },
    /*resolve: {
        extensions: ['', '.js', '.jsx', '.json', 'less']
    },*/
    module: {
        loaders: [{
            test: /\.js|jsx$/,
            include: [app_dir, components_dir],
            loader: 'babel'
        }/*,{
            test: /\.css$/,
            loader: 'style!css'
        },{
            test: /.less$/,
            loader: 'style!css!less'
        },{
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }*/]
    }
};

module.exports = config;