import React from 'react'
import FoodSpecialOrder from './FoodSpecialOrder'
import Pancake from '../images/pancake1200*800.png'
import Meat from '../images/rou1200*900.jpeg'
import Fish from '../images/yu1200*800.jpeg'
import Cake from '../images/bing3.jpeg'

export default class Special extends React.Component{
    render(){
        return(
            <div>
                <FoodSpecialOrder url={Pancake} flag={true}/>
                <FoodSpecialOrder url={Meat} flag={false}/>
                <FoodSpecialOrder url={Fish} flag={true}/>
                <FoodSpecialOrder url={Cake} flag={false}/>
            </div>
        )
    }
}