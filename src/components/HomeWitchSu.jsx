import React from 'react'
import SU from '../../images/homepage/su.jpeg'
import Paper from '@material-ui/core/Paper'

export default class HomeWitchSu extends React.Component{
    render(){
        return (
            <Paper className='home_witchsu_container'>
                <div className='home_witchsu_img'>
                    <img src={SU} />
                </div>
                <div className='home_witchsu_main'>
                    <div>
                        <p>AI的智慧</p>
                        <p>人类的深情</p>
                        {/* <p>完美的原生家庭</p> */}
                        <p>拼命三娘的精神</p>
                        {/* <p>德国勇敢追孤狼记</p> */}
                        <p>米其林三星级大厨水平</p>
                        <p>阿拉丁神灯一许愿立马实现</p>
                        <p>哆啦A梦口袋拥有着无限多法宝</p> 
                    </div>
                </div>
            </Paper>
        )
    }
}