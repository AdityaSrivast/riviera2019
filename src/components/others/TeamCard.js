import React from 'react';

class TeamCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        }
    }
    team_hovered = () => {
        console.log("hovered");
        this.setState({ hovered: true });
    }
    team_unhovered = () => {
        console.log("unhoveres");
        this.setState({ hovered: false });
    }
    render() {
        let classes;
        let hovered = this.state.hovered;
        if (hovered) {
            classes = "teamcard-wrapper team-hovered"
        } else {
            classes = "teamcard-wrapper"
        }
        return (
            <div className={classes} onMouseEnter={this.team_hovered} onMouseLeave={this.team_unhovered}>
                <img src={this.props.imgSrc} alt="some alt" />
                <div 
                    className="team-text"
                    style={{ opacity: hovered? 1 : 0 }}
                >
                    <h3>{this.props.title}</h3>
                    <p>{this.props.designation}</p>
                </div>
            </div>
        );
    }
}

export default TeamCard;

    //we will receive the text and image in props and this is just a card 
    // all grid thing and center will be handled there.

