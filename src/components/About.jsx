import React from 'react';
import TechItem from './TechItem';
import techData from '../data/tech-data.js';

const About = (props) => {
    console.log(techData.caption)
    return(
        <div className="about-wrp">
            <div className="about">
                {techData.map((item)=>{
                   return <TechItem
                        key={item.id} 
                        caption={item.caption} 
                        article={item.article}/>

                        }
                    )
                }

            </div>
        </div>
    )
}

export default About;