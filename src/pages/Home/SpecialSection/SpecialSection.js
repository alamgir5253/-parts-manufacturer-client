import React from 'react';
import bg from './../../../Assets/image/bg.jpg'

const SpecialSection = () => {
  return (
    <section>
      <div className="hero mb-20  bg-fixed bg-[url('/src/Assets/image/bg.jpg')]" >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content py-20 text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-2xl md:text-3xl font-bold text-primary">Take Our Best collection</h1>
        <p className="mb-5">This Is Our Honer To Served You With Our best Capability</p>
        <button className="btn text-white btn-primary">Get Started</button>
      </div>
    </div>
  </div>
    </section>
  );
};

export default SpecialSection;