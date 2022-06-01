import { Col, Form } from 'react-bootstrap'
import styled from 'styled-components'

export const SForm = styled(Form)`
  background-color: #fafafa;
  box-shadow: 0px 2px 15px 6px rgba(0, 0, 0, 0.11);
  padding: 50px;
  position: center;
`

export const SColFooter = styled(Col)`
  line-height: 1.5;
  font-weight: 500;
  color: #000;
  padding: 20px 0;
`

export const SButton = styled.button`
  text-align: center;
  font-size: 16px;
  border: 1px solid rgb(228, 224, 224);
  background-color: #edd29a;
  padding: 5px 25px;
  color: #771700;
  &:hover {
    text-decoration: underline;
    background-color: white;
    transition: 0.5s ease-out;
  }
`

export const STextForm = styled.h2`
  line-height: 1.5;
  font-weight: 500;
  padding-left: 10px;
  border-left: 1px solid #771700;
  margin: 30px 0px 50px 0px;
  `

export const STextLink = styled.a`
  color: #771700;
`