import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="drawer  drawer-mobile">
  <input id="SideBar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <Outlet />
    
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="SideBar" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>my order</Link></li>
      <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
      <li><Link to='/dashboard/review'>review</Link></li>
    </ul>
  
  </div>
</div>
  );
};

export default Dashboard;