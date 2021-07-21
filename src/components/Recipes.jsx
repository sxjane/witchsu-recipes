import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './styles.scss'
import c1 from '../../images/all/1.jpeg'
import c2 from '../../images/all/2.jpeg'
import c3 from '../../images/all/3.jpeg'
import c4 from '../../images/all/4.jpeg'
import c5 from '../../images/all/5.jpeg'
import c6 from '../../images/all/6.jpeg'
import c7 from '../../images/all/7.jpeg'
import c8 from '../../images/all/8.jpeg'
import c9 from '../../images/all/9.jpeg'
import c10 from '../../images/all/10.jpeg'
import c11 from '../../images/all/11.jpeg'
import c12 from '../../images/all/12.jpeg'
import c13 from '../../images/all/13.jpeg'
import c14 from '../../images/all/14.jpeg'
import c15 from '../../images/all/15.jpeg'
import c16 from '../../images/all/16.jpeg'
import c17 from '../../images/all/17.jpeg'
import c18 from '../../images/all/18.jpeg'
import c19 from '../../images/all/19.jpeg'
import c20 from '../../images/all/20.jpeg'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(10),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '80%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [c1, c2, c3, c4, c5, c6, c7, c8, c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="xl">
          <Grid container spacing={6}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} lg={3} xl={2} >
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card}
                    // title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2" >
                      爱情蛋糕
                    </Typography>
                    <Typography>
                    面粉 100克<br/>巧克力粉 100克<br/>鸡蛋 4个 <br/>用时 1小时
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="medium" color="primary">
                      查看菜谱
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
