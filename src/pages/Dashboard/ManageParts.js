import React, { useEffect, useState } from 'react';
const ManageParts = () => {
  const [ManageParts, setManageParts] = useState([])
  const [deleteParts, setDeleteParts] = useState(null)
  console.log(deleteParts);
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
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
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
              ManageParts.map(parts => <tr>

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

                  <label onClick={() => setDeleteParts(parts)} for="my-modal-6" class="btn bg-accent text-white border-0 btn-xs">delete</label>
                </th>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      {/* model part start*/}

      {deleteParts && <><input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg text-accent">Are You Sure To Delete{deleteParts.name}</h3>
            <p class="py-4 font-bold">{deleteParts.name} is very good parts why delete this</p>
            <div class="modal-action">
              <button onClick={() => handleDelete(deleteParts._id)} class="btn bg-accent text-white border-0 btn-xs">delete</button>
              <label for="my-modal-6" class="btn bg-secondary text-white border-0 btn-xs">cancel</label>
            </div>
          </div>
        </div></>}
    </section>
  );
};

export default ManageParts;