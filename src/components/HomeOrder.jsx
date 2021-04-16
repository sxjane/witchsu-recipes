import React from 'react'
import FoodOrder from './FoodOrder'
import FishFlower from '../images/FishFlower.png'
import Fish from '../images/Fish.png'
import Soup from '../images/Soup.png'
import Mushroom from '../images/Mushroom.png'
import Pancake from '../images/Pancake.png'

export default class HomeOrder extends React.Component{
    render(){
        return(
            <div>
                <FoodOrder src={Fish} imgFirst={true}/>
                <FoodOrder src={Mushroom} imgFirst={false}/>
                <FoodOrder src={FishFlower} imgFirst={true}/>
                <FoodOrder src={Pancake} imgFirst={false}/>
                <FoodOrder src={Soup} imgFirst={true}/>
            </div>
        )
    }
}