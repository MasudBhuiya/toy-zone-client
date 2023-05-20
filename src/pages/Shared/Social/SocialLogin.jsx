// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = ({serError}) => {
    const navigate = useNavigate()
    const {signInwithGoogle} = useContext(AuthContext);
    const handleGoogle = () =>{
        signInwithGoogle()
        .then(result=>{
            const user = result.user;
            console.log(user)
            navigate('/')
        })
        .catch(error=>serError(error.message))
    }
    return (
        <div className=" text-center space-y-3">
            <p>Else signIn/signUp with_</p>
            <button onClick={handleGoogle} className="btn  btn-outline ">
  GOOGLE
</button>
        </div>
    );
};

export default SocialLogin;