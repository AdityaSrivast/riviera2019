import React, { Component } from 'react';
import renderHTML from 'react-render-html';

import Logo from './../../images/rivieralogowhiteShadow.svg';
import LandingText from '../..//images/landingText.svg';


class Landing extends Component {
    constructor() {
        super();
        this.state = {
            countdown: '',
            target_date: ''
        }
    }
    pad = (n) => {
        return (n < 10 ? '0' : '') + n;
    }
    getCountdown = () => {
        let pad = this.pad;
        let days, hours, minutes, seconds; // variables for time units
        let countdown;
        // find the amount of "seconds" between now and target
        let current_date = new Date().getTime();
        let seconds_left = (this.state.target_date - current_date) / 1000;

        days = pad(parseInt(seconds_left / 86400));
        seconds_left = seconds_left % 86400;

        hours = pad(parseInt(seconds_left / 3600));
        seconds_left = seconds_left % 3600;

        minutes = pad(parseInt(seconds_left / 60));
        seconds = pad(parseInt(seconds_left % 60));

        // format countdown string + set tag value
        countdown = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span class='hide-in-phone'>" + seconds + "</span>";
        this.setState({ countdown });
    }
    componentDidMount() {
        let target_date = new Date('14 Feb 2019').getTime(); // set the countdown date
        this.setState({ target_date });
        this.getCountdown();
        setInterval(() => { this.getCountdown(); }, 1000);
    }
    render() {
        return (
            <div>
                <div className="back-img">
                    <div className="nav-buttons-wrapper">
                        <a href="https://vtop11.vit.ac.in/riviera/" target="_blank" rel="noopener noreferrer">
                            <button className="nav-button">Register</button>
                        </a>
                        <button onClick={()=> this.props.fullpageApi.moveTo(5, 0)} className="nav-button">Contact Us</button>
                    </div>
                    <div className="riviera-logo">
                        <img src={Logo} alt="Logo" id="head-logo" className="main-riviera-logo" />
                        <img src={LandingText} alt="tagline" className="tagline-logo" />
                        <span className="landing-date">14-17th FEBRUARY</span>
                    </div>
                    <div>
                        <div className="countdown">
                            <div className="coming-in">Coming In</div>
                            <div className='tiles'>{renderHTML(this.state.countdown)}</div>
                            <div class="labels">
                                <li>Days</li>
                                <li>Hours</li>
                                <li>Mins</li>
                                <li className="hide-in-phone">Secs</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;