import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.Init';
import { useForm } from "react-hook-form";
import Loading from '../../shared/loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
// import { toast } from 'react-toastify';
// import useToken from '../Hooks/UseToken';

const SignUp = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(auth);
  const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
  
  let navigate = useNavigate();
let location = useLocation()
let from = location.state?.from?.pathname || "/";

  // const [email, setEmail] = useState('')
  // console.log(email);

  // sign up With Email And Password start 
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
 
  useEffect(()=>{
    if(user || guser){
      navigate(from, { replace: true });
  
    }
  },[(user || guser)])
  

  if(loading || gloading || sending || updating){
    return <Loading></Loading>
  }

  let errorMassage ;
  if(error || gerror || UpdateError)(
    errorMassage = <p className='text-error text-sm font-bold'>{error?.message || gerror?.message || UpdateError?.message}</p>
  )
  
   

 
  // const ResetPassword = async ()=>{
  //  await sendPasswordResetEmail(email)
  //  toast('reset email')
  // }
  // redirect to page start 

  const onSubmit = async data => {
    console.log(data)
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({ displayName : data.name})
    navigate('/')

    // navigate(from, { replace: true });
  };


  return (
    <div className=' flex justify-center h-screen items-center'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold">SignUp</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Enter Your Name</span>
                
              </label>
              <input type="text"
               placeholder="enter name"
                className="input input-bordered w-full max-w-xs"
                // onChange={(e) => setEmail(e.target.value)}
                {...register("name",
                {
                  required:{
                    value: true,
                    message: 'Enter Your name'
                  }
                })
              }
                 />
                 {
                 errors.name?.type === 'required' &&  <span className="label-text-alt text-error">{errors.name.message}</span>}
                 
              
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Enter Your Email</span>
                
              </label>
              <input type="email"
               placeholder="email"
                className="input input-bordered w-full max-w-xs"
                // onChange={(e) => setEmail(e.target.value)}
                {...register("email",
                {
                  required:{
                    value: true,
                    message: 'Enter Your email'
                  }, 
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Enter Valid Email'
                    
                  }
                })
              }
                 />
                 {
                 errors.email?.type === 'required' &&  <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                 {
                 errors.email?.type === 'pattern' &&  <span className="label-text-alt text-red-600">{errors.email.message}</span>}
              
            </div>
            
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Enter Your Password</span>
              </label>
              <input type="password"
               placeholder="password"
                className="input input-bordered w-full max-w-xs"
                {...register("password",
                {
                  required:{
                    value: true,
                    message: 'Enter Your password'
                  }, 
                  minLength: {
                    value: 8,
                    message: 'minimum 8 character require'
                    
                  }
                })
              }
                 />
                 {
                 errors.password?.type === 'required' &&  <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                 {
                 errors.password?.type === 'minLength' &&  <span className="label-text-alt text-red-600">{errors.password.message}</span>}
              
            </div>
            {errorMassage}
            {/* <p className='underline text-gray-800 cursor-pointer mt-2' onClick={ ResetPassword}>forgate password?</p> */}
            <input className=" input-bordered w-full max-w-xs btn btn-primary  mt-4" type="submit" value='SignUp' />
          </form>
          <p>Already  have an account? <Link className='text-primary' to='/login'>please login</Link> </p>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-secondary">Login With Google</button>

        </div>
      </div>
    </div>
  );
};

export default SignUp;