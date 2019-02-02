import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../styles/card.css';

const ContactCard = props => {
    return(
        <div className="card-wrapper contact-card-wrapper" style={{background: "none"}}>
            <div className="card-container">
                <p className="card-depname">{props.dep}</p>
                <p className="card-name">{props.name1}</p>
                <span className="card-number">
                    <FontAwesome name="phone" />
                    <span style={{marginLeft:'5px'}}>{props.contact1}</span>
                </span> 
                <p className="card-name">{props.name2}</p>
                <span className="card-number">
                    <FontAwesome name="phone" />
                    <span style={{marginLeft:'5px'}}>{props.contact2}</span>
                </span>
                <br />
                <br />
                <span className="card-email">
                    <FontAwesome name="envelope" />
                    <span style={{marginLeft:'5px'}}>{props.email}</span> <br/> <br />
                    <span style={{marginLeft:'5px'}}>{props.email2}</span>
                </span>
            </div>
        </div>
    );
}

export default ContactCard;