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
                            <Link to='/' ><img src={Logo} className='logo'></img></Link>
                        </div>
                        <div className='menu_text'>
                            <Link to='/'><h3>Home</h3></Link>
                            <Link to='/food'><h3>Menu</h3></Link>
                            <Link to='/about'><h3>Restaurant</h3></Link> 
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