import React from 'react';
import Header from './common/header';
import Menu from '../Menu';
import SmallFooter from './common/smallFooter';
import { Grid } from '@material-ui/core';
import Paytm from "../../images/paytm.png";
import Time from '../../images/time.png'
import Pepsi from "../../images/pepsi.png";
import Naturals from '../../images/naturals.png'
import OhCampus from "../../images/ohcampus.png";
import StuCred from "../../images/stucred.png";
import Sponsor from '../../images/sponsors.jpg';
import Dominos from '../../images/dominos.png';
import Dosart from '../../images/dosart.png';
import Flo from '../../images/flo.png';
import Baskin from '../../images/baskins.png';
import Mercedes from '../../images/mercedes.png';
import Kwality from '../../images/kwalitywall.png';
import Lassi from '../../images/lassi-shop.png';
import Marry from '../../images/marrybrown.png';
import Zebronics from '../../images/zebronics.png';
import Studio11 from '../../images/studio11.jpg';
import EducationTree from '../../images/educationTree.png';
import Caes from '../../images/caes.png';
import Pvr from '../../images/pvr.png';
import SafeExpress from '../../images/safe.png';
import BBQ from '../../images/BBQ.png';
import CUB from '../../images/CUB.png';
import Cognizant from '../../images/Cognizant.png';
import DLF from '../../images/DLF.png';
import Ethnus from "../../images/Ehtnus.png";
import Face from '../../images/FACE.png';
import HDFC from '../../images/HDFC.png';
import ITC from '../../images/ITC_Fortune.png';
import Smart from '../../images/Smart.png'
import IndianBank from '../../images/IndianBank.png';

import './styles/sponsors.css';

const Sponsors = () => {
	return (
		<div>
			<Header title="SPONSORS & PARTNERS" image={Sponsor} />
			<Menu />
			<div className="sponsors-wrapper">
				<h1>Riviera'19 could not be possible without:</h1>
				<Grid container>
					<Grid item md={12} xs={12} className="">
						<p className="title-sponsor">Title Sponsor</p>
						<img src={Pepsi} alt="pepsi" className="pepsi-logo" />
					</Grid>
				</Grid>
				<br />
				<br />
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
				<br />
				<Grid container className="center-logo">
					<Grid item md={3} xs={12} className="other-spn">
						<img src={HDFC} alt="HDFC" className="other-logo" />
						<p>Banking Partner</p>
					</Grid>
					<Grid item md={3} xs={12} className="other-spn">
						<img src={IndianBank} alt="Indian Bank" className="other-logo" />
						<p>Banking Partner</p>
					</Grid>
					<Grid item md={3} xs={12} className="other-spn">
						<img src={CUB} alt="CUB" className="other-logo" />
						<p>Banking Partner</p>
					</Grid>
					<Grid item md={3} xs={12} className="other-spn">
						<img src={ITC} alt="HDFC" className="other-logo" />
						<p>Hospitality Partner</p>
					</Grid>
				</Grid>
				<br />
				<Grid container className="center-logo">
					<Grid item md={3} xs={12} className="other-spn">
						<img src={Face} alt="HDFC" className="other-logo" />
						<p>Education Partner</p>
					</Grid>
					<Grid item md={3} xs={12} className="other-spn">
						<img src={Smart} alt="Indian Bank" className="other-logo" />
						<p>Education Partner</p>
					</Grid>
					<Grid item md={3} xs={12} className="other-spn">
						<img src={Ethnus} alt="CUB" className="other-logo" />
						<p>Education Partner</p>
					</Grid>
					<Grid item md={3} xs={12} className="other-spn">
						<img src={Cognizant} alt="HDFC" className="other-logo" />
						<p>Cultural Partner</p>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item md={3} xs={12} className="other-spn">
						<img src={Mercedes} alt="pepsi" className="other-logo" />
						<p>Automotive Partner</p>
					</Grid>
					<Grid item md={3} xs={12} className="other-spn">
						<img src={Zebronics} alt="pepsi" className="other-logo" />
						<p>Music Partner</p>
					</Grid>
					<Grid item md={3} xs={12} className="other-spn">
						<img src={EducationTree} style={{width: '40%'}} alt="pepsi" className="other-logo" />
						<p>Online Media Partner</p>
					</Grid>
					<Grid item md={3} xs={12} className="other-spn">
						<img src={Studio11} style={{width: '33%'}} alt="pepsi" className="other-logo" />
						<p>Styling Partner</p>
					</Grid>
				</Grid>
				<br/>
				<Grid container className="center-logo">
					<Grid item md={3} xs={12} className="other-spn">
						<img src={Caes} style={{width: '80%'}} alt="pepsi" className="other-logo" />
						<p>Study Abroad Partner</p>
					</Grid>
					<Grid item md={3} xs={12} className="other-spn">
						<img src={Pvr} style={{width: '20%'}} alt="pepsi" className="other-logo" />
						<p>Cinema Partner</p>
					</Grid>
					<Grid item md={3} xs={12} className="other-spn">
						<img src={SafeExpress} alt="pepsi" className="other-logo" />
						<p>Logitstics Partner</p>
					</Grid>
					<Grid item md={3} xs={12} className="other-spn">
						<img src={DLF} alt="CUB" className="other-logo" />
					</Grid>
					<Grid item md={3} xs={12} className="other-spn">
						<img src={BBQ} alt="HDFC" className="other-logo" />
					</Grid>
					<Grid item md={3} xs={12} className="other-spn">
						<img src={Paytm} alt="pepsi" className="other-logo" />
						<p>Payment Partner</p>
					</Grid>
				</Grid>
				<br />
				<p className="other-sponsor">Food Partners</p>
				<Grid container>
					<Grid item md={3} xs={12} className="other-spn">
						<img src={Flo} alt="pepsi" className="food-logo" />
					</Grid>
					<Grid item md={3} xs={12} className="other-spn">
						<img src={Kwality} alt="pepsi" className="food-logo" />
					</Grid>
					<Grid item md={3} xs={12} className="other-spn">
						<img src={Dominos} alt="pepsi" className="food-logo" />
					</Grid>
					<Grid item md={3} xs={12} className="other-spn">
						<img src={Lassi} alt="pepsi" className="food-logo" />
					</Grid>
				</Grid>
				<br />
				<br />

				<Grid container>
					<Grid item md={4} xs={12} className="other-spn">
						<img src={Baskin} alt="pepsi" className="food-logo baskin" />
					</Grid>
					<Grid item md={4} xs={12} className="other-spn">
						<img src={Dosart} alt="pepsi" className="food-logo" />
					</Grid>
					<Grid item md={4} xs={12} className="other-spn">
						<img src={Marry} alt="pepsi" className="food-logo" />
					</Grid>
				</Grid>
			</div>
			<SmallFooter />
		</div>
	);
}

export default Sponsors;