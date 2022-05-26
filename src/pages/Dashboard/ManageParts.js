import React, { useEffect, useState } from 'react';
const ManageParts = () => {
  const [ManageParts, setManageParts] = useState([])
  const [deleteParts, setDeleteParts] = useState(null)
  useEffect(() => {
    fetch('https://blooming-brook-62791.herokuapp.com/parts')
      .then(res => res.json())
      .then(data => setManageParts(data))
  }, [])

  const handleDelete = id => {
    const url = `https://blooming-brook-62791.herokuapp.com/parts/${id}`
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const remaining = ManageParts.filter(deletepart => deletepart._id !== id)
        setManageParts(remaining)
        setDeleteParts(null)
      })
  }

  return (
    <section className=''>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th className='bg-primary text-white text-lg'>image</th>
              <th className='bg-primary text-white text-lg'>name</th>
              <th className='bg-primary text-white text-lg'>Minimum Order</th>
              <th className='bg-primary text-white text-lg'>availableQuantity</th>
              <th className='bg-primary text-white text-lg'>price</th>
              <th className='bg-primary text-white text-lg'>delete item</th>
            </tr>
          </thead>
          <tbody>
            {
              ManageParts.map(parts => <tr key={parts._id}>

                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={parts.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </div>
                </td>
                <td><div className="font-bold">{parts.name}</div></td>
                <td>
                  <span className="badge badge-ghost bg-accent text-white badge-sm">{parts.minOrder}</span>
                </td>
                <td>
                  <span className="badge badge-ghost text-white bg-secondary badge-sm">{parts.availableQuantity}</span>
                </td>
                <td className='font-bold'>$ {parts.price}</td>
                <th>

                  <label onClick={() => setDeleteParts(parts)} htmlFor="my-modal-6" className="btn bg-accent text-white border-0 btn-xs">delete</label>
                </th>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      {/* model part start*/}

      {deleteParts && <><input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-center text-lg text-accent">Are You Sure To Delete {deleteParts.name}</h3>
            <p className="py-4 font-bold text-gray-600 text-center">{deleteParts.name} is very good parts why delete this</p>
            <div className="modal-action">
              <button onClick={() => handleDelete(deleteParts._id)} className="btn bg-accent text-white border-0 btn-xs">delete</button>
              <label htmlFor="my-modal-6" className="btn bg-secondary text-white border-0 btn-xs">cancel</label>
            </div>
          </div>
        </div></>}
    </section>
  );
};

export default ManageParts;