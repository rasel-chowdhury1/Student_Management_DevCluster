import React from 'react';
import { Outlet } from 'react-router-dom';
import AsideNavbar from './component/AsideNavbar';

const Layout = () => {
    return (
        <div className='flex w-full'>
            <AsideNavbar/>
            <Outlet/>
        </div>
    );
};

export default Layout;