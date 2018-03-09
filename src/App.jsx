import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './App.css';

//components
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';



// pages components
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <Route render={({location})=>(

          <div className="App">
            <Header/>


            <div className="content">

              <TransitionGroup className='content-sub-wrp'>

                <CSSTransition key={location.key} classNames="fade" timeout={200}>  
                  <Switch location={location}>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route path='/portfolio' component={Portfolio}/>
                    <Route component={NotFound}/>
                  </Switch>
                </CSSTransition>

              </TransitionGroup>

            </div>


          </div>

        )}/>
      </Router>
    );
  }
}

export default App;
