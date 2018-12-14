import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import RivieraBlack from './../../images/rivieralogo.png';

import './../css/Footer.css';

class Footer extends Component {
	render() {
		return (
			<div className="footer-wrapper tac">
                <img src={ RivieraBlack } alt="riviera logo" className="footer-logo" />
                <br /><br />
				<Grid container spacing={24}>
                    <Grid item xs={6}>
                        <div className="links-wrapper">
                            <p className="footer-head">Links</p>
                            <ul className="footer-ul">
                                <li>About Us</li>
                                <li>Events</li>
                                <li>Proshows</li>
                                <li>Sports</li>
                                <li>Sponsors</li>
                                <li>Team</li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="follow-us-wrapper">
                            <p className="footer-head">Follow Us</p>
                            <ul className="footer-ul">
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Youtube</li>
                                <li id="footer-contact">Contact us</li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
			</div>
		)
	}
}

export default Footer;
