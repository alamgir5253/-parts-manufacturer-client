import React from 'react';
import banner from '../../../Assets/image/banner.png'
const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} className="max-w-full rounded-lg " />
        <div>
          <h1 className="md:text-4xl text-xl text-primary uppercase font-bold">We Are Hare To Serve You</h1>
          <p className="py-6 max-w-lg text-neutral">bike parts co. is an American multinational manufacturer company. Get the best bike parts from us. we use world best technology to manufacture bike parts</p>
          <button className="btn text-white btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;