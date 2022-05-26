import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useLocation } from 'react-router-dom';
import auth from '../../Firebase.Init';
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const { pathname } = useLocation()
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('access_token')
  };
  return (
    <section>
      <div className="flex justify-between  items-center h-20 bg-base-100 md:mb-4 mb-2 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink to='/' className='mr-4'>Home</NavLink></li>
              <li><NavLink to='/blog' className='mr-4'>Blog</NavLink></li>
              <li><NavLink to='myportfolio'>My Portfolio</NavLink></li>
              {user ? <> <li><NavLink to='dashboard'>Dashboard</NavLink></li></> : <li><NavLink to='/login' className='mr-4'>Login</NavLink></li>}
              {user ? <><li className='btn mr-4 btn-ghost'>{user?.displayName}</li> <li className='btn mr-4 btn-ghost' onClick={logout}>signout</li></> : ''}
              <li><NavLink to='signup' className='mr-4'>SignUp</NavLink></li>

            </ul>
          </div>
          <Link to='/' className=" font-bold text-secondary  text-xs md:text-xl">Bike Parts Co. </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><NavLink to='/' className='mr-4'>Home</NavLink></li>
            <li><NavLink to='/blog' className='mr-4'>Blog</NavLink></li>
            <li><NavLink to='myportfolio' className='mr-4'>My Portfolio</NavLink></li>
            {user ? <> <li><NavLink to='dashboard' className='mr-4'>Dashboard</NavLink></li><button className='btn mr-4 btn-ghost' onClick={logout}>signout</button></> : <li><NavLink to='/login' className='mr-4'>Login</NavLink></li>}
            {user ? <button className='btn mr-4 btn-ghost'>{user?.displayName}</button> : ''}
            <li><NavLink to='signup' className='mr-4'>SignUp</NavLink></li>
          </ul>
        </div>
        <div className=''>

          {pathname.includes('dashboard') && (<label htmlFor="SideBar" tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 float-right w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>)}
        </div>
      </div>
    </section>
  );
};

export default Navbar;