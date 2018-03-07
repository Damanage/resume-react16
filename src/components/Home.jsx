import React from 'react';
import {NavLink} from 'react-router-dom';
import homeData from '../data/homeData.js';

const Home = (props) => {
    return(
        <div className="home-wrapper">
            <div className="home">
                {homeData.test}
            </div>

            <NavLink to='/about' activeClassName='header-menu--active'>Next</NavLink>
        </div>
    )
}

export default Home;

