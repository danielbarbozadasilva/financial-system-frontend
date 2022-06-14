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
    text-align: center;
    &:hover {
      background-color: #b5a48d;
    }
  }
  @media screen and (max-width: 1670px) {
    padding: 25px 40px;
  }
`

export const SNavbarLogo = styled.img`
  width: 13.5rem;
  margin: 5px 40px;
`

export const SNavbarToggle = styled(Navbar.Toggle)`
  margin: 0px 30px;
  background-color #b5a48d;
  color: #a59174 !important;
`
