import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/portal/loading'
import { Row } from 'react-bootstrap'
import CardFinancial from '../../../components/portal/cards/financial_asset_card'
import { listAllAssetAction } from '../../../store/financial_assets/financial_assets.action'

function Home(props) {
  const dispatch = useDispatch()

  const loading = useSelector((state) => state.financial.loading)
  const financial = useSelector((state) => state.financial.all)

  const callListAsset = useCallback((props) => {
    dispatch(listAllAssetAction())
  }, [dispatch])

  useEffect(() => {
     callListAsset(props)
  }, [callListAsset])

  const FinancialList = (props) => {
    console.log('financial' + JSON.stringify(financial))
    return financial.map((item, i) => {
      return (
        <Row xs={1} md={2} className="g-4">
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
        FinancialList(props)
      )}
    </>
  )
}
export default Home
