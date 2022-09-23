import React from 'react'
import { Router, Redirect } from '@reach/router'
import AdminView from './views/private'
import PortalView from './views/portal'
import { isAuthenticated } from './config/auth'

const PrivateRoute = ({ component: Component, ...rest }) => {
  if (!isAuthenticated()) {
    return <Redirect to='/signin' noThrow />
  }
  return <Component {...rest} />
}

const Routers = () => (
  <>
    <Router>
      <PortalView path='/*' />
      <PrivateRoute component={AdminView} path='/admin/*' />
    </Router>
  </>
)

export default Routers
