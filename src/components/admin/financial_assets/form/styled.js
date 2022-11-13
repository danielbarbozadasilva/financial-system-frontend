import styled from 'styled-components'
import { Paper, Button } from '@material-ui/core'

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

export const SButton = styled(Button)`
  background-color: #E0E0E0;
  color: black;
  :disabled {
    background-color: #ededed;
    color: black;
  }
`
