import React from 'react';
// import logo from '../img/logo.jpg';

const Logo = ({...props, width, clickMachine}) => {
    return(
        <div className="header-logo">
            {   width<=600 
                ? 
                <div className="menu-icon">
                    <i className="material-icons" onClick={clickMachine}>menu</i> 
                </div>
                :
                <div className="logo">
                </div>
            }
                

            <div className="logo-text">
                <span className='name' >Dmitry</span>
                <span className='name' >Chekunov</span>
                <span>web-development</span>
            </div>
        </div>
    )
};

export default Logo;