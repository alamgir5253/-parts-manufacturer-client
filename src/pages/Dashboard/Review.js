import React from 'react';
import { toast } from 'react-toastify';

const Review = () => {
  const HandleReview = e => {
    e.preventDefault()
    const rating = e.target.rating.value
    const review = e.target.review.value
    const userReview = {
      rating,
      review,
    }
      fetch('http://localhost:5000/review',{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(userReview)
      })
      .then(res =>res.json())
      .then(data => console.log(data))
      toast('inserted review to db')

  }


  return (
    <div>
      <div class="card flex-shrink-1 max-w-sm mx-auto   shadow-2xl bg-base-100">
        <div class="card-body">
          <form onSubmit={HandleReview}>
            <p className='text-center mb-4 text-xl text-primary uppercase'>review Form</p>
            <div class="form-control">
            <select name='rating' class="select select-primary w-full max-w-xs">
              <option disabled selected>What is your rating?</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select></div>

            <div className='form-control mt-4'>
            <textarea name='review' class="textarea textarea-info" placeholder="Bio"></textarea>
            </div>
            <div class="form-control mt-6">
              <button type='submit' class="btn btn-primary">purchase</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;