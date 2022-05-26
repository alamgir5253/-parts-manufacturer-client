import React, { useEffect, useState } from 'react';

const AllOrders = () => {
  const [orders, setOrders] = useState([])
  useEffect(() => {

    fetch('https://blooming-brook-62791.herokuapp.com/allorder')
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])
  return (
    <section className='mb-20'>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
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
              orders.map((order, index) => <tr className='hover' key={order._id}>
                <th>{index + 1}</th>
                <td className='text-primary'>{order.name}</td>
                <td className='text-secondary'>{order.user}</td>
                <td className='text-primary' >{order.email}</td>
                <td className='text-secondary'>{order.phone}</td>
                <td className='text-primary'>{order.address}</td>
                <td className='text-accent font-bold'>{order.quantity}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>

      {/* <div>
        {orders.map(order => )}
      </div> */}
    </section>
  );
};

export default AllOrders;