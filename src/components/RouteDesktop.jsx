import React, {useState} from 'react'

import Home from './Home'
import RecipesByClass from './RecipesByClass'
import About from './About'
import Search from './Search'
import Paper from '@material-ui/core/Paper'

import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Logo from '../../images/Logo.png'
import './styles.scss'

export default function RouteDesktop(props){
    const {recipes, names, cards} = props
    const [input, setInput] = useState('')
    return(
        <Router>
            <Paper className='menu_container'>
                <div className='menu_logo'>
                    <Link to='/'><img src={Logo}/></Link>
                </div>
                <div className='menu_title'>
                    <Link to='/recipes'><h3>分类菜谱</h3></Link>
                    <Link to='/about'><h3>自由集市</h3></Link>
                </div>
                <div className='menu_search'>
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
                </div>
            </Paper>
            <Switch>
                <Route exact path='/'>
                    <Home width={false}/>
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