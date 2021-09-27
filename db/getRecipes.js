async function getRecipesByClassWithImage(client, dbName, collName){
    const docs = []
    try{
        await client.connect()
        await client.db(dbName).command({ping:1})
        console.log('MongoDB server is connected')
        const collection = client.db(dbName).collection(collName)
        const pipeline = [
            {$match:{img:{$in:[1,4]}}},
            {$sort:{img:1, name:1}},
            {$group:{
                _id:'$class',
                list:{$push:{name:'$name', country:'$country', method:'$method',foreign_name:'foreign_name'}}
            }}
        ]
        const aggCursor = collection.aggregate(pipeline)
        for await(const doc of aggCursor){
            docs.push(doc)
        }
    }catch(error){
        console.log('mongodb error:',error)
    }finally{
        await client.close()
        return docs
    }
}
async function getRecipesWithImage(client, dbName, collName){
    const docs = []
    try{
        await client.connect()
        await client.db(dbName).command({ping:1})
        console.log('mongodb is connected')
        collection = client.db(dbName).collection(collName)
        const options = {
            sort:{name:1},
            projection:{_id:0, img:0}
        }
        const cursor = collection.find({img:{$in:[1,4]}}, options)
        for await (const doc of cursor){
            docs.push(doc)
        }
    }catch(err){
        console.log(err)
    }finally{
        await client.close()
        return docs
    }
}

module.exports = {getRecipesByClassWithImage, getRecipesWithImage}