import React from 'react'
import FoodOrder from './FoodOrder'
import Food1 from '../images/food1.png'
import Food2 from '../images/food2.png'
import Food3 from '../images/food3.png'
import Food4 from '../images/food4.png'
import Food5 from '../images/food5.png'
import Food6 from '../images/food6.png'
import Food7 from '../images/food7.png'
import Food8 from '../images/food8.png'
import Food9 from '../images/food9.png'
import Food10 from '../images/food10.png'


export default class HomeOrder extends React.Component{
    render(){
        return(
            <div>
                <FoodOrder src={Food1} imgFirst={true}/>
                <FoodOrder src={Food2} imgFirst={false}/>
                <FoodOrder src={Food3} imgFirst={true}/>
                <FoodOrder src={Food4} imgFirst={false}/>
                <FoodOrder src={Food5} imgFirst={true}/>
                <FoodOrder src={Food6} imgFirst={false}/>
                <FoodOrder src={Food7} imgFirst={true}/>
                {/* <FoodOrder src={Food8} imgFirst={false}/> */}
                {/* {/* <FoodOrder src={Food9} imgFirst={true}/> */}
                <FoodOrder src={Food10} imgFirst={false}/>
            </div>
        )
    }
}