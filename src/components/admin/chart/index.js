import React from 'react'
import { PolarArea } from 'react-chartjs-2'
import 'chart.js/auto'
import { useSelector } from 'react-redux'

export const ChartAdmin = () => {
  const financial = useSelector((state) => state.financial.all)
  const client = useSelector((state) => state.client.all)
  const transaction = useSelector((state) => state.transaction.all)

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
      <PolarArea
        data={chartData}
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
    </>
  )
}

export default ChartAdmin
