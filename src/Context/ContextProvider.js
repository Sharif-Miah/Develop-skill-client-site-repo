import React, { createContext, useEffect, useReducer, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Auth/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app)

const ContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // Google SignIn

    const googleAuthProvider = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    // Github SignIn

    const githubAuthProvider = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // Email and password Reginster

    const registerInprovider = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // email and password login

    const loginProvider = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Update Profile 

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    // signOut 

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, (curentUser) => {
            setUser(curentUser)
            setLoading(false)
        })
        return () => unSubsCribe();
    }, [])

    const userInfo = { user, loading, googleAuthProvider, githubAuthProvider, registerInprovider, loginProvider, logOut, updateUserProfile };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;