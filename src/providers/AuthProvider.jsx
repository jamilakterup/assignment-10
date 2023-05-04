import React, {createContext, useEffect, useState} from 'react';
import {GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../firebase/firebase.config';
import {GoogleAuthProvider} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googkeProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const SignUpNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignInUser = () => {
        return signInWithPopup(auth, googkeProvider);
    };

    const gitHubSignInUser = () => {
        return signInWithPopup(auth, gitHubProvider);
    };

    const resetUserPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const logOutUser = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = {
        user,
        loading,
        googleSignInUser,
        gitHubSignInUser,
        resetUserPassword,
        SignUpNewUser,
        signInUser,
        logOutUser
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;