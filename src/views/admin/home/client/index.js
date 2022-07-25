import React from 'react'
import 'chart.js/auto'
import { PolarArea } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import Title from '../../../../components/title/index'
import { listTop05AssetAction } from '../../../../store/financial_assets/financial_assets.action'
import { colorGenerate } from '../../../../util/helpers'

function Home() {
  const dispatch = useDispatch()

  const financial = useSelector((state) => state.financial.top05)

  React.useEffect(() => {
    dispatch(listTop05AssetAction())
  }, [dispatch])

  const actions = () => null

  const chartData = {
    labels: financial.map((item) => {
      return item.name
    }),
    datasets: [
      {
        label: 'Quantidade',
        data: financial.map((item) => {
          return item.count
        }),
        backgroundColor: colorGenerate(financial),
        borderWidth: 1
      }
    ]
  }

  return (
    <>
      <Title title="Top 05 Ativos" actions={actions} />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <PolarArea data={chartData} />
        </Grid>
      </Grid>
    </>
  )
}

export default Home
