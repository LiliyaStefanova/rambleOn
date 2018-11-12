import React, {Component} from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import Header from './views/header/Header';
import Home from './views/Home';
import WalkDetails from './views/WalkDetails'
import CreateWalk from './views/WalkCreator'
import Resources from './views/Resources'
import Contact from './views/Contact';
import WalkList from "./views/WalkList";
import './App.css'

class App extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <Header/>
                    <div className="content">
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='walk/create' component={CreateWalk}/>
                            <Route path='/walks/all' component={WalkList}/>
                            <Route path='walk/details' component={WalkDetails}/>
                            <Route path='/resources' component={Resources}/>
                            <Route path='/contact' component={Contact}/>
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default App;