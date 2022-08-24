import React from 'react';
import { Outlet } from 'react-router-dom';
import AppFooter from '../../components/shareds/AppFooter';
import AppHeader from '../../components/shareds/AppHeader';

const MainLayout = () => (
  <div className="layout is-main">
    <AppHeader />
    <Outlet />
    <AppFooter />
  </div>
);

export default MainLayout;
