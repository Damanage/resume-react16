import React from 'react';
import ToolBarLink from './ToolBarLink';
// import Logo from './Logo';

class HeaderMobile extends React.Component{
    constructor(props){
        super(props)

        this.menuShower = this.menuShower.bind(this); 
    }

    menuShower(){
        const sideNav = document.querySelectorAll('.nav-mobile');
        sideNav[0].classList.toggle('nav-mobile-active');
    }

    render(){
        return(
            <div className="header-sub-wrp">
                <div className="header-logo">
                    <div className="menu-icon">
                        <i onClick={this.menuShower} className="material-icons">menu</i> 
                    </div>

                    <div className="logo-text">
                        <span className='name' style={{color: this.props.textColor}}>Dmitry</span>
                        <span className='name' style={{color: this.props.textColor}}>Chekunov</span>
                        <span className='spec'>web-development</span>
                    </div>

                </div>

                <nav className='nav-mobile'> 
                    <div className="nav-wrapper">
                        <ToolBarLink exact to='/home'  className='header-menu hdr-menu-1' icon='home'>Home</ToolBarLink>
                        <ToolBarLink to='/about'  className='header-menu hdr-menu-2' icon='person'>About</ToolBarLink>
                        <ToolBarLink to='/portfolio'  className='header-menu hdr-menu-3' icon='insert_photo'>Portfolio</ToolBarLink>
                        <ToolBarLink to='/contacts'  className='header-menu hdr-menu-4' icon='record_voice_over'>Contacts</ToolBarLink>
                        <ToolBarLink to='/resume'  className='header-menu hdr-menu-5' icon='content_paste'>Resume</ToolBarLink>                    
                    </div>
                    <div className="nav-overlay" onClick={this.menuShower}>
                    </div>  
                </nav>
            </div>

        )
    }
}

export default HeaderMobile;