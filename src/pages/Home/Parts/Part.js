import React from 'react';

const Part = ({ part}) => {
  const {image,name, price,description,minOrder,availableQuantity} =part
  return (
    <div class="card w-full mx-auto mb-4  shadow-xl">
  <figure class="px-10 pt-10">
    <img src={image} alt="Shoes" class="rounded-xl max-w-sm max-h-52 w-full object-fill" />
  </figure>
  <div class="card-body ">
    <h2 class="text-primary text-3xl"><span className='font-bold '>name</span> {name}</h2>
    <p className='text-accent text-xl'><span>price</span> {price}</p>
    <p className='text-secondary text-xl'><span>minimum order quantity</span> {minOrder}</p>
    <p className='text-secondary text-xl'><span>available Quantity</span> {availableQuantity}</p>
    <p className='text-neutral'><span>description</span> {description}</p>
    <div class="card-actions">
      <button class="btn btn-primary">parches</button>
    </div>
  </div>
</div>
  );
};

export default Part;