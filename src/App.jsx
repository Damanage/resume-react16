import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';


import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>

          <Route exact path='/about' component={About}/>
          <Route exact path='/portfolio' component={Portfolio}/>

        </div>
      </Router>
    );
  }
}

export default App;
