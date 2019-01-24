import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import Menu from './../Menu';
import Header from './common/header';

import CommonTableRows from './common/tableRows';



import Img from './../../images/event-main.jpg';
import './styles/campus.css';

class CampusAmbassador extends Component{
    constructor(){
        super();
        this.state={
            colleges: 
                {
                 'Colleges in Tamil Nadu (Zone 1)': 0,
                 'Colleges from Andhra, Telangana, Kerala and Karnataka (Zone 2)': 1, 
                 'Colleges from other parts of North India (Zone 3)': 2
                },
            activeRegion: 0
        };
    }

    changeTable(id){
        this.setState({
            activeRegion: id
        });
    }

    isActive(id){
        if(this.state.activeRegion==id){
            return 'activeBtn';
        }
        return '';
    }

    render(){
        let {colleges ,activeRegion} = this.state;
        return(
            <div className="campus-section">
                <Menu />
                <Header title="BECOME A CAMPUS AMBASSADOR" image={Img} />
                <div className="campus">
                    <Grid container className="campus-main-grid">
                        <div className="college-buttons">
                            {
                                Object.keys(colleges).map((college,i)=>
                                    <Grid item md={3} sm={12} xs={12} className="campus-grid" style={{margin: '20px 10px'}}>
                                            <Button 
                                            key={i} 
                                            variant="outlined" 
                                            size="large" 
                                            className={"collegeBtn "+ this.isActive(colleges[college])}
                                            onClick={(e) => {
                                                this.changeTable(colleges[college]);
                                                }}>
                                                {college}
                                            </Button>
                                    </Grid>
                                )
                            }
                        </div>
                    </Grid>
                    <div className="registration-table">
                        {(()=>{
                            if(activeRegion==0){
                                return (
                                    <CommonTableRows gold1={35} gold2={50} diamond1={51} diamond2={75} />
                                )
                            } else if(activeRegion==1){
                                return (
                                    <CommonTableRows gold1={20} gold2={30} diamond1={31} diamond2={50} />
                                )
                            } else {
                                return (
                                    <CommonTableRows gold1={10} gold2={15} diamond1={16} diamond2={25} />
                                )
                            }

                        })()}
                    </div> <br/> <br/>
                    <div className="duties">
                        <h2>DUTIES OF CAMPUS AMBASSADOR</h2>
                        <ul className="duties-list">
                            <li>Campus ambassadors are to act as the link between the Riviera Team and the concerned college administration and facilitate student communication</li>
                            <li>Be updated with Riviera’19 happenings</li>
                            <li>To publicize and promote Riviera’19 by all possible means.</li>
                            <li>They are required to share posters and other happenings of Riviera’19 through social media networks.</li>
                        </ul>
                    </div>
                    <br/>
                    <br/>

                    <div className="duties">
                        <h2>TERMS AND CONDITIONS</h2>
                        <ul className="duties-list">
                            <li>Only 1 campus ambassador per college is permitted.</li>
                            <li>The final decision of allotting the zone and category rests with the Riviera’19 team.</li>
                            <li>Any kind of indiscipline caused by the ambassador during or before the fest will lead to severe disciplinary actions.</li>
                            <li>The travel ticket should be booked in the name of the ambassador to claim the refund. The travel fares, as mentioned, entail train tickets of the 2nd class compartments to all respective destinations from Vellore. (Maximum amount is INR 500 one way for Zone 1, INR 750 one way for Zone 2 and INR 1000 one way for Zone 3 and twice the amount for two way fares.)</li>
                            <li>The travel expenses will be redeemed on the fourth day of the fest on submission of the ticket.</li>
                            <li>As a proof of registrations, the student ambassador needs to maintain a record of the details of registered students, in a format described by the Riviera’19 team.</li>
                        </ul>
                    </div>
                </div>
                {/* <SmallFooter /> */}
            </div>
        );
    }
}

export default CampusAmbassador;