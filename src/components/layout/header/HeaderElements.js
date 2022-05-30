import styled from 'styled-components'
import { Navbar } from 'react-bootstrap'

export const SNavbar = styled(Navbar)`
  width: 100%;
  height: 92px;
  top: 0;
  font-family: 'Nunito', Helvetica, Arial, Lucida, sans-serif;
  background-color: #501417;
  color: white;
  font-weight: bold;
  top: 0;
  z-index: 1;
`

export const SNavLink = styled.a`
  font-family: 'Montserrat', sans-serif !important;
  color: #fff;
  text-decoration: none;
  top: 0;
  display: inline-block;
  text-transform: uppercase;
  font-size: 0.9rem;
  line-height: 1.5;
  list-style: none;
  padding-left: 50px;
  padding-top: 10px;
  &:hover {
    text-decoration: underline;
    color: white;
    transition: 0.3s ease-out;
  }
`

export const SNavbarLogo = styled.img`
  width: 13.5rem;
  margin-left: 50px;
`
