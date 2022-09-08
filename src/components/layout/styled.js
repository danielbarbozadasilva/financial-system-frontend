import styled from 'styled-components'
import { Container, Col, Navbar } from 'react-bootstrap'

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

export const SLink = styled.div`
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
  @media screen and (max-width: 470px) {
    width: 11.5rem;
    margin: 5px 20px;
  }
`

export const SNavbarToggle = styled(Navbar.Toggle)`
  margin: 0px 30px;
  background-color: #b5a48d;
  color: #a59174 !important;
`

export const Main = styled.div`
  font-family: 'Nunito', Helvetica, Arial, Lucida, sans-serif;
  font-size: 0.95rem;
  line-height: 1.5;
  font-weight: 500;
  overflow: hidden;
  flex: 1;
  position: relative;
  text-align: justify;
  color: #771700;
  min-height: 100vh;
`

export const SContainer = styled(Container)`
  position: center;
  text-align: center;
  font-size: 24px;
  background-color: #501417;
  color: #f1deb8;
`

export const WebsiteRights = styled.div`
  font-size: 16px;
  padding: 12px 20px;
  @media screen and (max-width: 990px) {
    text-align: left;
  }
`

export const ColNetworks = styled(Col)`
  text-align: left;
  margin: 50px;
  @media screen and (max-width: 990px) {
    margin: 0;
    padding-top: 30px;
  }
`

export const ColInfo = styled(Col)`
  text-align: right;
  margin: 50px;
  @media screen and (max-width: 990px) {
    padding-top: 30px;
    margin: 0;
  }
`

export const SocialIconLink = styled.a`
  font-size: 40px;
  padding-left: 28px;
  color: #f1deb8;
  &:hover {
    color: #c7b7ba;
    transition: 0.5s ease-out;
  }
`

export const FooterLinkTitle = styled.h1`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #f1deb8;
  border-left: 5px solid #f1deb8;
  padding: 5px 40px;
  margin: 10px 0px;
`

export const FooterName = styled.h1`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 3px;
  @media screen and (max-width: 990px) {
    display: none;
  }
`

export const FooterImg = styled.img`
  position: center;
  width: 250px;
  margin-top: 70px;
  margin-bottom: 25px;
  @media screen and (max-width: 990px) {
    display: none;
  }
`
