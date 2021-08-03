import React from 'react'
import HomeDishMain from './HomeDishMain'
import HomeDishMainSm from './HomeDishMainSm'
import './styles.scss'

export default class HomeImgText extends React.Component{

    render(){
        if(this.props.width > 800){
            return(
                <div className='dish_container'>
                    <div className='dish_img' >
                        <img src={this.props.img_left} />
                    </div>
                    <div className='dish_main'>
                         <HomeDishMain value={1} title={this.props.title} main={this.props.main} method={this.props.method}/>
                    </div>
                     <div className='dish_img' >
                        <img src={this.props.img_right} />
                    </div>
                </div>
            )
        }else{
            return(
                <div className='dish_container_sm'>
                    <HomeDishMainSm value={0} title={this.props.title} main={this.props.main} method={this.props.method} img_left={this.props.img_left} img_right={this.props.img_right}/>
                </div>
            )
            
        }
        
    }

}