import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.Init';

const MyOrder = () => {
  const [orders, setOrders] = useState([])
  const [user, loading] = useAuthState(auth);
  useEffect(()=>{
  
    if(user){
      fetch(`http://localhost:5000/order?email=${user.email}`)
    .then(res =>res.json())
    .then(data => setOrders(data))
    }
  },[user])
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>user</th> 
        <th>email</th> 
        <th>Name</th> 
        <th>quantity</th>
        <th>phone</th> 
        <th>address</th> 
      </tr>
    </thead> 
    <tbody>
     {
       orders.map((order,index) => <tr key={order._id}>
        <th>{index +1}</th> 
        <td>{order.user}</td> 
        <td>{order.email}</td> 
        <td>{order.name}</td> 
        <td>{order.quantity}</td> 
        <td>{order.phone}</td> 
        <td>{order.address}</td> 
        
        
      </tr>)
     }
    </tbody> 
    <tfoot>
    <tr>
        <th></th> 
        <th>user</th> 
        <th>email</th> 
        <th>Name</th> 
        <th>quantity</th>
        <th>phone</th> 
        <th>address</th> 
      </tr>
    </tfoot>
  </table>
</div>
      
    </div>
  );
};

export default MyOrder;