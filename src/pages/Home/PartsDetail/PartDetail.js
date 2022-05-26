import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../Firebase.Init';
import Loading from '../../../shared/loading/Loading';
import { toast } from 'react-toastify';
const PartDetail = () => {
  const { partid } = useParams()
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const [part, setPart] = useState({})
  useEffect(() => {
    const url = `https://blooming-brook-62791.herokuapp.com/parts/${partid}`
    fetch(url).then(res => res.json()).then(data => setPart(data))
  }, [])
  if (loading) {
    return <Loading />
  }
  const HandleOrder = e => {
    e.preventDefault()
    const phone = e.target.phone.value
    const address = e.target.address.value
    const quantity = e.target.quantity.value
    const order = {
      name: part.name,
      user: user.displayName,
      email: user.email,
      phone,
      address,
      quantity,
    }
    fetch('https://blooming-brook-62791.herokuapp.com/order', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  return (
    <div className="hero min-h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="card w-full mx-auto mb-4  ">
          <figure className="px-10 pt-10">
            <img src={part.image} alt="Shoes" className="max-w-sm max-h-52   " />
          </figure>
          <div className="card-body ">
            <h2 className="text-secondary text-xl md:text-2xl"><span className='font-bold '>name</span> {part.name}</h2>
            <p className='text-primary text-xl'><span>price</span> {part.price}</p>
            <p className='text-gray-700 font-bold text-lg md:text-xl'><span>minimum order quantity</span> {part.minOrder}</p>
            <p className='text-gray-700 font-bold text-lg md:text-xl'><span>available Quantity</span> {part.availableQuantity}</p>
            <p className='text-gray-500 font-semibold'><span className='font-bold text-gray-700'>description</span> {part.description}</p>

          </div>
        </div>
        <div className="card flex-shrink-0 mb-4  shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={HandleOrder}>
              <p className='text-center text-xl font-bold text-primary uppercase'>purchase Form</p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input type="text" disabled value={user?.displayName || ''} className="input input-bordered text-xl placeholder-info " />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" disabled value={user?.email || ''} className="input input-bordered text-xl placeholder-info " />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input type="text" disabled value={part.name} className="input input-bordered text-xl placeholder-info " />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">quantity</span>
                </label>
                <input type="number" name='quantity' placeholder='quantity' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input type="text" name='phone' placeholder='phone' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">address</span>
                </label>
                <input type="text" name='address' placeholder='Enter Address' className="input input-bordered " />
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn text-white btn-primary">purchase</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartDetail;