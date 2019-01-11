//external modules
import React from 'react';
import {Grid} from '@material-ui/core';

//internal modules
import Menu from './../Menu';
import Header from './common/header';
import Card from './common/card';

import './styles/sports.css';

//other resources
import sports from './../../images/sports.jpg';

const Sports = () => {
    return(
        <div className="sports-section">
            <Menu />
            <Header title="SPORTS RIVIERA '19" image={sports}/>
            <div className="sports">
                <Grid container className="events-cards">
                    <Grid item md={6} sm={12}>
                        <Card/>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <Card/>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <Card/>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <Card/>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <Card/>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <Card/>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <Card/>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <Card/>
                    </Grid>
                </Grid>
            </div><br/><br/>
        </div>
    );
}

export default Sports;