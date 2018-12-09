import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './components';
import Events from './components/Events';

import './styles/base.css';
import './styles/events.css';

class App extends Component {
	render() {
    	return (
      		<div className="App" >
        		<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Main} />
						<Route exact path="/events" component={Events} />
					</Switch>
				</BrowserRouter>
      		</div>
    	);
  	}
}

export default App;
