import React from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.Init'
const Login = () => {
  // login with google 
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const HandleGoogleLogin = ()=>{
    signInWithGoogle()



  }











  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <form>        
      <h5 className='text-center font-bold text-secondary text-2xl uppercase'>login</h5>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-accent font-bold">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-secondary">Login</button>
        </div>
      <p className='text-xs mt-2 '>don't have an account? <Link className='text-info' to='/signup'>please signup</Link></p>
      </form>
      <div class="divider">OR</div>
      <button onClick={HandleGoogleLogin} class="btn btn-outline btn-secondary">Button</button>
      </div>
    </div>
</div>
  );
};

export default Login;