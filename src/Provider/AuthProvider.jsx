// import React from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext } from "react";

const auth = getAuth(app);
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const signUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const user = 'ali';

    const authInfo = {
        user, signUp
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;