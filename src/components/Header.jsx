import React from 'react';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';



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
    }

    colorChangeMachine(nextProps){
        if(/about/.test(nextProps.currentUrl) === true){
            this.colorPicker('.about-header');
        }
        else if(/portfolio/.test(nextProps.currentUrl) === true){
            this.colorPicker('.portfolio-header');
        }
        else if(/contacts/.test(nextProps.currentUrl) === true){
            this.colorPicker('.contacts-header');
        }
        else if(/resume/.test(nextProps.currentUrl) === true){
            this.colorPicker('.resume-header');
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
            <div className='header-wrp'>
                {this.state.width <= 600 ?
                <HeaderMobile  textColor={this.state.textColor}/> 
                :
                <HeaderDesktop textColor={this.state.textColor}/>}    
            </div>
        )
    }
}



export default Header;