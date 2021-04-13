import React from 'react'
import WeekRecommendation from './WeekRecommendation'
import FoodOnHomeOrder from './FoodOnHomeOrder'
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
                {/* <div>
                    <h1>Head in the waiting list</h1>
                    <h2>Menu in the waiting list</h2>
                    <h3>Chef recommendation</h3>
                </div> */}
                <FoodOnHomeOrder />
                {/* <div>
                    <p>Team and Restaurant image</p>
                </div>
                <div>
                    <p>foot and things of developers</p>
                </div> */}
            </div> 
        )
    }
}