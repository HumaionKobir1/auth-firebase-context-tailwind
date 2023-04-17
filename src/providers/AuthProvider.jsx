import React, { createContext, useContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../firebase.config';
export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // Sign up / Register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in / log in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    // sign out /  log out
    const logOut = () => {
        return signOut(auth);
    }


    // Observe auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, createUser  => {
            console.log('auth state change',  createUser);
            setUser(createUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;