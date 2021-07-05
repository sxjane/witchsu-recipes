import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'

import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css'
import './styles.scss'

import SliderDesk from '../images/sliderDesk.png'
import SliderFish from '../images/sliderFish.png'
import SliderMeat from '../images/sliderMeat.png'
import SliderPancake from '../images/sliderPancake.png'

export default class HomeSlider extends React.Component{
    render(){
        const AutoplaySlider = withAutoplay(AwesomeSlider)
        

        const slider = (
            <AutoplaySlider
                className='home_slider'
                play={true}
                cancelOnInteraction={false}
                interval={2500}
                animation='foldOutAnimation'
                mobileTouch={true}
                organicArrows= {false}
                >
                <div data-src={SliderDesk} />
                <div data-src={SliderFish} />
                <div data-src={SliderMeat} />
                <div data-src={SliderPancake} />
            </AutoplaySlider>
        )
        return slider
    }
}
