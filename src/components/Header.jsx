import React from 'react';
import ToolBarLink from './ToolBarLink';

const Header = (props) => {
    return(
        <div className='header-wrp'>
            <ToolBarLink exact to='/' className='header-menu'>Home</ToolBarLink>
            <ToolBarLink to='/about' className='header-menu'>About</ToolBarLink>
            <ToolBarLink to='/portfolio' className='header-menu'>Portfolio</ToolBarLink>
            
        </div>
    )
}



export default Header;