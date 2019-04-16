import React, {Component} from 'react';
import {Card, CardActionArea, CardMedia, CardContent} from '@material-ui/core';


import './profile.scss'

class Profile extends Component {

    render () {

        const {...user} = this.props;

        return (
            <Card className='profile-wrapper'>
                <CardMedia
                    component="img"
                    alt="user avatar"
                    className='profile-avatar'
                    image="https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg"
                    title="Petra Marica"
                />
                <CardContent className='profile-discription'>
                    <div className='profile-about'>
                        <div className="name">Petra Marica</div>
                        <div className="tag">@pmarica</div>
                        <div className="location">Salvador, Brasil</div>
                    </div>    
                    <div className='profile-social'>
                        <CardActionArea className='profile-social-tab'>
                            <p className="label">Followers</p>
                            <p className="quantity">1000</p>
                        </CardActionArea>
                        <CardActionArea className='profile-social-tab'>
                            <p className="label">Views</p>
                            <p className="quantity">2000</p>
                        </CardActionArea>
                        <CardActionArea className='profile-social-tab'>
                            <p className="label">Likes</p>
                            <p className="quantity">3000</p>
                        </CardActionArea>
                    </div>
                </CardContent>
            </Card>
        )
    }

} 

export default Profile;