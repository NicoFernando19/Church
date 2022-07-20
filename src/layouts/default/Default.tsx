import Footer from 'Components/FooterComponent/Footer';
import Header from 'Components/HeaderComponent/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default DefaultLayout;
