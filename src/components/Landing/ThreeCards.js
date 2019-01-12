import React, { Component } from 'react';
import { Button, Grid } from '@material-ui/core';

import './../css/ThreeCard.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { NavLink } from 'react-router-dom';
import Slider from "react-slick";

import events from '../../images/events.svg';
import proshows from '../../images/proshows.svg';
import sports from '../../images/sports.svg';

class ThreeCards extends Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="eps-wrapper">
                {/* <p>Events, proshows, Sports</p> */}
                <Grid container spacing={24} className="hide-sm three-card-wrapper">
                    <Grid item md={4} sm={4} xs={6} className="tac ">
                        <div className="threecard-card">
                            <div className="threecard-item">
                            {/* <NavLink className="threecard-item" to="/events"> */}
                                <img src={events} alt="Events" />
                                <p>EVENTS</p>
                                <p className="three-card-tagline"> Exclusive events brought to you by our very own clubs and chapters</p>
                            {/* </NavLink> */}
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={4} sm={4} xs={6} className="tac">
                        <div className="threecard-card">
                            {/* <NavLink className="threecard-item" to="/proshows"> */}
                            <div className="threecard-item">
                                <img src={sports} alt="Sports" />
                                <p>SPORTS</p>
                                <p className="three-card-tagline">Goals, Sweat and so much more.<br /><br /></p>
                            {/* </NavLink> */}
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={4} sm={4} xs={6} className="tac">
                        <div className="threecard-card">
                            {/* <NavLink className="threecard-item" to="/sports"> */}
                            <div className="threecard-item">
                                <img src={proshows} alt="Proshows" />
                                <p>PROSHOWS</p>
                                <p className="three-card-tagline">
                                    The heart and soul of Riviera, a grand showcase of the best talents in India
                                </p>
                            {/* </NavLink> */}
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <div className="show-sm three-card-wrapper">
                    <Slider {...settings}>
                        <div className="threecard-card">
                            {/* <NavLink className="threecard-item" to="/events"> */}
                            <div className="threecard-item">
                                <img src={events} alt="Events" />
                                <p>EVENTS</p>
                                <p className="three-card-tagline"> Exclusive events brought to you by our very own clubs and chapters</p>
                            {/* </NavLink> */}
                            </div>
                        </div>
                        <div className="threecard-card">
                            <div className="threecard-item">
                            {/* <NavLink className="threecard-item" to="/proshows"> */}
                                <img src={sports} alt="Sports" />
                                <p>SPORTS</p>
                                <p className="three-card-tagline">Goals, Sweat and so much more. The greatest exhibitions of human spirit and perseverence from accross the country</p>
                            {/* </NavLink> */}
                            </div>
                        </div>
                        <div className="threecard-card">
                            <div className="threecard-item">
                            {/* <NavLink className="threecard-item" to="/sports"> */}
                                <img src={proshows} alt="Proshows" />
                                <p>PROSHOWS</p>
                                <p className="three-card-tagline">
                                    The heart and soul of Riviera, a grand showcase of the best talents in India
                                </p>
                            {/* </NavLink> */}
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

export default ThreeCards;
