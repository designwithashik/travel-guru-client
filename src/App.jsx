import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import BgImage from './layouts/BgImage';

const App = () => {
  return (
    <BgImage>
      <Header />
      <Outlet/>
    </BgImage>
  );
};

export default App;