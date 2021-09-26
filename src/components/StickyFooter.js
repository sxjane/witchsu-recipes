import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import { Ballot, Email } from '@material-ui/icons'
import { lightBlue } from '@material-ui/core/colors'

function Copyright() {
  return (
    <div>
      <Typography variant="body1" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://www.thewonderfulwitchsu.com/">
        The Wonderful Witch Su Organization
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      </Typography>
      <Typography variant="body1" color="textSecondary" align="center">
        Content Provider: Jing Su
      </Typography>
      <Typography variant="body1" color="textSecondary" align="center">
        Designers: Lingyun Wei and Xiaojie Si
      </Typography>
      <Typography variant="body1" color="textSecondary" align="center">
        Developer: By Xiaojie Si
      </Typography>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer} >
    <Typography variant="h6" align="center" gutterBottom >
      女巫出品 必是佳肴
    </Typography>
    <Typography variant="h6" align="center" color="textSecondary" component="p">
      女巫SU - 👽SU - AI SU - 阿拉丁神灯SU - 哆啦A梦SU - 释迦摩尼心性SU       
    </Typography>
    <Typography variant="h6" align="center" color="textSecondary" component="p">
      Email Us： <a href="mailto:thewonderfulwitchsu@gmail.com">thewonderfulwitchsu@gmail.com</a>
    </Typography>
    <Copyright />
  </footer>
  )
}
