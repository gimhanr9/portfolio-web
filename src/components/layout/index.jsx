import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Puff } from 'react-loader-spinner';
import Footer from './Footer';
import Header from './Header';
import { useSpring, animated } from '@react-spring/web';

const Layout = (props) => {
  const styles = useSpring({
    from: { opacity: '0' },
    to: { opacity: '1' },
    delay: 1000,
  });

  return (
    <React.Fragment>
      <animated.div id='layout-wrapper' style={styles}>
        <Header />
        <div id='main-content'>{props.children}</div>
        <Footer />
      </animated.div>
    </React.Fragment>
  );
};

export default Layout;
