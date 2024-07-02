import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut ,onAuthStateChanged,GoogleAuthProvider ,signInWithPopup,updateProfile, FacebookAuthProvider } from 'firebase/auth';
import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import auth from '../Firebase/firebase.config'

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userDb, setUsetBackuserser] = useState(null);
    // console.log(user?.email)
    
    
 //    userData()
    //Create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //signIn user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //signIn user google
    const provider = new GoogleAuthProvider();
    const signInByGoogle= () => {
        return signInWithPopup(auth, provider)
    }


  //sign in with facebook
  const provider1 = new FacebookAuthProvider();
  const signInByFacebook= () => {
      return signInWithPopup(auth, provider1)
  }
    //logOut user
    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, current => {
            console.log("current value of current user is set in useEfect in authProvider is", current)
            setUser(current)
            setLoading(false)

        })
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo =
     {
        user, 
        loading,
        createUser,
        signIn,
        logOut,
        signInByGoogle,
        signInByFacebook,
        userDb, 
        setUsetBackuserser
        

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;