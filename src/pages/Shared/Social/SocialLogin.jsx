// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const SocialLogin = ({serError}) => {
    const {signInwithGoogle} = useContext(AuthContext);
    const handleGoogle = () =>{
        signInwithGoogle()
        .then()
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