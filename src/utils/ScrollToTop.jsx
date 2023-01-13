import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = (props) => {
  const location = useLocation();
  //const navigationType = useNavigationType();
  useEffect(() => {
    // if (navigationType !== 'POP') {
    //   window.scrollTo(0, 0);
    // }
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
