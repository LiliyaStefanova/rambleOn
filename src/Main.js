import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import WalkDetails from './WalkDetails'
import CreateWalk from './WalkCreator'
import Resources from './Resources'
import Contact from './Contact';
import WalkList from "./WalkList";
import './App.css';


const Main = ()=>
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='walk/create' component={CreateWalk}/>
            <Route path='/walks/all' component={WalkList}/>
            <Route path='walk/details' component={WalkDetails}/>
            <Route path='/resources' component={Resources}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
    </main>;

export default Main;