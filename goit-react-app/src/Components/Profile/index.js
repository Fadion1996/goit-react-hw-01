import React, {Component} from 'react';
import {Card, CardActionArea, CardMedia, CardContent} from '@material-ui/core';


import './profile.scss'

class Profile extends Component {

    render () {

        const { name, tag, location, avatar, stats } = this.props.user;

        return (
            <Card className='profile-wrapper'>
                <CardMedia
                    component="img"
                    alt="user avatar"
                    className='profile-avatar'
                    image={avatar}
                    title="Petra Marica"
                />
                <CardContent className='profile-discription'>
                    <div className='profile-about'>
                        <div className="name">{name}</div>
                        <div className="tag">{tag}</div>
                        <div className="location">{location}</div>
                    </div>    
                    <div className='profile-social'>
                        <CardActionArea className='profile-social-stats'>
                            <p className="label">Followers</p>
                            <p className="quantity">{stats.followers}</p>
                        </CardActionArea>
                        <CardActionArea className='profile-social-stats'>
                            <p className="label">Views</p>
                            <p className="quantity">{stats.views}</p>
                        </CardActionArea>
                        <CardActionArea className='profile-social-stats'>
                            <p className="label">Likes</p>
                            <p className="quantity">{stats.likes}</p>
                        </CardActionArea>
                    </div>
                </CardContent>
            </Card>
        )
    }

} 

export default Profile;