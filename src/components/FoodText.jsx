import React from 'react'
import Button from '@material-ui/core/Button'
import './styles.css'

export default class FoodText extends React.Component{
    render(){
        return(
            <div className='food_text_container'>
                <div className='foodText'>
                    <h2>Pancake with Meat</h2>
                    <h3>Egg 2</h3>
                    <h3>Meat 100g</h3>
                    <h3>Vegetable 10g</h3>
                    <h3>Total 500g</h3>
                </div>
                <Button variant='outlined' color='secondary'>Add to Cart</Button>
            </div>
        )
       
    }
}