import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element)
        element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setOpacity(1), 200);
    return () => clearTimeout(timeout);
    //setOpacity(1);
  }, []);

  const setBrightnessToggle = (value) => {
    props.setBrightness(value);
  };

  return (
    <React.Fragment>
      <div style={{ backgroundColor: props.darkTheme ? '#0b1120' : '#ffffff' }}>
        <div
          id='layout-wrapper'
          style={{
            opacity: opacity,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <Header setBrightnessToggle={setBrightnessToggle} />
          <div id='main-content'>{props.children}</div>
          <section id='contact'>
            <Footer />
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
