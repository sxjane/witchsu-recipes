import React from 'react'

export default class HomeText extends React.Component{
    render(){
        return(
            <div className='divider_container'>
                <p className='divider_text'>{this.props.philosophy}</p>
                <p className='divider_text'>{this.props.philosophy_more}</p>
                <p className='divider_su'>——susu</p>
            </div>
        )
    }
}