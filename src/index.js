import React from 'react';
import ReactDOM from 'react-dom/client';
import Routers from './routers.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import './assets/css/style.css'
import ReduxToastr from './components/redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ReduxToastr />
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </Provider>
);
reportWebVitals();
