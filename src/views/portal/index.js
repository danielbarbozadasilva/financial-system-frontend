import { Router } from '@reach/router'

import Home from './home/index'
import Layout from '../../components/layout/index'

const Menu = [
  {
    title: 'home',
    icons: '',
    route: '/',
    visibleMenu: true,
    enabled: true,
    component: Home
  }
]

const Portal = (props) => {
  return (
    <>
      <Router>
        <Layout path='/'>
          {Menu.map(({ component: Component, route, tipo = '' }, i) => (
            <Component key={i} path={route} tipo={tipo} />
          ))}

        </Layout>
      </Router>
    </>
  )
}

export default Portal
