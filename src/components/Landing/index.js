import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Landing from './Landing';
import Sponsors from './Sponsors';
import Footer from './Footer';
import About from './About';
import ThreeCards from './ThreeCards';

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
	toggleDrawer = (side, open) => () => {
		this.setState({
			left: open,
		});
	};
	render() {
		const { classes } = this.props;
		const sideList = (
			<div className={classes.list}>
				<List>
					{['HOME', 'EVENTS', 'SPORTS', 'PROSHOWS', 'TEAM RIVIERA', 'SPONSORS & PARTNERS', 'CONTACT'].map((text, index) => (
						<ListItem button key={text}>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</div>
		);
		const Menu = () => (
			<IconButton className="menu-icon" color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
				<MenuIcon />
			</IconButton>
		);
		return (
			<div>
				<Menu />
				<ReactFullpage
					verticalCentered={false}
					render={({ state, fullpageApi }) => {
						return (
							<ReactFullpage.Wrapper>
								<div className="section">
									<Landing />
								</div>
								<div className="section about-us-section">
									<About />
								</div>
								<div className="section">
									<ThreeCards />
								</div>
								<div className="section">
									<Sponsors />
								</div>
								<div className="section footer-section">
									<Footer />
								</div>
							</ReactFullpage.Wrapper>
						);
					}}
				/>
				<Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
					<div
						tabIndex={0}
						role="button"
						onClick={this.toggleDrawer('left', false)}
						onKeyDown={this.toggleDrawer('left', false)}
					>
						{sideList}
					</div>
				</Drawer>
			</div>
		);
	}
}

export default withStyles(styles)(Fullpage);
