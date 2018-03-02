import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({title , link}) =>{
    return (
        <div className="col-sm-4">
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <Link to={link} className="card-link">Go!</Link>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    title:PropTypes.string.isRequired,
    link:PropTypes.string.isRequired
};

export default Card;