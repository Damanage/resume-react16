import React from 'react';
import ToolBarLink from './ToolBarLink';

const HeaderDesktop = ({textColor, ...props}) => {
    return(
        <div className='header-sub-wrp'>
            <div className="header-logo">
                <div className="logo"> </div>

                <div className="logo-text">
                    <span className='name' style={{color:textColor}} >Dmitry</span>
                    <span className='name' style={{color:textColor}} >Chekunov</span>
                    <span>web-development</span>
                </div>
            </div>

            <nav className='nav-mobile'>   
                <ToolBarLink exact to='/home'  className='header-menu hdr-menu-1' icon='home'>Home</ToolBarLink>
                <ToolBarLink to='/about'  className='header-menu hdr-menu-2' icon='person'>About</ToolBarLink>
                <ToolBarLink to='/portfolio'  className='header-menu hdr-menu-3' icon='insert_photo'>Portfolio</ToolBarLink>
                <ToolBarLink to='/contacts'  className='header-menu hdr-menu-4' icon='record_voice_over'>Contacts</ToolBarLink>
                <ToolBarLink to='/resume'  className='header-menu hdr-menu-5' icon='content_paste'>Resume</ToolBarLink>                    
            </nav>
        </div>
    )
}

export default HeaderDesktop;