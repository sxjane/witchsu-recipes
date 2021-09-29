import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@mui/material/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './styles.scss'


const useStyles = makeStyles((theme) => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

export default function FavDish(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card elevation={props.paper}>
        <CardActions >
        <CardContent>
          <h2 style={{color:'#003797'}}>{props.name}</h2>
          <h2>{props.text}</h2>
          <IconButton
          className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >
          <ExpandMoreIcon color='primary' style={{ fontSize: 35 }}/>
      </IconButton>
      </CardContent>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <p className='dish_main'>{props.method}</p>
        </CardContent>
      </Collapse>
    </Card>
  );
}
