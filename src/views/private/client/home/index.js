import React from 'react'
import { useDispatch } from 'react-redux'
import Title from '../../../../components/title/index'
import { listTop05AssetAction } from '../../../../store/financial_assets/financial_assets.action'
import { ChartClient } from '../../../../components/client/chart/index'
import { ContainerChart, TitleChart } from '../../../../components/client/chart/styled'

function Home() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(listTop05AssetAction())
  }, [dispatch])

  const actions = () => null

  return (
    <>
      <Title title="Dashboard" actions={actions} />
      <ContainerChart>
        <TitleChart>Top 05 - Ativos em alta</TitleChart>
        <ChartClient />
      </ContainerChart>
    </>
  )
}

export default Home
