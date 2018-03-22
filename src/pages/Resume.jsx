import React from 'react';

class Resume extends React.Component{
    componentWillMount({...props}){
        this.props.aboutRender()
    }
    render(){
        return(
            <div className="resume-page">
                <div className="resume-header">
                    <span>RESUME</span>
                </div>
                <div className="resume">
                    Resume info must be here
                </div>    
            </div>  
        );   
    }
}
export default Resume;