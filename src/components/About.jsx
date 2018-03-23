import React from 'react';
import TechItem from './TechItem';
import techData from '../data/tech-data.js';

class About extends React.Component {
    // constructor(props){
    //     super(props)
        
    //     this.state = {
    //         frameIsOpen: false,

    //     }

    //     // this.pogo = this.pogo.bind(this);
    // }

    componentWillMount({...props}){
        this.props.aboutRender()
    }
    componentWillUnmount(){
        this.props.aboutRender()
    }

    // pogo(event){
    //     const target = event.target.classList;
    //     if(target[0] === 'tech-item'){
    //         target.toggle('tech-item-active');
    //         this.setState({frameIsOpen: !this.state.frameIsOpen});
    //     };
        
    // }

    render(){
        return(
            <div className="about-wrp">
                <div className="about-header">
                    <span>ABOUT ME</span>     
                </div>
                <div className="about">
                    {techData.map((item)=>{
                        return <TechItem
                            key={item.id} 
                            caption={item.caption}
                            data={item.skills}
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