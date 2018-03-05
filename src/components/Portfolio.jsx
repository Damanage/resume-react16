import React from 'react';
import PortfolioItem from './PortfolioItem';
import portfolioData from '../data/portfolioData.js';


const Portfolio = (props) => {
    return(
        <div className="portfolio-wrp">
            {portfolioData.map(item => 
                <PortfolioItem
                    key={item.id}
                    caption={item.caption}
                    imgLink={process.env.PUBLIC_URL + item.url}
                />
            )}
        </div>
    )
}

export default Portfolio;