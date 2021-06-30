import React from 'react'
// import Card from './HomeGroupCard'
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Share from '../share/text'
import './styles.scss'
import food1 from '../images/food1.png'
import dish from '../images/dish.png'
import chi2 from '../images/chi2.png'

export default class HomeImgText extends React.Component{
    render(){
        return(
            <div className='homeImgTextContainer'>
                <div className='homeImg' >
                    <img src={this.props.img1} />
                    {/* <img src={this.props.img} /> */}
                </div>
                <div className='homePaperText'>
                    <p className='dishName'>
                        {this.props.title}
                    </p>
                    <p>
                        {this.props.text}
                    </p>
                {/* <p>
                    {Share.HOME_DISH_MORE}
                </p> */}
                </div>
                 <div className='homeImg' >
                    <img src={this.props.img2} />
                    {/* <img src={food1} /> */}
                </div>
            </div>

            // <Grid container
            // direction="row"
            // justify="center"
            // alignItems="stretch">
            //     <Grid item sm={12} md={3}>
            //         <Card img={this.props.img}/>
            //     </Grid>
            //     <Grid item sm={12} md={9}>
            //         <Paper>
            //             <p className='homePaperText'>{Share.HOME_DISH}</p>
            //         </Paper>
            //     </Grid>
            // </Grid>
        )
    }

}