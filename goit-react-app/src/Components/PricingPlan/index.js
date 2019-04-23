import React, { Component } from 'react';

import PricingItem from './PricingItem'

import './pricing-plan.scss'

class PricingPlan extends Component {
    render () {
        return (
            <div className="pricing-plan">
                <PricingItem/>
            </div>
        )
    }
}
export default PricingPlan