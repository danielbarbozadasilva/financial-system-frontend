import styled from 'styled-components'
import { Paper } from '@material-ui/core'

export const Box = styled(Paper)`
  padding: 25px;
`

export const Submit = styled.div`
  margin: ${({ theme: t }) => t.spacing(0.5)};
  .buttonSubmit {
    margin: ${({ theme: t }) => t.spacing(3, 0, 2)};
  }
`
