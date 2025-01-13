import React from 'react';
import Header from './components/Header';
import Header2 from './components/Header2';
import Footer from './components/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="relative">
      {isHomePage && (
<div
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom:0,
    background: 'radial-gradient(circle, #0043FF 15%, #12274F 100%)', // Center is #0043FF, outer is #12274F
    zIndex: -1,
  }}
/>


      )}
      <Header2 />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

