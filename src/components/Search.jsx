import React from 'react'
import RecipesGrid from './RecipesGrid'

export default function SearchBar(props){
    const {recipes,input} = props
    const filteredRecipes = recipes.filter(recipe=>{
        if(input){
            return recipe.name.includes(input)
        }
    })
    return (
        <div style={{margin:'2rem'}}>
            <RecipesGrid list={filteredRecipes} />  
        </div>
    )
}