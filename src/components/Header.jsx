import React from 'react';
import ToolBarLink from './ToolBarLink';

class Header extends React.Component{
    componentWillMount(){
        console.log('mounted')
    }
    render(){
        return(
            <div className='header-wrp'>
                <ToolBarLink exact to='/home'  className='header-menu hdr-menu-1' icon='home'>Home</ToolBarLink>
                <ToolBarLink to='/about'  className='header-menu hdr-menu-2' icon='person'>About</ToolBarLink>
                <ToolBarLink to='/portfolio'  className='header-menu hdr-menu-3' icon='insert_photo'>Portfolio</ToolBarLink>
                <ToolBarLink to='/contacts'  className='header-menu hdr-menu-4' icon='record_voice_over'>Contacts</ToolBarLink>
                <ToolBarLink to='/contacts'  className='header-menu hdr-menu-5' icon='content_paste'>Resume</ToolBarLink>
            </div>
        )
    }
}



export default Header;