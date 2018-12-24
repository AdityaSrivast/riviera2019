import React from 'react';
import '../styles/common.css';
// import image from '../images/events.jpg';
// const background
const Header = (props) => {
    console.log(props.image);
    return(
        <div className="header" style={{backgroundImage: `url(${props.image})`}}>
            <h2>{props.title}</h2>
        </div>
    );
}

export default Header;