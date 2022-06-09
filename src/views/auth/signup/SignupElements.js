import styled from 'styled-components'
import { Form } from 'react-bootstrap'

export const SForm = styled(Form)`
  background-color: #fafafa;
  box-shadow: 0px 2px 15px 6px rgba(0, 0, 0, 0.11);
  padding: 50px;
  position: center;
`

export const SButton = styled.button`
  text-align: center;
  font-size: 16px;
  border: 1px solid rgb(228, 224, 224);
  background-color: #edd29a;
  padding: 5px 25px;
  color: #771700;
  margin: 30px 0px;
  &:hover {
    text-decoration: underline;
    background-color: white;
    transition: 0.5s ease-out;
  }
`
export const SDesabledButton = styled.button`
  text-align: center;
  font-size: 16px;
  border: 1px solid rgb(228, 224, 224);
  background-color: white;
  padding: 5px 25px;
  color: #771700;
  margin: 30px 0px;
`

export const STextForm = styled.h2`
  line-height: 1.5;
  font-weight: 500;
  padding-left: 10px;
  border-left: 1px solid #771700;
  margin: 30px 0px 50px 0px;
  `