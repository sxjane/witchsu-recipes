import React from 'react'
import HomeDishMain from './HomeDishMain'
import Card from '@material-ui/core/Card'

export default class HomeImgText extends React.Component{
    render(){
        return(
            <div className='dish_container'>
                <div className='dish_img' >
                    <img src={this.props.img_left} />
                </div>
                <div className='dish_main'>
                     <HomeDishMain title={this.props.title} main={this.props.main} method={this.props.method}/>
                </div>
                 <div className='dish_img' >
                    <img src={this.props.img_right} />
                </div>
            </div>
        )
    }

}