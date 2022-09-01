import styled from 'styled-components'

export const TitleChart = styled.h6`
  color: ${({ theme: t }) => t.palette.primary.main};
  font-weight: 500;
  padding: ${({ theme: t }) => t.spacing(2)}px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
`

export const ContainerChart = styled.div`
  border-bottom: 1px solid #ccc;
  padding-top: 5%;
  padding-bottom: 7%;
`
