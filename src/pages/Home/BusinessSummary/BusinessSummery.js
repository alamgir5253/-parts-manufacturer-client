import React from 'react';
import { BsFillEmojiSmileFill, BsFillPeopleFill,BsGlobe,BsGraphUp } from "react-icons/bs";

const BusinessSummery = () => {
  return (
    <section className='mt-20 mb-20'>
      <div className="text-center mb-20">
        <h2 className='md:text-4xl text-2xl text-primary font-bold text mb-3'> Our Business  Summary</h2>
        <p className='text-lg mb-4'>Some Example Of Your Business</p>
        <div className='h-1 w-20 rounded-md bg-secondary mx-auto'></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center'>
        <div className='mx-auto mb-4'>
          <h2><BsFillEmojiSmileFill className='text-secondary text-8xl mb-4 mx-auto' /></h2>
          <p className='font-bold text-2xl md:text-4xl text-accent'>1000+</p>
          <p className='text-xl text-primary'>Our Happy Client</p>
        </div>

        <div className='mx-auto mb-4'>
          <div><BsFillPeopleFill  className='text-secondary text-8xl mb-4 mx-auto' /></div>
          <h2  className='font-bold text-2xl md:text-4xl text-accent'>9999+</h2>
          <p className='text-xl text-primary'>Customer Feedback</p>
        </div>

        <div className='mx-auto mb-4'>
          <div><BsGlobe  className='text-secondary text-8xl mb-4 mx-auto' /></div>
          <h2 className='font-bold text-2xl md:text-4xl text-accent'>100+</h2>
          <p className='text-xl text-primary'>services countrys</p>
        </div>

        <div className='mx-auto mb-4'>
          <div><BsGraphUp  className='text-secondary text-8xl mb-4 mx-auto' /></div>
          <h2 className='font-bold text-2xl md:text-4xl text-accent'>90000+</h2>
          <p className='text-xl text-primary'>Annual Revenue</p>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummery;