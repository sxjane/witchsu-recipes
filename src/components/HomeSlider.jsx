import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'

import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css'
import './styles.scss'

import SliderDesk from '../../images/sliderDesk.jpeg'
import SliderFish from '../../images/sliderFish.jpeg'
import SliderMeat from '../../images/sliderMeat.jpeg'
import SliderPancake from '../../images/sliderPancake.jpeg'

export default class HomeSlider extends React.Component{
    render(){
        const AutoplaySlider = withAutoplay(AwesomeSlider)
        const slider = (
            <AutoplaySlider
                className='home_slider'
                play={true}
                cancelOnInteraction={false}
                interval={4000}
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
