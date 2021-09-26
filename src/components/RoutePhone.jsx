import React, {useState}from 'react'

import Home from './Home'
import RecipesByClass from './RecipesByClass'
import About from './About'
import Search from './Search'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import './styles.scss'

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


export default function PhoneBar(props) {
  const {recipes, names, cards} = props
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
      <AppBar position="static">
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2}}
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to='/'><h2>主页</h2></Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to='/recipes'><h2>菜谱</h2></Link>
        </MenuItem>
        <MenuItem onClick={handleClose}><Link to='/about'><h2>自由集市</h2></Link></MenuItem>
      </Menu>
          <Link to='/search'>
            <Autocomplete
            freeSolo 
            options={names}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="想做的菜"
                />
                )}
            onInputChange={(event,newValue)=>{
                setInput(newValue)
            }}
            />
        </Link>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path='/'>
            <Home width={false}/>
        </Route>
        <Route path='/recipes'>
            <RecipesByClass cards={cards}/>
        </Route>
        <Route path='/search'>
            <Search recipes={recipes} input={input}/>
        </Route>
    </Switch>
    </Router>
      
  )
}