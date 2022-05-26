import React from 'react';

const MyPortfolio = () => {
  return (
    <section className='flex justify-center  items-center h-[80vh]'>
      <div className='p-4'>
        <h2 className='text-primary font-semibold text-xl'> <span className='font-bold text-gray-700'>Name:</span> Md: Alomgir Hossain</h2>
        <h3 className='text-secondary font-semibold text-lg'><span className='font-bold text-gray-700'>Email: </span>alamgir5253@gmail.com</h3>
        <h4 className='font-bold text-gray-700 mt-4 mb-2 text-xl'>My educational status</h4>
        <p>I have completed my <b>Bachelor of Social Science</b> from <b>Government Titumir College</b>, Dhaka. <br />
        ( June- 2011-september-2014 )</p>



        <h4 className='font-bold text-gray-700 mt-4 mb-2 text-xl'>My skills</h4>
        <span className='font-semibold text-primary'>HTML , </span>
        <span className='font-semibold text-accent'>CSS , </span>
        <span className='font-semibold text-secondary'>BOOTSTRAP , </span>
        <span className='font-semibold text-gray-700'>TAILWIND , </span>
        <span className='font-semibold text-primary'>JAVASCRIPT , (ES-6) </span> <br />
        <span className='font-semibold text-accent'>REACT , </span>
        <span className='font-semibold text-secondary'>NODE JS , </span>
        <span className='font-semibold text-gray-700'>MONGODB , </span>
        <h5 className='font-bold text-gray-700 mt-4 text-xl'> There are some link of my live site </h5>
        <p className='font-semibold hover:underline'>
        <a href="https://dream-auto-warehouse.firebaseapp.com" target='_blank'>dream-auto-warehouse</a>
        </p>
        <p className='font-semibold hover:underline'>
        <a href="https://wedding-photographer-3d9e5.firebaseapp.com" target='_blank'>wedding-photographer</a>
        </p>
        <p className='font-semibold hover:underline'>
        <a href="https://the-alchemist-assignment-9.netlify.app" target='_blank'>the-alchemist</a>
        </p>

      </div>
    </section>
  );
};

export default MyPortfolio;