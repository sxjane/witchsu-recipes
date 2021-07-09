import React from 'react'
import Paper from '@material-ui/core/Paper'

export default class HomeText extends React.Component{
    render(){
        return(
            <div className='divider_group'>
                <p className='divider_group_text'>{this.props.name}</p>
            </div>
        )
    }
}