import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'

import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/open-animation.css'
import './styles.css'

import DeskGreen from '../images/DeskGreen1400.png'
import DeskFlower from '../images/DeskFlower1400.png'

export default class HomeSlider extends React.Component{
    render(){
        const AutoplaySlider = withAutoplay(AwesomeSlider)
        

        const slider = (
            <AutoplaySlider
                className='homeSlider'
                play={true}
                cancelOnInteraction={false}
                interval={10000}
                animation='openAnimation'
                >

                <div data-src={DeskGreen} />
                <div data-src={DeskFlower} />
                
            </AutoplaySlider>
        )
        return slider
    }
}
