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
        Xiaojie Si and SUSU
      </Link>{' '}
      {new Date().getFullYear()}
      {/* {' sixiaojie.jane@gmail.com.'}    */}
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
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        女巫SU-👽SU-AI SU-阿拉丁SU-哆啦A梦SU-释迦摩尼心性SU
        </Typography>
        <Copyright />
      </Container>
   </footer>
  )
}
