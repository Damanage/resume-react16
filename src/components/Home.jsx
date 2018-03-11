import React from 'react';
import {NavLink} from 'react-router-dom';
import homeData from '../data/homeData.js';

class Home extends React.Component {
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         in: true
    //     }
    // }
    // componentWillMount({...props}){
    //     this.props.Joe()
    // }
    // componentWillUnmount(){
    //     this.setState({in: false})
    // }

    render(){
        return(
            <div className="home-wrapper">
                <div className="home">
                    {homeData.test}
                </div>

                <NavLink to='/about' className='next-btn-wrp'>
                    <i className="material-icons next-button">arrow_forward</i>
                </NavLink>
            </div>
        )
    }
}

export default Home;

