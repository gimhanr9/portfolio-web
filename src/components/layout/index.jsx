import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
  return (
    <React.Fragment>
      <div id='preloader'></div>
      <div id='layout-wrapper'>
        <Header />
        <div id='main-content'>{props.children}</div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
