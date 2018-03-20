import React from 'react';
// import logo from '../img/logo.jpg';

const Logo = ({...props, width}) => {
    return(
        <div className="header-logo">
            {   width<=600 
                ? 
                <i className="material-icons menu-icon" onClick={()=>console.log(width)}>menu</i> 
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