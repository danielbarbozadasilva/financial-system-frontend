import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/loading'
import { Col } from 'react-bootstrap'
import CardFinancial from '../../../components/portal/cards/AssetsCard'
import {
  SContainer,
  StyleImg,
  SText,
  Sh2,
  STextInvest,
  settings
} from '../../../components/portal/cards/ElementsCards'

import { listAllAssetAction } from '../../../store/financial_assets/financial_assets.action'
import Image from '../../../assets/img/investimento.webp'
import Slider from 'react-slick'

function Home() {
  const dispatch = useDispatch()
  const financial = useSelector((state) => state.financial.all)
  const loading = useSelector((state) => state.financial.loading)

  useEffect(() => {
    dispatch(listAllAssetAction())
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
          Escolha um <strong>investimento</strong>
        </h2>
      </STextInvest>
      <SContainer>
        {!loading && financial.length === 0 ? (
          <h6>Não há Financiamentos disponiveis</h6>
        ) : (
          <Slider {...settings}>{FinancialList(financial)}</Slider>
        )}
      </SContainer>
    </>
  )
}
export default Home
