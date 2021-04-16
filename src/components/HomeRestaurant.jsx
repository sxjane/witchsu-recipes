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
                        <h3>Nihao Restaurant</h3>
                        <h3>Call Us: <br/>15908118021</h3>
                        <h3>Find Us: <br/>Hans-Stützle-Str. 19, 81249 Munich</h3>
                    </div>
            </div>
            </div>
        )
    }
}