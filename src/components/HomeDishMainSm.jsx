import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './styles.scss'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


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

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card elevation={1}>
        <CardActions >
        <CardContent>
            <p className='dish_name'>{props.title}</p>
            <div className='dish_img_container'>
                        <div className='dish_img' >
                            <img src={props.img_left} />
                        </div>
                        <div className='dish_img' >
                            <img src={props.img_right} />
                        </div>
                    </div>
            <p className='dish_main'>{props.main}
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
      </p>
      </CardContent>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            {/* <p className='dish_main'>{props.more}</p> */}
            <p className='dish_main'>{props.method}</p>
        </CardContent>
      </Collapse>
    </Card>
  );
}
