// external modules
import React, { Component } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';

// internal modules
import Menu from './../Menu';
import Header from './common/header';
import Card from './common/card';

// others
import urls from '../urls';
import events from './../../images/event-main.jpg';
import './styles/events.css';

const BASE_URL = urls.API_URL;

class Events extends Component {
    constructor() {
        super();
        this.state = {
            category: '',
            query: '',
            loading: true,
            events: []
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
        axios.get(`${BASE_URL}/all`).then(resp=> {
            // console.log(resp);
            let {info} = resp.data;
            this.setState({events: info, loading: false});
            // console.log(info);
        }).catch(err=> {
            this.setState({loading: false});
            console.log(err);
        })
    }

    search = (value) => {
        this.setState({query: value});
        let input, filter, ul, p, a, i, txtValue;
        input = this.state.query;
        // input = document.getElementById("myInput");
        filter = input.toUpperCase();
        ul = document.getElementById('events-cards');
        // p = ul.getElementsByTagName("p.ca");
        p= ul.getElementsByClassName("card-wrapper");
        for (i = 0; i < p.length; i++) {
            // console.log(p[i]);
            // // a = p[i][1];
            // a = p[i].getElementsByTagName("a")[0];
            a= ul.getElementsByClassName("card-eventname")[0];
            // console.log(a);
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                p[i].style.display = "";
            } else {
                p[i].style.display = "none";
            }
        }
    }

    render() {
        let {events, loading} = this.state;
        let cards=[];
        for(let i=0;i<events.length;i++) {
            let event = events[i];
            let {club,name, description,coordinator1,coordinator2,phone1,phone2}=event;
            cards.push(
                <Grid item md={6} sm={12}>
                    <Card club={club} event={name} description={description} coordinator1={coordinator1} 
                    coordinator2={coordinator2} phone1={phone1} phone2={phone2} />
                </Grid>
            )
        }
        return (
            <div className="events-section">
                <Menu />
                <Header title="EVENTS RIVIERA '19" image={events} />
                <div className="events">
                    <Grid container>
                        <Grid item md={6} xs={6}>
                            <div className="event-select-container">
                                <select className="event-select">
                                    <option>
                                        One
                                    </option><option>
                                        One
                                    </option><option>
                                        One
                                    </option>
                                </select>
                            </div>
                        </Grid>
                        <Grid item md={6} xs={6}>
                            <div className='search-container' style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <input
                                    type='text'
                                    spellCheck="false"
                                    // value={this.state.query}
                                    // onChange={(e) => this.updateQuery(e.target.value)}
                                    onChange={(e)=> this.search(e.target.value)}
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
                    <CircularProgress size={30} className="color-theme-red"></CircularProgress>:
                    <Grid container id="events-cards" className="events-cards">
                        {cards}
                    </Grid>}
                </div>
                <br/><br/>
            </div>
        );
    }
}

export default Events;
