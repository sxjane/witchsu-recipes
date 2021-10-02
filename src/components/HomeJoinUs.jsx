import React from 'react'
import joinImg from '../../images/home/joinus.jpeg'
import Join from './JoinUs'

export default function HomeJoinUs(props){
    const forDesktop = (
        <div className='join_us'>
                <div style={{flex:1.5}}>
                    <img src={joinImg} />
                </div>
                <Join />
            </div>
    )
    const forPhone = (
        <div className='phone_join_us'>
            <img src={joinImg} />
            <div style={{marginTop:'2rem'}}>
                <Join/>
            </div>
            
        </div>
    )
    const display = props.phone ? forPhone : forDesktop
    return display
}
