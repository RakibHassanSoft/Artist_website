import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';

const Route = () => {
  return (
    <div>
      <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
    
    </div>
  );
};

export default Route;

