import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './../css/Sponsors.css';
import Pepsi from './../../images/pepsi.png';
import Maruti from './../../images/maruti.jpg';



class Sponsors extends Component {
    render() {
        return (
            <div>
                <div className="spon-heading">
                    <h1>Sponsors</h1>
                </div>
                <div className="title-spon-wrapper tac">
                    <p>Title Sponsor</p>
                    <img src={Pepsi} alt="pepsi" className="spon-image pepsi-logo" />
                </div>
                <br />
                <div className="co-spon-wrapper tac">
                    <p>Co-Sponsor</p>
                    <Grid container spacing={24}>
                        <Grid item xs={4}>
                            <img src={Maruti} alt="logo" className="pepsi-logo" />
                        </Grid>
                        <Grid item xs={4}>
                            <img src={Maruti} alt="logo" className="pepsi-logo" />
                        </Grid>
                        <Grid item xs={4}>
                            <img src={Maruti} alt="logo" className="pepsi-logo" />
                        </Grid>
                    </Grid>
                </div>
                <br /><br />
                <div className="tac">
                    <button className="c-btn spon-btn">More Sponsors</button>
                </div>
            </div>
        )
    }
}
export default Sponsors;
