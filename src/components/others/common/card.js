import React from 'react';
import '../styles/card.css';

const Card = props => {
    // console.log(props);
    return(
        <div className="card-wrapper">
            <div className="card-container">
                <p className="card-clubname">{props.club}</p>
                <p className="card-eventname">{props.event}</p>
                <p className="card-content">{props.description}</p>
                <p className="card-contact">
                Contact-{'coordinatorName Number'}
                </p>
            </div>
        </div>
    );
}

export default Card;