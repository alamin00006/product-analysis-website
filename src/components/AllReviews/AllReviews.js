import React from 'react';

const AllReviews = (props) => {
    const {name, rattings, reviews} = props.review;
    return (
        <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{reviews}</p>
        <p className="card-text">{rattings}</p>
        </div>
    );
};

export default AllReviews;