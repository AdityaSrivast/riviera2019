import React from 'react';


import Menu from './../Menu';
import Header from './common/header';
import events from './../../images/event-main.jpg';

const Proshows = () => {
    return(
        <div>
            <Menu />
            <Header title="PROSHOWS" image={events}/>
        </div>
    );
}

export default Proshows;