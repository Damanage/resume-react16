import React from 'react';
import PortfolioItem from './PortfolioItem';
import portfolioData from '../data/portfolioData.js';

class Portfolio extends React.Component {
    componentWillMount({...props}){
        this.props.aboutRender()
    }
    
    render(){
        return(
            <div className="portfolio-page">
               <div className="portfolio-header">
                    <span>PROJECTS</span>
               </div> 
        
                <div className="portfolio-wrp">
                    <div className="portfolio-item-list">
                        {portfolioData.map(item => 
                            <PortfolioItem
                                key={item.id}
                                caption={item.caption}
                                imgLink={process.env.PUBLIC_URL + item.url}
                            />
                        )}
                    </div>
                </div>
        
            </div>
        )
    }
}


export default Portfolio;