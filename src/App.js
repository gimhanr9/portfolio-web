import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout';
import { routes } from './routes';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path={'/'} element={<Navigate to={'home'} />} />
        {routes.map((route) => (
          <Route
            path={route.path}
            element={<Layout>{route.component}</Layout>}
          />
        ))}
      </Routes>
    </div>
  );
};

export default App;
