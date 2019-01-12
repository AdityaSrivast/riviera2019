import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ComingSoon extends Component {
    render() {
        return (
            <div className="coming-soon-wrapper">
                <div style={{ textAlign: 'center' }}>
                    <h1>Coming Soon !</h1>
                    <NavLink to="/" ><button className="c-btn comingsoon-btn">Go back Home</button></NavLink>
                </div>
            </div>
        );
    }
}

export default ComingSoon;
