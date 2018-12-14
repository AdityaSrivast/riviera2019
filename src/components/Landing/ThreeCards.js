import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import './../css/ThreeCard.css';


class ThreeCards extends Component {
    render() {
        return (
            <div className="eps-wrapper">
                <p>Events, proshows, Sports</p>
                <Grid container spacing={24}>
                    <Grid item xs={12} md={4} >
                        <div className="card-1 c-card">
                            <h1>EVENTS</h1>
                            <br />
                            <p>
                                Vel et officia fuga est voluptatem voluptatum.
                                Vel et officia fugavoluptatem voluptatum.
                            </p>
                            <button className="eps-btn">Go to Events</button>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <div className="card-2 c-card">
                            <h1>PROSHOWS</h1>
                            <br />
                            <p>
                                Vel et officia fuga est voluptatem voluptatum.
                                Vel et officia fugavoluptatem voluptatum.
                            </p>
                            <button className="eps-btn">Go to Proshows</button>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <div className="card-3 c-card">
                            <h1>SPORTS</h1>
                            <br />
                            <p>
                                Vel et officia fuga est voluptatem voluptatum.
                                Vel et officia fugavoluptatem voluptatum.
                            </p>
                            <button className="eps-btn">Go to Sports</button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default ThreeCards;
