import React , { Component } from 'react';
import Proptypes from 'prop-types';
import CustomerCard from './CustomerCard';


class Customer extends Component{
    render(){
        const customerCard = [{
             title:'Add Customer',
             link:'/add'
            },
            {
                title:'Delete Customer',
                link:'/delete'
            },
            {
                title:'Update Customer',
                link:'/update'
            },
        ];
        return (
            <CustomerCard customerCard={customerCard}/>
        );
    }
}

export default Customer;