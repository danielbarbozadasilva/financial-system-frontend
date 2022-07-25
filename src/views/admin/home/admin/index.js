import React from 'react'
import 'chart.js/auto'
import { PolarArea } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import Title from '../../../../components/title/index'
import { listAllAssetAction } from '../../../../store/financial_assets/financial_assets.action'
import { listAllClientAction } from '../../../../store/client/client.action'
import { listAllUserAssetAction } from '../../../../store/transaction/transaction.action'

function Home() {
  const dispatch = useDispatch()

  const financial = useSelector((state) => state.financial.all)
  const client = useSelector((state) => state.client.all)
  const transaction = useSelector((state) => state.transaction.all)

  React.useEffect(() => {
    dispatch(listAllAssetAction())
    dispatch(listAllClientAction())
    dispatch(listAllUserAssetAction())
  }, [dispatch])

  const actions = () => null

  const chartData = {
    labels: ['Ativos', 'Transações', 'Cliente'],
    datasets: [
      {
        label: 'Quantidade',
        data: [financial.length, transaction.length, client.length],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(255, 206, 86, 0.3)'
        ],
        borderWidth: 1
      }
    ]
  }

  return (
    <>
      <Title title="Gráfico" actions={actions} />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <PolarArea data={chartData} />
        </Grid>
      </Grid>
    </>
  )
}

export default Home
