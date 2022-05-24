import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase.Init';

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);

  const HandleProfile = e => {
    e.preventDefault()
    const phone = e.target.phone.value
    const education = e.target.education.value
    const location = e.target.location.value
    const linkedin = e.target.linkedin.value
    
    const userProfile = {
      name: user.displayName,
      email: user.email,
      phone,
      education,
      location,
      linkedin
    }
      fetch('http://localhost:5000/profile',{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(userProfile)
      })
      .then(res =>res.json())
      .then(data => console.log(data))
      toast('inserted review to db')
      console.log(userProfile);

  }
  return (
    <div class="card flex-shrink-0   shadow-2xl bg-base-100">
      <div class="card-body">
        <form onSubmit={HandleProfile}>
          <p className='text-center text-xl text-primary uppercase'>profile Form</p>
        <div class="form-control">
          <label class="label">
            <span class="label-text">name</span>
          </label>
          <input type="text" disabled value={user?.displayName || ''} class="input input-bordered text-xl placeholder-info " />
        </div>
        <div class="form-control ">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" disabled value={user?.email || ''} class="input input-bordered text-xl placeholder-info " />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">education</span>
          </label>
          <input type="text" name='education' class="input input-bordered text-xl placeholder-info " />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">location</span>
          </label>
          <input type="text" name='location' placeholder='quantity' class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Phone Number</span>
          </label>
          <input type="text" name='phone' placeholder='phone' class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Linkedin</span>
          </label>
          <input type="text" name='linkedin' placeholder='Enter Address' class="input input-bordered " />
        </div>
        <div class="form-control mt-6">
          <button type='submit' class="btn btn-primary">submit</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;