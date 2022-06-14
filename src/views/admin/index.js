import { Router } from '@reach/router'
import { useSelector } from 'react-redux'
import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  People as PeopleIcon
} from '@material-ui/icons'
import PanelLayout from '../../components/layout/layout-panel'
import Home from '../../views/admin/home/index'
import Financial from '../../views/admin/financial_assets/index'

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
    title: 'Ativos financeiros',
    icon: <ShoppingCartIcon />,
    route: '/assets',
    visibleMenu: true,
    enabled: true,
    component: Financial,
    authorization: [1]
  }
]

const Admin = (props) => {
  const typeUser = useSelector((state) => state.auth.user.type)
  const authorizedRoutes = Menu.filter((route) =>
    route.authorization.includes(typeUser)
  )

  const NotFound = () => <h2>Não autorizado</h2>

  return (
    <Router>
      <PanelLayout path="/">
        {authorizedRoutes.map(({ component: Component, route }, i) => (
          <Component key={i} path={route} />
        ))}
        <NotFound default />
      </PanelLayout>
    </Router>
  )
}

export default Admin
