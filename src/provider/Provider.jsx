import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthProvider = createContext(null);



const Provider = ({ children }) => {

   const [user,setUser]= useState(null)
   const [loader,setLoader]=useState(true)

    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        setLoader(true)
           
    }
  
    const singInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

   const signOut2=()=>{
    return signOut(auth)
    setLoader(true)
   }


   useEffect(()=>{
 const unsusCribed =  onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoader(false)
    })

   return ()=>{
    unsusCribed()
   }
   })

    const person = {
        creatUser,
        singInUser,
        signOut2,
        user,
        loader
    }
    console.log(user)
    return (
        <div>
            <AuthProvider.Provider value={person}>
                {
                    children
                }
            </AuthProvider.Provider>
        </div>
    );
};

export default Provider;