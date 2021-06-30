import React from 'react'
import HomeSlider from './HomeSlider'
import HomeText from './DividerText'
import './styles.scss'
import HomeGroup from './HomeGroup'
import G11 from '../images/g11.jpeg'
import G12 from '../images/g12.jpeg'
import G13 from '../images/g13.jpeg'
import G14 from '../images/g14.jpeg'
import G21 from '../images/g21.jpeg'
import G22 from '../images/g22.jpeg'
import G23 from '../images/g23.jpeg'
import G24 from '../images/g24.jpeg'
import Dish from '../images/chi1.png'
import SHARE from '../share/text'
import HomeImgText from './HomeDish'
import HomeAlbum from './HomeAlbum'
import dish1 from '../images/chi1.png'
import dish2 from '../images/chi2.png'
import dishWord1 from '../images/dishWord1.png'
import dishWord2 from '../images/dishWord2.png'
import food1 from '../images/food1.png'
import food2 from '../images/food2.png'
import food3 from '../images/food3.png'
import food4 from '../images/food4.png'
import { Share } from '@material-ui/icons'

export default class Home extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        const bodyElt = document.querySelector('body')
        bodyElt.style.backgroundColor = '#f8f5f1'
    }
    render(){
        const groupIMG1 = {'G1':G11,'G2':G12,'G3':G13,'G4':G14}
        const groupIMG2 = {'G1':G21,'G2':G22,'G3':G23,'G4':G24}
        return(
            <div>
                <HomeSlider />
                <div className='extraSpace'/>
                <HomeText text={SHARE.HOME_SWEET1} text2={SHARE.HOME_SWEET2}/>
                <HomeImgText img1={dish1} img2={dish2} text={SHARE.HOME_DISH} title={SHARE.HOME_DISH_NAME}/>
                <HomeImgText img1={food1} img2={food2} text={SHARE.HOME_SALAD} title={SHARE.HOME_SALAD_NAME}/>
                <HomeText text={SHARE.HOME_SWEET3} text2={SHARE.HOME_SWEET3_MORE}/>
            </div> 
        )
    }
}
