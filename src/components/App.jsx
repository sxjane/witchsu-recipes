import React, {useState, useEffect} from 'react'

import RouteDesktop from './RouteDesktop'
import RoutePhone from './RoutePhone'
import Footer from './StickyFooter'

import axios from 'axios'

export default function App(){
    const [phone, setPhone] = useState(true)
    const [names, setNames] = useState([])
    const [recipes, setRecipes] = useState([])
    const [cards, setCards] = useState([])

    useEffect(()=>{
        window.innerWidth < 800? setPhone(true):setPhone(false)
        const getRecipes = async()=>{
            try{
                const response = await axios.get('/allRecipes')
                let {classRecipes,names, recipes} = response.data
                setNames(names)
                setRecipes(recipes)
                setCards(classRecipes)
            }catch(error){
                console.log(error)
            }
        }
        getRecipes()
    },[])

    const display = phone ? <RoutePhone recipes={recipes} names={names} cards={cards} /> : <RouteDesktop recipes={recipes} names={names} cards={cards} />

    return(
        <div>
            {display}
            <Footer />
        </div>
    )
}
