import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'

import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/open-animation.css'
import './styles.css'

import Slider5 from '../images/slider5.png'
import Slider4 from '../images/slider4.png'
import Slider1 from '../images/slider1.jpeg'
import Slider2 from '../images/slider2.jpeg'
import Slider3 from '../images/slider3.jpeg'

export default class HomeSlider extends React.Component{
    render(){
        const AutoplaySlider = withAutoplay(AwesomeSlider)
        

        const slider = (
            <AutoplaySlider
                className='homeSlider'
                play={true}
                cancelOnInteraction={false}
                interval={5000}
                animation='openAnimation'
                >

                <div data-src={Slider5} />
                <div data-src={Slider1} />
                <div data-src={Slider2} />
                <div data-src={Slider3} />
                <div data-src={Slider4} />
                
            </AutoplaySlider>
        )
        return slider
    }
}
