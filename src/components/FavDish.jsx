import React, {useState} from 'react';
import {styled} from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography' 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import './styles.scss'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  color:'#003797',
  paddingLeft:'2rem',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function FavDish(props){
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  return (
    <Card elevation={props.paper}>
      <CardContent >
        <h3 className='dish_content' style={{color:'#003797',paddingTop:'1rem', textAlign:'center'}}>{props.name}</h3>
        <h3 className='dish_content'>{props.text}</h3>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{width:'2.5rem',height:'2.5rem'}}/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <h3 className='dish_content'>{props.method}</h3>
        </CardContent>
      </Collapse>
    </Card>
  )
}