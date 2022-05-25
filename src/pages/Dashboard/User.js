import React from 'react';
import { toast } from 'react-toastify';

const User = ({user, index , refetch}) => {
  const {email, role} = user

  const handleAdmin = () =>{
    fetch(`http://localhost:5000/user/admin/${email}`,{
      method:"PUT",
        headers:{
          'authorization': `bearer ${localStorage.getItem('access_token')}` 
        }
    })
    .then(res =>{
      if(res.status === 403){
        toast.error("conn't make an admin")
      }
      return res.json()
    })
    .then(data =>{
      console.log(data);
      if(data.modifiedcount > 0){

        refetch()
        toast.success('successfully create admin')
      }
    })

  }


  return (
    <tr >
        <td>{index + 1}</td>
        <td>{email}</td>
        <td>{role !== 'admin' && <button onClick={handleAdmin} className='btn btn-xs text-white bg-secondary border-0'>make admin</button>}</td>
        <td><button className='btn btn-xs bg-accent text-white border-0'>delete user</button></td>
      </tr>
  );
};

export default User;