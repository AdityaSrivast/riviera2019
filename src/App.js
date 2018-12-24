import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './components/Landing';
import Events from './components/others/Events';
import Sports from './components/others/sports';
import Proshows from './components/others/proshows';
import Team from './components/others/team';
import Sponsors from './components/others/sponsors';
import Contact from './components/others/contact';

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
						<Route exact path="/sports" component={Sports}/>
						<Route exact path="/proshows" component={Proshows}/>
						<Route exact path="/team" component={Team}/>
						<Route exact path="/sponsors" component={Sponsors}/>
						<Route exact path="/contact" component={Contact}/>
					</Switch>
				</BrowserRouter>
      		</div>
    	);
  	}
}

export default App;
