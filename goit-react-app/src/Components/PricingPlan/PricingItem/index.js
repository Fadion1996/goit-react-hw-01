import React, { Component } from 'react';
import {Card, Button, CardMedia, CardContent} from '@material-ui/core';
import shortid from 'shortid'
import './pricing-item.scss'

class PricingItem extends Component {

    pricingData = require('../../../Data/plan/pricing-plan.json');
    
    render () {
        return (
            this.pricingData.map((item) => {
                return (
                <Card key={shortid.generate()} className='pricing-item'>
                    <div className="pricing-item-img">
                        <CardMedia
                            component="img"
                            alt="user avatar"
                            className='img'
                            image={item.icon}
                            title="Petra Marica"
                        />
                    </div>
                    <CardContent className='pricing-item-discription'>
                        <h2 className="label">{item.label}</h2>
                        <p className="capacity">{item.capacity} Storage</p>
                        <p className="description">{item.description}</p>
                        <p className="price">${item.price}/MO</p>
                        <Button 
                            className="button"
                            variant="contained" 
                            color="primary">
                            Get Started
                        </Button>
                    </CardContent>
                </Card>
                )
            })
        )
    }
}
export default PricingItem