import React, { createContext, useContext, useState } from 'react';
import {getAuth} from "firebase/auth";
import app from '../firebase.config';
export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const authInfo = {
        user,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;