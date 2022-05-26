import React from 'react';
import { useNavigate } from 'react-router-dom';
const Part = ({ part }) => {
  const { _id, image, name, price, description, minOrder, availableQuantity } = part
  const navigate = useNavigate()
  const ToPartDetail = id => {
    navigate(`/part/${id}`)
  }
  return (
    <div class="card w-full mx-auto mb-4  shadow-xl">
      <figure class="px-10 pt-10">
        <img src={image} alt="" class=" max-w-sm max-h-52 " />
      </figure>
      <div class="card-body ">
        <h2 class="text-secondary text-xl md:text-2xl"><span className='font-bold '>name:</span> {name}</h2>
        <p className='text-primary text-xl'><span>price: $</span>{price}</p>
        <p className='text-gray-700 font-bold text-lg md:text-xl'><span>minimum order quantity:</span> {minOrder}</p>
        <p className='text-gray-700 font-bold text-lg md:text-xl'><span>available Quantity:</span> {availableQuantity}</p>
        <p className='text-gray-500 font-semibold'><span className='font-bold text-gray-700'>description: </span> {description}</p>
        <div class="card-actions">
          <button onClick={() => ToPartDetail(_id)} class="btn text-white btn-primary">parches</button>
        </div>
      </div>
    </div>
  );
};

export default Part;