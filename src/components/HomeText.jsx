import React from 'react'

export default class HomeText extends React.Component{
    render(){
        return(
            <div className='homeText'>
                {this.props.text}
            </div>
        )
    }
}