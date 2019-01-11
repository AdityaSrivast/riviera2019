import React, { Component } from 'react';

// import AboutUsImg from './../../images/about.png'
import './../css/About.css';

class About extends Component {
    render() {
        return (
            <div className="about-us-wrapper tac">
                <div className="spon-heading">
                    <h1 className="heading">About Riviera</h1>
                </div>
                <div className="about-content">
                    <div>
                        <p>
                        Riviera is the sports and cultural fest of VIT, Vellore which was started 
                        in the year 2000 and has been on an exponential curve ever since. This International 
                        sports and Cultural fest is an ISO 9001-2015 certified event and is regarded as the
                        5th best cultural fest in India by top notch sources. Riviera witnesses over 40,000
                        students from 700 colleges from all over India and across the globe from countries
                        like China, Nigeria, Tanzania and the crowd keeps growing in number year after 
                        year. <span className="hide-sm">This is one fest with something for everybody. And those somethings have 
                        a sky high standard and world class facilities to match. Dancers have their 
                        formidable competition at the Frisk Factor and the drama freaks get to come 
                        and show off what they’ve got at our very own stage play competition: The World 
                        is a Stage! Gamers also aren’t left unnoticed with the amazing marathons of cyber 
                        engagement that take place.</span> This annual party isn’t just about the fun aspect of 
                        things, the achievements speak volumes about the quality of participants we have.
						</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;