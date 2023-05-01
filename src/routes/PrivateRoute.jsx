import React, { useContext } from 'react';
import { ContextAuth } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { loading, user } = useContext(ContextAuth);
    
    if (loading) {
        <h2>Booking Processing...</h2>
    }
    if (user) {
        return <>{children}</>
    }
    else {
        return <Navigate to='/client/login'></Navigate>
    }
    
};

export default PrivateRoute;