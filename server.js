const express = require('express')
const path = require('path')

const PORT = 3000
const app = express()

const STATIC_DIR = path.join(__dirname, 'build')
const INDEX_HTML = path.join(STATIC_DIR, 'index.html')

app.use(express.static(STATIC_DIR))

app.get('/', (req, res)=>{
    res.sendFile(INDEX_HTML)
})

app.listen(PORT, '0.0.0.0',()=>{
    console.log('Server is on the port:', PORT)
})