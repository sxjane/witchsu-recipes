import React from 'react'
import joinUs from '../../images/joinus.jpeg'
import Paper from '@material-ui/core/Paper'

export default class HomeJoinUs extends React.Component{
    render(){
        return(
            <Paper className='join_us'>
                <img src={joinUs} />
            </Paper>
        )
    }
}