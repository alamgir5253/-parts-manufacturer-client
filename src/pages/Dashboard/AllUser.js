import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/loading/Loading'
import User from './User';
const AllUser = () => {
  const {data: users, isLoading, refetch} = useQuery('user', ()=> fetch('https://blooming-brook-62791.herokuapp.com/user',{
    method:"GET",
    headers:{
      'authorization': `bearer ${localStorage.getItem('access_token')}` 
    }

  }).then(res => res.json()))
  if(isLoading){
  return <Loading />
  }

  return (
    <section className='mb-20'>
      <div class="overflow-x-auto">
  <table class="table w-full">
    <thead  >
      <tr>
        <th className='bg-primary text-white text-lg'>Serial</th>
        <th className='bg-primary text-white text-lg'>Email</th>
        <th className='bg-primary text-white text-lg'>Make Admin</th>
      </tr>
    </thead>
    <tbody>
    {
      users.map((user, index) => <User
        key={user._id}
        refetch={refetch}
        index={index}
        user={user}
        
        />)
    } 
    </tbody>
  </table>
</div>
    </section>
  );
};

export default AllUser;