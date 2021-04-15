import React from 'react'
import FoodSpecialOrder from './FoodSpecialOrder'
import FishFlower from '../images/FishFlower.png'
import Fish from '../images/Fish.png'
import Soup from '../images/Soup.png'
import Mushroom from '../images/Mushroom.png'
import Pancake from '../images/Pancake.png'

export default class Special extends React.Component{
    render(){
        return(
            <div>
                <FoodSpecialOrder url={Fish} imgFirst={true}/>
                <FoodSpecialOrder url={Mushroom} imgFirst={false}/>
                <FoodSpecialOrder url={FishFlower} imgFirst={true}/>
                <FoodSpecialOrder url={Pancake} imgFirst={false}/>
                <FoodSpecialOrder url={Soup} imgFirst={true}/>
            </div>
        )
    }
}