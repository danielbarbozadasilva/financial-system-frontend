import { Router } from '@reach/router'
import Home from '../../views/admin/home/index'
import { useSelector } from 'react-redux'

export const Menu = [
  {
    title: 'Início',
    icon: '',
    route: '/',
    visibleMenu: true,
    enabled: true,
    component: Home,
    authorization: [1, 2, 3]
  }
]

const Admin = (props) => {
  const typeUser = useSelector((state) => state.auth.user.typeUser)
  const rotasAutorizadas = Menu.filter((route) =>
    route.authorization.includes(typeUser)
  )

  const NotFound = () => <h2>Não autorizado</h2>

  return (
    <Router>
        {rotasAutorizadas.map(({ component: Component, route }, i) => (
          <Component key={i} path={route} />
        ))}
        <NotFound default />
    </Router>
  )
}

export default Admin
