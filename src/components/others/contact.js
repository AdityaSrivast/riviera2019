import React from 'react';
import Header from './common/header';
import Menu from "../Menu";
import Image from './../../images/sports.jpg';
import ContactCard from './common/ContactCard';
import {Grid} from '@material-ui/core';

let contacts = [
    {
        dep: "Registrations",
        name1: "Akshay Gupta",
        contact1: "9968539931",
        name2: "Jatin Patwa",
        contact2: "9790086674",
        email: "registration.riviera1@vit.ac.in"
    },
    {
        dep: "Events & Culturals",
        name1: "Bharat Gupta",
        contact1: "9790043346",
        name2: "Namit Munjal",
        contact2: "9585583656",
        email: "events.riviera@vit.ac.in"
    },
    {
        dep: "Sports",
        name1: "Riyana Rasheed",
        contact1: "9585334584",
        name2: "Vaibhav Mathur",
        contact2: "9003734769",
        email: "sports.riviera@vit.ac.in"
    },
    {
        dep: "Accomodation",
        name1: "Yash Gupta",
        contact1: "9445870295",
        name2: "Ballasani Smrithi",
        contact2: "9003728789",
        email: "gc.riviera1@vit.ac.in"
    }
];

const Contact = () => {
    return(
        <div className="contact-section">
        <Menu />
            <Header title="CONTACT US"  image={Image}/>
                <Grid container>
                    {
                        contacts.map((contact,i)=>  
                            <Grid item className="contact-grid" md={3} sm={12} xs={12}>
                                <ContactCard 
                                dep={contact.dep} 
                                name1={contact.name1} 
                                name2={contact.name2} 
                                contact1={contact.contact1} contact2={contact.contact2}
                                email={contact.email}  />
                            </Grid>
                        )
                    }
                </Grid>
        </div>
    );
}

export default Contact;