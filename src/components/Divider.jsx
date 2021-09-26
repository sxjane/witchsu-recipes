import React from 'react'


export default class HomeText extends React.Component{
    render(){
        return(
            <div className='divider_group'>
                <p className='divider_group_text'>{this.props.name}</p>
            </div>
        )
    }
}