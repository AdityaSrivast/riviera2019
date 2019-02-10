import React from 'react';
import { Grid } from '@material-ui/core';

import Menu from './../Menu';
import Header from './common/header';
import TeamCard from './TeamCard';
import SmallFooter from './common/smallFooter';

import Organizer from './../../images/event-main.jpg';
import gv from './../../images/gv.png';
import sv from './../../images/ShankarV.png';
import gvs from './../../images/gvs.jpg';
import SN from './../../images/SN.png';
import VR from './../../images/VR.png';
import AAS from './../../images/aas.png';
import ShV from './../../images/shekharv.jpg';
import pss from './../../images/pss.jpg';
import ram from './../../images/rameshn.jpg';
import sharmila from './../../images/sharmila.jpg';
import seeni from './../../images/seenivas.jpg';
import psm from './../../images/psm.jpg';
import pscv from './../../images/pscv.jpg';

import abdul from './../../images/organizer/abdul.jpg';
import abharika from './../../images/organizer/abharika.jpg';
import abhikhya from './../../images/organizer/abhikhya.jpg';
import akhilv from './../../images/organizer/akhilv.jpg';
import akshay from './../../images/organizer/akshay.jpg';
import apoorva from './../../images/organizer/apoorva.jpg';
import ballasani from './../../images/organizer/ballasani.jpg';
import bharat from './../../images/organizer/bharat.jpg';
import daksh from './../../images/organizer/daksh.jpg';
import darshan from './../../images/organizer/darshan.jpg';
import deva from './../../images/organizer/deva.jpg';
import gurleen from './../../images/organizer/gurleen.jpg';
import jatin from './../../images/organizer/jatin.jpg';
import manu from './../../images/organizer/manu.jpg';
import mragul from './../../images/organizer/mragul.jpg';
import mrinalini from './../../images/organizer/mrinalini.jpg';
import namit from './../../images/organizer/namit.jpg';
import pranav from './../../images/organizer/pranav.jpg';
import riddhi from './../../images/organizer/riddhi.jpg';
import riyana from './../../images/organizer/riyana.jpg';
import sachin from './../../images/organizer/sachin.jpg';
import saitej from './../../images/organizer/saitej.jpg';
import santhim from './../../images/organizer/santhim.jpg';
import shivam from './../../images/organizer/shivam.jpg';
import sudeep from './../../images/organizer/sudeep.jpg';
import vaibhav from './../../images/organizer/vaibhav.jpg';
import vrakhesh from './../../images/organizer/vrakhesh.jpg';
import yash from './../../images/organizer/yash.jpg';





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
                        <h1 className="under">Patron</h1><br />
                        <TeamCard imgSrc={gv} title="DR. G. Vishwanathan" designation="chancellor & founder VIT" />
                    </div>
                    <div className="co-patron-wrapper">
                        <h1 className="under">Our Co-Patron</h1><br />
                        <Grid container spacing={24}>
                            <Grid item xs={12} md={4}>
                                <TeamCard imgSrc={sv} title="SANKAR Vishwanathan" designation="Vice President, VIT" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TeamCard imgSrc={ShV} title="SEKAR Vishwanathan" designation="Vice President, VIT" />
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
                        <h1 className="under">Convenor</h1><br />
                        <TeamCard imgSrc={pss} title="Prof. Sasikumar S." designation="Convenor" />
                    </div>
                    <br />
                    <div className="co-convenor-wrapper">
                        <h1 className="under">Co-Convenor</h1><br />
                        <Grid container spacing={24}>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={ram} title="Prof. Ramesh N" designation="Co-convenor" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={sharmila} title="Prof. Sharmila N." designation="Co-convenor"/>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={psm} title="Prof. SenthilKumar M" designation="Co-convenor" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={pscv} title="Prof. Sudeer C.V" designation="Co-convenor"/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid item xs={12} md={12}>
                                <TeamCard imgSrc={seeni} title="Prof. Seenivasan R" designation="Co-convenor"/>
                            </Grid>
                        </Grid>
                    </div>
                    <br />
                    <div className="organizer-wrapper">
                        <h1 className="under">Student Organizers</h1><br />
                        <Grid container spacing={24}>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={abdul} title="Abdul Fayeed Shaik" designation="Sponsorship" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={abharika} title="Abharika Nayyer" designation="Guest Care"/>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={abhikhya} title="Abhikhya Ponnapalli" designation="P&M National" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={akhilv} title="Akhil Vaigandla" designation="Purchase"/>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={akshay} title="Akshay Gupta" designation="Registration & Reception" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={apoorva} title="Apoorv Lunawat" designation="P&M International"/>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={ballasani} title="Ballasani Smrithi" designation="Guest Care" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={bharat} title="Bharat Gupta" designation="Events & Cultural" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={daksh} title="Daksh Mehta" designation="Design & Media" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={darshan} title="Darshan Suri" designation="Sales"/>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={deva} title="Deva Dattu" designation="Halls & Refreshments" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={gurleen} title="Gurleen Kaur" designation="ISO & Documentation" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={jatin} title="Jatin Patwa" designation="Registration & Reception" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={mragul} title="M Ragul Vignesh" designation="P&M Tamil Nadu"/>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={manu} title="Manu Gangrade" designation="P&M International" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={saitej} title="MNVJ Saitej" designation="Sales" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={mrinalini} title="Mrinalini MS" designation="Finance" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={namit} title="Namit Munjal" designation="Events & Cultural"/>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={pranav} title="Pranav Sethi" designation="ProShows" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={riddhi} title="Ridhhi Srivastava" designation="Sales"/>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={riyana} title="Riyana Rasheed" designation="Sports" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={sachin} title="Sachin Menon" designation="ProShows" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={santhim} title="Santhim Nahar" designation="P&M Sports" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={shivam} title="Shivam Kumar Singh" designation="Stalls" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={sudeep} title="Sudeep Mohan" designation="ProShows" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={vrakhesh} title="V Rakeshsaravanna" designation="Guest Care"/>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={vaibhav} title="Vaibhav Mathur" designation="Sports" />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamCard imgSrc={yash} title="Yash Gupta" designation="Guest Care"/>
                            </Grid>
                        </Grid>
                    </div>

                    <br /><br />
                </div>
                <SmallFooter />
            </div>
        );
    }
}



export default Team;