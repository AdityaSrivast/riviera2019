import React, { Component } from 'react';
import {Grid, Select, FormControl, InputLabel, MenuItem} from '@material-ui/core';
import Header from './common/header';
import events from './images/events.jpg';

class Events extends Component {
	state = {
		category: ''
	}

	handleChange = name => event => {
		this.setState({[name]: event.target.value});
	}
	render() {
    	return (
      		<div>
				<Header title="EVENTS RIVIERA '19" image={events}/>
				<div className="events">
					<Grid container>
						<Grid item md={6} xs={6}>
							<FormControl className="category-select">
								<InputLabel htmlFor="category">Category</InputLabel>
								<Select
									value={this.state.category}
									onChange={this.handleChange('category')}
									inputProps={{
									name: 'category',
									id: 'category',
									}}
								>
									<MenuItem value="" />
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item md={6} xs={6}>
							
						</Grid>
					</Grid>
				</div>
      		</div>
    	);
  	}
}

export default Events;
