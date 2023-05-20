// import React from 'react';

import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../pages/Shared/Social/SocialLogin";
import Swal from "sweetalert2";

const Register = () => {
    const [error, setError]=useState('')
    const {signUp} = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSignUp = e =>{
        setError('')
        e.preventDefault();
        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password, name);
        
        if(password.length < 6){
             setError('Password is less then 6 characters')
              return;
        }
        signUp(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
              icon: 'success',
              title: 'Wow!',
              text: 'Sign-up Successfully'
            })
            form.reset();
            navigate('/')
        })
        .catch(error => {
            setError(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col justify-between lg:flex-row">
    <div className=" w-1/2">
      <img src='' alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-3xl text-center font-bold ">Sign-Up now!</h1>
        <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-warning bg-orange-500 text-white" type="submit" value='Sign-Up' name="" id="" />
        </div>
        </form>
        <h1>Already have an account? <Link className='text-orange-500 font-bold' to='/login'>Login</Link></h1>
        <p className="text-red-600">{error}</p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;