import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Client from '../Client';
import Login from '../components/Login';
import Home from '../components/Home';
import PlaceDetails from '../components/PlaceDetails';
import Profile from '../components/Profile';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'places/:id',
                element: <PlaceDetails />,
                loader: ({ params }) => fetch(`http://localhost:3000/places/${params.id}`)
            }
        ]
    },
    {
        path: '/client',
        element: <Client />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'profile',
                element: <PrivateRoute><Profile/></PrivateRoute>
            }
        ]
    }
])

export default router;