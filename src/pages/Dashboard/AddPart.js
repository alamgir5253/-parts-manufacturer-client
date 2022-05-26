import React from 'react';
import { toast } from 'react-toastify';

const AddPart = () => {
  const HandleAddPart = e =>{
    e.preventDefault()
    // image,name, price,description,minOrder,availableQuantity
    const name = e.target.name.value
    const price = e.target.price.value
    const minOrder = e.target.minOrder.value
    const availableQuantity = e.target.availableQuantity.value
    const description = e.target.description.value
    const image = e.target.image.value
    const part ={
      name,
      price,
      minOrder,
      availableQuantity,
      description,
      image,
      
    }
    fetch('https://blooming-brook-62791.herokuapp.com/parts',{
      method:'POST',
      headers:{
        'content-type': 'application/json',
        'authorization': `bearer ${localStorage.getItem('access_token')}`
      },
      body: JSON.stringify(part)
    })
    .then(res =>res.json())
    .then(data => {
      if(data.insertedId){

        toast('data insert to db')
      }
    })
    // console.log(order);
  
  }
  return (
    <div>
      
      <form onSubmit={HandleAddPart} className='max-w-xs mx-auto' >
          <p className='text-center text-xl font-bold text-primary uppercase'>Add Parts</p>
        <div class="form-control">
          <label class="label">
            <span class="label-text">parts name</span>
          </label>
          <input type="text" name='name'  placeholder='name' class="input input-bordered  " />
        </div>
        <div class="form-control ">
          <label class="label">
            <span class="label-text">price</span>
          </label>
          <input type="text"  placeholder='price' name='price' class="input input-bordered  " />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">minOrder</span>
          </label>
          <input name='minOrder' placeholder='minOrder' type="text"class="input input-bordered " />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">availableQuantity</span>
          </label>
          <input type="text" name='availableQuantity' placeholder='availableQuantity' class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">description</span>
          </label>
          <input type="text" name='description' placeholder='description' class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">image</span>
          </label>
          <input type="text" name='image' placeholder='Enter Address' class="input input-bordered " />
        </div>
        <div class="form-control mt-6">
          <button type='submit' class="btn text-white btn-primary">Add Part</button>
        </div>
        </form>
    </div>
  );
};

export default AddPart;