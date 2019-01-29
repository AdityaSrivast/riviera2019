import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { withStyles } from '@material-ui/core/styles';

import Landing from './Landing';
import Sponsors from './Sponsors';
import Footer from './Footer';
import About from './About';
import ThreeCards from './ThreeCards';
import Menu from '../Menu';


const styles = {
	list: {
		width: 250,
	},
};


class Fullpage extends Component {
	constructor() {
		super();
		this.state = {
			left: false
		}
	}

	render() {
		return (
			<div>
                {/* <ComingSoon /> */}
				<Menu />
				<ReactFullpage
					verticalCentered={false}
					render={({ state, fullpageApi }) => {
						return (
							<ReactFullpage.Wrapper>
								<div className="section">
									<Landing fullpageApi={fullpageApi} />
								</div>
								<div className="section about-us-section">
									<About />
								</div>
								<div className="section threecards-section">
									<ThreeCards />
								</div>
								<div className="section sponsor-section">
									<Sponsors />
								</div>
								<div className="section footer-section">
									<Footer />
								</div>
							</ReactFullpage.Wrapper>
						);
					}}
				/>
			</div>
		);
	}
}

export default withStyles(styles)(Fullpage);
