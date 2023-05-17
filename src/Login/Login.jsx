// import React from 'react';

import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../pages/Shared/Social/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log(location)
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        login(email, password)
        .then(result => {
            const user = result.user;
            
            console.log(user);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password should more then 6 characters'
              })
            navigate(from, {replace: true});

            
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
      <h1 className="text-3xl text-center font-bold ">Login now!</h1>
        <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-warning bg-orange-500 text-white" type="submit" value='Login' name="" id="" />
        </div>
        </form>
        <h1>New to Car Doctors? <Link className='text-orange-500 font-bold' to='/register'>Sign Up</Link></h1>
      <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;