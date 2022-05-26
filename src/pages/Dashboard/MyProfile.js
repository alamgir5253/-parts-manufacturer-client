import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase.Init';

const MyProfile = () => {
  const [user] = useAuthState(auth);

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
    fetch('https://blooming-brook-62791.herokuapp.com/profile', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userProfile)
    })
      .then(res => res.json())
      .then(data => console.log(data))
    toast('inserted profile to db')
    console.log(userProfile);

  }
  return (
    <section className='mb-20'>
      <div class="card flex-shrink-0   shadow-2xl bg-base-100">
        <div class="card-body">
          <form onSubmit={HandleProfile}>
            <p className='text-center text-xl font-bold text-secondary uppercase'>profile Form</p>
            <div class="form-control">
              <label class="label">
                <span class="label-text">name</span>
              </label>
              <input type="text" disabled value={user?.displayName || ''} class="input input-bordered text-xl  " />
            </div>
            <div class="form-control ">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input type="text" disabled value={user?.email || ''} class="input input-bordered text-xl  " />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">education</span>
              </label>
              <input type="text" name='education' placeholder='education' class="input input-bordered text-xl  placeholder-secondary" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">location</span>
              </label>
              <input type="text" name='location' placeholder='location' class="input input-bordered placeholder-secondary" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone Number</span>
              </label>
              <input type="text" name='phone' placeholder='phone' class="input input-bordered placeholder-secondary" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Linkedin</span>
              </label>
              <input type="text" name='linkedin' placeholder='Enter Link' class="input input-bordered placeholder-accent" />
            </div>
            <div class="form-control mt-6">
              <button type='submit' class="btn text-white btn-primary">submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;