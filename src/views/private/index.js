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
import Error404 from '../error/404/index'

import HomeAdmin from './admin/home/index'
import Financial from './admin/financial_assets/index'
import Client from './admin/client/index'
import TransactionsAdmin from './admin/transaction/index'
import Account from './admin/deposit/index'

import HomeClient from './client/home/index'
import TransactionsClient from './client/transaction/index'
import FinancialClient from './client/financial_assets/index'


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
    component: TransactionsAdmin,
    authorization: [1]
  },
  {
    title: 'Transações',
    icon: <CurrencyExchangeIcon />,
    route: '/transactionsclient',
    visibleMenu: true,
    enabled: true,
    component: TransactionsClient,
    authorization: [2]
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

const Private = (props) => {
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

export default Private
