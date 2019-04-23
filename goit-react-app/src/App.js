import React, { Component } from 'react';

import {Profile, Stats, PricingPlan, TransactionHistory} from './Components';

import './App.scss';

class App extends Component {

    userInfo = require('./Data/user/user-info.json');
    stats = require('./Data/stats/stats.json');

    render() {
        return (
            <div className="main-container">
                <Profile userInfo={this.userInfo} />
                <Stats stats={this.stats} />
                <PricingPlan/>
                <TransactionHistory/>
            </div>
        )
    }
}

export default App;