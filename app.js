const express = require('express')
const path = require('path')
const { ArgumentParser } = require('argparse')
const bodyParser = require('body-parser')
const ExpressStaticS3 = require('express-static-s3')
const rewrite = require('express-urlrewrite')
const morgan = require('morgan')

const {MongoClient} = require('mongodb')
const {recipesByClass, searchRecipes} = require('./db/recipes')


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
app.use(rewrite('/recipes', INDEX_HTML))
app.use(rewrite('/about', INDEX_HTML))
app.use(rewrite('/search', INDEX_HTML))
app.use(rewrite('/market', INDEX_HTML))

//production or not
if (args.production) {
    let staticServer = new ExpressStaticS3({
        accessKeyId:     process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        bucket:          'thewonderfulwitchsu',
        prefix:          STATIC_PREFIX
    });

    //TODO: hack the ExpressStaticS3
    let me=staticServer;
    let cutLength=staticServer._prefix.length+1;
    static_s3 = (req, res, next) => {
        if (req.method !== "GET") return next();
        if (!req.path.startsWith(me._prefix + '/')) return next();

        //get the path
        //MUST url-decoding the path because we have chinese characters in the path
        let path=decodeURIComponent(req.path);
        console.log(path);
        if (path.endsWith('/')) path+='index.html';
        path=path.substr(cutLength);

        //look up file
        me.ready().then(()=> {
            if (me._cache[path] === undefined) {
                if (me._cache["error/404.html"] === undefined) next(404);  //if no error file then go to next
                res.status(404).end(me._cache["error/404.html"]);
            } else {
                res.status(200).end(me._cache[path]);
            }
        });
    }

    app.use(static_s3)
}
else {
    app.use(STATIC_PREFIX, express.static(STATIC_DIR))
}

//database setting
const uri = process.env.MONGODB_URI
//TODO: assert if uri is not undefined
const client = new MongoClient(uri)
const dbName = 'recipes'
const collName = 'basic'

const getRecipes = async ()=>{
    try{
        classRecipes= await recipesByClass(client,dbName,collName)
        const result = await searchRecipes(client,dbName,collName)
        names = result.names
        recipes = result.recipes
        console.log('GetRecipes is done')
        return {classRecipes, names, recipes}
    }catch(error){
        console.log(error)
    }
}
const setUp = async ()=>{
    try{
        const data = await getRecipes()

        //app route 
        app.get('/allRecipes', (req,res)=>{
            res.json(data)
        })
    
        app.listen(args.port, '0.0.0.0',()=>{
            console.log('production or not:',args.production)
            console.log('Server is on the port:', args.port)
        })
    }catch(error){
        console.log(error)
    }
}

setUp()





