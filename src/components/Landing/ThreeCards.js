import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import './../css/ThreeCard.css';
import { Button } from '@material-ui/core';
import {NavLink} from 'react-router-dom';

class ThreeCards extends Component {
    render() {
        return (
            <div className="eps-wrapper">
                {/* <p>Events, proshows, Sports</p> */}
                <Grid container spacing={24}>
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
                                <div className="eps-btn">
                                    <Button>Go to Proshows</Button>
                                </div>
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
                                <div className="eps-btn">
                                    <Button>Go to Sports</Button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default ThreeCards;
