import React, { useEffect, useState } from 'react';

const UserReview = () => {
  const [reviews, setReviews] =useState([])
useEffect(()=>{
  fetch('http://localhost:5000/review')
  .then(res => res.json())
  .then(data => setReviews(data))
},[])
  return (
    <section className='grid grid-cols-1 md:grid-cols-3'>
     {
       reviews.map(review =><div class="card w-96 bg-base-100 shadow-xl">
       <div class="card-body">
         <h2 class="card-title"> <span className='text-primary'> rating:</span> {review.rating}</h2>
         <p> <span className='text-primary'>user review:</span> {review.review}</p>
         
       </div>
     </div>)
     }
    </section>
  );
};

export default UserReview;