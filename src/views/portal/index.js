import { Router, Redirect } from '@reach/router'

import Layout from '../../components/layout/main/index'
import SignIn from '../auth/signin/index'
import SignUp from '../auth/signup/index'
import Home from '../portal/home/index'
import Top05 from '../portal/cards_list/index'

import Error403 from '../error/403/index'
import Error404 from '../error/404/index'

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
    title: 'Top05',
    icons: '',
    route: '/top05',
    visibleMenu: true,
    enabled: true,
    component: Top05
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
    title: 'NotAuthorized',
    icons: '',
    route: '/error403',
    visibleMenu: true,
    enabled: true,
    component: Error403
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
