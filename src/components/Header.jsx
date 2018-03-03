import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Header = (props) => {
    return(
        <div className='header-wrp'>
            <Link to='/about' className='btn'>About</Link>
            
            <Link to='/portfolio' className='btn'>Portfolio</Link>
            
        </div>
    )
}



export default Header;