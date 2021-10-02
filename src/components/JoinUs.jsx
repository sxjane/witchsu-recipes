import React, {useState} from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

export default function JoinUs(){
    const ages=[
        {
            value:'60',
            label:'60岁以上'
        },{
            value:'50',
            label:'50-59岁'
        },{
            value:'40',
            label:'40~49岁'
        },{
            value:'30',
            label:'30-39岁'
        },{
            value:'20',
            label:'20-29岁'
        },{
            value:'10',
            label:'0-19岁'
        }
    ]

    return (
        <div className='join_container'>
            <h2 style={{color:'#003797',marginBottom:'0.5rem'}}>
                欢迎加入自由集市微信群
            </h2>
            <h3 style={{marginBottom:'0.5rem', fontStyle:'italic', color:'#090909'}}>
                一起来建相互包容、接纳和支持的自由集市。要相信个体的力量，即使再渺小，汇聚在一起，也会成为巨大的能量，就像不善厨艺的我们也能在苏苏和群里其他厨艺高手的菜谱和指导下做出美味的饭菜，即满足了味蕾，又慰籍了心灵。——牧羊课代表
            </h3>
            <TextField 
                required
                sx={{marginRight:'1rem',width:'20rem'}} 
                margin='dense' 
                color='primary' 
                label='您的微信号'
                variant='outlined'/>
            <TextField
                select
                required 
                sx={{marginRight:'1rem',  width:'20rem'}} 
                margin='dense'  
                label='选择您的年龄区' 
                value = '' 
                variant='outlined'>
                {ages.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>))}
            </TextField>
            <TextField 
                sx={{marginRight:'1rem', width:'20rem'}} 
                margin='dense' 
                label='您的电子邮箱(可选)' 
                variant='outlined' />
            <TextField 
                sx={{maxWidth:'40rem'}} 
                fullWidth={true} 
                margin='dense' 
                multiline 
                rows={2} 
                label='我们很想认识您，请输入大约30字关于您的美食人生观'/>
            <Button variant='contained'>发给我们</Button>
        </div>
    )
  
}