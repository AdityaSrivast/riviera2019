//external modules
import React from 'react';
import { Grid } from '@material-ui/core';

//internal modules
import Menu from './../Menu';
import Header from './common/header';
import SportCard from './common/SportCard';

import './styles/sports.css';

//other resources
import SportImg from './../../images/sports.jpg';

class Sports extends React.Component {
    constructor() {
        super();
        this.state = {
            sports: [
                    {
                        "name": "Cricket (MEN)",
                        "date": "02/05",
                        "fee": "4000",
                        "team_size": "11 to 16",
                        "undefined": "MEN "
                    },
                    
                    {
                        "name": "Badminton (MEN)",
                        "date": "02/08",
                        "fee": "1250",
                        "team_size": "4 to 5"
                    },
                    {
                        "name": "Handball (MEN)",
                        "date": "02/09",
                        "fee": "3000",
                        "team_size": "10 to 12"
                    },
                    {
                        "name": "Chess (MEN)",
                        "date": "02/09",
                        "fee": "1250",
                        "team_size": "4 to 5"
                    },
                    {
                        "name": "Table Tennis (MEN)",
                        "date": "02/10",
                        "fee": "1250",
                        "team_size": "4 to 5"
                    },

                    {
                        "name": "Hockey (MEN)",
                        "date": "02/10",
                        "fee": "4000",
                        "team_size": "13 to 16"
                    },
                    {
                        "name": "Basketball (MEN)",
                        "date": "02/11",
                        "fee": "3000",
                        "team_size": "8 to 12"
                    },
                    {
                        "name": "Tennis (MEN)",
                        "date": "02/11",
                        "fee": "1250",
                        "team_size": "5 to 6"
                    },
                    {
                        "name": "Football (MEN)",
                        "date": "02/12",
                        "fee": "4000",
                        "team_size": "11 to 18"
                    },
                    {
                        "name": "Volleyball (MEN)",
                        "date": "02/13",
                        "fee": "3000",
                        "team_size": "6 to 12"
                    },
                    {
                        "name": "Athletics(100, 200m, 400m, 1.5km, Long jump, Shotput, Discuss throw, Tripple Jump) (MEN)",
                        "date": "02/07",
                        "fee": "250",
                        "team_size": "Individual event"
                    },
                    {
                        "name": "Snooker (MEN)",
                        "date": "02/14",
                        "fee": "1250",
                        "team_size": "4"
                    },
                    {
                        "name": "Swimming (Freestyle, Backstroke, Breast Stroke, Butterfly - 50 and 100m)(MEN)",
                        "date": "02/15",
                        "fee": "250",
                        "team_size": "Individual event"
                    },
                    {
                        "name": "Mr. Riviera (MEN)",
                        "date": "02/16",
                        "fee": "250",
                        "team_size": "Individual event"
                    },
                    {
                        "name": "Athletics(100, 200m, 400m, 800m, Long jump, Shotput, Discuss throw, Tripple Jump)(WOMEN)",
                        "date": "02/07",
                        "fee": "250",
                        "team_size": "Individual event",
                        "undefined": "WOMEN "
                    },
                    {
                        "name": "Chess (WOMEN)",
                        "date": "02/09",
                        "fee": "1250",
                        "team_size": "Individual event"
                    },
                    {
                        "name": "Badminton (WOMEN)",
                        "date": "02/09",
                        "fee": "1250",
                        "team_size": "4 to 5"
                    },
                    {
                        "name": "Table Tennis (WOMEN)",
                        "date": "02/11",
                        "fee": "1250",
                        "team_size": "4 to 5"
                    },
                    {
                        "name": "Futsal (WOMEN)",
                        "date": "02/11",
                        "fee": "2000",
                        "team_size": "5 to 9"
                    },
                    {
                        "name": "Tennis (WOMEN)",
                        "date": "02/12",
                        "fee": "1250",
                        "team_size": "4 to 5"
                    },
                    {
                        "name": "Basketball (WOMEN)",
                        "date": "02/12",
                        "fee": "3000",
                        "team_size": "8 to 12"
                    },
                    {
                        "name": "Throwball (WOMEN)",
                        "date": "02/13",
                        "fee": "3000",
                        "team_size": "9 to 12"
                    },
                    {
                        "name": "Volleyball (WOMEN)",
                        "date": "02/15",
                        "fee": "3000",
                        "team_size": "6 to 12"
                    },
                    {
                        "name": "Swimming (Freestyle, Backstroke, Breast Stroke, Butterfly - 50 and 100m) (WOMEN)",
                        "date": "02/16",
                        "fee": "250",
                        "team_size": "Individual event"
                    },
                    {
                        "name": "Tennis (Men and Women)  ",
                        "date": "01/30",
                        "fee": "60",
                        "team_size": "Individual event"
                    },
                    {
                        "name": "Table Tennis (Men and Women) ",
                        "date": "02/01",
                        "fee": "60",
                        "team_size": "Individual event"
                    },
                    {
                        "name": "Badminton (Men and Women) ",
                        "date": "02/02",
                        "fee": "60",
                        "team_size": "Individual event"
                    },
                    {
                        "name": "Snooker (Men) ",
                        "date": "02/02",
                        "fee": "60",
                        "team_size": "Individual event"
                    },
                    {
                        "name": "Chess (Men and Women) ",
                        "date": "02/02",
                        "fee": "60",
                        "team_size": "Individual event"
                    },
                    {
                        "name": "Swimming (Men and Women) ",
                        "date": "02/06",
                        "fee": "60",
                        "team_size": "Individual event"
                    },
                    {
                        "name": "Futsal (Men)",
                        "date": "01/28",
                        "fee": "60 per person",
                        "team_size": "5 to 8"
                    },
                    {
                        "name": "Futsal (Women)",
                        "date": "01/28",
                        "fee": "60 per person",
                        "team_size": "5 to 8"
                    },
                    {
                        "name": "3 on 3 Basketball (Men) ",
                        "date": "01/29",
                        "fee": "60 per person",
                        "team_size": "3 to 5"
                    },
                    {
                        "name": "3 on 3 Basketball (Women) ",
                        "date": "01/30",
                        "fee": "60 per person",
                        "team_size": "3 to 6"
                    },
                    {
                        "name": "Volleyball Service ",
                        "date": "Feb-2 to Feb-3",
                        "fee": "60",
                        "team_size": "Individual event"
                    },
                    {
                        "name": "Hit it to win it ",
                        "date": "Feb-2 to Feb-3",
                        "fee": "60",
                        "team_size": "Individual event"
                    },
                    {
                        "name": "Throwball target ",
                        "date": "Feb-2 to Feb-3",
                        "fee": "60",
                        "team_size": "Individual event"
                    },
                    {
                        "name": "Tug of war ",
                        "date": "Feb-2 to Feb-3",
                        "fee": "60",
                        "team_size": "8 to 10"
                    },
                    {
                        "name": "Fun chess ",
                        "date": "Feb-2 to Feb-3",
                        "fee": "60",
                        "team_size": "5"
                    },
                    {
                        "name": "Basketball shootout ",
                        "date": "Feb-2 to Feb-3",
                        "fee": "60",
                        "team_size": "Individual event"
                    },
                    {
                        "name": "Cricket bowl out ",
                        "date": "Feb-2 to Feb-3",
                        "fee": "60",
                        "team_size": "Individual event"
                    }
                ]
        }
    }
    render() {
        return (
            <div className="sports-section">
                <Menu />
                <Header title="SPORTS RIVIERA '19" image={SportImg} />
                <div className="sports">
                    <br />
                    <Grid container id="events-cards" >
                        {
                            this.state.sports.map((sport, i) =>
                                <Grid item md={6} sm={12} key={i} className="sport-wrapper" >
                                    <SportCard sport={sport.name} date={sport.date} fee={sport.fee} team_size={sport.team_size} />
                                </Grid>
                            )
                        }
                    </Grid>
                </div><br /><br />
            </div>
        );
    }
}
export default Sports;