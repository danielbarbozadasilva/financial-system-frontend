import { Router } from '@reach/router'
import { useSelector } from 'react-redux'
import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  People as PeopleIcon
} from '@mui/icons-material'
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

import PanelLayout from '../../components/layout/layout-panel'
import Home from '../../views/admin/home/index'
import Financial from '../../views/admin/financial_assets/index'
import Client from '../../views/admin/client/index'
import TransactionsDetails from '../../views/admin/transaction/index'

import Error404 from '../error/404/index'

export const Menu = [
  {
    title: 'Início',
    icon: <DashboardIcon />,
    route: '/',
    visibleMenu: true,
    enabled: true,
    component: Home,
    authorization: [1, 2]
  },
  {
    title: 'Ativos Financeiros',
    icon: <ShoppingCartIcon />,
    route: '/assets',
    visibleMenu: true,
    enabled: true,
    component: Financial,
    authorization: [1, 2]
  },
  {
    title: 'Clientes',
    icon: <PeopleIcon />,
    route: '/clients',
    visibleMenu: true,
    enabled: true,
    component: Client,
    authorization: [1]
  },
  {
    title: 'Transações',
    icon: <LocalAtmIcon />,
    route: '/transactions',
    visibleMenu: true,
    enabled: true,
    component: TransactionsDetails,
    authorization: [2]
  }
]

const Admin = (props) => {
  const typeUser = useSelector((state) => state.auth.user.type)
  const authorizedRoutes = Menu.filter((route) =>
    route.authorization.includes(typeUser)
  )

  return (
    <Router>
      <PanelLayout path="/">
        {authorizedRoutes.map(({ component: Component, route }, i) => (
          <Component key={i} path={route} />
        ))}
        <Error404 default />
      </PanelLayout>
    </Router>
  )
}

export default Admin
