import React, { Component } from 'react';
import Profile from './Profile'
// import './App.css';

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

    render() {
        return (
            <div>
                <Profile user={this.user} />
            </div>
        )
    }
}

export default App;