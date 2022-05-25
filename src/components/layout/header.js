import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Investimentos</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Ativos</Nav.Link>
            <Nav.Link>Preços</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/signin">
                Logar
              </Nav.Link>
              <Nav.Link href="/signup">
                Cadastrar
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
