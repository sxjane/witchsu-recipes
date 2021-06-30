import React from 'react'

export default class HomeText extends React.Component{
    render(){
        return(
            <div className='dividerContainer'>
                <p className='dividerText'>{this.props.text}</p>
                <p className='dividerText'>{this.props.text2}</p>
                <p className='dividerSu'>——susu</p>
            </div>
        )
    }
}