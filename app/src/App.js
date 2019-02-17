import React, {Component} from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from './views/header/Header';
import Content from './views/home/Content';
import WalkDetails from './views/list/WalkDetails'
import WalkCreator from './views/creating/WalkCreator'
import Resources from './views/Resources'
import Contact from './views/about/About';
import WalkList from "./views/list/WalkList";
import './App.css'

class App extends Component{
    render(){
        return(
            <HashRouter>
              <div className="wrapper">
                <Header/>
                <Container>
                  <Switch>
                    <Route exact path='/' component={Content}/>
                    <Route path='/walk/create' component={WalkCreator}/>
                    <Route path='/walks/all' component={WalkList}/>
                    <Route path='/walk/details' component={WalkDetails}/>
                    <Route path='/resources' component={Resources}/>
                    <Route path='/contact' component={Contact}/>
                  </Switch>
                </Container>
              </div>
            </HashRouter>
        )
    }
}

export default App;