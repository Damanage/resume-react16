import React from 'react';
import TechItem from './TechItem';
import techData from '../data/tech-data.js';

class About extends React.Component {
    constructor(props){
        super(props)

        this.pogo = this.pogo.bind(this);
    }
    state = {
        frameIsOpen: true
    }


    pogo(event){
        const target = event.target.classList;
        if(target[0] === 'tech-item'){
            target.toggle('tech-item-active');
        };
    }

    render(){
        return(
            <div className="about-wrp">
                <div className="about">
                    {techData.map((item)=>{
                        return <TechItem
                            key={item.id} 
                            caption={item.caption} 
                            article={item.article}
                            pogo={this.pogo}
                            />
                            }
                        )
                    }
         
                </div>
            </div>
        )

        
    } 
        

};



export default About;