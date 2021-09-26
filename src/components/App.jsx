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
        const fetchData = async()=>{
            try{
                const response = await axios.get('/assets/photos/all.txt')
                setRecipes(response.data)
                var names = []
                for(let item of response.data){
                    names.push(item.name)
                }
                setNames(names)
                const cards_result = await axios.get('/assets/photos/recipes.txt')
                setCards(cards_result.data)
            }catch(error){
                console.log(error)
            }
        }
        fetchData()
    },[])

    return(
        <div>
            {!phone && <RouteDesktop recipes={recipes} names={names} cards={cards} />}
            {phone && <RoutePhone recipes={recipes} names={names} cards={cards} />}
            <Footer />
        </div>
    )
}
