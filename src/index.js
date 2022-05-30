import React from 'react';
import ReactDOM from 'react-dom/client';
import Routers from './routers.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import { Helmet } from 'react-helmet'
import './assets/css/style.css'
import ReduxToastr from './components/redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

const googleFontNunito = "https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap"
const googleFontMontserrat = "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100&display=swap"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ReduxToastr />
    <Helmet>
      <link rel="stylesheet" href={googleFontNunito} />
      <link rel="stylesheet" href={googleFontMontserrat} />
    </Helmet>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </Provider>
);
reportWebVitals();
