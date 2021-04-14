import React from 'react'
import FoodImage from './FoodImage'
import FoodDescription from './FoodDescription'
import {Button} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

export default class FoodSpecialOrder extends React.Component{
    render(){
        if(this.props.flag){
            return(
                <div className='food_container'>
                    <div className='food_image_container' style={{backgroundImage:`url(${this.props.url})`, backgroundPosition:'center', backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}>
                        {/* <FoodImage src={Pancake}/> */}
                    </div>
                    <div className='food_description_container'>
                        <FoodDescription />
                        <Button>Add to Cart</Button>
                    </div>
                </div>
            )
        }else{
            return(
                <div className='food_container'>
                    <div className='food_description_container'>
                        <FoodDescription />
                        <Button>Add to Cart</Button>
                    </div>
                    <div className='food_image_container' style={{backgroundImage:`url(${this.props.url})`, backgroundPosition:'center', backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}>
                        {/* <FoodImage src={Pancake}/> */}
                    </div>
                </div>
            )
        }
        
    }
}