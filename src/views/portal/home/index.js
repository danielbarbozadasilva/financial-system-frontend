import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/loading/page/index'
import { Col } from 'react-bootstrap'
import CardFinancial from '../../../components/portal/cards/financial/index'
import CardAbout from '../../../components/portal/cards/about/index'
import { navigate } from '@reach/router'
import {
  ContainerAssets,
  ContainerFinancial,
  ContainerText,
  ContainerResources,
  TextInvestiment,
  StyleImg,
  ContainerTitle,
  TextTitle,
  STextInvest,
  SButtonTitle,
  settings
} from '../../../components/portal/cards/financial/styled'
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
        <h5>+ de 100 ativos disponíveis</h5>
        <h1>
          <strong>Invista nos ativos mais populares do mundo</strong>
        </h1>
        <h4>
          De indústrias estabelecidas a emergentes de todos os ramos, escolha seu investimento e comece a lucrar
        </h4>
      </STextInvest>

      <ContainerAssets>
        {!loading && financial.length === 0 ? (
          <h6>Não há Financiamentos disponiveis</h6>
        ) : (
          <Slider {...settings}>{FinancialList(financial)}</Slider>
        )}
      </ContainerAssets>

      <ContainerFinancial>
        <ContainerText>
          <TextInvestiment>
            <h1>
              Os melhores <strong>ativos</strong>
              <br />
              na palma da sua mão
            </h1>
          </TextInvestiment>
        </ContainerText>
      </ContainerFinancial>

      <ContainerResources>
        <STextInvest>
          <h1>
            <strong>Recursos poderosos e fáceis de usar</strong>
          </h1>
          <h4>Veja o que alguns dos nossos usuários estão dizendo.</h4>
          <CardAbout />
          <SButtonTitle onClick={() => navigate(`/signup`)}>ABRA SUA CONTA</SButtonTitle>
        </STextInvest>
      </ContainerResources>
    </>
  )
}
export default Home
