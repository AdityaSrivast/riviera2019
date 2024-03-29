import React, { Component } from 'react';
import Slider from "react-slick";
import { Grid } from '@material-ui/core';

import Header from './common/header';
import Menu from "../Menu";
import SmallFooter from './common/smallFooter';

import Haldiram from '../../images/haldiram.png';
import Inf1 from '../../images/infs-1.png';
import Inf2 from '../../images/infs2.png';
import Portico from '../../images/portico.png';
import WT from '../../images/wt.png';
import './styles/infusion.css';

class Infusion extends Component {
    state = {
        is_mobile: false
    }
    componentDidMount() {
        if (window.innerWidth < 650) {
            this.setState({ is_mobile: true });
        }
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        let {img1, img2, img3, img4} = this.props;

        return (
            <div className="infusion-wrapper">
                <Menu />
                <div className="nav-buttons-wrapper" style={{ zIndex: 2 }}>
                    <a href="https://tinyurl.com/infusion2019" target="_blank" rel="noopener noreferrer">
                        <button className="nav-button">Register</button>
                    </a>
                </div>
                {
                    this.state.is_mobile &&
                    <Header title="INFUSION" image={img1} position="bottom" regLink="https://tinyurl.com/infusion2019"  />
                }
                {
                    !this.state.is_mobile &&
                    <Slider {...settings} className="infusion-slider hide-on-small" >
                        <div>
                            <img src={img1} alt="infusion1" />
                        </div>
                        <div>
                            <img src={img2} alt="infusion1" />
                        </div>
                        <div>
                            <img src={img3} alt="infusion1" />
                        </div>
                        <div>
                            <img src={img4} alt="infusion1" />
                        </div>
                        {/* <div>
                        <img src={Image5} alt="infusion1" />
                    </div>
                    <div>
                        <img src={Image6} alt="infusion1" />
                    </div> */}
                    </Slider>
                }

                <div className="infusion-text-wrapper">
                    <br /><br />
                    <h1 className="under">Infusion</h1>
                    <br />
                    <p>
                        This Riviera, catch our friends from overseas decked in their traditional wear, ready
                        to share with us the arts from their abode.  Come be a part of this phenomenon, let the
                        seeds of cultural unity grow roots in your minds and spread to the rest of the world.
                    </p>
                    <p>
                        The time where cultures come together in an exciting mix of colourful entertainment,
                        music and dance. An exploration, a jubilant congregation, the joyful feeling of coming together
                         as one world. Guests from near and far, performances that take your breaths away and an
                         understanding of different traditions from across the globe, all in our very own Anna Audi
                         on the 16th of February.
                    </p>
                    <p>
                        Welcome to a melding of the cultures and hearts. Welcome, to <b>Infusion 2k19</b>.
                    </p>
                    <br />
                    <h1 className="under">Desh Main Videsh </h1>
                    <p>Behold, the ultimate Cultural Carnival! </p>
                    <p>
                        This Riviera, we bring to you,  Desh main Videsh,  an educational and entertaining
                        chapter in the book of globalization.  We seek to suffuse in the minds of our youngsters,
                        global views on sustainable development via an interactive classroom session with our esteemed
                        guests from abroad, giving them the foothold to go forward and bring the nations together. But
                        that’s not all! Learning doesn’t end with the four walls of a classroom, and so we take you
                        along our grounds, straight into the heart of the biggest cultural carnival of Riviera! Stalls
                        from more than 40 different countries visiting us this year: things to eat, people to greet,
                        and a whole lot of souvenirs to get your hands on!
                        </p>
                    <p>Don’t miss out on this fun filled event where nations gather within The Nation, Desh main
                        Videsh.
                        </p>
                    <br /><br />
                    <h1 className="under">Sponsors</h1>
                    <Grid container spacing={24}>
                        <Grid item md={12} xs={12} className="center-sponsor" >
                            <img src={Haldiram} alt="sponsor" />
                        </Grid>
                        <Grid item md={3} xs={12} className="center-sponsor">
                            <img src={Inf1} alt="sponsor" className="other-logo"/>
                        </Grid>
                        <Grid item md={3} xs={12} className="center-sponsor">
                            <img src={Inf2} alt="sponsor" className="other-logo" />
                        </Grid>
                        <Grid item md={3} xs={12} className="center-sponsor">
                            <img src={WT} alt="sponsor" className="other-logo" />
                        </Grid>
                        <Grid item md={3} xs={12} className="center-sponsor">
                            <img src={Portico} alt="sponsor" />
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                    <h2 className="under">Contact Details </h2>
                    <p>
                        <p>Apoorv Lunawat - +919033629119</p>
                        
                        <p>Manu Gangrade -+919003719914</p>
                        
                        <p>mail : international.riviera@vit.ac.in</p>
                    </p>
                    <br /><br />
                </div>
                <SmallFooter />
            </div>
        );
    }
}

export default Infusion;