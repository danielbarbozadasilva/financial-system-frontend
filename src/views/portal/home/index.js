import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/portal/loading'
import { Row } from 'react-bootstrap'
import CardFinancial from '../../../components/portal/cards/AssetsCard'
import { listAllAssetAction } from '../../../store/financial_assets/financial_assets.action'

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
        <Row xs={1} md={2} className="g-4" key={i}>
          <CardFinancial item={{ ...item }} />
        </Row>
      )
    })
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      {!loading && financial.length === 0 ? (
        <h6>Não há Financiamentos disponiveis</h6>
      ) : (
        FinancialList(financial)
      )}
    </>
  )
}
export default Home
