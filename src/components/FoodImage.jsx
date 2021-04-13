import React from 'react'
import './styles.css'

export default class OrderImage extends React.Component{
    render(){
        return (
            <img src={this.props.src} ></img>
        )
    }
}