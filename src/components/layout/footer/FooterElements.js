import styled from 'styled-components'
import { Container, Col } from 'react-bootstrap'

export const SContainer = styled(Container)`
  position: center;
  text-align: center;
  font-size: 24px;
  background-color: #3c5e80;
  color: white;
`

export const WebsiteRights = styled.div`
  font-size: 16px;
  padding: 12px 0px;
  margin 0px 20px;
`

export const ColNetworks = styled(Col)`
  text-align: left;
  margin: 50px;
`

export const ColInfo = styled(Col)`
  text-align: right;
  margin: 50px;
`

export const SocialIconLink = styled.a`
  font-size: 40px;
  padding-left: 37px;
  color: #fff;
  &:hover {
    color: #c7b7ba;
    transition: 0.3s ease-out;
  }
`

export const FooterLinkTitle = styled.h1`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 3px;
  border-left: 5px solid #fff;
  padding: 5px 40px;
  margin: 10px 0px;
`

export const FooterName = styled.h1`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 3px;
`

export const FooterImg = styled.img`
  position: center;
  text-align: center;
  width: 250px;
  heigth: 250px;
  margin: 30px 0px;
`
