import React from 'react'
import DeskFlower from '../images/DeskFlower.jpeg'
import Paper from '@material-ui/core/Paper'
import cloud from '../images/cloud.jpeg'

export default class HomeWitchSu extends React.Component{
    render(){
        return (
            <Paper className='home_witchsu_container'>
             
                <div className='home_witchsu_main'>
                    <p>自由集市创造者群主之一片云老大女巫</p>
                    <p>自由集市档案管理员之一片云总监月宝 </p>
                    <p>自由集市内敛课代表之一片云小蜜薇宝 </p>
                    <p>自由集市封妃课代表之一片云主持洋宝</p>
                    <p>自由集市技术课代表之一片云开发珍宝</p>
                </div>
                <div className='home_witchsu_img'>
                    <img src={cloud} />
                </div>
            </Paper>
        )
    }
}