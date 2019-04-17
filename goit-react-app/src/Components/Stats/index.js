import React, {Component} from 'react';
import {Card, CardActionArea, CardContent} from '@material-ui/core';


import './stats.scss'

class Stats extends Component {

    render () {

        const { stats } = this.props;

        return (
            <Card className='stats-wrapper'>
                <CardContent className='stats-discription'>
                    <div className='stats-title'>
                        <h2>Upload stats</h2>
                    </div>   
                    <div className='stats-list'>
                    {
                        stats.map((item) => {
                            return (
                                <CardActionArea key={item.id} className='stats-list-item'>
                                    <p className="label">{item.label}</p>
                                    <p className="percentage">{item.percentage}</p>
                                </CardActionArea>
                            )
                        })
                    }
                    </div>
                </CardContent>
            </Card>
        )
    }

} 

export default Stats;