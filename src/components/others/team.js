import React from 'react';
import { Grid } from '@material-ui/core';

import Menu from './../Menu';
import Header from './common/header';
import TeamCard from './TeamCard';
import Organizer from './../../images/event-main.jpg';
import gv from './../../images/gv.png';
import sv from './../../images/ShankarV.png';
import gvs from './../../images/gvs.jpg';
import SN from './../../images/SN.png';
import VR from './../../images/VR.png';
import AAS from './../../images/AAS.png';
import ShV from './../../images/shekharv.jpg';
import pss from './../../images/pss.jpg';
import pvg from './../../images/pvg.jpg';
import deepam from './../../images/deepam.jpg';
import psm from './../../images/psm.jpg';
import pscv from './../../images/pscv.jpg';

import './styles/team.css';


class Team extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <Header title="TEAM RIVIERA'19" image={Organizer} />
                <div className="team-wrapper">
                    <br /><br />
                    <div className="patron-wrapper">
                        <h1>Patron</h1><br />
                        <TeamCard imgSrc={gv} title="DR. G. Vishwanathan" designation="chancellor & founder VIT" />
                    </div>
                    <div className="co-patron-wrapper">
                        <h1>Our Co-Patron</h1><br />
                        <Grid container spacing={24}>
                            <Grid item xs={12} md={4}>
                                <TeamCard imgSrc={sv} title="MR. SANKAR Vishwanathan" designation="Vice President, VIT" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TeamCard imgSrc={ShV} title="DR. SEKAR Vishwanathan" designation="Vice President, VIT" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TeamCard imgSrc={gvs} title="MR. G.V. SELVAM" designation="Vice President, VIT"  />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TeamCard imgSrc={AAS} title="DR. Anand A. Samuel" designation="vice chancellor, VIT" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TeamCard imgSrc={VR}  title="DR. V. Raju " designation="pro-vice chancellor, VIT"/>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TeamCard imgSrc={SN}  title="DR. S. Narayanam" designation="pro-vice chancellor, VIT"/>
                            </Grid>
                        </Grid>
                    </div>
                    <br />
                    <div className="patron-wrapper">
                        <h1>Convenor</h1><br />
                        <TeamCard imgSrc={pss} title="Prof. Sasikumar S." designation="Convenor" />
                    </div>
                    <br />
                    <div className="co-convenor-wrapper">
                        <h1>Co-Convenor</h1><br />
                        <Grid container spacing={24}>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={pvg} title="Prof. Velmurugan" designation="Co-convenor" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={deepam} title="Prof. Deepa M." designation="Co-convenor"/>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={psm} title="Prof. SenthilKumar M" designation="Co-convenor" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={pscv} title="Prof. Sudeer c.v" designation="Co-convenor"/>
                            </Grid>
                        </Grid>
                    </div>

                    <br /><br />
                </div>
            </div>
        );
    }
}



export default Team;