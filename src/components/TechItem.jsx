import React from 'react';

const TechItem = ({...props, caption, article, pogo, hiddenText}) => {
    return (
        <div className="tech-item" onClick={pogo}>
            <h3 className='tech-item-caption'>{caption}</h3>
            <article className='tech-item-caption'>{article}</article>
            <p>{hiddenText}</p>
        </div>
    )
}

export default TechItem;