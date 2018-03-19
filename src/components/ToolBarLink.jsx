import React from 'react';
import {NavLink} from 'react-router-dom';

const ToolBarLink = ({children, icon, ...props}) => {
    return(
        <NavLink activeClassName='header-menu--active' {...props}>
            <i className="material-icons">{icon}</i>
            <span>{children}</span> 
        </NavLink>
    )
}

export default ToolBarLink;