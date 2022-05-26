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
      <div className="card flex-shrink-0   shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={HandleProfile}>
            <p className='text-center text-xl font-bold text-secondary uppercase'>profile Form</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">name</span>
              </label>
              <input type="text" disabled value={user?.displayName || ''} className="input input-bordered text-xl  " />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" disabled value={user?.email || ''} className="input input-bordered text-xl  " />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">education</span>
              </label>
              <input type="text" name='education' placeholder='education' className="input input-bordered text-xl  placeholder-secondary" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">location</span>
              </label>
              <input type="text" name='location' placeholder='location' className="input input-bordered placeholder-secondary" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input type="text" name='phone' placeholder='phone' className="input input-bordered placeholder-secondary" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Linkedin</span>
              </label>
              <input type="text" name='linkedin' placeholder='Enter Link' className="input input-bordered placeholder-accent" />
            </div>
            <div className="form-control mt-6">
              <button type='submit' className="btn text-white btn-primary">submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;