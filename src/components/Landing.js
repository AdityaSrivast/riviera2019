import React, { Component } from 'react';
import Logo from './../images/rivieralogo.png';

class Landing extends Component{
    render(){
        return (
            <div>
                <div className="back-img">
                    <img src={Logo} alt="Logo" id="head-logo" />
                </div>
            </div>
        );
    }
}

export default Landing;