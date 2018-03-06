import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
        <div className="App">
          <Header/>


          <div className="content">

            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route path='/portfolio' component={Portfolio}/>
              <Route component={NotFound}/>
            </Switch>

          </div>


        </div>
      </Router>
    );
  }
}

export default App;
