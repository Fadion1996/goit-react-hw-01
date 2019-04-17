import React, {Component} from 'react'

import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';

import './transaction-history.scss'

class TransactionHistory extends Component {

    data = require('../../Data/transactions/transactions.json');

    render () {
        return (
            
            <Table className="transaction-history">
                <TableHead>
                    <TableRow>
                    <TableCell>Type</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Currency</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                {this.data.map( (item) => {
                    return (
                        <TableRow key={item.id}>
                            <TableCell>{item.type}</TableCell>
                            <TableCell>{item.amount}</TableCell>
                            <TableCell>{item.currency}</TableCell>
                        </TableRow>
                    )   
                })}
                </TableBody>
            </Table>
        )
    }
}
export default TransactionHistory;