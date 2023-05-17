// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
    const {signUp} = useContext(AuthContext)
    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name);
        if(password.length < 6){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password should more then 6 characters'
              })
        }
        signUp(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error.message)
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
        
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;