import React from 'react';
import { Link } from 'react-router-dom';
import ReviewData from '../../Hooks/ReviewData';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {

    // let newArry = [];
    const [reviews, setReviews] = ReviewData();
        // newArry = reviews.slice(0,2);
        // setReviews(newArry);


    return (
        <div>

        <div className='row review-container' >
            <div className='col-md-6 left-side'>
            <h1>This is Best Watch</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quam ullam repellat voluptates eum id? Tenetur quisquam delectus, excepturi nisi sint cumque veniam deleniti similique nesciunt molestias laboriosam iste magnam?</p>
        </div>
        <div className='col-md-6 img'>
            <img src="https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2018/08/Mobile-Mast-3.jpg" alt="" />

        </div>
        </div>
   {/* review items */}
            <h1 className='reviews text-center'>Customer Reviews</h1>
            <div className='my-card'>
         {
             reviews.slice(0,3).map(review =><Review key ={review.id}
             review ={review} setReviews={setReviews}></Review>)
         }
            </div>
            <div className='text-center'>
            <Link to ='/reviews'>
            <button className='btn btn-primary'>See All Reviews</button>
            </Link>
            </div>

        </div>
        
    );
};

export default Home;