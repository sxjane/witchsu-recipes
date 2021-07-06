const path = require('path')
const html_webpack_plugin = require('html-webpack-plugin')
const S3Plugin = require('webpack-s3-plugin')

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
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(css)$/, 
                use:['style-loader','css-loader']
            },
            {
                test: /\.s[ac]ss$/i, 
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins:[
        new html_webpack_plugin({
            template: path.join(__dirname, 'src', 'index.html'),
            favicon: path.join(__dirname, 'src/images','title.ico')
        }),
        new S3Plugin({
          include: /.*\.(css|js|html|ico|woff|png|jpg)/,
          s3Options: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: 'eu-west-1'
          },
          s3UploadOptions: {
            Bucket: 'thewonderfulwitchsu'
          }
        })
    ],
    resolve:{
        extensions:['.js', '.jsx']
    }
}
