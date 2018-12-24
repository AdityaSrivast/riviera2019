import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import './../css/ThreeCard.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Button } from '@material-ui/core';
import {NavLink} from 'react-router-dom';

import Slider from "react-slick";

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
                <Grid container spacing={24} className="hide-sm">
                    <Grid item md={4} sm={4} xs={6} >
                        <div className="card-1 c-card">
                            <h1>EVENTS</h1>
                            <br />
                            <div>
                                <p>
                                    Vel et officia fuga est voluptatem voluptatum.
                                    Vel et officia fugavoluptatem voluptatum.
                                </p>
                                {/* <button className="eps-btn">Go to Events</button> */}
                                <NavLink className="eps-btn navlink-btn" to="/events">
                                {/* <div className="eps-btn"> */}
                                    <Button>Go to Events</Button>
                                {/* </div> */}
                                </NavLink>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={4} sm={4} xs={6}>
                        <div className="card-2 c-card">
                            <h1>PROSHOWS</h1>
                            <br />
                            <div>
                                <p>
                                    Vel et officia fuga est voluptatem voluptatum.
                                    Vel et officia fugavoluptatem voluptatum.
                                </p>
                                {/* <button className="eps-btn">Go to Proshows</button> */}
                                {/* <div className="eps-btn"> */}
                                <NavLink className="eps-btn navlink-btn" to="/proshows">
                                    <Button>Go to Proshows</Button>
                                </NavLink>
                                {/* </div> */}
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={4} sm={4} xs={6} >
                        <div className="card-3 c-card">
                            <h1>SPORTS</h1>
                            <br />
                            <div>
                                <p>
                                    Vel et officia fuga est voluptatem voluptatum.
                                    Vel et officia fugavoluptatem voluptatum.
                                </p>
                                {/* <button className="eps-btn">Go to Sports</button> */}
                                {/* <div className="eps-btn"> */}
                                <NavLink className="eps-btn navlink-btn" to="/sports">
                                    <Button>Go to Sports</Button>
                                </NavLink>
                                {/* </div> */}
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <div className="show-sm">
                <Slider {...settings}>
                    <div className="card-1 c-card">
                        <h1>EVENTS</h1><br />
                        <div>
                            <p>
                                Vel et officia fuga est voluptatem voluptatum.
                                Vel et officia fugavoluptatem voluptatum.
                            </p>
                            {/* <button className="eps-btn">Go to Events</button> */}
                            <NavLink className="eps-btn navlink-btn" to="/events">
                            {/* <div className="eps-btn"> */}
                                <Button>Go to Events</Button>
                            {/* </div> */}
                            </NavLink>
                        </div>
                    </div>
                    <div className="card-2 c-card">
                        <h1>PROSHOWS</h1>
                        <br />
                        <div>
                            <p>
                                Vel et officia fuga est voluptatem voluptatum.
                                Vel et officia fugavoluptatem voluptatum.
                            </p>
                            {/* <button className="eps-btn">Go to Proshows</button> */}
                            {/* <div className="eps-btn"> */}
                            <NavLink className="eps-btn navlink-btn" to="/proshows">
                                <Button>Go to Proshows</Button>
                            </NavLink>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="card-3 c-card">
                        <h1>SPORTS</h1>
                        <br />
                        <div>
                            <p>
                                Vel et officia fuga est voluptatem voluptatum.
                                Vel et officia fugavoluptatem voluptatum.
                            </p>
                            {/* <button className="eps-btn">Go to Sports</button> */}
                            {/* <div className="eps-btn"> */}
                            <NavLink className="eps-btn navlink-btn" to="/sports">
                                <Button>Go to Sports</Button>
                            </NavLink>
                            {/* </div> */}
                        </div>
                    </div>
                </Slider>
                </div>
            </div>
        );
    }
}

export default ThreeCards;
