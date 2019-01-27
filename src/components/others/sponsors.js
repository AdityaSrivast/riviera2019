import React from 'react';
import Header from './common/header';
import Menu from '../Menu';

import { Grid } from '@material-ui/core';
import Paytm from "../../images/paytm.png";
import Time from '../../images/time.png'
import Pepsi  from "../../images/pepsi.png";
import Naturals from '../../images/naturals.png'
import OhCampus from "../../images/ohcampus.png";
import StuCred from "../../images/stucred.png";
import Sponsor from '../../images/sponsors.jpg';
import ComingSoon from './common/ComingSoon';
import './styles/sponsors.css';

const Sponsors = () => {
    return(
        <div>
        <Header title="SPONSORS & PARTNERS" image={Sponsor}/>
        <Menu />
        <div className="sponsors-wrapper">
            <h1>Riviera'19 could not be possible without:</h1>
            <Grid container>
                <Grid item md={12} xs={12} className="">
                    <p className="title-sponsor">Title Sponsor</p>
                    <img src={Pepsi} alt="pepsi" className="pepsi-logo" />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item md={12} xs={12} className="">
                    <p className="title-sponsor">Co-Sponsor</p>
                    <img src={Paytm} alt="pepsi" className="co-logo" />
                </Grid>
            </Grid>
            <br/>
            <br/>
            <p className="other-sponsor">Other Sponsors</p>
            <Grid container>
                <Grid item md={3} xs={12} className="other-spn">
                    <img src={StuCred} alt="pepsi" className="other-logo" />
                    <p>Credit Partner</p>
                </Grid>
                <Grid item md={3} xs={12} className="other-spn">
                    <img src={Time} alt="pepsi" className="other-logo" />
                    <p>Education Partner</p>
                </Grid>
                <Grid item md={3} xs={12} className="other-spn">
                    <img src={Naturals} alt="pepsi" className="other-logo" />
                    <p>Styling Partner</p>
                </Grid>
                <Grid item md={3} xs={12} className="other-spn">
                    <img src={OhCampus} alt="pepsi" className="other-logo" />
                    <p>Online Media Partner</p>
                </Grid>
            </Grid>
            
        </div>
        </div>
    );
}

export default Sponsors;