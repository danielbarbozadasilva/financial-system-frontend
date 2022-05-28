import { Router, Redirect } from '@reach/router'

import Layout from '../../components/layout/index'
import SignIn from '../auth/signin'
import SignUp from '../auth/signup'
import Home from '../portal/home/index'
import Error404 from '../error/404'

const Menu = [
  {
    title: 'home',
    icons: '',
    route: '/',
    visibleMenu: true,
    enabled: true,
    component: Home
  },
  {
    title: 'SignIn',
    icons: '',
    route: '/signin',
    visibleMenu: true,
    enabled: true,
    component: SignIn
  },
  {
    title: 'SignUp',
    icons: '',
    route: '/signup',
    visibleMenu: true,
    enabled: true,
    component: SignUp
  },
  {
    title: 'NotFound',
    icons: '',
    route: '/error404',
    visibleMenu: true,
    enabled: true,
    component: Error404
  }
]

const Portal = (props) => {
  return (
    <>
      <Router>
        <Layout path="/">
          {Menu.map(({ component: Component, route, type = '' }, i) => (
            <Component key={i} path={route} type={type} />
          ))}
          <Redirect from="/*" to="/error404" noThrow />
        </Layout>
      </Router>
    </>
  )
}

export default Portal
