import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { SNavbar, SLink, SNavbarLogo, SNavbarToggle } from '../styled'
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
        <Link to="/" id="logoMain">
          <SNavbarLogo src={LogoHeader} alt="logo" />
        </Link>
        <SNavbarToggle aria-controls="basic-navbar-nav" />
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <SLink>
                <NavLink to="/">Home</NavLink>
              </SLink>
              <SLink>
                <NavLink to="/top05">Top 05</NavLink>
              </SLink>
            </Nav>
          </Navbar.Collapse>

          <SNavbar.Collapse className="justify-content-end">
            <Nav>
              <SLink>
                <NavLink to="/signin">Logar</NavLink>
              </SLink>
              <SLink>
                <NavLink to="/signup">Cadastrar</NavLink>
              </SLink>
            </Nav>
          </SNavbar.Collapse>
        </Container>
      </SNavbar>
    </>
  )
}

export default Header
