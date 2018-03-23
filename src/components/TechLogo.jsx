import React from 'react';


const TechLogo = ({url, skillName, ...props}) => {
    return(
        <div className="skill">
            <img className='skill-icon' src={url} alt=""/>
            <span>{skillName}</span>
        </div>
    )
}

export default TechLogo;