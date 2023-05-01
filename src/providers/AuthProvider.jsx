import React, { createContext, useEffect, useState } from 'react';
export const ContextAuth = createContext()
import '../index.css'
const AuthProvider = ({ children }) => {
    
    const [places, setPlaces] = useState(null)
    const [rooms, setRooms] = useState([])
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
        rooms

    }
    return (
        <ContextAuth.Provider value={authInfo}>
            {children}
        </ContextAuth.Provider>
    );
};

export default AuthProvider;