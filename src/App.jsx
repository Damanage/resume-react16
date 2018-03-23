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
      isMount: false,
      currentUrl: window.location.href
    }

    this.headerStatusChange = this.headerStatusChange.bind(this);
    this.aboutRender = this.aboutRender.bind(this);
  }


  headerStatusChange(){
    this.setState({isMount: !this.state.isMount});
  }
  aboutRender(){
    this.setState({currentUrl: window.location.href});
  }

  render() {
    return (
      <Router>
        <Route render={({location})=>(

          <div className="App">
          
            <Route exact path="/" render={() => <Redirect to="/home" />} />

            
          
            <CSSTransition in={!this.state.isMount} key={location.key} classNames='test' timeout={500}>
              
              {!this.state.isMount ? <Header currentUrl={this.state.currentUrl}/>:<div></div>}

            </CSSTransition> 
          
          
            
            <div className="content">

              <TransitionGroup className='tr-group'>

                <CSSTransition  key={location.key} classNames="fade" timeout={800}>  
                  <Switch location={location}>
                    <Route exact path='/home' render={()=><Home headerStatusChange={this.headerStatusChange}/>}/>
                    <Route exact path='/about' render={()=><About aboutRender={this.aboutRender}/>}/>
                    <Route exact path='/portfolio' render={()=><Portfolio aboutRender={this.aboutRender}/>} />
                    <Route exact path='/contacts' render={()=><Contacts aboutRender={this.aboutRender}/>} />
                    <Route exact path='/resume' render={()=><Resume aboutRender={this.aboutRender}/>} />
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
