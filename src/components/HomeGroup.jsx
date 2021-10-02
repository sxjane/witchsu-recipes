import React from 'react';
import Grid from '@mui/material/Grid';
import Card from './HomeCardDish'

export default function HomeGroup(props) {

  return (
    <div>
      <h2 className='home_group_title'>{props.title}</h2>
      <div className='home_group'>
        <Grid container spacing={8} >
          <Grid item xs={12} sm={6} md={3}>
            <Card img={props.G1} tag={'主菜 西餐 煎'}/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Card img={props.G2} tag={'配菜 西餐 炒'}/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Card img={props.G3} tag={'配菜 西餐 拌'}/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          <Card img={props.G4} tag={'汤 西餐 炒 打碎'}/>
          </Grid>
        </Grid>
      </div>
    </div>
    
  )
}
