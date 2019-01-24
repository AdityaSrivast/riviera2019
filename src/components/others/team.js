import React from 'react';
import { Grid } from '@material-ui/core';

import Menu from './../Menu';
import Header from './common/header';
import TeamCard from './TeamCard';
import Organizer from './../../images/event-main.jpg';
import gv from './../../images/gv.png';

import './styles/team.css';


class Team extends React.Component {
	render() {
		return (
			<div>
				<Menu />
				<Header title="TEAM RIVIERA'19" image={Organizer} />
				<div className="team-wrapper">
					<br /><br />
					<div className="patron-wrapper">
						<h1>Patron</h1>
						<TeamCard imgSrc={gv} />
					</div>

					<br /><br />
				</div>
			</div>
		);
	}
}



export default Team;