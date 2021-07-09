const express = require('express')
const path = require('path')
const { ArgumentParser } = require('argparse')

const parser = new ArgumentParser({
    description: 'server process'
})
parser.add_argument('--port', { type: 'int', default: 3000 })
const args = parser.parse_args()

const app = express()

const STATIC_DIR = path.join(__dirname, 'build')
const INDEX_HTML = path.join(STATIC_DIR, 'index.html')

app.use(express.static(STATIC_DIR))

app.get('/', (req, res)=>{
    res.sendFile(INDEX_HTML)
})

app.listen(args.port, '0.0.0.0',()=>{
    console.log('Server is on the port:', args.port)
})