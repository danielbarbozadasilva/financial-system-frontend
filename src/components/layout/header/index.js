import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { SNavbar, SNavLink, SNavbarLogo } from './HeaderElements'
import LogoHeader from '../../../assets/img/header-image.png'
import { Link } from '@reach/router'

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          textDecoration: isCurrent ? 'underline' : 'none',
          color: 'white'
        }
      }
    }}
  />
)

const Header = () => {
  return (
    <>
      <SNavbar>
        <Link to="/" id="logoMain">
          <SNavbarLogo className="logo-img" src={LogoHeader} alt="logo" />
        </Link>
        <Container>
          <Nav className="me-auto">
            <SNavLink>
              <NavLink to="/">Home</NavLink>
            </SNavLink>
            <SNavLink>
              <NavLink to="/">Ativos</NavLink>
            </SNavLink>
            <SNavLink>
              <NavLink to="/">Preços</NavLink>
            </SNavLink>
          </Nav>
          <SNavbar.Collapse className="justify-content-end">
            <Nav>
              <SNavLink>
                <NavLink to="/signin">Logar</NavLink>
              </SNavLink>
              <SNavLink>
                <NavLink to="/signup">Cadastrar</NavLink>
              </SNavLink>
            </Nav>
          </SNavbar.Collapse>
        </Container>
      </SNavbar>
    </>
  )
}

export default Header
