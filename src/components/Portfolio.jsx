import React from 'react';
import PortfolioItem from './PortfolioItem';
import portfolioData from '../data/portfolioData.js';
import SideNav from './SideNav'
import {Route} from 'react-router-dom';


const Portfolio = (props) => {
    return(
        <div className="portfolio-page">
            <Route path='/portfolio' component={SideNav}/>

            <div className="portfolio-wrp">
                {portfolioData.map(item => 
                    <PortfolioItem
                        key={item.id}
                        caption={item.caption}
                        imgLink={process.env.PUBLIC_URL + item.url}
                    />
                )}
            </div>

        </div>
    )
}

export default Portfolio;