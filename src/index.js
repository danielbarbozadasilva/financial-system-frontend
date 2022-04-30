import React from 'react';
import ReactDOM from 'react-dom/client';
import Routers from './routers.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout/>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
