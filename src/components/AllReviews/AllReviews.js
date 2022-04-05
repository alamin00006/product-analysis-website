import React from 'react';
import './AllReviews.css'

const AllReviews = (props) => {
    const {name, rattings, reviews} = props.review;
    return (
        
        
        <div className="card-body card-container">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{reviews}</p>
        <p className="card-text text-danger">{rattings}</p>
        </div>
       
    );
};

export default AllReviews;