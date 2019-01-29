import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {NavLink} from 'react-router-dom';

const styles = {
    list: {
        width: 250,
    },
};

class Fullpage extends Component {
    constructor() {
        super();
        this.state = {
            left: false
        }
    }
    toggleDrawer = (side, open) => () => {
        this.setState({
            left: open,
        });
    };
    render() {
        const { classes } = this.props;
        const sideList = (
            <div className={classes.list}>
                <List>
                    {['HOME', 'EVENTS', 'SPORTS', 'PROSHOWS', 'TEAM RIVIERA','CAMPUS AMBASSADOR', 'SPONSORS & PARTNERS','INFUSION', 'CONTACT'].map((text, index) => (
                        <NavLink to={text.split(' ')[0].toLowerCase()} className="navlink-btn">
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
            </div>
        );
        const Menu = () => (
            <IconButton className="menu-icon" color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
                <MenuIcon />
            </IconButton>
        );
        return (
            <div>
                <Menu />
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)} className="sidebar">
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>

        );
    }
}

export default withStyles(styles)(Fullpage);

