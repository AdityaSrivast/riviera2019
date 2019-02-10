import React, {Component} from 'react';
import '../styles/card.css';
import { withRouter } from 'react-router-dom';

class Card extends Component{
    constructor(props){
        super(props);
        this.state={
            hovered: false
        };
        this.handleHover=this.handleHover.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    isActive(){
        if(this.state.hovered){
            return 'hovered-scroll';
        }
        return '';
    }

    handleHover(){
        this.setState({
            hovered: !this.state.hovered
        })
    }

    handleClick(){
        this.props.history.push(`events/result?name=${this.props.event}`);
    }

    render() {
        return(
            <div className="card-wrapper" 
            onMouseEnter={this.handleHover} 
            onMouseLeave={this.handleHover}
            onClick={this.handleClick}>
                <div className="card-container">
                    <p className="card-clubname">{this.props.club}</p>
                    <p className="card-eventname">{this.props.event}</p>
                    <p className={`card-content ${this.isActive()}`}>{this.props.description}</p>
                    <p className="card-contact">
                    <p className="card-fees"><b>Reg. Fees: </b> {this.props.fees}</p>
                    <b>Contact</b><br />
                    {this.props.coordinator1} - {this.props.phone1}<br />
                    {this.props.coordinator2} - {this.props.phone2}
                    </p>
                </div>
            </div>
        );
    }
}

export default withRouter(Card);