const path = require('path')
const html_webpack_plugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const S3Plugin = require('webpack-s3-plugin')

module.exports={
    entry: path.join(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.join(__dirname, 'assets'),
        filename: 'index_bundle.js',
        publicPath: '/assets/',
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                loader:'babel-loader',
                generator: {
                    publicPath: '/assets/',
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                exclude:/node_modules/,
                generator: {
                    publicPath: '/assets/',
                },
            },
            {
                test: /\.(css)$/, 
                use:['style-loader','css-loader'],
                generator: {
                    publicPath: '/assets/',
                },
            },
            {
                test: /\.s[ac]ss$/i, 
                use:['style-loader','css-loader','sass-loader'],
                generator: {
                    publicPath: '/assets/',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    publicPath: '/assets/',
                },
            },
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new html_webpack_plugin({
            template: path.join(__dirname, 'src', 'index.html'),
            favicon: path.join(__dirname, 'images','title.ico')
        }),
        // new S3Plugin({
        //     include: /.*\.(css|js|html|ico|woff2|png|jpg|jpeg)/,
        //     s3Options: {
        //       accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        //       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        //       region: 'eu-west-1'
        //     },
        //     s3UploadOptions: {
        //       Bucket: 'thewonderfulwitchsu',
        //       ACL: 'private'
        //     }
        //   })        
    ],
    resolve:{
        extensions:['.js', '.jsx']
    },
    watchOptions: {
        aggregateTimeout: 400,
        poll: 2000,
      },
}
