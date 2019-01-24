// external modules
import React, { Component } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';

// internal modules
import Menu from './../Menu';
import Header from './common/header';
import Card from './common/card';
import SmallFooter from './common/smallFooter';


// others
import urls from '../urls';
import EventImg from './../../images/event-main.jpg';
import './styles/events.css';

const BASE_URL = urls.API_URL;

class Events extends Component {
    constructor() {
        super();
        this.state = {
            category: '',
            query: '',
            loading: true,
            events: [],
            categories : ['Premium', 'Pre Riviera', 'Drama Art and Photography', 'Music', 'Dance', 'Workshop', 'Quiz', 'Words Worth English', 'Words Worth Tamil', 'Words Worth Hindi', 'Words Worth Telugu', 'Adventure Sports', 'Cyber Engage', 'Informal']
        }
        this.getEvents();
    }

    updateQuery = (query) => {
        this.setState({
            query: query.trim()
        })
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    }

    getEvents = () => {
        axios.get(`${BASE_URL}/all`).then(resp => {
            let { info } = resp.data;
            this.setState({ events: info,allEvents: info, loading: false });
        }).catch(err => {
            this.setState({ loading: false });
            console.log(err);
        })
    }

    search = (value) => {
        let updatedList = this.state.allEvents;
        console.log(value);
        updatedList = updatedList.filter((item) => {
            return item.name.toLowerCase().search(
                value.toLowerCase()) !== -1;
        });
        console.log(updatedList);
        this.setState({ events: updatedList });
    }
    filterCategory = (e) => {
        axios.get(`${BASE_URL}/all?category=${e.target.value.toLowerCase()}`).then(resp => {
            console.log(resp);
            this.setState({ events : resp.data.info });
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        console.log(this.state.events);
        let { events, loading } = this.state;
        return (
            <div className="events-section">
                <Menu />
                <Header title="EVENTS RIVIERA '19" image={EventImg} />
                <div className="events">
                    <br /><br />
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
                    {loading ?
                        <CircularProgress size={30} className="color-theme-red"></CircularProgress>
                        : 
                        <Grid container id="events-cards" className="events-cards">

                            {
                                events.map((event, i) =>
                                    <Grid item md={6} sm={12} key={i}>
                                        <Card club={event.club} event={event.name} description={event.description} coordinator1={event.coordinator1}
                                            coordinator2={event.coordinator2} phone1={event.phone1} phone2={event.phone2} fees={event.fees} />
                                    </Grid>
                                )
                            }

                        </Grid>
                    }
                </div>
                <br /><br />
                {/* <SmallFooter /> */}
            </div>
        );
    }
}

export default Events;
