import React from 'react';
import '../styles/common.css';


const Header = (props) => {
    let regLink;
    if(props.regLink){
        regLink = props.regLink;
    }else{
        regLink = "https://vtop11.vit.ac.in/riviera/";
    }
    return (
        <div className="header" style={{ backgroundImage: `url(${props.image})`, backgroundPosition: `${props.position}` }}>
            <div className="nav-buttons-wrapper">
            <a href={regLink} target="_blank" rel="noopener noreferrer">
                <button className="nav-button">Register</button>
            </a>
            </div>
            <h2>{props.title}</h2>
        </div>
    );
}

export default Header;