const express = require('express')
const path = require('path')
const { ArgumentParser } = require('argparse')
const bodyParser = require('body-parser')
const ExpressStaticS3 = require('express-static-s3')
const rewrite = require('express-urlrewrite')
const morgan = require('morgan')

//command line arguments
const parser = new ArgumentParser({
    description: 'server process'
})
parser.add_argument('--port', { type: 'int', default: 3000 })
parser.add_argument('--production', {dest:'production', action:'store_true'})
parser.add_argument('--no-production', {dest:'production', action:'store_false'})
parser.set_defaults({production: false})
const args = parser.parse_args()

//app setting
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))

const STATIC_DIR = path.join(__dirname, 'assets')
const STATIC_PREFIX = '/assets'
const INDEX_HTML = path.join(STATIC_PREFIX, 'index.html')
app.use(rewrite('/', INDEX_HTML))
app.use(rewrite('/menu', INDEX_HTML))
app.use(rewrite('/about', INDEX_HTML))


//production or not
if (args.production) {
    let staticServer = new ExpressStaticS3({
        accessKeyId:     process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        bucket:          'thewonderfulwitchsu',
        prefix:          STATIC_PREFIX
    });
    app.use(staticServer.express)    
}
else {
    app.use(STATIC_PREFIX, express.static(STATIC_DIR))
}

// //data
// const names = require('./src/utilities/nameList')

// //routes

// app.use(rewrite('/download/:name', '/assets/:name'))

app.listen(args.port, '0.0.0.0',()=>{
    console.log('production or not:',args.production)
    console.log('Server is on the port:', args.port)
})
