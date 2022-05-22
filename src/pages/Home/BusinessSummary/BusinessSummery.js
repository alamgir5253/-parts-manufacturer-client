import React from 'react';
import { BsFillEmojiSmileFill, BsFillPeopleFill,BsGlobe,BsGraphUp } from "react-icons/bs";

const BusinessSummery = () => {
  return (
    <section className='mb-20'>
      <div className="text-center mb-20">
        <h2 className='text-4xl font-bold mb-3'> Our Business  Summary</h2>
        <p className='text-lg mb-4'>Some Example Of Your Business</p>
        <div className='h-1 w-20 rounded-md bg-slate-800 mx-auto'></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center'>
        <div className='mx-auto mb-4'>
          <h2><BsFillEmojiSmileFill className='text-8xl mb-4 mx-auto' /></h2>
          <p className='font-bold text-4xl '>1000+</p>
          <p className='text-xl'>Our Happy Client</p>
        </div>

        <div className='mx-auto mb-4'>
          <div><BsFillPeopleFill  className='text-8xl mb-4 mx-auto' /></div>
          <h2  className='font-bold text-4xl '>9999+</h2>
          <p className='text-xl'>Customer Feedback</p>
        </div>

        <div className='mx-auto mb-4'>
          <div><BsGlobe  className='text-8xl mb-4 mx-auto' /></div>
          <h2 className='font-bold text-4xl '>100+</h2>
          <p className='text-xl'>services countrys</p>
        </div>

        <div className='mx-auto mb-4'>
          <div><BsGraphUp  className='text-8xl mb-4 mx-auto' /></div>
          <h2 className='font-bold text-4xl '>90000+</h2>
          <p className='text-xl'>Annual Revenue</p>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummery;