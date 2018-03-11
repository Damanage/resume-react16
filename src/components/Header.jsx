import React from 'react';
import ToolBarLink from './ToolBarLink';

class Header extends React.Component{
    componentWillMount(){
        console.log('mounted')
    }
    render(){
        return(
            <div className='header-wrp'>
                <ToolBarLink exact to='/home' className='header-menu'>Home</ToolBarLink>
                <ToolBarLink to='/about' className='header-menu'>About</ToolBarLink>
                <ToolBarLink to='/portfolio' className='header-menu'>Portfolio</ToolBarLink>
                
            </div>
        )
    }
}



export default Header;