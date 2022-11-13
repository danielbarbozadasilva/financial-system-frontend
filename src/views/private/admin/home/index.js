import React from 'react'
import { useDispatch } from 'react-redux'
import Title from '../../../../components/title/index'
import { listAllAssetAction } from '../../../../store/financial_assets/financial_assets.action'
import { listAllClientAction } from '../../../../store/client/client.action'
import { listAllUserAssetAction } from '../../../../store/transaction/transaction.action'
import { ContainerChart } from '../../../../components/admin/chart/styled'
import { ChartAdmin } from '../../../../components/admin/chart/index'

function Home() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(listAllAssetAction())
    dispatch(listAllClientAction())
    dispatch(listAllUserAssetAction())
  }, [dispatch])

  const actions = () => null

  return (
    <>
      <Title title="Gráfico" actions={actions} />
      <ContainerChart>
        <ChartAdmin />
      </ContainerChart>
    </>
  )
}

export default Home
