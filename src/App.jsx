import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { TransitionGroup, CSSTransition} from "react-transition-group";

import './App.css';

//components
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contacts from './pages/Contacts';
import Resume from './pages/Resume';



// pages components
import NotFound from './pages/NotFound';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      isMount: false
    }

    this.headerStatusChange = this.headerStatusChange.bind(this)
  }


  headerStatusChange(){
    this.setState({isMount: !this.state.isMount});
  }

  render() {
    return (
      <Router>
        <Route render={({location})=>(

          <div className="App">
          
            <Route exact path="/" render={() => <Redirect to="/home" />} />

            
          
            <CSSTransition in={!this.state.isMount} key={location.key} classNames='test' timeout={500}>
              
              {!this.state.isMount ? <Header/>:<div></div>  }
            </CSSTransition> 
          
          
            
            <div className="content">

              <TransitionGroup className='tr-group'>

                <CSSTransition  key={location.key} classNames="fade" timeout={1400}>  
                  <Switch location={location}>
                    <Route exact path='/home' render={()=><Home headerStatusChange={this.headerStatusChange}/>}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/portfolio' component={Portfolio}/>
                    <Route exact path='/contacts' component={Contacts}/>
                    <Route exact path='/resume' component={Resume}/>
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
