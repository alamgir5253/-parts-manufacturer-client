import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../Firebase.Init';
import Loading from '../../../shared/loading/Loading';
import { toast } from 'react-toastify';

const PartDetail = () => {
  const {partid} = useParams()
  const [user, loading, error] = useAuthState(auth);

  console.log(user);
  const [part, setPart] = useState({})
  useEffect(()=>{
    
    const url =  `https://blooming-brook-62791.herokuapp.com/parts/${partid}`
    fetch(url).then(res => res.json()).then(data => setPart(data))
  },[])

  if(loading){
    return <Loading/>
  }

   const HandleOrder = e =>{
     e.preventDefault()
     const phone = e.target.phone.value
     const address = e.target.address.value
     const quantity = e.target.quantity.value
     const order ={
       name: part.name,
       user: user.displayName,
       email: user.email,
       phone,
       address,
       quantity,
     }
     fetch('https://blooming-brook-62791.herokuapp.com/order',{
       method:'POST',
       headers:{
         'content-type': 'application/json'
       },
       body: JSON.stringify(order)
     })
     .then(res =>res.json())
     .then(data => console.log(data))
     toast('inserted data to db')
   
   }


  return (
    <div class="hero min-h-screen ">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
  <div class="card w-full mx-auto mb-4  ">
  <figure class="px-10 pt-10">
    <img src={part.image} alt="Shoes" class="rounded-xl max-w-sm max-h-52 w-full object-fill" />
  </figure>
  <div class="card-body ">
    <h2 class="text-primary text-3xl"><span className='font-bold '>name</span> {part.name}</h2>
    <p className='text-accent text-xl'><span>price</span> {part.price}</p>
    <p className='text-secondary text-xl'><span>minimum order quantity</span> {part.minOrder}</p>
    <p className='text-secondary text-xl'><span>available Quantity</span> {part.availableQuantity}</p>
    <p className='text-neutral'><span>description</span> {part.description}</p>

  </div>
</div>
    <div class="card flex-shrink-0   shadow-2xl bg-base-100">
      <div class="card-body">
        <form onSubmit={HandleOrder}>
          <p className='text-center text-xl text-primary uppercase'>purchase Form</p>
        <div class="form-control">
          <label class="label">
            <span class="label-text">name</span>
          </label>
          <input type="text" disabled value={user?.displayName || ''} class="input input-bordered text-xl placeholder-info " />
        </div>
        <div class="form-control ">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" disabled value={user?.email || ''} class="input input-bordered text-xl placeholder-info " />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Product Name</span>
          </label>
          <input type="text" disabled value={part.name} class="input input-bordered text-xl placeholder-info " />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">quantity</span>
          </label>
          <input type="number" name='quantity' placeholder='quantity' class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Phone Number</span>
          </label>
          <input type="text" name='phone' placeholder='phone' class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">address</span>
          </label>
          <input type="text" name='address' placeholder='Enter Address' class="input input-bordered " />
        </div>
        <div class="form-control mt-6">
          <button type='submit' class="btn btn-primary">purchase</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
  );
};

export default PartDetail;