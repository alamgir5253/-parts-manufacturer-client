import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.Init';
import { useForm } from "react-hook-form";
import Loading from '../../shared/loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseToken from '../Hook/UseToken';

const SignUp = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, ResetError] = useSendPasswordResetEmail(auth);
  const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
  let navigate = useNavigate();
  let location = useLocation()
  let from = location.state?.from?.pathname || "/";


  // sign up With Email And Password start 
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [token] = UseToken(user || guser)

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });

    }
  }, [token])

  if (loading || gloading || sending || updating) {
    return <Loading></Loading>
  }

  let errorMassage;
  if (error || gerror || UpdateError) (
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
    await updateProfile({ displayName: data.name })
  };

  return (
    <div className=' flex justify-center h-screen items-center'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Enter Your Name</span>

              </label>
              <input type="text"
                placeholder="enter name"
                className="input input-bordered w-full max-w-xs"
                {...register("name",
                  {
                    required: {
                      value: true,
                      message: 'Enter Your name'
                    }
                  })
                }
              />
              {
                errors.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}


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
                    required: {
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
                errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
              {
                errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}

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
                    required: {
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
                errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
              {
                errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}

            </div>
            {errorMassage}
            <input className=" input-bordered text-white w-full max-w-xs btn btn-primary  mt-4" type="submit" value='Sign Up' />
          </form>
          <p>Already  have an account? <Link className='text-primary' to='/login'>please login</Link> </p>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline text-white btn-secondary">continue With Google</button>

        </div>
      </div>
    </div>
  );
};

export default SignUp;