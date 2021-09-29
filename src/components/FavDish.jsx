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
  marginLeft: 'auto',
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
        <h3 className='dish_content' style={{color:'#003797',paddingTop:'1rem'}}>{props.name}</h3>
        <h3 className='dish_content'>{props.text}</h3>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <h4>{props.method}</h4>
        </CardContent>
      </Collapse>
    </Card>
  )
}

// export default function FavDish(props) {

//   return (
//     <Card elevation={props.paper}>
//         <CardActions >
//         <CardContent>
//           <h2 style={{color:'#003797'}}>{props.name}</h2>
//           <h2>{props.text}</h2>
//           <IconButton
//           className={clsx(classes.expand, {
//               [classes.expandOpen]: expanded,
//           })}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//           >
//           <ExpandMoreIcon color='primary' style={{ fontSize: 35 }}/>
//       </IconButton>
//       </CardContent>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//             <p className='dish_main'>{props.method}</p>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }
