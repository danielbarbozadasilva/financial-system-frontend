import React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { BoxTable } from './DatagridElements'
import Loading from '../../../loading/index'

const DataList = ({ data, modal, loading }) => {
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 140,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'name',
      headerName: 'Nome do ativo',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'description',
      headerName: 'Descrição',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'bvmf',
      headerName: 'Bvmf',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'purchase_price',
      headerName: 'Preço de compra',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'current_price',
      headerName: 'Preço atual',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'total_price',
      headerName: 'Preço total',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'total_quantity',
      headerName: 'Quantidade total',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    },
    {
      field: 'current_date',
      headerName: 'Data',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      disableColumnMenu: true
    }
  ]

  if (loading) {
    return <Loading />
  }

  return (
    <BoxTable>
      <DataGrid rows={data} columns={columns} pageSize={10} />
    </BoxTable>
  )
}

export default DataList
