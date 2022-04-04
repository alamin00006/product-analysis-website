import React from 'react';
import ReviewData from '../../Hooks/ReviewData';
import AllReviews from '../AllReviews/AllReviews';
import './Reviews.css';


const Reviews = () => {
    const [reviews, setReviews] = ReviewData();

    return (
        <div className='all-reviews'>
        {
            reviews.map(review => <AllReviews key = {review.id} review={review}></AllReviews>)
        }
     

     

        </div>
    );
};

export default Reviews;