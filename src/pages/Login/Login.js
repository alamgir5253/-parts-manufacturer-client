import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.Init';
import { useForm } from "react-hook-form";
import Loading from '../../shared/loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import UseToken from '../Hook/UseToken';
// import { toast } from 'react-toastify';
// import useToken from '../Hooks/UseToken';

const Login = () => {
  
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(
    auth
  );
  
  let navigate = useNavigate();
let location = useLocation()
let from = location.state?.from?.pathname || "/";

  // const [email, setEmail] = useState('')
  // console.log(email);

  // login With Email And Password start 
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [token] = UseToken(user || guser)

 
  useEffect(()=>{
    if(token){
      navigate(from, { replace: true });
  
    }
  },[(token)])
  

  if(loading || gloading || sending){
    return <Loading></Loading>
  }

  let errorMassage ;
  if(error || gerror)(
    errorMassage = <p className='text-error text-sm font-bold'>{error?.message || gerror?.message}</p>
  )
  
   

 
  // const ResetPassword = async ()=>{
  //  await sendPasswordResetEmail(email)
  //  toast('reset email')
  // }
  // redirect to page start 

  const onSubmit =  data => {
    console.log(data)
    signInWithEmailAndPassword(data.email, data.password)
    // navigate(from, { replace: true });
  };


  return (
    <div className=' flex justify-center h-screen items-center'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                 errors.email?.type === 'required' &&  <span className="label-text-alt text-error">{errors.email.message}</span>}
                 {
                 errors.email?.type === 'pattern' &&  <span className="label-text-alt text-error">{errors.email.message}</span>}
              
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
                 errors.password?.type === 'required' &&  <span className="label-text-alt text-error">{errors.password.message}</span>}
                 {
                 errors.password?.type === 'minLength' &&  <span className="label-text-alt text-error">{errors.password.message}</span>}
              
            </div>
            {errorMassage}
            {/* <p className='underline text-gray-800 cursor-pointer mt-2' onClick={ ResetPassword}>forgate password?</p> */}
            <input className=" input-bordered w-full max-w-xs btn btn-primary  mt-4" type="submit" value='Login' />
          </form>
          <p>don't have an account? <Link className='text-primary' to='/signup'> please SignUp</Link> </p>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-secondary">continue With Google</button>

        </div>
      </div>
    </div>
  );
};

export default Login;


























// import React, { useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import auth from '../../Firebase.Init'
// import Loading from '../../shared/loading/Loading'
// const Login = () => {
//   const navigate = useNavigate()
//   // login with google 
//   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
//   useEffect(()=>{
//     if (user){
//       console.log(user);
//       navigate('/')
//     }
//    },[user])
//   if(loading){
//     return <Loading/>
//   }
//   let googleError 
//   if(error){
//     googleError= error.message
//   }
 

//   const HandleGoogleLogin = ()=>{
//      signInWithGoogle()
//   }











//   return (
//     <div className="hero min-h-screen bg-base-200">
//     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//       <div className="card-body">
//       <form>        
//       <h5 className='text-center font-bold text-secondary text-2xl uppercase'>login</h5>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input type="text" placeholder="email" className="input input-bordered" />
//           <span class="label-text-alt">Alt label</span>
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input type="password" placeholder="password" className="input input-bordered" />
//           <span class="label-text-alt">Alt label</span>
//           <label className="label">
//             <a href="#" className="label-text-alt link link-hover text-accent font-bold">Forgot password?</a>
//           </label>
//         </div>
//         <div className="form-control mt-6">
//           <button type='submit' className="btn btn-secondary">Login</button>
//         </div>
//       <p className='text-xs mt-2 '>don't have an account? <Link className='text-info' to='/signup'>please signup</Link></p>
//       </form>
//       <div class="divider">OR</div>
//       <button onClick={HandleGoogleLogin} class="btn btn-outline btn-secondary">Button</button>
//       {googleError}
//       </div>
//     </div>
// </div>
//   );
// };

// export default Login;