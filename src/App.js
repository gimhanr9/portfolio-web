import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Puff } from 'react-loader-spinner';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import { routes } from './routes';

import { light, dark } from './utils/Theme';

const App = () => {
  //const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [showContent, setShowContent] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem('theme') || false
  );

  const changeTheme = (value) => {
    setIsDarkTheme(value);
  };

  useEffect(() => {
    if (!showContent) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showContent]);

  return (
    <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
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
          <Routes exact>
            {routes.map((route) => (
              <Route
                path={route.path}
                element={
                  <Layout setBrightness={changeTheme}>{route.component}</Layout>
                }
              />
            ))}
          </Routes>
        ) : null}
      </div>
    </ThemeProvider>
  );
};

export default App;
