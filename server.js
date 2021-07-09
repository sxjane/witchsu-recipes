const express = require('express')
const path = require('path')
const { ArgumentParser } = require('argparse')
const bodyParser = require("body-parser");
const ExpressStaticS3 = require('express-static-s3')
const rewrite = require('express-urlrewrite')

const parser = new ArgumentParser({
    description: 'server process'
})
parser.add_argument('--port', { type: 'int', default: 3000 })
const args = parser.parse_args()

const app = express()

const STATIC_PREFIX = '/static'
const INDEX_HTML = path.join(STATIC_PREFIX, 'index.html')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let staticServer=new ExpressStaticS3({
    accessKeyId:     process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket:          'thewonderfulwitchsu',
    prefix:          STATIC_PREFIX
});
app.use(rewrite('/', INDEX_HTML))
app.use(rewrite('/assets/:name', path.join(STATIC_PREFIX, ':name')))
app.use(staticServer.express)

app.listen(args.port, '0.0.0.0',()=>{
    console.log('Server is on the port:', args.port)
})
