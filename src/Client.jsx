import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import BgWhite from './layouts/BgWhite';

const Client = () => {
    return (
        <BgWhite>
            <Header></Header>
            <Outlet />

        </BgWhite>
    );
};

export default Client;