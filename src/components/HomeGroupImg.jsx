import React from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

export default function HomeGroupImg(props){
    return (
        <div>
          <h2 className='home_group_title'>{props.title}</h2>
          <div className='home_group'>
            <Grid container spacing={8} >
              <Grid item xs={12} sm={6} md={3}>
                <div >
                    <img src={props.G1} />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
              <div >
                    <img src={props.G2} />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
              <div >
                    <img src={props.G3} />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
              <div >
                    <img src={props.G4} />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        
      )
}
