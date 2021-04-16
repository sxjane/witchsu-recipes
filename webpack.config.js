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
            },
            {
                test:/\.(png|jpe?g|gif)$/,
                loader:'file-loader'
            },
            // {
            //     test:/\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            //     loader:'url-loader',
            //     options:{
            //         limit:10000
            //     }
            // },
            {
                test: /\.(css)$/, 
                use:['style-loader','css-loader']
            },

            {
                test: /\.s[ac]ss$/i, 
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins:[
        new html_webpack_plugin({
            template: path.join(__dirname, 'src', 'index.html'),
            favicon: path.join(__dirname, 'src/images','title.ico')
        })
    ],
    resolve:{
        extensions:['.js', '.jsx']
    }
}