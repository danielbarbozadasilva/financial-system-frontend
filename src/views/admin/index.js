import { Router } from '@reach/router'
import { useSelector } from 'react-redux'
import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  People as PeopleIcon
} from '@mui/icons-material'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'

import PanelLayout from '../../components/layout/layout-panel'
import HomeAdmin from './home/admin/index'
import HomeClient from './home/client/index'

import Financial from './financial_assets/admin/index'
import FinancialClient from './financial_assets/client/index'
import Client from '../../views/admin/client/index'
import TransactionsDetails from '../../views/admin/transaction/index'
import Account from '../../views/admin/deposit/index'

import Error404 from '../error/404/index'

export const Menu = [
  {
    title: 'Início',
    icon: <DashboardIcon />,
    route: '/',
    visibleMenu: true,
    enabled: true,
    component: HomeAdmin,
    authorization: [1]
  },
  {
    title: 'Início',
    icon: <DashboardIcon />,
    route: '/',
    visibleMenu: true,
    enabled: true,
    component: HomeClient,
    authorization: [2]
  },
  {
    title: 'Ativos',
    icon: <ShoppingCartIcon />,
    route: '/assets',
    visibleMenu: true,
    enabled: true,
    component: Financial,
    authorization: [1]
  },
  {
    title: 'Ativos Financeiros',
    icon: <ShoppingCartIcon />,
    route: '/clientassets',
    visibleMenu: true,
    enabled: true,
    component: FinancialClient,
    authorization: [2]
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
    icon: <CurrencyExchangeIcon />,
    route: '/transactions',
    visibleMenu: true,
    enabled: true,
    component: TransactionsDetails,
    authorization: [1, 2]
  },
  {
    title: 'Depositar',
    icon: <LocalAtmIcon />,
    route: '/deposit',
    visibleMenu: true,
    enabled: true,
    component: Account,
    authorization: [1]
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
