import React from 'react'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

export default class FoodDescription extends React.Component{
    render(){
        return(
            <div className='food_description_container'>
                <div className='foodDescription'>
                    <h2>Pancake with Meat</h2>
                    <h3>Egg 2</h3>
                    <h3>Meat 100g</h3>
                    <h3>Vegetable 10g</h3>
                    <h3>Total 500g</h3>
                </div>
                <Button>Add to Cart</Button>
            </div>
            
        )
       
    }
}