import React from 'react';

const PortfolioItem = ({ imgAlt, caption, imgLink, ...props}) => {
    return(
        <figure className="portfolio-item">
            <div className="img-wrp">
                <img src={imgLink} alt={imgAlt}/>
            </div>
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