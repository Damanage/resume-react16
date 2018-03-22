import React from 'react';
// import ToolBarLink from './ToolBarLink';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
// import Logo from './Logo';


class Header extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            width: window.innerWidth,
            textColor: 'orange'  
        }

        this.colorChangeMachine = this.colorChangeMachine.bind(this);
    }

    componentWillMount(){
        window.addEventListener('resize', this.windowWidthChange)
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.windowWidthChange)
    }
    componentWillReceiveProps(nextProps){
        this.colorChangeMachine(nextProps)
        console.log(nextProps.currentUrl)
    }

    colorChangeMachine(nextProps){
        if(/about/.test(nextProps.currentUrl) === true){
            this.colorPicker('.about-header');
        }
        else if(/portfolio/.test(nextProps.currentUrl) === true){
            this.colorPicker('.portfolio-header');
        }
        
    };

    colorPicker(elemName){
        let elem = document.querySelector(elemName);
        let bgc = getComputedStyle(elem).backgroundColor;
        this.setState({textColor: bgc});
    };

    windowWidthChange = () => {
        this.setState({width: window.innerWidth})
    }
    
    render(){
        return(
            <div className='header-wrp' style={{color: this.state.textColor}}>
                {/* <Logo width={this.state.width} clickMachine={this.clickMachine}/>
                <nav className='nav-mobile'>   
                    <ToolBarLink exact to='/home'  className='header-menu hdr-menu-1' icon='home'>Home</ToolBarLink>
                    <ToolBarLink to='/about'  className='header-menu hdr-menu-2' icon='person'>About</ToolBarLink>
                    <ToolBarLink to='/portfolio'  className='header-menu hdr-menu-3' icon='insert_photo'>Portfolio</ToolBarLink>
                    <ToolBarLink to='/contacts'  className='header-menu hdr-menu-4' icon='record_voice_over'>Contacts</ToolBarLink>
                    <ToolBarLink to='/resume'  className='header-menu hdr-menu-5' icon='content_paste'>Resume</ToolBarLink>                    
                </nav> */}

                {this.state.width <= 600 ? <HeaderMobile /> : <HeaderDesktop/>}    
            </div>
        )
    }
}



export default Header;