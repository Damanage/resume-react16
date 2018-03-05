import React from 'react';
import {NavLink} from 'react-router-dom';

const ToolBarLink = ({children, ...props}) => {
    return(
        <NavLink activeClassName='header-menu--active' {...props}>{children}</NavLink>
    )
}

export default ToolBarLink;