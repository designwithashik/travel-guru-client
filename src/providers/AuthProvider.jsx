import React, { createContext, useEffect, useState } from 'react';
export const ContextAuth = createContext()
import '../index.css'
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import { app } from '../firebase/firebase.config';
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)
   
    
    const logInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const [places, setPlaces] = useState(null)
    const [rooms, setRooms] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:3000/places')
            .then(res => res.json())
        .then(data=> setPlaces(data))
    },[])

    useEffect(() => {
        fetch('http://localhost:3000/rooms')
            .then(res => res.json())
        .then(data=> setRooms(data))
    },[])


    const authInfo = {
        places,
        rooms,
        user,
        loading,
        logInGoogle,
        logOut

    }
    return (
        <ContextAuth.Provider value={authInfo}>
            {children}
        </ContextAuth.Provider>
    );
};

export default AuthProvider;