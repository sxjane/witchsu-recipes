import React from 'react'
import {Card, CardContent, CardActions, CardMedia, Button, Grid} from '@mui/material'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    card:{
        display:'flex',
        height: '100%',
        flexDirection:'column' 
    },
    cardMedia:{
        paddingTop:'60%'
    },
    cardContent:{
        flexGrow:1
    }

})

export default function RecipesGrid(props){
    const classes = useStyles()
    const pathImg = '/assets/photos/'
    const pathRecipes = '/assets/recipes/'
    const photoForm = '.jpeg'
    const list = props.list

    return(
        <Grid container spacing={3}>
            {list.map(item=>(
            <Grid item key={item.name} xs={12} sm={6} md={4} lg={3} xl={2}>
                <Card className={classes.card}>
                    <CardMedia 
                    className={classes.cardMedia}
                    image={pathImg.concat(item.name,photoForm)}
                    title={item.name}/>
                    <CardContent className={classes.cardContent}>
                        <h3>{item.name}</h3>
                        <h4>{item.country.concat(' ', item.method)}</h4>
                    </CardContent>
                    <CardActions>
                        <Button variant='outlined' color='primary'>
                        <h5><a href={pathRecipes.concat(item.name, photoForm)} download/>菜谱</h5>
                        <h5><a href={pathRecipes.concat(item.name,'.jpeg')} download>菜谱</a></h5>
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            ))}
        </Grid>
    )

}