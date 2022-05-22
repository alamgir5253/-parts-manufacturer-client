import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='myportfolio'>My Portfolio</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='signup'>SignUp</NavLink></li>
       
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xs md:text-xl">Bike Parts  factory </a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li><NavLink to='/'  className='mr-4'>Home</NavLink></li>
        <li><NavLink to='/blog' className='mr-4'>Blog</NavLink></li>
        <li><NavLink to='myportfolio'>My Portfolio</NavLink></li>
        <li><NavLink to='/login' className='mr-4'>Login</NavLink></li>
        <li><NavLink to='signup' className='mr-4'>SignUp</NavLink></li>
    </ul>
  </div>
</div>
  );
};

export default Navbar;