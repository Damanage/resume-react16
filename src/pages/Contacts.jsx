import React from 'react';


class Contacts extends React.Component{
    componentWillMount({...props}){
        this.props.aboutRender()
    }
    
    render(){
        return(
            <div className="contacts-page">
                <div className="contacts-header">
                    <span>CONTACTS</span>
                </div>
                <div className="contacts">
                    Contacts info must be here
                </div>    
            </div>  
        );
    }
}


export default Contacts;