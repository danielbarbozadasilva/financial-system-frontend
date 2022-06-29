import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/loading'
import { Col } from 'react-bootstrap'
import CardFinancial from '../../../components/portal/cards_top05/index'
import {
  SContainer,
  SText,
  Sh2,
  STextInvest,
  StyleImg
} from '../../../components/portal/cards_top05/styled'
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
      <SText>
        <Sh2>Acesso instantâneo a investimentos...</Sh2>
        <Sh2>Invista nos ativos mais populares do mundo</Sh2>
      </SText>
      <STextInvest>
        <h2>
          Nosso <strong>Top 05</strong> de hoje
        </h2>
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
