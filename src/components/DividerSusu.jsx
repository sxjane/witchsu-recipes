import React from 'react'
import Divider from '@mui/material/Divider'
export default function DividerSusu(props){
    return(
        <div>
            <div style={{marginTop:'7rem'}}/>
            <h2 className='divider_text'>{props.text}</h2>
            <div style={{marginBottom:'3.5rem'}}/>
            {props.divider && <Divider />}
            <div style={{marginBottom:'3.5rem'}}/>

        </div>)
}