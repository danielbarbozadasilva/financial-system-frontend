import React from 'react'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import Title from '../../../components/title/index'
import { listAllAssetAction } from '../../../store/financial_assets/financial_assets.action'

function Home () {
  const dispatch = useDispatch()

  const financial = useSelector((state) => state.financial.all)
  
  React.useEffect(() => {
    dispatch(listAllAssetAction())
  }, [dispatch])

  const actions = () => null

  const chartData = {
    labels: ['financial', 'financial', 'financial'],
    datasets: [
      {
        label: '# of Votes',
        data: [2, 4, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }
    ]
  }

  return (
    <>
    <Title title="Ativos" actions={actions} />
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