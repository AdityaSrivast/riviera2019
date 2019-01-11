import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


import './../css/Sponsors.css';
import Pepsi from './../../images/pepsi.png';
import Maruti from './../../images/maruti.jpg';
import Gluco from './../../images/tata-gluco-plus.png';
import Oneplus from './../../images/oneplus.png';




class Sponsors extends Component {
    render() {
        return (
            <div className="sponsors-wrapper">
                <h1 className="heading">SPONSORS</h1>
                <div>
                    <div className="title-spon-wrapper tac">
                        <p>Past Sponsor</p>
                        <img src={Pepsi} alt="pepsi" className="spon-image pepsi-logo" />
                    </div>
                    <br />
                    <div className="co-spon-wrapper tac">
                        <p>Co-Sponsor</p>
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
                    </div>
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
