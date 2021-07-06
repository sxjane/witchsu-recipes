import React from 'react'
import Home from './Home'
import Footer from './StickyFooter'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import Logo from '../images/Logo.png'
import './styles.scss'

export default class App extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div>
                <Router>
                    <div className='menu_container'>
                        <div className='menu_logo'>
                            <Link to='/'><img src={Logo}/></Link>
                        </div>
                        <div className='menu_search'></div>
                        <div className='menu_title'>
                            <Link to='/menu'><p>神奇菜谱</p></Link>
                            <Link to='/about'><p>女巫精灵</p></Link>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </Router>
                <Footer />
            </div>
            
        )
    }
}
