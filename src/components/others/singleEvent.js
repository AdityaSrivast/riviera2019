import React, {Component} from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import axios from 'axios';
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
            console.log(info);
            this.setState({ event: info, loading: false });
        }).catch(err => {
            this.setState({ loading: false });
            console.log(err);
        });
    }

    render(){
        let {event, loading} = this.state;
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
                                <Grid item md={9} xs={12} className="single-main">
                                    <h2 className="single-event-name">
                                        {event.name}
                                    </h2>
                                    <p className="single-event-desc">{event.description}</p>
                                    <p className="event-org">{event.club}</p>
                                </Grid>
                                <Grid item md={3} xs={12} className="single-second">
                                    
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
