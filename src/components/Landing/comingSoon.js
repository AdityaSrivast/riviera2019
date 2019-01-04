import React, { Component } from 'react';
import renderHTML from 'react-render-html';

import Logo from './../../images/rivieralogowhite.png';
import './../css/comingSoon.css';

class ComingSoon extends Component {
    constructor() {
        super();
        this.state = {
            countdown: '',
            target_date: ''
        }
    }
    pad = (n)  => {
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
        let target_date = new Date().getTime() + (3520776156); // set the countdown date
        this.setState ({ target_date });
        this.getCountdown();
        setInterval( () => { this.getCountdown(); }, 1000);
    }
    render() {
        return (
            <div className="cs-wrapper">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>

                <div className="rv-text"><img src={Logo} alt="Logo" /></div>
                <div className="cs-text-wrapper">
                    <div className="cs-text">
                        {/* <h1 class="glitch" data-text="Coming_Soon">Coming_Soon</h1> */}
                        <br />
                        <div className="social-icons">
                            <a href="https://www.facebook.com/rivieraVITUniversity/">
                                <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.instagram.com/rivieravituniversity/">
                                <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCdqk7wzTloAVBY_j4p4weAg">
                                <i class="fa fa-youtube fa-2x" aria-hidden="true"></i>
                            </a>
                        </div>
                        <br />
                        <div className="countdown">
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
        )
    }
}

export default ComingSoon;