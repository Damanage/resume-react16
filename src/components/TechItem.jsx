import React from 'react';

const TechItem = ({...props, caption}) => {
    return (
        <div className="tech-item" >
            <h3 className='tech-item-title'>{caption}</h3>
            <article className='tech-item-caption'>
                <div className="skill-icon"> 
                </div>
            </article>
        </div>
    )
}

export default TechItem;