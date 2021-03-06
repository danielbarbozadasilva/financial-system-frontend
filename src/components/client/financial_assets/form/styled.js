import styled from 'styled-components'
import { Paper } from '@material-ui/core'

export const Box = styled(Paper)`
  padding: 25px;
`

export const Image = styled.img`
  max-width: 170px;
  max-height: 170px;
  margin: 10px;
  border: thin solid #eee;
  border-radius: 5%;
  overflow: hidden;
  object-fit: cover;
`

export const Submit = styled.div`
  margin: 25px 7px;
`

export const SInput = styled.input`
  text-align: right;
  border: none;
  background-color: white;
`

export const STable = styled.div`
  padding-top: 25px;
  margin-left: 45%;
  background-color: white;
  border: none;
`

export const SBox = styled.div`
  padding: 30px 0px;
  padding-left: 80%;
`
