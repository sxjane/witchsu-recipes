import React from 'react'
export default function DividerSusu(props){
    return(
        <div className='divider_container'>
            <h2 className='divider_text'>{props.first}</h2>
            <h2 className='divider_su'>——susu</h2>
        </div>
    )
    
}