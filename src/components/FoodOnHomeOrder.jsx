import React from 'react'
import FoodImage from './FoodImage'
import FoodDescription from './FoodDescription'
import Pancake from '../images/pancake.png'
import PancakeInner from '../images/pancake-inner.jpeg'
import {Button} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

export default class FoodOnHomeOrder extends React.Component{
    render(){
        return(
            <div className='food_on_home_container'>
                <div className='food_image_container'>
                    <FoodImage src={Pancake}/>
                </div>
                <div className='food_description_order_container'>
                    <FoodDescription />
                    <Button>Add to Cart</Button>
                </div>
            </div>
        )
    }
}