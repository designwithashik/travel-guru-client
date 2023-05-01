import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Client from '../Client';
import Login from '../components/Login';
import Home from '../components/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    },
    {
        path: '/client',
        element: <Client />,
        children: [
        {
                path: 'login',
                element: <Login/>
        }
        ]
    }
])

export default router;