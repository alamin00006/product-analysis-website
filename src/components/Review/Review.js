import React from 'react';
import './Review.css'

const Review = (props) => {
 
    const {review} = props;
 const {name, rattings, reviews} = review;
 

    return (
       
     <div className='review-info'>
       
        <div className="card-body card-container">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"> {reviews}</p>
        <p className="card-text rattings">{rattings}</p>
  
        </div>
  </div>
      
    );
};

export default Review;