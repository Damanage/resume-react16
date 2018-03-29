import React from 'react';

const PortfolioItem = ({ imgAlt, caption, imgLink, itemClass, ...props}) => {
    return(
        <figure className={itemClass}>
            <div className="img-wrp">
                <img src={imgLink} alt={imgAlt}/>
            </div>
            <figcaption>
                <h3>{caption}</h3>
                <div className="caption-text">
                    text caption
                </div>
                <a href="https://damanage.github.io/Savanah-Digest-Page/" rel="noopener noreferrer" target='_blank'>Live Demo</a>
            </figcaption>
        </figure>
    )
}

PortfolioItem.defaultProps = {
    imgAlt: 'alt text for img'
}

export default PortfolioItem;