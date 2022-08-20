import React from 'react'
import { Pie } from 'react-chartjs-2'
import 'chart.js/auto'
import { useSelector } from 'react-redux'
import { colorGenerate } from '../../../util/helpers'

export const ChartClient = () => {
  const financial = useSelector((state) => state.financial.top05)

  return (
    <div>
      <Pie
        data={{
          label: 'Quantidade',
          labels: financial.map((item) => {
            return item.name
          }),
          datasets: [
            {
              label: '# of votes',
              data: financial.map((item) => {
                return item.count
              }),
              backgroundColor: colorGenerate(financial),
              borderWidth: 1
            }
          ]
        }}
        height={350}
        width={550}
        options={{
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontSize: 25
            }
          }
        }}
      />
    </div>
  )
}

export default ChartClient
