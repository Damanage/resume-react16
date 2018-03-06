import React from 'react';

import homeData from '../data/homeData.js';

const Home = (props) => {
    return(
        <div className="home-wrapper">
            <div className="home">
                {homeData.test}
            </div>
        </div>
    )
}

export default Home;

