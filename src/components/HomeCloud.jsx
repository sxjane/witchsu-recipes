import React from 'react'
import Paper from '@material-ui/core/Paper'
import cloud from '../../images/homepage/cloud.jpeg'

export default class HomeWitchSu extends React.Component{
    render(){
        return (
            <Paper className='home_witchsu_container'>
             
                <div className='home_witchsu_main'>
                    <p>自由集市创造者女巫SU</p>
                    <p>自由集市档案管理员月宝</p>
                    <p>自由集市内敛课代表薇宝</p>
                    <p>自由集市封妃课代表洋宝</p>
                    <p>自由集市技术课代表珍宝</p>
                </div>
                <div className='home_witchsu_img'>
                    <img src={cloud} />
                </div>
            </Paper>
        )
    }
}