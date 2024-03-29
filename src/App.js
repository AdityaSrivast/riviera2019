import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Main from './components/Landing';
import Events from './components/others/Events';
import Sports from './components/others/sports';
import CampusAmbassador from "./components/others/campus_ambassador";
import Proshows from './components/others/proshows';
import Team from './components/others/team';
import SingleEvent from './components/others/singleEvent';
import Sponsors from './components/others/sponsors';
import Contact from './components/others/contact';
import Infusion from './components/others/Infuison';
import ComingSoon from './components/others/common/ComingSoon';

import Image1 from './images/inf-1.jpg';
import Image2 from './images/inf-2.jpg';
import Image3 from './images/inf-3.jpg';
import Image4 from './images/inf-4.jpg';

import './styles/base.css';
import './styles/events.css';

class App extends Component {
	render() {
    	return (
      		<div className="App" >
        		<BrowserRouter basename={process.env.PUBLIC_URL}>
					<Switch>
						<Route exact path="/" component={Main} />
						<Route exact path="/home" render={() => <Redirect to="/"/>} />
						<Route exact path="/events" component={Events} />
						<Route exact path="/events/result" component={SingleEvent} />
						<Route exact path="/sports" component={Sports}/>
						<Route exact path="/proshows" component={Proshows}/>
						<Route exact path="/campus" component={CampusAmbassador}/>
						<Route exact path="/team" component={Team}/>
						<Route exact path="/sponsors" component={Sponsors}/>
						<Route exact path="/contact" component={Contact}/>
						<Route exact path="/infusion" 
						component={()=>(
							<Infusion 
							img1={Image1}
							img2={Image2}
							img3={Image3}
							img4={Image4} />
						)}
						/>
					</Switch>
				</BrowserRouter>
      		</div>
    	);
  	}
}

export default App;
