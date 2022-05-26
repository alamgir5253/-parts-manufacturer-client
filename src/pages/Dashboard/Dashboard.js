import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../Firebase.Init';
import useAdmin from '../Hook/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] =useAdmin(user)
  return (
    <div className="drawer  drawer-mobile">
  <input id="SideBar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <Outlet />
    
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="SideBar" className="drawer-overlay "></label> 
    <ul className="menu p-4 overflow-y-auto w-60 rounded-xl mr-4 mb-4 bg-secondary text-white ">
      {user && <>
        <li><Link to='/dashboard'>My Order</Link></li>
        <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
        </>}
      <li><Link to='/dashboard/review'>Review</Link></li>

      
      {
      admin && <>
      <li><Link to='/dashboard/alluser'>All User</Link></li>
      <li><Link to='/dashboard/allorder'>All Orders</Link></li>
      <li><Link to='/dashboard/manageparts'>Manage Parts</Link></li>
      <li><Link to='/dashboard/addpart'>Add Part</Link></li>
      </>
      }

    </ul>
  
  </div>
</div>
  );
};

export default Dashboard;