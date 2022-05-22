import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../Assets/image/notfound.gif'
const NotFound = () => {
  return (
    <section className=''>
      <div className='flex justify-center flex-col items-center'>
        <img className='rounded-lg' src={notfound} alt="404 not found" />
        <Link to='/'  className='my-10 btn btn-primary'>go to  Home</Link>
      </div>
      
    </section>
  );
};

export default NotFound;