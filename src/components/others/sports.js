//external modules
import React from 'react';
import { Grid } from '@material-ui/core';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';

//internal modules
import Menu from './../Menu';
import Header from './common/header';
import SportCard from './common/SportCard';
import SmallFooter from './common/smallFooter';


import './styles/sports.css';

//other resources
import SportImg from './../../images/sports.jpg';

class Sports extends React.Component {
    constructor() {
        super();
        this.state = {
            preriviera_sports: [
                {
                    "name": "Tennis (Men and Women)",
                    "date": "30th January",
                    "fee": "60",
                    "team_size": "Individual event"
                },
                {
                    "name": "Table Tennis (Men and Women)",
                    "date": "1st February",
                    "fee": "60",
                    "team_size": "Individual event"
                },
                {
                    "name": "Badminton (Men and Women)",
                    "date": "2nd February",
                    "fee": "60",
                    "team_size": "Individual event"
                },
                {
                    "name": "Snooker (Men)",
                    "date": "2nd February",
                    "fee": "60",
                    "team_size": "Individual event"
                },
                {
                    "name": "Chess (Men and Women)",
                    "date": "2nd February",
                    "fee": "60",
                    "team_size": "Individual event"
                },
                {
                    "name": "Swimming (Men and Women)",
                    "date": "6th February",
                    "fee": "60",
                    "team_size": "Individual event"
                },
                {
                    "name": "Futsal (Men)",
                    "date": "28th January",
                    "fee": "60 per person",
                    "team_size": "5 to 8"
                },
                {
                    "name": "Futsal (Women)",
                    "date": "28th January",
                    "fee": "60 per person",
                    "team_size": "5 to 8"
                },
                {
                    "name": "3-on-3 Basketball (Men)",
                    "date": "29th January",
                    "fee": "60 per person",
                    "team_size": "3 to 5"
                },
                {
                    "name": "3-on-3 Basketball (Women)",
                    "date": "30th January",
                    "fee": "60 per person",
                    "team_size": "3 to 5"
                },
                {
                    "name": "Volleyball Service",
                    "date": "2nd - 3rd February",
                    "fee": "60",
                    "team_size": "Individual event"
                },
                {
                    "name": "Hit It To Win It",
                    "date": "2nd - 3rd February",
                    "fee": "60",
                    "team_size": "Individual event"
                },
                {
                    "name": "Throwball Target",
                    "date": "2nd - 3rd February",
                    "fee": "60",
                    "team_size": "Individual event"
                },
                {
                    "name": "Tug Of War (Men)",
                    "date": "2nd - 3rd February",
                    "fee": "60",
                    "team_size": "8 to 10"
                },
                {
                    "name": "Tug of war (Women)",
                    "date": "2nd - 3rd February",
                    "fee": "60",
                    "team_size": "5"
                },
                {
                    "name": "Water Splash Chess",
                    "date": "2nd - 3rd February",
                    "fee": "60",
                    "team_size": "Individual event"
                },
                {
                    "name": "Basketball Shootout",
                    "date": "2nd - 3rd February",
                    "fee": "60",
                    "team_size": "Individual event"
                },
                {
                    "name": "Cricket Bowl Out",
                    "date": "2nd - 3rd February",
                    "fee": "60",
                    "team_size": "Individual event"
                }
            ],
            riviera_sports: [
                    {
                        "name": "Cricket (MEN)",
                        "date": "5th February",
                        "fee": "4000",
                        "team_size": "11 to 16",
                        "undefined": "MEN"
                    },
                    
                    {
                        "name": "Badminton (MEN)",
                        "date": "8th February",
                        "fee": "1250",
                        "team_size": "4 to 5"
                    },
                    {
                        "name": "Handball (MEN)",
                        "date": "9th February",
                        "fee": "3000",
                        "team_size": "10 to 12"
                    },
                    {
                        "name": "Chess (MEN)",
                        "date": "9th February",
                        "fee": "1250",
                        "team_size": "4 to 5"
                    },
                    {
                        "name": "Table Tennis (MEN)",
                        "date": "10th February",
                        "fee": "1250",
                        "team_size": "4 to 5"
                    },

                    {
                        "name": "Hockey (MEN)",
                        "date": "10th February",
                        "fee": "4000",
                        "team_size": "13 to 16"
                    },
                    {
                        "name": "Basketball (MEN)",
                        "date": "11th February",
                        "fee": "3000",
                        "team_size": "8 to 12"
                    },
                    {
                        "name": "Tennis (MEN)",
                        "date": "11th February",
                        "fee": "1250",
                        "team_size": "5 to 6"
                    },
                    {
                        "name": "Football (MEN)",
                        "date": "12th February",
                        "fee": "4000",
                        "team_size": "11 to 18"
                    },
                    {
                        "name": "Volleyball (MEN)",
                        "date": "13th February",
                        "fee": "3000",
                        "team_size": "6 to 12"
                    },
                    {
                        "name": "Athletics (100m, 200m, 400m, 1.5km, Long jump, Shotput, Discuss Throw, Triple Jump) (MEN)",
                        "date": "7th February",
                        "fee": "250",
                        "team_size": "Individual event"
                    },
                    {
                        "name": "Snooker (MEN)",
                        "date": "14th February",
                        "fee": "1250",
                        "team_size": "4"
                    },
                    {
                        "name": "Swimming (Freestyle, Backstroke, Breast Stroke, Butterfly - 50 and 100m) (MEN)",
                        "date": "15th February",
                        "fee": "250",
                        "team_size": "Individual event"
                    },
                    {
                        "name": "Mr. Riviera (MEN)",
                        "date": "16th February",
                        "fee": "250",
                        "team_size": "Individual event"
                    },
                    {
                        "name": "Athletics (100m, 200m, 400m, 800m, Long jump, Shotput, Discuss Throw, Triple Jump) (WOMEN)",
                        "date": "7th February",
                        "fee": "250",
                        "team_size": "Individual event",
                        "undefined": "WOMEN "
                    },
                    {
                        "name": "Chess (WOMEN)",
                        "date": "9th February",
                        "fee": "250",
                        "team_size": "Individual event"
                    },
                    {
                        "name": "Badminton (WOMEN)",
                        "date": "9th February",
                        "fee": "1250",
                        "team_size": "4 to 5"
                    },
                    {
                        "name": "Table Tennis (WOMEN)",
                        "date": "11th February",
                        "fee": "1250",
                        "team_size": "4 to 5"
                    },
                    {
                        "name": "Futsal (WOMEN)",
                        "date": "11th February",
                        "fee": "2000",
                        "team_size": "5 to 9"
                    },
                    {
                        "name": "Tennis (WOMEN)",
                        "date": "12th February",
                        "fee": "1250",
                        "team_size": "4 to 5"
                    },
                    {
                        "name": "Basketball (WOMEN)",
                        "date": "12th February",
                        "fee": "3000",
                        "team_size": "8 to 12"
                    },
                    {
                        "name": "Throwball (WOMEN)",
                        "date": "13th February",
                        "fee": "3000",
                        "team_size": "9 to 12"
                    },
                    {
                        "name": "Volleyball (WOMEN)",
                        "date": "15th February",
                        "fee": "3000",
                        "team_size": "6 to 12"
                    },
                    {
                        "name": "Swimming (Freestyle, Backstroke, Breast Stroke, Butterfly - 50 and 100m) (WOMEN)",
                        "date": "16th February",
                        "fee": "250",
                        "team_size": "Individual event"
                    },
                ],
                categories: ['Riviera Sports (only for externals)', 'Pre-Riviera Sports (only for VITians)'],
                category: '',
                sports: [],
                allSports: []
        }
    }

    componentDidMount(){
        let {preriviera_sports, riviera_sports} = this.state;
        let newpre=[];
        let newriv=[];
        for (let i in preriviera_sports) {
            let curr = moment(preriviera_sports[i]['date']).format('MMMM Do');
            let newState=preriviera_sports[i];
            if(curr!=='Invalid date'){
                newState={
                    ...newState,
                    date: curr
                }
            }
            newpre.push(newState);
        }

        for (let i in riviera_sports) {
            let curr = moment(riviera_sports[i]['date']).format('MMMM Do');
            let newState=riviera_sports[i];
            if(curr!=='Invalid date'){
                newState={
                    ...newState,
                    date: curr
                }
            }
            newriv.push(newState);
        }
        this.setState({
            riviera_sports: newriv,
            preriviera_sports: newpre,
            sports: newriv,
            allSports: newriv.concat(newpre)
        });
    }

    search = (value) => {
        let updatedList = this.state.allSports;
        console.log(value);
        updatedList = updatedList.filter((item) =>{
            return item.name.toLowerCase().search(
                value.toLowerCase()) !== -1;
        });
        console.log(updatedList);
        this.setState({
            sports: updatedList
        });
    }

    filterCategory = (e) => {
        console.log(e.target.value);
        if(e.target.value.toLowerCase().search('pre-riviera')===-1){
            this.setState({
                sports:this.state.riviera_sports,
                category: e.target.value
            });
        } else {
            this.setState({
                sports: this.state.preriviera_sports,
                category: e.target.value
            });
        }
    }


    render() {
        return (
            <div className="sports-section">
                <Menu />
                <Header title="SPORTS RIVIERA '19" image={SportImg} />
                <div className="sports">
                    <br />
                    <Grid container className="event-main-grid">
                        <Grid item md={6} xs={12} className="event-grid" style={{ marginBottom: '20px' }}>
                            <div className="event-select-container">
                                <select className="event-select" onChange={this.filterCategory}>
                                    {
                                        this.state.categories.map((category,i) => 
                                            <option key={i}>{category}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </Grid>
                        <Grid item md={6} xs={12} className="event-grid">
                            <div className='search-container' style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <input
                                    type='text'
                                    spellCheck="false"
                                    onChange={(e) => this.search(e.target.value)}
                                    style={{

                                    }}
                                    className="events-search-box"
                                    placeholder='Search'
                                />
                                <FontAwesome name='search' style={{ padding: '10px', background: '#666', color: '#bbb' }} />
                            </div>
                        </Grid>
                    </Grid>

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
                <SmallFooter />
            </div>
        );
    }
}
export default Sports;