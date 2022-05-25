import React, { useEffect, useState } from 'react';


const ManageParts = () => {
const [ManageParts, setManageParts] =useState([])
useEffect(()=>{
  fetch('https://blooming-brook-62791.herokuapp.com/parts')
  .then(res => res.json())
  .then(data => setManageParts(data))
},[])
  return (
    <section className='mb-20'>
      <div class="overflow-x-auto w-full">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        
        <th  className='bg-primary text-white text-lg'>image</th>
        <th  className='bg-primary text-white text-lg'>name</th>
        <th  className='bg-primary text-white text-lg'>Minimum Order</th>
        <th  className='bg-primary text-white text-lg'>availableQuantity</th>
        <th  className='bg-primary text-white text-lg'>price</th>
        <th  className='bg-primary text-white text-lg'>delete item</th>
        
      </tr>
    </thead>
    <tbody>
      {
        ManageParts.map(parts =><tr>
         
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img src={parts.image} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </div>
          </td>
          <td><div class="font-bold">{parts.name}</div></td>
          <td>
            <span class="badge badge-ghost bg-accent text-white badge-sm">{parts.minOrder}</span>
          </td>
          <td>
            <span class="badge badge-ghost text-white bg-secondary badge-sm">{parts.availableQuantity}</span>
          </td>
          <td className='font-bold'>$ {parts.price}</td>
          <th>
            <button class="btn bg-accent text-white border-0 btn-xs">delete</button>
          </th>
        </tr>)
      }
      
      </tbody>
    
  </table>
</div>
      
    </section>
  );
};

export default ManageParts;