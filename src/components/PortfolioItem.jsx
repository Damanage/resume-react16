import React from 'react';

const PortfolioItem = ({ imgAlt, caption, imgLink, ...props}) => {
    return(
        <figure className="portfolio-item">
            <img src={imgLink} alt={imgAlt}/>
            <figcaption>
                {caption}
            </figcaption>
        </figure>
    )
}

PortfolioItem.defaultProps = {
    imgAlt: 'alt text for img'
}

export default PortfolioItem;