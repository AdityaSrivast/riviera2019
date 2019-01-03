import React, { Component } from 'react'

import './../css/comingSoon.css';

class ComingSoon extends Component {
	render() {
		return (
			<div className="cs-wrapper">
				<div id='stars'></div>
				<div id='stars2'></div>
				<div id='stars3'></div>

				<div className="rv-text"><h1>Riviera 2019</h1></div>
				<div className="cs-text-wrapper">
					<div className="cs-text"><h1 class="glitch" data-text="Coming_Soon..">Coming_Soon..</h1></div>
				</div>
			</div>
		)
	}
}

export default ComingSoon;