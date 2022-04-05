import React from 'react';
import './Review.css'

const Review = (props) => {
 
    const {review} = props;
 const {name, rattings, reviews,image} = review;
 

    return (
       
     <div className='review-info'>
       
        <div className="card-body card-container">
           <div>
           <img src={image} alt="" />
           </div>
            <div>
              <h5 className="card-title">{name}</h5>
                  <p className="card-text"> {reviews}</p>
                      <p className="card-text rattings">{rattings}</p>
            </div>
  
        </div>
  </div>
      
    );
};

export default Review;