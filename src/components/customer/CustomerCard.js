import React from 'react';
import PropTypes from 'prop-types';
import Card from '../common/Card';


  
    const CustomerCard = ({customerCard}) =>{
        let counter =1;
        return (
            <div className="conatiner">
                <h2>Manage Your Customer</h2>
                <div className="row flex-card">
                    {customerCard.map((eachCard) =>{
                        return <Card key={counter++} title={eachCard.title} link={eachCard.link}/>;
                    })
                    }
                </div>
            </div>
        );
    };

CustomerCard.propTypes = {
    customerCard:PropTypes.array.isRequired
};

export default CustomerCard;