import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../Firebase.Init';
import Loading from '../../../shared/loading/Loading';

const PartDetail = () => {
  const {partid} = useParams()
  const [user, loading, error] = useAuthState(auth);

  
  console.log(user);
  const [part, setPart] = useState({})
  useEffect(()=>{
    
    const url =  `http://localhost:5000/parts/${partid}`
    fetch(url).then(res => res.json()).then(data => setPart(data))
  },[])
  if(loading){
    return <Loading/>
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
        <form>
          <p className='text-center text-xl text-primary uppercase'>purchase Form</p>
        <div class="form-control">
          <label class="label">
            <span class="label-text">name</span>
          </label>
          <input type="text" readOnly placeholder={user?.displayName ? user?.displayName: 'name unavailable'} class="input input-bordered text-xl placeholder-info " />
        </div>
        <div class="form-control ">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" readOnly placeholder={user?.email} class="input input-bordered text-xl placeholder-info " />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Product Name</span>
          </label>
          <input type="text" placeholder={part.name} class="input input-bordered text-xl placeholder-info " />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">quantity</span>
          </label>
          <input type="number" placeholder='quantity' class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Phone Number</span>
          </label>
          <input type="text" placeholder='Enter Number' class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">address</span>
          </label>
          <input type="text"    placeholder='Enter Address' class="input input-bordered " />
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">purchase</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
  );
};

export default PartDetail;