import React from 'react';
import '../styles/common.css';


const Header = (props) => {
    return (
        <div className="header" style={{ backgroundImage: `url(${props.image})` }}>
            <div className="nav-buttons-wrapper">
            <a href="https://vtop11.vit.ac.in/riviera/" target="_blank" rel="noopener noreferrer">
                <button className="nav-button">Register</button>
            </a>
            </div>
            <h2>{props.title}</h2>
        </div>
    );
}

export default Header;