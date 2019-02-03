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
                            VIT Vellore is proud to present Riviera, a cultural extravagance!
                            The birth of Riviera was in the year 2000 with an idea to create something big, and we have stuck to that idea and grown exponentially ever since then. This sports and cultural fest is an ISO 9001-2015 certified event and is considered one of the best college festival in the country. Riviera witnesses over 40,000 students from 700 colleges from all over India and across the globe. 
                            From Comedy nights to Gaming Tournaments. From Quizzes to Marathons. From Literary competitions to Sporting leagues. Riviera has it all!
                            This 4-day long fest is not just about fun but also about creating the next generation of extraordinary students who not just excel in academics but also sports and culturals.
						</p>
                    </div>
                </div>


                <div className="spon-heading">
                    <h1 className="heading">Theme</h1>
                </div>
                <div className="about-content">
                    <div>
                        <p>
                            Ever realized how there is a certain sequence to the things you do on daily basis? A subconscious natural rhythm takes over your body as soon as you wake up in the morning. Eat, work, repeat. Monotony is when you let your routine dictate your schedule, your choices and your life. So, Take charge, do something thrilling and electrifying, come <b>Shatter the monotony</b>  at Riviera '19
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;