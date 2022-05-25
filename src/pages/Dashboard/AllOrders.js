import React, { useEffect, useState } from 'react';

const AllOrders = () => {
  const [orders , setOrders] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/allorder')
    .then(res => res.json())
    .then(data => setOrders(data))
  },[])
  return (
    <div>
      
      <div class="overflow-x-auto w-full">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th className='bg-primary text-white text-lg'>no</th>
        <th className='bg-primary text-white text-lg'>Product Name</th>
        <th className='bg-primary text-white text-lg'>Name</th>
        <th className='bg-primary text-white text-lg'>Email</th>
        <th className='bg-primary text-white text-lg'>Phone</th>
        <th className='bg-primary text-white text-lg'>Address</th>
        <th className='bg-primary text-white text-lg'>Quantity</th>
      </tr>
    </thead>
    <tbody>

      {
      orders.map((order, index) =><tr className='hover' key={order._id}>
        <th>{index + 1}</th>
        <td>{order.name}</td>
        <td>{order.user}</td>
        <td>{order.email}</td>
        <td>{order.phone}</td>
        <td>{order.address}</td>
        <td>{order.quantity}</td>
      </tr>)
      }
      
      
    </tbody>
    
    
  </table>
</div>

      {/* <div>
        {orders.map(order => )}
      </div> */}
    </div>
  );
};

export default AllOrders;