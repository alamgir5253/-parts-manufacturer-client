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
    fetch('https://blooming-brook-62791.herokuapp.com/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userReview)
    })
      .then(res => res.json())
      .then(data => console.log(data))
    toast.success('inserted review to db')

  }
  return (
    <section className=''>
      <div className="card flex-shrink-1 max-w-sm mx-auto md:mt-20 mt-4  shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={HandleReview}>
            <p className='text-center mb-4 text-xl font-bold  text-secondary uppercase'>review Form</p>
            <div className="form-control">
              <select name='rating' className="select select-secondary w-full max-w-xs">
                <option disabled selected>What is your rating?</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select></div>

            <div className='form-control mt-4'>
              <textarea name='review' className="textarea textarea-secondary" placeholder="description"></textarea>
            </div>
            <div className="form-control mt-6">
              <button type='submit' className="btn text-white btn-primary">submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Review;