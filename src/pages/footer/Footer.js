import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <section>
      <footer className="footer p-10 bg-neutral  text-neutral-content">
      <div>
    
    <p>Bike Parts Co. </p>
    <p> Providing reliable parts since 1992</p>
    <p>contact</p>
    <p>01871754280</p>
    <div>
      <p className='mb-4'>social link</p>
    <div className='flex justify-center items-center text-3xl gap-4 '>
      <FaFacebook className='hover:text-cyan-500 hover:rotate-360 hover:transition-[.5s]' />
      <FaTwitter className='hover:text-cyan-500' />
      <FaYoutube className='hover:text-cyan-500'/>
    </div>
    </div>
  </div> 
  <div className='mx-auto'>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div className='mx-auto'>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div> 
  <div className='mx-auto'>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>

  <div className="footer footer-center p-4 bg-base-300 text-base-content">
    <p>Copyright © 2022 - All right reserved by alamgir hossain </p>
   
  </div>

    </section>

  );
};

export default Footer;