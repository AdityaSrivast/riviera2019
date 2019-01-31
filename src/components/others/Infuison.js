import React, { Component } from 'react';
import Slider from "react-slick";

import Header from './common/header';
import Menu from "../Menu";
import SmallFooter from './common/smallFooter';
import Image1 from './../../images/inf-1.jpg';
import Image2 from './../../images/inf-2.jpg';
import Image3 from './../../images/inf-3.jpg';
import Image4 from './../../images/inf-4.jpg';

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
                    <Header title="INFUSION" image={Image1} position="bottom" regLink="https://tinyurl.com/infusion2019"  />
                }
                {
                    !this.state.is_mobile &&
                    <Slider {...settings} className="infusion-slider hide-on-small" >
                        <div>
                            <img src={Image2} alt="infusion1" />
                        </div>
                        <div>
                            <img src={Image1} alt="infusion1" />
                        </div>
                        <div>
                            <img src={Image3} alt="infusion1" />
                        </div>
                        <div>
                            <img src={Image4} alt="infusion1" />
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