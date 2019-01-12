import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

// import RivieraBlack from './../../images/rivieralogo.png';
import RivieraWhite from './../../images/rivieralogowhite.png';
import Dancing from './../../images/footer.svg';
import Facebook from './../../images/facebook.svg';
import Instagram from './../../images/instagram.svg';
import Twitter from './../../images/twitter.svg';
import YouTube from './../../images/youtube.svg';


import './../css/Footer.css';

class Footer extends Component {
    state = {
        name: '',
        email: '',
        subject: ''
    }
    sendData = (e) => {
        e.preventDefault();
        let {name,email,subject} = this.state;
        let data = {'name': name,'email': email, 'subject': subject};
        console.log(data);
    }

    handleChange = name => event => {
        let {value} = event.target;
        this.setState({
            [name]: value,
        });
        // console.log(value);
    }

	render() {
		return (
			<div className="footer-wrapper tac">
                {/* <br /><br /> */}
				<Grid container spacing={24} className="footer-container">
                    <Grid item md={4} xs={6} className="hide-sm" >
                        <div className="links-wrapper">
                            <p className="footer-head heading">Links</p>
                            <span className="to-be-updated">(To be updated)</span>
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
                    <Grid item md={4} className="" style={{ margin: 'auto' }}>
                        <img src={ RivieraWhite } alt="riviera logo" className="footer-logo" />
                        <img src={Dancing} alt="Riviera" className="hide-sm" />
                        <p className="footer-head heading">FOLLOW US</p>
                        <ul className="footer-social-ul">
                            <li><a href="https://www.facebook.com/rivieraVITUniversity/" target="_blank" rel="noopener noreferrer">
                                <img src={Facebook} alt="facebook"></img></a>
                            </li>
                            <li><a href="https://www.instagram.com/rivieravituniversity/" target="_blank" rel="noopener noreferrer">
                                <img src={Instagram} alt="instagram"></img></a>
                            </li>
                            <li><a href="https://www.instagram.com/rivieravituniversity/" target="_blank" rel="noopener noreferrer">
                                <img src={Twitter} alt="twitter"></img></a>
                            </li>
                            <li><a href="https://www.youtube.com/channel/UCdqk7wzTloAVBY_j4p4weAg" target="_blank" rel="noopener noreferrer">
                                <img src={YouTube} alt="youtube" className="last-icon-footer"></img></a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <p id="footer-contact">Contact us</p>
                        <form className="contact-form" onSubmit={this.sendData}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input id="name" onChange={this.handleChange('name')}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Id</label>
                                <input id="email" type="email" onChange={this.handleChange('email')}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <textarea id="subject" rows="6" spellCheck="false" onChange={this.handleChange('subject')}/>
                            </div>
                            <button type="submit" className="contact-button">Submit</button>
                        </form>
                        {/* <div className="follow-us-wrapper">
                            <p className="footer-head heading">Follow Us</p>
                            <ul className="footer-ul">
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Youtube</li>
                            </ul>
                        </div> */}
                    </Grid>
                </Grid>
                <div className="footer-copyright">
                        copyright &copy; 2019 Riviera Team
                </div>
			</div>
		)
	}
}

export default Footer;
