import React from 'react'
import HomeSlider from './HomeSlider'
import HomeDivider from './DividerText'
import './styles.scss'
import SHARE from '../share/text'
import HomeDish from './HomeDish'
import signature_dish_left from '../images/signature_dish_left.png'
import signature_dish_right from '../images/signature_dish_right.png'
import latest_dish_left from '../images/latest_dish_left.png'
import latest_dish_right from '../images/latest_dish_right.png'

export default class Home extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                <HomeSlider />
                <div className='divider_space'/>
                <HomeDivider philosophy={SHARE.HOME_SUSU_HAPPINESS} philosophy_more={SHARE.HOME_SUSU_HAPPINESS_MORE}/>
                <HomeDish img_left={signature_dish_left} img_right={signature_dish_right} main={SHARE.HOME_DISH_ALL} title={SHARE.HOME_DISH_NAME} method={SHARE.HOME_DISH_METHOD}/>
                <HomeDish img_left={latest_dish_left} img_right={latest_dish_right} main={SHARE.HOME_LATEST_ALL} title={SHARE.HOME_LATEST_NAME} method={SHARE.HOME_LATEST_METHOD}/>
                <HomeDivider philosophy={SHARE.HOME_SUSU_CULTURE} philosophy_more={SHARE.HOME_SUSU_CULTURE_MORE}/>
            </div> 
        )
    }
}
