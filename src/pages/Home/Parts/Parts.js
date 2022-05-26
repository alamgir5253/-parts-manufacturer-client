import React, { useEffect, useState } from 'react';
import Part from './Part';
const Parts = () => {
  const [parts, setParts] = useState([])
  useEffect(() => {
    fetch('https://blooming-brook-62791.herokuapp.com/parts')
      .then(res => res.json())
      .then(data => setParts(data))
  }, [])
  return (
    <div className='mb-20'>
      <h3 className=' font-bold text-2xl text-primary md:text-4xl uppercase text-center '>parts section</h3>
      <div className='h-1 w-20 rounded-md bg-secondary mx-auto mb-20 mt-4'></div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {parts.map(part => <Part key={part._id} part={part}></Part>)}
      </div>
    </div>
  );
};

export default Parts;