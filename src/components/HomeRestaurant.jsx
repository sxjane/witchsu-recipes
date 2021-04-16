import React from 'react'
import Restaurant from '../images/Restaurant.jpeg'
import './styles.css'

export default class HomeRestaurant extends React.Component{
    render(){
        return(
            <div>
                <div className='food_container'>
                    <div className='food_image_container'>
                        <img src={Restaurant} />
                    </div>
                    <div className='food_text_container foodText'>
                        <h2>Pancake with Meat</h2>
                        <h3>Egg 2</h3>
                        <h3>Meat 100g</h3>
                        <h3>Vegetable 10g</h3>
                        <h3>Total 500g</h3>
                    </div>
            </div>
            </div>
        )
    }
}