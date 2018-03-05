import React from 'react';
import {NavLink} from 'react-router-dom';

const SideNav = () => {
    return(
        <div className="side-nav">
            <NavLink to='/apps'>app</NavLink>
            <NavLink to='/static'>static</NavLink>
        </div>
    );
}

export default SideNav;