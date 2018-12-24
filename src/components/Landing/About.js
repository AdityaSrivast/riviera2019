import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import AboutUsImg from './../../images/about.png'
import './../css/About.css';

class About extends Component {
	render() {
		return (
			<div className="about-us-wrapper">
				<div className="tac">
					<Grid container spacing={24}>
						<Grid item lg={6} md={6}>
							<img src={AboutUsImg} alt="About us" className="about-img" />
						</Grid>
						<Grid item lg={6} md={6} sm={12} xs={12}>
							<div className="about-content">
								<div>
									<div className="spon-heading">
										<h1>About Us</h1>
									</div>
									<p>
										5Minima ipsa quas ea aut qui occaecatinon inventore.
										Beatae quam culpa nemo eveniet hicrecusandae quam nisi.
										Ut laborum est enim distinctio deserunt error
										5Minima ipsa quas eaautoccaecati non inventore.
										Beatae quamculpanemo eveniet hic recusandae quam nisi.
										Ut laborum est enim distinctio deserunt error ratione. In quasi
										ipsam molestiaepossimus corporis minus facilis non sint. Doloribus
										qui minus ullam fugiat expedita aut blanditiis et occaecati.
									</p>
								</div>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}

export default About;