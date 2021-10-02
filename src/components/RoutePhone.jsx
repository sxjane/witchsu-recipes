import React, {useState}from 'react'

import Home from './Home'
import RecipesByClass from './RecipesByClass'
import About from './About'
import Search from './Search'
import Market from './Market'

import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'

import susu from '../../images/logo.png'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import './styles.scss'

export default function PhoneBar(props) {
  var names = ['数据传输中，请刷新一次']
    if(props){
        if(props.names){
            names = props.names
        }}
  console.log('names:',names)
  const {recipes, cards} = props
  const [input, setInput] = useState('')
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router>
       <Paper className='router_container'>
        <div className='phone_logo'>
            <Link to='/'><img style={{maxWidth:'7rem'}}src={susu}/></Link>
        </div>
        <div className='phone_space'></div>
        <div className='phone_search'>
          <Link to='/search'>
            <Autocomplete 
              style={{maxWidth:'16rem',marginLeft:'auto',marginRight:'auto'}}
              freeSolo 
              options={names}
              renderInput={(params) => (
                  <TextField
                      {...params}
                      label="想做的菜"
                  />)}
              onInputChange={(event,newValue)=>{
                  setInput(newValue)
              }}/>
          </Link>
        </div>
        <div className='phone_title'>
          <IconButton 
              color='primary'
              aria-label= 'open drawer'
              sx={{mr:2}}
              onClick={handleClick}>
              <MenuIcon sx={{ width:'4rem',height:'4rem' }}/>
          </IconButton>
        </div>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}>
            <MenuItem 
              sx={{mx:'5rem'}} 
              onClick={handleClose}>
                <Link to='/recipes'>
                  <h2>分类菜谱</h2>
                </Link>
            </MenuItem>
            <Divider />
            <MenuItem 
              sx={{mx:'5rem'}} 
              onClick={handleClose}>
                <Link to='/about'>
                  <h2>自由集市</h2>
                </Link>
            </MenuItem>
            <Divider />
            <MenuItem 
              sx={{mx:'5rem'}} 
              onClick={handleClose}>
                <Link to='/about'>
                  <h2>我们团队</h2>
                </Link>
            </MenuItem>
        </Menu>
      </Paper>
      <Switch>
        <Route exact path='/'>
            <Home phone={true}/>
        </Route>
        <Route path='/recipes'>
            <RecipesByClass cards={cards}/>
        </Route>
        <Route path='/search'>
            { names.length > 1 && <Search recipes={recipes} input={input}/>}
        </Route>
        <Route path='/about'>
            <About />
        </Route>
        <Route path='/market'>
          <Market />
        </Route>
    </Switch>
    </Router>
  )
}