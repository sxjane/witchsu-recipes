import React from 'react'
import FoodText from './FoodText'
import './styles.css'

export default class FoodOrder extends React.Component{
    render(){
        return(
            <div className='food_container'>
                {!this.props.imgFirst &&<FoodText />}
                <div className='food_image_container'>
                    <img src={this.props.src} />
                </div>
                {this.props.imgFirst &&<FoodText />}
            </div>
        ) 
    }
}