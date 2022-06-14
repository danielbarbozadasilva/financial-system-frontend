import React from 'react'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import Title from '../../../components/title/index'
import { listAllAssetAction } from '../../../store/financial_assets/financial_assets.action'
import { listAllClientAction } from '../../../store/client/client.action'

function Home () {
  const dispatch = useDispatch()

  const financial = useSelector((state) => state.financial.all)
  const client = useSelector((state) => state.client.all)

  React.useEffect(() => {
    dispatch(listAllAssetAction())
    dispatch(listAllClientAction())
  }, [dispatch])

  const actions = () => null

  const chartData = {
    labels: ['Ativos', 'Clientes'],
    datasets: [
      {
        label: '# of Votes',
        data: [financial.length, client.length],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }
    ]
  }

  return (
    <>
    <Title title="Gráfico" actions={actions} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container>
            <Grid item>
            <Chart type='pie' data={chartData} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Home