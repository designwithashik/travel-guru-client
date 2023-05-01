import { Button } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { ContextAuth } from '../providers/AuthProvider';

const Login = () => {
    const { logInGoogle } = useContext(ContextAuth)
    const handleGoogleLogIn = () => {
        logInGoogle()
            .then(res => console.log(res.user))
        .catch(error=> console.log(error))
    }
    return (
        <div>
            <h2>Login Here</h2>
            <Button onClick={handleGoogleLogIn}>Log In with Google</Button>
        </div>
    );
};

export default Login;