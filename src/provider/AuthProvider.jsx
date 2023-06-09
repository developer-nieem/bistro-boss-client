import { createContext, useEffect, useReducer } from "react";
import {  useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios, { Axios } from "axios";


export const AuthContext =  createContext(null);

const AuthProvider = ({children}) => {
const [user , setUser] = useState(null)
const [loading , setLoading] = useState(true)
const auth = getAuth(app);

const createUser =  (email, pass) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth , email, pass)
}

const loginUser = ( email , pass) => {
    setLoading(true)
   return signInWithEmailAndPassword(auth, email, pass)
}



useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);

        if (currentUser) {
            axios.post('http://localhost:3000/jwt' , {email: currentUser.email })
            .then(data => {
                console.log(data.data.token);
                localStorage.setItem('access-token', data.data.token);
            })
        }else{
            localStorage.removeItem('access-token')
        }
        setLoading(false);
    })

    return () => {
        unsubscribe()
    }
}, [])


const googleProvider =  new GoogleAuthProvider()
const loginWIthGoogle = () => {
  return  signInWithPopup(auth, googleProvider)
}
const logOut = () => {
   return signOut(auth)
}
    const userInfo =  {
            user,
            loading,
            createUser,
            loginUser,
            loginWIthGoogle,
            logOut

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;