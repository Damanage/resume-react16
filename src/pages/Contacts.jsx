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
                    <div className="contact-list">
                        <div className="contact-item">
                            Git
                        </div>
                        <div className="contact-item">
                            Post
                        </div>
                        <div className="contact-item">
                            LinkenId
                        </div>
                        <div className="contact-item">
                            phone
                        </div>
                    </div>
                </div>    
            </div>  
        );
    }
}


export default Contacts;