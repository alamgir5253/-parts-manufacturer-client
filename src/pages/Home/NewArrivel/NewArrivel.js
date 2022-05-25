import React from 'react';
import slider1 from '../../../Assets/image/slider-1.jpg'
import slider2 from '../../../Assets/image/slider-2.png'
import slider3 from '../../../Assets/image/slider-3.jpg'
const NewArrivel = () => {
  return (
    <section className='mb-20'>
      <h2 className='text-center text-2xl md:text-4xl text-primary font-bold'>new arrival parts</h2>
      <div className='h-1 w-20 rounded-md bg-secondary mx-auto mt-4'></div>
      <div className="carousel  w-full">
  <div id="item1" className="carousel-item w-full">
  <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <img src={slider1} className="object-cover  rounded-lg " />
    <div>
      <h1 className="md:text-3xl text-2xl text-secondary font-bold">Bike Engine</h1>
      <p className="py-6 max-w-sm">Abril Flying Auto Parts motorcycle engine assembly apply to for Suzuki Vstrom DL1000 100cc 150cc 200cc.</p>
      <button className="btn text-white btn-primary">Purchase Now</button>
    </div>
  </div>
</div>
  </div> 
  <div id="item2" className="carousel-item w-full">
  <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={slider2} className="object-cover  rounded-lg " />
    <div>
      <h1 className="md:text-3xl text-2xl text-secondary font-bold">gear16-16T</h1>
      <p className="py-6 max-w-sm">High quality double spur gear16-16T Engine starter motor gear Dual idle gear is suitable for 200CC</p>
      <button className="btn text-white btn-primary">Purchase Now</button>
    </div>
  </div>
</div>
  </div> 
  <div id="item3" className="carousel-item w-full">
  <div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <img src={slider3} className="object-cover  rounded-lg" />
    <div>
      <h1 className="md:text-3xl text-2xl text-secondary font-bold">face Helmet</h1>
      <p className="py-6 max-w-sm">New Fashion Full Face Helmet Motorbike Manufacturer Motorcycles Helmet Motor Bike Helmet.</p>
      <button className="btn text-white btn-primary">Purchase Now</button>
    </div>
  </div>
</div>
  </div> 
 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a  href="#item1" className="btn text-white bg-secondary border-0 btn-xs">1</a> 
  <a href="#item2" className="btn text-white bg-secondary border-0 btn-xs">2</a> 
  <a href="#item3" className="btn text-white bg-secondary border-0 btn-xs">3</a> 
</div>
    </section>
  );
};

export default NewArrivel;