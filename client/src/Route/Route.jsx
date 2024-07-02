import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Route = () => {
    return (
        <div>
            <h1 className='text-red-300'> h1</h1>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
            
        </div>
    );
};

export default Route;