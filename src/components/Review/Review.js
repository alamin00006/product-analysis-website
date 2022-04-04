import React from 'react';
import './Review.css'

const Review = (props) => {
 
    const {setReviews, review} = props;
 const {name, rattings, reviews} = review;
 console.log(review)
 
    // const newItem = [];


    return (
       
     <div>
       
        <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{reviews}</p>
        <p className="card-text">{rattings}</p>
  
        </div>
  </div>
      
    );
};

export default Review;