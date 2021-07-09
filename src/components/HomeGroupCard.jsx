import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '100%'
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {props.main}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton  aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton edge='end' aria-label="download">
          <CloudDownloadIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
