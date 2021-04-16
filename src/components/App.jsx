import React from 'react'
import HomeOrder from './HomeOrder'
import HomeSlider from './HomeSlider'
import HomeText from './HomeText'
import HomeRestaurant from './HomeRestaurant'
import './styles.css'

export default class App extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        const bodyElt = document.querySelector('body')
        bodyElt.style.backgroundColor = '#f8f5f1'
    }

    render(){
        const weekText = <h1>NiHao<br/>Week Hot Sale</h1>
        const valueText = <h1>Our Value<br/>Authentic Chinese Food</h1>
        const careerText = <h1>Contact Us<br/>Join Our Team</h1>
        return(
            <div >
                <HomeSlider />
                <HomeText text={weekText}/>
                <HomeOrder />
                <HomeText text={valueText}/>
                <HomeRestaurant />
            </div> 
        )
    }
}