import React, { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import { useSpring, animated } from '@react-spring/web';

const Layout = (props) => {
  const styles = useSpring({
    from: { opacity: '0' },
    to: { opacity: '1' },
    //delay: 1000,
  });

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element)
        element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  const setBrightnessToggle = (value) => {
    props.setBrightness(value);
  };

  return (
    <React.Fragment>
      <animated.div id='layout-wrapper' style={styles}>
        <Header setBrightnessToggle={setBrightnessToggle} />
        <div id='main-content'>{props.children}</div>
        <section id='contact'>
          <Footer />
        </section>
      </animated.div>
    </React.Fragment>
  );
};

export default Layout;
