import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import ScrollToTop from './utils/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>
);
