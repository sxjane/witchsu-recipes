import React from 'react'
import Home from './Home'
import Food from './Food'
import About from './About'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Logo from '../images/logo.png'
import './styles.css'

export default class App extends React.Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){
        const bodyElt = document.querySelector('body')
        bodyElt.style.backgroundColor = '#f8f5f1'
    }

    render(){
        return(
            <Router>
                <div>
                    <div className='menu_container'>
                        <div className='menu_logo'>
                            <Link to='/' className=''><img src={Logo}></img></Link>
                        </div>
                        <div className='menu_text'>
                            <Link to='/food'><h2>Menu</h2></Link>
                            <Link to='/about'><h2>About</h2></Link> 
                        </div>
                        <div className='menu_account'>
                            <Link to='/account'><AccountCircleIcon fontSize='large'/></Link>
                            <Link to='/cart'><AddShoppingCartIcon fontSize='large'/></Link>
                        </div>
                    </div>
                    
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/food'>
                            <Food />
                        </Route>
                        <Route path='/about'>
                            <About/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}