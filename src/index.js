import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import Routers from './routers';

ReactDOM.render(
  <Provider>
    <Routers />
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
