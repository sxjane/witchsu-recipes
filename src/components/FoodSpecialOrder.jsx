import React from 'react'
import FoodImage from './FoodImage'
import FoodDescription from './FoodDescription'
import './styles.css'

export default class FoodSpecialOrder extends React.Component{
    render(){
        return(
            <div className='food_container'>
                {!this.props.imgFirst &&<FoodDescription />}
                <div className='food_image_container'>
                        <FoodImage src={this.props.url}/>
                </div>
                {this.props.imgFirst &&<FoodDescription />}
            </div>
        ) 
    }
}