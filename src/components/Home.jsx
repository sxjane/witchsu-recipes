import React from 'react'
import HomeSlider from './HomeSlider'
import HomeDivider from './DividerPhi'
import './styles.scss'
import SHARE from '../../share/text'
import HomeDish from './HomeDish'
import HomeWitchSu from './HomeWitchSu'
import signature_dish_left from '../../images/signature_dish_left.png'
import signature_dish_right from '../../images/signature_dish_right.png'
import latest_dish_left from '../../images/latest_dish_left.png'
import latest_dish_right from '../../images/latest_dish_right.png'
import HomeGroup from './HomeGroup'
import Divider from './Divider'
import HomeCloud from './HomeCloud'
import JoinUs from './HomeJoinUs'
import g11 from '../../images/g11.jpeg'
import g12 from '../../images/g12.jpeg'
import g13 from '../../images/g13.jpeg'
import g14 from '../../images/g14.jpeg'
import g21 from '../../images/g21.jpeg'
import g22 from '../../images/g22.jpeg'
import g23 from '../../images/g23.jpeg'
import g24 from '../../images/g24.jpeg'

export default class Home extends React.Component{
  
    render(){
        console.log(this.props.width)
        return(
            <div>
                <HomeSlider />
                <div className='divider_space'/>
                <HomeDivider philosophy={SHARE.HOME_SUSU_HAPPINESS} philosophy_more={SHARE.HOME_SUSU_HAPPINESS_MORE}/>
                <HomeDish width={this.props.width} img_left={signature_dish_left} img_right={signature_dish_right} main={SHARE.HOME_DISH} title={SHARE.HOME_DISH_NAME} method={SHARE.HOME_DISH_METHOD}/>
                <HomeDish width = {this.props.width} img_left={latest_dish_left} img_right={latest_dish_right} main={SHARE.HOME_LATEST} title={SHARE.HOME_LATEST_NAME} method={SHARE.HOME_LATEST_METHOD}/>
                <Divider name={SHARE.HOME_GROUP_NAME1} />
                <HomeGroup G1={g11} G2={g12} G3={g13} G4={g14}/>
                <Divider name={SHARE.HOME_GROUP_NAME2} />
                <HomeGroup G1={g21} G2={g22} G3={g23} G4={g24}/>
                <Divider name='女巫本巫'/>
                <HomeWitchSu />
                <Divider name='一片云团队'/>
                <HomeCloud />
                <Divider name='加入我们'/>
                <JoinUs />
                <HomeDivider philosophy={SHARE.HOME_SUSU_CULTURE} philosophy_more={SHARE.HOME_SUSU_CULTURE_MORE}/>
                
            </div> 
        )
    }
}
