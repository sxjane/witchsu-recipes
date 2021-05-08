import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="">
        Xiaojie Si
      </Link>{' '}
      {new Date().getFullYear()}
      {' sixiaojie.jane@gmail.com.'}   
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: "center",
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    // borderTopStyle: 'solid',
    // borderWidth: '0.5px',
    // borderColor:'#e0e0de'
    // border: 'solid 1px blue',
    // backgroundColor:'#f6f6f6'
    // theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Typography variant="h6" align="center" gutterBottom>
          NiHao Restaurant
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Chinese Authentic Food
        </Typography>
        <Copyright />
      </Container>
      
   </footer>
  )
}
