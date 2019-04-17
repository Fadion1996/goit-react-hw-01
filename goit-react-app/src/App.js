import React, { Component } from 'react';

import {Profile, Stats, PricingPlan, TransactionHistory} from './Components';

import './App.scss';

class App extends Component {

    user = {
        name: 'Jacques Gluke',
        tag: '@jgluke',
        location: 'Ocho Rios, Jamaica',
        avatar: 'http://okcolab.sasquatchstudio.co/wp-content/uploads/2017/05/avatar-sample.jpg',
        stats: {
            followers: 5603,
            views: 4827,
            likes: 1308,
        },
    };

    stats = [
        { id: 'id-1', label: '.docx', percentage: 22 },
        { id: 'id-2', label: '.pdf', percentage: 4 },
        { id: 'id-3', label: '.mp3', percentage: 17 },
        { id: 'id-4', label: '.psd', percentage: 47 },
        { id: 'id-5', label: '.pdf', percentage: 10 },
    ];

    render() {
        return (
            <div className="main-container">
                <Profile user={this.user} />
                <Stats stats={this.stats}/>
                <PricingPlan></PricingPlan>
                <TransactionHistory></TransactionHistory>
            </div>
        )
    }
}

export default App;