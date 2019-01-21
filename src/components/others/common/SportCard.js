import React from 'react';
import '../styles/card.css';

const SportCard = props => {
    // console.log(props);
    return(
        <div className="card-wrapper">
            <div className="card-container sport-card">
                <p className="card-sportname">{props.sport}</p>
                <p className="card-fee">Fee: {props.fee}</p>
                <p className="card-date">Date: {props.date}</p>
                <p className="card-team">Team Size: {props.team_size}</p>
            </div>
        </div>
    );
}

export default SportCard;