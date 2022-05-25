import React, { useEffect, useState } from 'react';

const UserReview = () => {
  const [reviews, setReviews] =useState([])
useEffect(()=>{
  fetch('http://localhost:5000/review')
  .then(res => res.json())
  .then(data => setReviews(data))
},[])
  return (
    <section className='mb-20'>
      <h2 className='text-center text-2xl md:text-4xl text-primary font-bold'>User review</h2>
      <div className='h-1 w-20 rounded-md bg-secondary mb-20 mx-auto mt-4'></div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
     {
       reviews.map(review =><div class="card  bg-base-200 shadow-xl">
       <div class="card-body">
         <h2 class="card-title text-accent"> <span className='text-primary'> rating:</span> {review.rating}</h2>
         <p className='text-gray-700'> <span className='text-secondary font-bold'>user review:</span> {review.review}</p>
         
       </div>
     </div>)
     }
    </div>
    </section>
  );
};

export default UserReview;