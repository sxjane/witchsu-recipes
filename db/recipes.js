const {getRecipesByClassWithImage, getRecipesWithImage} = require('./getRecipes')

async function recipesByClass(client, dbName, collName){
    const recipes = []
    try{
        const docs = await getRecipesByClassWithImage(client, dbName, collName)
        const orders = ['鱼','鸡肉','猪肉','牛肉','羊肉','其他肉','意面','沙拉','蛋糕','酱汁','配菜','汤','零食','早餐','披萨','冰激凌','面包','之外']
        
        for(const item of orders){
            for(const doc of docs){
                if(item == doc._id){
                    recipes.push(doc)
                }
            }
        }
    }catch(error){
        console.log(error)
    }finally{
        return recipes
    }
}

async function searchRecipes(client, dbName,collName){
    var recipes = []
    const names = []
    try{
        recipes = await getRecipesWithImage(client, dbName,collName)
        for(const doc of recipes){
            names.push(doc.name)
        }
    }catch(error){
        console.log(error)
    }finally{
        return {recipes, names}
    }
}

module.exports = {recipesByClass, searchRecipes}