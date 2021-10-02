import React from 'react'
import FavDish from './FavDish'

import './styles.scss'

export default function HomeDish(props){
    const forDesktop = (
        <div className='dish_container'>
            <div className='dish_img' >
                <img src={props.img} />
            </div>
            <div className='dish_main'>
                <FavDish paper={1} name={props.name} text={props.text} food1={props.food1} food2={props.food2} method={props.method}/>
            </div>
        </div>)

    const forPhone = (
        <div className='phone_dish_container'>
            <img src={props.img} />
            <FavDish paper={0} name={props.name} text={props.text} food2={props.food2} method={props.method}/>
        </div>
    )
    
    const display = props.phone? forPhone : forDesktop

    return display

}