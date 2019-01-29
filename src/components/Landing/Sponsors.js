import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


import './../css/Sponsors.css';
import Pepsi from './../../images/pepsi.png';
import PaytmLogo from './../../images/Paytm_logo.png';




class Sponsors extends Component {
    render() {
        return (
            <div className="sponsors-wrapper">
                <h1 className="heading">SPONSORS</h1>
                <div>
                    <p className="spon-contact">Contact: Fayeed - 9985527882</p>
                    <br /><br />
                    <Grid container spacing={24} >
                        <Grid item xs={12} md={6}>
                            <div className="title-spon-wrapper tac">
                                <p>Title Sponsor</p>
                                <br />
                                <img src={Pepsi} alt="pepsi" className="spon-image pepsi-logo" />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="co-spon-wrapper tac">
                                <p>Co-Sponsor</p>
                                <br />
                                <img src={PaytmLogo} alt="pepsi" className="spon-image pepsi-logo" />
                            </div>
                        </Grid>
                    </Grid>
                    {/* <div className="title-spon-wrapper tac">
                        <p>Past Sponsor</p>
                        <img src={Pepsi} alt="pepsi" className="spon-image pepsi-logo" />
                    </div> */}
                    <br />
                    {/* <div className="co-spon-wrapper tac">
                        <p>Co-Sponsor</p>
                        <img src={PaytmLogo} alt="pepsi" className="spon-image pepsi-logo" />
                        <Grid container spacing={24}>
                            <Grid item xs={4} className="sponsor-img-wrapper">
                                <img src={Maruti} alt="logo" className="pepsi-logo" />
                            </Grid>
                            <Grid item xs={4} className="sponsor-img-wrapper">
                                <img src={Gluco} alt="logo" className="pepsi-logo" />
                            </Grid>
                            <Grid item xs={4} className="sponsor-img-wrapper">
                                <img src={Oneplus} alt="logo" className="oneplus-logo" />
                            </Grid>
                        </Grid>
                    </div> */}
                    <br /><br />
                    <div className="tac">
                        <button className="c-btn spon-btn">More Sponsors</button>
                    </div>
                </div>

            </div>
        );
    }
}
export default Sponsors;
