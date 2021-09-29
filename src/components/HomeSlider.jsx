import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'

import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css'
import './styles.scss'

import Slider1 from '../../images/home/slider1.jpeg'
import Slider2 from '../../images/home/slider2.jpeg'
import Slider3 from '../../images/home/slider3.jpeg'
import Slider4 from '../../images/home/slider4.jpeg'
import SliderS1 from '../../images/home/sliderS1.jpeg'
import SliderS2 from '../../images/home/sliderS2.jpeg'
import SliderS3 from '../../images/home/sliderS3.jpeg'
import SliderS4 from '../../images/home/sliderS4.jpeg'
import SliderS5 from '../../images/home/sliderS5.jpeg'
import SliderS6 from '../../images/home/sliderS6.jpeg'

export default function HomeSlider(props){
    const phone = props.phone 
    const AutoplaySlider = withAutoplay(AwesomeSlider)
    const slider = (
        <AutoplaySlider
            className='home_slider'
            play={true}
            cancelOnInteraction={false}
            interval={2000}
            animation='foldOutAnimation'
            mobileTouch={true}
            organicArrows= {false}
            >
            <div data-src={Slider1} />
            <div data-src={Slider2} />
            <div data-src={Slider3} />
            <div data-src={Slider4} />
        </AutoplaySlider>
    )
    const sliderS = (
        <AutoplaySlider
            className='home_slider_s'
            play={true}
            cancelOnInteraction={false}
            interval={1000}
            animation='foldOutAnimation'
            mobileTouch={true}
            organicArrows= {false}
            >
            <div data-src={SliderS1} />
            <div data-src={SliderS2} />
            <div data-src={SliderS3} />
            <div data-src={SliderS4} />
            <div data-src={SliderS5} />
            <div data-src={SliderS6} />
        </AutoplaySlider>
    )

    const display = phone? sliderS : slider

    return display
}
