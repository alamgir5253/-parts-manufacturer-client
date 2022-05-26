import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <section>
      <footer className="footer footer-center p-10 bg-neutral text-white">
        <div>
          <p className="font-bold">
            Bike Parts Co. <br />Providing Reliable Parts Since 1992
          </p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <FaFacebook className='text-3xl hover:text-secondary' />
            <FaTwitter className='text-3xl hover:text-secondary' />
            <FaYoutube className='text-3xl hover:text-secondary' />
          </div>
        </div>
      </footer>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <p>Copyright © 2022 - All right reserved by alamgir hossain </p>
      </div>
    </section>
  );
};

export default Footer;