import React from 'react'
import WeekRecommendation from './WeekRecommendation'
import HomeSlider from './HomeSlider'
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
        return(
            <div >
                <HomeSlider />
                {/* <WeekRecommendation /> */}
            </div> 
        )
    }
}