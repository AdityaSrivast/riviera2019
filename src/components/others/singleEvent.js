import React, {Component} from 'react';
import { Grid, CircularProgress, Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';
import urls from '../urls';
import Menu from '../Menu';
import './styles/singleEvent.css';

class SingleEvent extends Component{
    constructor(){
        super();
        this.state={
            loading: true,
            event: ''
        }
    }

    componentDidMount(){
        let urlParams = new URLSearchParams(this.props.location.search);
        let name = encodeURIComponent(urlParams.get('name'));
        axios.get(`${urls.API_URL}/details?name=${name}`).then(resp =>{
            let {info} = resp.data;
            console.table(info);
            this.setState({ event: info, loading: false });
        }).catch(err => {
            this.setState({ loading: false });
            console.log(err);
        });
    }

    render(){
        let {event, loading} = this.state;
        console.log(this.props.location.pathname);
        return(
            <div>
                <Menu />
                {
                    loading?
                    <CircularProgress size={100} className="big-loader color-theme-red"></CircularProgress>
                    :
                <div className="single-event-section">
                        <div className="single-event">
                            <Grid container>
                                <Grid item md={8} xs={12} className="single-main">
                                    <h2 className="single-event-name">
                                        {event.name}
                                    </h2>
                                    <p className="single-event-desc">{event.description}</p>
                                    <h2 style={{color: '#ffa0a0', marginBottom: '0px' }}>Organizer:</h2>
                                    <p className="single-event-prize">{event.club}</p>

                                    <h2 style={{color: '#ffa0a0', marginBottom: '0px' }}>Prize Money:</h2>
                                    <p className="single-event-prize">
                                        <FontAwesome name="inr" />
                                        {event.prizeMoney}
                                    </p>
                                </Grid>
                                <Grid item md={4} xs={12} className="single-second">
                                    <ul style={{listStyleType: 'none'}} className="single-event-list">
                                        <li>
                                            <div className="register-btn">
                                                <a style={{textDecoration: 'none'}} href="https://vtop11.vit.ac.in/riviera/">
                                                    <Button style={{width: '80%'}} size="large" variant="contained">
                                                        REGISTER
                                                    </Button>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="single-event-li">
                                            <p>Reg. Fees</p>
                                            <p>
                                                <FontAwesome name="inr" />
                                                {event.fees}
                                            </p>
                                        </li>
                                        <li className="single-event-li">
                                            <p>Date</p>
                                            <p>
                                                {event.date}
                                            </p>
                                        </li>
                                        {
                                            event.time.length==0 ? '' :
                                            <li className="single-event-li">
                                            <p>Time</p>
                                            <p>{event.time}</p>
                                            </li>
                                        }
                                        
                                        <li className="single-event-li">
                                            <p>Coordinator 1</p>
                                            <p>{event.coordinator1}</p>
                                        </li>
                                        <li className="single-event-li">
                                            <p>Coordinator 2</p>
                                            <p>{event.coordinator2}</p>
                                        </li>
                                        <li className="single-event-li">
                                            <p>Phone</p>
                                            <p>{event.phone1}/<br/> {event.phone2}</p>
                                        </li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </div>
                </div>
            }
            </div>
        );
    }
}

export default SingleEvent;
