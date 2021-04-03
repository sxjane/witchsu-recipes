const path = require('path')
const html_webpack_plugin = require('html-webpack-plugin')

module.exports={
    entry: path.join(__dirname, 'src','index.jsx'),
    output: {
        path: path.join(__dirname,'build'),
        filename: 'index_bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                loader:'babel-loader'
            }
        ]
    },
    plugins:[
        new html_webpack_plugin({
            template: path.join(__dirname, 'src', 'index.html'),
            favicon: path.join(__dirname, 'images','title.ico')
        })
    ]
}