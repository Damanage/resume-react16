import React from 'react';
import {NavLink} from 'react-router-dom';
import homeData from '../data/homeData.js';

const Home = (props) => {
    return(
        <div className="home-wrapper">
            <div className="home">
                {homeData.test}
            </div>

            <NavLink to='/about' className='next-btn-wrp' activeClassName='header-menu--active'>
                <i className="material-icons next-button">arrow_forward</i>
            </NavLink>
        </div>
    )
}

export default Home;

