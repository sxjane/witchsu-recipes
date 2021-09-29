import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function HomeCard(props) {
  return (
    <Card>
        <CardMedia
          sx={{paddingTop:'100%'}}
          image={props.img}
        />
        <CardContent>
            <h3>{props.name}</h3>
            <h4>{props.main}</h4>
        </CardContent>
       <CardActions>
      </CardActions>
    </Card>
  );
}
