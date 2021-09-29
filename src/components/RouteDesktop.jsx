import React, {useState} from 'react'

import Home from './Home'
import RecipesByClass from './RecipesByClass'
import About from './About'
import Search from './Search'

import Paper from '@mui/material/Paper'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import susu from '../../images/logo.png'
import './styles.scss'

export default function RouteDesktop(props){
    const names = props? props.names: []
    const {recipes, cards} = props
    const [input, setInput] = useState('')
    return(
        <Router>
            <Paper className='router_container'>
                <div className='desktop_logo'>
                    <Link to='/'><img style={{maxWidth:'8rem'}}src={susu}/></Link>
                </div>
                <div className='desktop_space'></div>
                <div className='desktop_title'>
                    <Link to='/recipes'><h3>分类菜谱</h3></Link>
                    <Link to='/about'><h3>自由集市</h3></Link>
                </div>
                <div className='desktop_search'>
                    <Link to='/search'>
                        <Autocomplete style={{maxWidth:'15rem',marginLeft:'auto',marginRight:'auto', fontFamily:'"Noto Serif SC", sans-serif!important'}}
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
                        }}/>
                    </Link>
                </div>
            </Paper>
            <Switch>
                <Route exact path='/'>
                    <Home phone={false}/>
                </Route>
                <Route path='/recipes'>
                    <RecipesByClass cards={cards} />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/search'>
                    <Search recipes={recipes} input={input}/>
                </Route>
            </Switch>
        </Router>
    )
}