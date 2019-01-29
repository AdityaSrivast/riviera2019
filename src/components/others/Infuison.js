import React, { Component } from 'react';

import Header from './common/header';
import Menu from "../Menu";
import SmallFooter from './common/smallFooter';
import Image from './../../images/inf-1.jpg';

import './styles/infusion.css';

class Infusion extends Component {
    render() {
        return (
            <div className="infusion-wrapper">
                <Menu />
                <Header title="INFUSION" image={Image} />
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
                    <h1 className="under">Desh main Videsh: </h1>
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
                </div>
                <SmallFooter />
            </div>
        );
    }
}

export default Infusion;