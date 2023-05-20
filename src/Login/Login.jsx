// import React from 'react';

import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../pages/Shared/Social/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../Hooks/useTitle";

const Login = () => {
    const [error, setError] = useState('')
    const {login} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // console.log(location)
    useTitle('Login')
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
                icon: 'success',
                title: 'Wow!',
                text: 'Login Successfully'
              })
              
            navigate(from, {replace: true});
        })
        .catch(error => {
            setError(error)
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
          
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-warning bg-orange-500 text-white" type="submit" value='Login' name="" id="" />
        </div>
        </form>
        <h1>New to Toys Shop? <Link className='text-orange-500 font-bold' to='/register'>Sign Up</Link></h1>
        <p className="text-red-600">{error.message}</p>
      <SocialLogin setError={setError}></SocialLogin>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;