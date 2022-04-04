import React from 'react';
import { Link } from 'react-router-dom';
import ReviewData from '../../Hooks/ReviewData';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
  
    const [reviews, setReviews] = ReviewData();
      
    return (
        <>

        <div className='row review-container' >
            <div className='col-md-6 left-side'>
             <div className='left-side-container'>
            <h1 className='text-info'>This is Best Watch</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quam ullam repellat voluptates eum id? Tenetur quisquam delectus, excepturi nisi sint cumque veniam deleniti similique nesciunt molestias laboriosam iste magnam?</p>
            <button className='btn btn-info ps-4 text-white'>Read More</button>
        </div>
            </div>
        <div className='col-md-6 img'>
            <img src="https://cdn.luxe.digital/media/2021/07/02102417/best-men-watches-liv-gx1-review-luxe-digital%402x.jpg" alt="" />

        </div>
        </div>
   {/* review items */}
            <h1 className='reviews text-center mt-5'>Customer Reviews</h1>
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

        </>
        
    );
};

export default Home;