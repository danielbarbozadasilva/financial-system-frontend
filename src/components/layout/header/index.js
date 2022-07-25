import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { SNavbar, SDiv, SNavbarLogo, SNavbarToggle } from '../styled'
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
              <SDiv>
                <NavLink to="/">Home</NavLink>
              </SDiv>
              <SDiv>
                <NavLink to="/top05">Top 05</NavLink>
              </SDiv>
            </Nav>
          </Navbar.Collapse>

          <SNavbar.Collapse className="justify-content-end">
            <Nav>
              <SDiv>
                <NavLink to="/signin">Logar</NavLink>
              </SDiv>
              <SDiv>
                <NavLink to="/signup">Cadastrar</NavLink>
              </SDiv>
            </Nav>
          </SNavbar.Collapse>
        </Container>
      </SNavbar>
    </>
  )
}

export default Header
