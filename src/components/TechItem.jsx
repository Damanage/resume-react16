import React from 'react';

const TechItem = ({...props, caption, article, pogo}) => {
    return (
        <div className="tech-item" onClick={pogo}>
            <h3 className='tech-item-caption'>{caption}</h3>
            <article className='tech-item-caption'>{article}</article>
        </div>
    )
}

export default TechItem;