import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { SNavbar, SNavLink, SNavbarLogo, SNavbarToggle } from './HeaderElements'
import LogoHeader from '../../../assets/img/header-image.png'
import { Link } from '@reach/router'

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          textDecoration: isCurrent ? 'underline' : 'none',
          color: '#F1DEB8'
        }
      }
    }}
  />
)

const Header = () => {
  return (
    <>
      <SNavbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" id="logoMain">
              <SNavbarLogo className="logo-img" src={LogoHeader} alt="logo" />
            </Link>
          </Navbar.Brand>
          <SNavbarToggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
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
          </Navbar.Collapse>

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