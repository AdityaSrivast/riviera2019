import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Link } from 'react-router-dom';
import Landing from './Landing';

const Fullpage = () => (
	<ReactFullpage 
		verticalCentered={false}
    	render={({ state, fullpageApi }) => {
        	return (
          		<ReactFullpage.Wrapper>
            		<div className="section">
						<Landing />
            		</div>
            		<div className="section">
              			<p>Section 2</p>
						Riviera
                		<Link to="/events">Events</Link>
            		</div>
          		</ReactFullpage.Wrapper>
        	);
      	}}
    />
);

export default Fullpage;
