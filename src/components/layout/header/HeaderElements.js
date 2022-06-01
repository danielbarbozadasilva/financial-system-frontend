import styled from 'styled-components'
import { Navbar } from 'react-bootstrap'

export const SNavbar = styled(Navbar)`
  width: 100%;
  font-family: 'Nunito', Helvetica, Arial, Lucida, sans-serif;
  background-color: #501417 !important;
  font-weight: bold;
  z-index: 1;
  @media screen and (max-width: 990px) {
    background-color: #501417;
  }
`

export const SNavLink = styled.a`
  font-family: 'Montserrat', sans-serif !important;
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
  @media screen and (max-width: 990px) {
    padding: 20px;
    text-align: center;
    &:hover {
      text-decoration: underline;
      background-color: #af9b7c;
      transition: 0.3s ease-out;
    }
  }
`

export const SNavbarLogo = styled.img`
  width: 13.5rem;
`

export const SNavbarToggle = styled(Navbar.Toggle)`
  background-color: #b5a48d;
  color: #a59174 !important;
`