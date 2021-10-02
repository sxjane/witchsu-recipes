import React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box';


function Copyright() {
  return (
    <div>
      <Typography variant="body1" color="textSecondary" align="center">
        Recipes from Jing Su
      </Typography>
      <Typography variant="body1" color="textSecondary" align="center">
        Developed by Xiaojie Si
      </Typography>
      <Typography variant="body1" color="textSecondary" align="center">
        Designed by Lingyun Wei and Xiaojie Si
      </Typography>
      <Typography variant="body1" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://www.thewonderfulwitchsu.com/">
        The Wonderful Witch Su Organization
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      </Typography>
    </div>
  )
}

export default function StickyFooter() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    <Typography variant="h5" align="center" gutterBottom >
      女巫出品 必是佳肴
    </Typography>
    <Typography variant="body1" align="center" color="textSecondary" component="p">
      Email Us： <a style={{textDecoration:'underline', color:'#003797'}}href="mailto:thewonderfulwitchsu@gmail.com">thewonderfulwitchsu@gmail.com</a>
    </Typography>
    <Copyright />
  </Box>
  )
}
