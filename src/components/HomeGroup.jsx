import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from './HomeGroupCard'

export default function FullWidthGrid(props) {

  return (
    <div className='home_group'>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={6} md={3}>
          <Card img={props.G1} name={'最多嫁妆鱼'} main={'这是一条女巫菜谱里被群友特命名为嫁妆最多的鱼'}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Card img={props.G2} name={'西班牙腊肠白豆'} main={'这是一碗课代表最爱的配菜，女巫说这是鱼的原配菜'}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Card img={props.G3} name={'红菜头沙拉'} main={'这是一个红红的红菜头沙拉，课代表还没有吃过的菜'}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Card img={props.G4} name={'芦笋奶油汤'} main={'这是一碗女巫请客的出镜率最多的无法抗拒的美味汤'}/>
        </Grid>
       
      </Grid>
    </div>
  );
}
