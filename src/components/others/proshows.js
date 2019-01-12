import React from 'react';
import { Grid } from '@material-ui/core';

import Menu from './../Menu';
import Header from './common/header';
import events from './../../images/event-main.jpg';
import Sonu from './../../images/sonu.jpg';

import './styles/proshows.css';

const Proshows = () => {
    return (
        <div>
            <Menu />
            <Header title="PROSHOWS" image={events} />
            <div className="proshows-wrapper">
                <br />
                <div className="proshows-card-wrapper">
                    <div className="proshows-card-container">
                        <Grid container >
                            <Grid item md={4} xs={12} className="star-pic">
                                <img className="sonu-img" src={Sonu} alt="sonu-nigam"></img>
                            </Grid>
                            <Grid item md={8} xs={12} className="star-data">
                                <h1>Day 1</h1>
                                <h2>Sonu Nigam</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                     printer took a galley of type and scrambled it to make a type specimen book. It has survived
                                      not only five centuries,
                                 but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="proshows-card-wrapper">
                    <div className="proshows-card-container">
                        <Grid container >
                            <Grid item md={8} xs={12} className="star-data" style={{textAlign:'right'}}>
                                <h1>Day 2</h1>
                                <h2>The Local Train</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                                     printer took a galley of type and scrambled it to make a type specimen book. It has survived
                                      not only five centuries,
                                 but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </Grid>
                            <Grid item md={4} xs={12} className="star-pic">
                                <img className="sonu-img" src={Sonu} alt="sonu-nigam"></img>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </div>
    );
}

export default Proshows;