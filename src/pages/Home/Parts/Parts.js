import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
const [parts, setParts] =useState([])
useEffect(()=>{
  fetch('service.json')
  .then(res => res.json())
  .then(data => setParts(data))
},[])
  return (
    <div>
      <h3 className=' font-bold text-4xl uppercase text-center'>parts section</h3>
      <div className=''>
        {parts.map(part => <Part part={part}></Part>)}
      </div>
      
    </div>
  );
};

export default Parts;