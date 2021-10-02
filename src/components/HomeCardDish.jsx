import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function HomeCardDish(props) {
  return (
    <Card>
        <CardMedia
          sx={{paddingTop:'95%'}}
          image={props.img}
        />
        <CardContent>
            <h4>{props.tag}</h4>
        </CardContent>
       <CardActions>
      </CardActions>
    </Card>
  );
}
