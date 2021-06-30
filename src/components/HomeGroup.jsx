import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from './HomeGroupCard'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card img={props.img.G1}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Card img={props.img.G2}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Card img={props.img.G3}/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Card img={props.img.G4}/>
        </Grid>
      </Grid>
    </div>
  );
}
