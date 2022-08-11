import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/loading/page/index'
import { Col } from 'react-bootstrap'
import CardFinancial from '../../../components/portal/cards/list/index'
import { navigate } from '@reach/router'
import {
  SContainer,
  TextTitle,
  ContainerTitle,
  StyleImg,
  SButtonTitle,
  STextInvest
} from '../../../components/portal/cards/list/styled'
import { listTop05AssetAction } from '../../../store/financial_assets/financial_assets.action'
import Image from '../../../assets/img/investment.jpg'

function Top05() {
  const dispatch = useDispatch()
  const financial = useSelector((state) => state.financial.top05)
  const loading = useSelector((state) => state.financial.loading)

  useEffect(() => {
    dispatch(listTop05AssetAction())
  }, [dispatch])

  const FinancialList = (financial) => {
    return financial.map((item, i) => {
      return (
        <Col md="6" xl="4" sm="12" xs="12" key={i}>
          <CardFinancial item={{ ...item }} />
        </Col>
      )
    })
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <div>
        <StyleImg src={Image} />
      </div>
      <ContainerTitle>
        <TextTitle>
          <h1>
            <strong>Acesso instantâneo a investimentos...</strong>
            <br />
            Invista nos ativos mais populares do mundo
          </h1>
        </TextTitle>
        <SButtonTitle onClick={() => navigate(`/signup`)}>ABRA SUA CONTA</SButtonTitle>
      </ContainerTitle>
      <STextInvest>
        <h2>
          Nosso <strong>Top 05</strong>
        </h2>
        <h4>Ativos mais adquiridos de hoje</h4>
      </STextInvest>
      <SContainer>
        {!loading && financial.length === 0 ? (
          <h6>Não há Financiamentos disponiveis</h6>
        ) : (
          FinancialList(financial)
        )}
      </SContainer>
    </>
  )
}
export default Top05
