import React from 'react';
import '../styles/card.css';

const ContactCard = props => {
    return(
        <div className="card-wrapper">
            <div className="card-container">
                <p className="card-depname">{props.dep}</p>
                <p className="card-name">{props.name1}</p>
                <p className="card-number">{props.contact1}</p>
                <p className="card-name">{props.name2}</p>
                <p className="card-number">{props.contact1}</p>
                <p className="card-email">{props.email}</p>
            </div>
        </div>
    );
}

export default ContactCard;