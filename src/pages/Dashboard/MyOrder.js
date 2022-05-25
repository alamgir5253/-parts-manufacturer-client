import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase.Init';

const MyOrder = () => {
  const [orders, setOrders] = useState([])
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate()
  useEffect(()=>{
  
    if(user){
      fetch(`https://blooming-brook-62791.herokuapp.com/order?email=${user.email}`,{
        method:"GET",
        headers:{
          'authorization': `bearer ${localStorage.getItem('access_token')}` 
        }


      })
    .then(res =>{
      console.log('res', res);

      if(res.status === 403 || res.status === 401){
        signOut(auth);
    localStorage.removeItem('access_token')
        navigate('/')
      }
     return res.json()
    })
    .then(data => setOrders(data))
    }
  },[user])
  return (
    <section className='mb-20'>
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
      
    </section>
  );
};

export default MyOrder;