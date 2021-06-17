import React from 'react'
import HomeSlider from './HomeSlider'
import HomeText from './HomeText'
import './styles.scss'

export default class Home extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        const bodyElt = document.querySelector('body')
        bodyElt.style.backgroundColor = '#f8f5f1'
    }

    render(){
        const sweetText1 = <p>“胃口是我们少数确切掌握的快乐。”，我仅仅想给大家带来一丝快乐，虽然最终快乐是用辛苦换来的，但这也是世间万物的最本质的运行原理。</p>
        const sweetText2 = <p>做饭用心会观察到食物的点滴变化，往往这些细微变化是不能言语表达的，是食物和你的一种交流，你会爱上这种感觉的。</p>
        const sweetText3 = <p>我觉得饮食是占据人生主要时间，目的以及结果的行为，饮食的态度就是一个人的意识形态，所以才有治大国如烹小鲜的说法。</p>
        const sweetText4 = <p>饮食文化在我看来是一种贯通的行为文化，只是外衣有所不同。从饮食文化开始去了解西方文化，是一种很好的途经。You are what you eat!</p>
        return(
            <div >
                <HomeSlider />
                <HomeText text={sweetText1}/>
                <HomeText text={sweetText2}/>
                <HomeText text={sweetText3}/>
                <HomeText text={sweetText4}/>
            </div> 
        )
    }
}