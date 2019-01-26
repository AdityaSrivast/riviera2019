import React from 'react';
import { Grid } from '@material-ui/core';

import Menu from './../Menu';
import Header from './common/header';
import events from './../../images/event-main.jpg';
import Sonu from './../../images/sonu.jpg';
import Andrea from '../../images/andrea.jpg';
import Ayushmann from '../../images/ayushman.jpg';
import LocalTrain from '../../images/thelocaltrain.jpg';
import DSP from '../../images/dsp.jpg';
import DJShaan from '../../images/djshaan.jpg';
import SmallFooter from "./common/smallFooter";

import './styles/proshows.css';

const Proshows = () => {
    return (
        <div>
            <Menu />
            <Header title="PROSHOWS" image={events} />
            <div className="proshows-wrapper">
                <br />
                <div className="proshows-card-wrapper">
                    <div className="proshows-card-container">
                        <Grid container >
                            <Grid item md={4} xs={12} className="star-pic">
                                <img className="sonu-img" src={Sonu} alt="sonu-nigam"></img>
                            </Grid>
                            <Grid item md={8} xs={12} className="star-data">
                                <h1>Day 1</h1>
                                <h2>Sonu Nigam</h2>
                                <p>From composing catchy songs like "Yeh Dil Deewana" that got us dancing in the 90's to creating songs like "Abhi Mujh Mein Kahin" that got our hearts beating in 2000's, Sonu Nigam has done it all. His work is truly evergreen!</p>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="proshows-card-wrapper">
                    <div className="proshows-card-container">
                        <Grid container>
                            <Grid item md={8} xs={12} className="star-data" style={{textAlign:'right'}}>
                                <h1>Day 1</h1>
                                <h2>The Local Train</h2>
                                <p>Since their inception in 2008, The Local Train have take the genre of Indie Rock to a whole other level. Currently, they have over 20 million views on their YouTube channel and is one of the fastest growing music channels in India. Their compositions like "Aaoge Tum Kabhi", "Aaftaab" and "Choo Lo" will make your hearts melt and take you down the memory lane.</p>
                            </Grid>
                            <Grid item md={4} xs={12} className="star-pic">
                                <img className="sonu-img" src={LocalTrain} alt="sonu-nigam"></img>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="proshows-card-wrapper">
                    <div className="proshows-card-container">
                        <Grid container>
                        <Grid item md={4} xs={12} className="star-pic">
                                <img className="sonu-img" src={Ayushmann} alt="sonu-nigam"></img>
                            </Grid>
                            <Grid item md={8} xs={12} className="star-data">
                                <h1>Day 2</h1>
                                <h2>Ayushmann Khurrana</h2>
                                <p>We all fell in love with him when he relased his debut song 'Pani Da Rang' back in 2012. From then, Ayushmann Khurrana went on to become not only an acclaimed actor in Bollywood but also a brilliant singer, with amazing hits like "Yahin Hoon Main" and "Mitti Di Khushboo". He is working on bringing back the lost genre of Indie Music in India.</p>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="proshows-card-wrapper">
                    <div className="proshows-card-container">
                        <Grid container>
                            <Grid item md={8} xs={12} className="star-data" style={{textAlign:'right'}}>
                                <h1>Day 2</h1>
                                <h2>Andrea Jeremiah</h2>
                                <p>She is an actor, a singer, a musician and a dancer. Andrea began her career as a playback singer and today is one of the most loved names in South Indian Cinema. And who hasn't shaken a leg at her blockbuster hits like 'Yelomia','Kadal Naan Thaan' and 'Yaar Intha'.</p>
                            </Grid>
                            <Grid item md={4} xs={12} className="star-pic">
                                <img className="sonu-img" src={Andrea} alt="sonu-nigam"></img>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="proshows-card-wrapper">
                    <div className="proshows-card-container">
                        <Grid container>
                        <Grid item md={4} xs={12} className="star-pic">
                                <img className="sonu-img" src={DSP} alt="sonu-nigam"></img>
                            </Grid>
                            <Grid item md={8} xs={12} className="star-data">
                                <h1>Day 3</h1>
                                <h2>Devi Sri Prasad (DSP)</h2>
                                <p>Elevate your spirits this Riviera with the man behind these chartbusters - Daddy Mummy, Dhinka Chika, AaAnte Amalapuram and much more. Winning 8 Filmfare awards, he proved himself as a music composer, singer and performer. His songs have been dubbed into multiple languages making him one of the most versatile singers in India.</p>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="proshows-card-wrapper">
                    <div className="proshows-card-container">
                        <Grid container>
                            <Grid item md={8} xs={12} className="star-data" style={{textAlign:'right'}}>
                                <h1>Day 4</h1>
                                <h2>DJ Shaan</h2>
                                <p>He was the youngest Indian DJ to play at an international music festival and has quickly risen to become one of India's Hottest DJs. His big room, uplifting tracks and silky smooth transitions have brought him recognition from artists and the industry. Get ready with your dance moves as we bring to you one of the best DJs of India.  </p>
                            </Grid>
                            <Grid item md={4} xs={12} className="star-pic">
                                <img className="sonu-img" src={DJShaan} alt="sonu-nigam"></img>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            <SmallFooter />
            </div>
        </div>
    );
}

export default Proshows;