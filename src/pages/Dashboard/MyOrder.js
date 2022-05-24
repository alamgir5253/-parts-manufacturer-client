import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.Init';

const MyOrder = () => {
  const [order, setOrder] = useState([])
  const [user, loading] = useAuthState(auth);
  useEffect(()=>{
  
    if(user){
      fetch(`http://localhost:5000/order?email=${user.email}`)
    .then(res =>res.json())
    .then(data => setOrder(data))
    }
  },[user])
  return (
    <div>
      <h1>my all order is {order.length}</h1>
    </div>
  );
};

export default MyOrder;