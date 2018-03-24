import React from 'react';
import TechLogo from './TechLogo'

class TechItem extends React.Component{
    
    render(){
        let data = this.props.data
        return (
            <div className="tech-item" >
                <h3 className='tech-item-title'>{this.props.caption}</h3>
                <article className='tech-item-caption'>
                    <div className="skill-icon"> 
                        {data !== undefined && data.map((item) => {return <TechLogo key={item.name} url={item.img} skillName={item.name}/>})}
                    </div>
                </article>
            </div>
        )
    }
}


export default TechItem;