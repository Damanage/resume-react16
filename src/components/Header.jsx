import React from 'react';
import ToolBarLink from './ToolBarLink';
import Logo from './Logo';


class Header extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            width: window.innerWidth
        }
    }
    componentWillMount(){
        window.addEventListener('resize', this.windowWidthChange)
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.windowWidthChange)
    }

    windowWidthChange = () => {
        this.setState({width: window.innerWidth})
    }
    
    render(){
        return(
            <div className='header-wrp'>
                <Logo width={this.state.width}/>
                <nav>   
                    <ToolBarLink exact to='/home'  className='header-menu hdr-menu-1' icon='home'>Home</ToolBarLink>
                    <ToolBarLink to='/about'  className='header-menu hdr-menu-2' icon='person'>About</ToolBarLink>
                    <ToolBarLink to='/portfolio'  className='header-menu hdr-menu-3' icon='insert_photo'>Portfolio</ToolBarLink>
                    <ToolBarLink to='/contacts'  className='header-menu hdr-menu-4' icon='record_voice_over'>Contacts</ToolBarLink>
                    <ToolBarLink to='/resume'  className='header-menu hdr-menu-5' icon='content_paste'>Resume</ToolBarLink>                    
                </nav>
            </div>
        )
    }
}



export default Header;