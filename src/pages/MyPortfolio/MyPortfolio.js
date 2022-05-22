import React from 'react';

const MyPortfolio = () => {
  return (
    <section className='flex justify-center items-center h-[60vh]'>
      <div>
        <h2> <span>name:</span> Md: Alomgir Hossain</h2>
        <h3><span>email:</span>alamgir5253@gmail.com</h3>
        <h4>My skills</h4>
        <span>HTML </span>
        <span>CSS </span>
        <span>BOOTSTRAP </span>
        <span>TAILWIND </span>
        <span>JAVASCRIPT (ES-6) </span>
        <span>REACT </span>
        <span>NODE JS </span>
        <span>MONGODB </span>
        <h5> there are some link of my live site </h5>
        <p>
        <a href="https://dream-auto-warehouse.firebaseapp.com" target='_blank'>dream-auto-warehouse</a>
        </p>
        <p>
        <a href="https://wedding-photographer-3d9e5.firebaseapp.com" target='_blank'>wedding-photographer</a>
        </p>
        <p>
        <a href="https://the-alchemist-assignment-9.netlify.app" target='_blank'>the-alchemist</a>
        </p>

      </div>
    </section>
  );
};

export default MyPortfolio;