import React, { createContext } from 'react';

const AuthProvider = ({ children }) => {
    
    const ContextAuth = createContext()
    const authInfo = {
        
    }
    return (
        <ContextAuth.Provider value={authInfo}>
            {children}
        </ContextAuth.Provider>
    );
};

export default AuthProvider;