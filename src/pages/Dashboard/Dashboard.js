import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div class="drawer  drawer-mobile">
  <input id="SideBar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
    {/* <!-- Page content here --> */}
    <p>dashboard</p>
    <Outlet />
    
  
  </div> 
  <div class="drawer-side ">
    <label for="SideBar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard'>review</Link></li>
      <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
      <li><Link to='/dashboard/myorder'>My Order</Link></li>
    </ul>
  
  </div>
</div>
  );
};

export default Dashboard;