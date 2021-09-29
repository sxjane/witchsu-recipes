import React from 'react'

import HomeSlider from './HomeSlider'
import DividerSusu from './DividerSusu'
import SusuText from './text'
import Dish from './HomeDish'
import HomeGroup from './HomeGroup'
import MarginSpace from './MarginSpace'

import Divider from '@mui/material/Divider'


// import HomeWitchSu from './HomeWitchSu'
// import Divider from './Divider'
// import HomeCloud from './HomeCloud'
// import JoinUs from './HomeJoinUs'

import dish1 from '../../images/home/dish1.png'
import dish2 from '../../images/home/dish2.png'
import dish3 from '../../images/home/dish3.png'


import g11 from '../../images/home/g11.jpeg'
import g12 from '../../images/home/g12.jpeg'
import g13 from '../../images/home/g13.jpeg'
import g14 from '../../images/home/g14.jpeg'

import g21 from '../../images/home/g21.jpeg'
import g22 from '../../images/home/g22.jpeg'
import g23 from '../../images/home/g23.jpeg'
import g24 from '../../images/home/g24.jpeg'

import './styles.scss'

export default function Home(props){
    const phone = props.phone 
    return(
        <div>
            <HomeSlider 
                phone={phone} />
            <DividerSusu 
                divider={false} text={SusuText.DIVIDER_TEXT1} />

            <Dish 
                phone={phone} img={dish1} name={SusuText.DISH1_NAME} 
                text={SusuText.DISH1_TEXT} method={SusuText.DISH1_METHOD}/>
            <Dish 
                phone={phone} img={dish2} name={SusuText.DISH2_NAME} 
                text={SusuText.DISH2_TEXT} method={SusuText.DISH2_METHOD}/>
            <DividerSusu 
                divider={true} text={SusuText.DIVIDER_TEXT2} />
      
            <HomeGroup 
                title='节假日推荐套餐——好做好吃还不怕胖' 
                G1={g11} G2={g12} G3={g13} G4={g14}/>
            <MarginSpace/>
            <HomeGroup 
                title='请客人推荐套餐——好看好吃很上台面' 
                G1={g21} G2={g22} G3={g23} G4={g24}/>
            <DividerSusu divider={true} text={SusuText.DIVIDER_TEXT3}/>
        </div>
    )
}