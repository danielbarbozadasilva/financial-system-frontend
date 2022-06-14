import styled from 'styled-components'
import { Container, Col, Navbar } from 'react-bootstrap'

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
  heigth: 250px;
  margin-top: 70px;
  margin-bottom: 25px;
  @media screen and (max-width: 990px) {
    display: none;
  }
`
