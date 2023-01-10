import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Puff } from 'react-loader-spinner';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import { routes } from './routes';

const App = () => {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    if (!showContent) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showContent]);
  return (
    <div className='App'>
      {!showContent ? (
        <Box
          id='preloader'
          display='flex'
          alignItems='center'
          justifyContent='center'
          sx={{ height: '100vh' }}
        >
          <Puff
            height='80'
            width='80'
            radius={1}
            color='#4fa94d'
            ariaLabel='puff-loading'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
          />
        </Box>
      ) : null}
      {showContent ? (
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.path}
              element={<Layout>{route.component}</Layout>}
            />
          ))}
        </Routes>
      ) : null}
    </div>
  );
};

export default App;
