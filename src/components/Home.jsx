import React from 'react'

import HomeSlider from './HomeSlider'
import DividerSusu from './DividerSusu'
import SusuText from './text'
import Dish from './HomeDish'
import HomeGroup from './HomeGroup'
import MarginSpace from './MarginSpace'
import GroupImg from './HomeGroupImg'
import Divider from '@mui/material/Divider'


// import HomeWitchSu from './HomeWitchSu'
// import Divider from './Divider'

// import JoinUs from './HomeJoinUs'

import dish1 from '../../images/home/dishFirst.png'
import dish2 from '../../images/home/dishSecond.png'


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
                text={SusuText.DISH1_TEXT} food1={SusuText.DISH1_FOOD} food2='' method={SusuText.DISH1_METHOD}/>
            <Dish 
                phone={phone} img={dish2} name={SusuText.DISH2_NAME} 
                text={SusuText.DISH2_TEXT} food1={SusuText.DISH2_FOOD1} food2={SusuText.DISH2_FOOD2} method={SusuText.DISH2_METHOD}/>
            <DividerSusu 
                divider={true} text={SusuText.DIVIDER_TEXT2} />
      
            <HomeGroup 
                title='节假日推荐套餐——好做好吃还不怕胖' 
                G1={g11} G2={g12} G3={g13} G4={g14}/>
            <MarginSpace/>
            <GroupImg 
                title='停留在美好时光——优哉游哉慢生活' 
                G1={g21} G2={g22} G3={g23} G4={g24}/>
            <DividerSusu divider={true} text={SusuText.DIVIDER_TEXT3}/>
        </div>
    )
}